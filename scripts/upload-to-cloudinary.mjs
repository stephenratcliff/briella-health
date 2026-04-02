#!/usr/bin/env node
/**
 * Briella Health — Cloudinary Upload + URL Generator
 *
 * Uploads all generated images to Cloudinary and outputs a mapping file
 * that can be used to update the site codebase.
 *
 * Usage: node scripts/upload-to-cloudinary.mjs
 *
 * Requires: CLOUDINARY_URL env var (format: cloudinary://API_KEY:API_SECRET@CLOUD_NAME)
 *    or individual: CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET
 *
 * Output: ./scripts/cloudinary-urls.json (image ID → optimized delivery URL)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import crypto from "crypto";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROMPTS_FILE = path.join(__dirname, "image-prompts.json");
const IMAGE_DIR = path.join(__dirname, "..", "generated-images");
const OUTPUT_FILE = path.join(__dirname, "cloudinary-urls.json");

// Parse Cloudinary credentials
function getCloudinaryConfig() {
  if (process.env.CLOUDINARY_URL) {
    const url = new URL(process.env.CLOUDINARY_URL);
    return {
      cloudName: url.host,
      apiKey: url.username,
      apiSecret: url.password,
    };
  }
  return {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET,
  };
}

function generateSignature(params, apiSecret) {
  const sortedParams = Object.keys(params)
    .sort()
    .map((k) => `${k}=${params[k]}`)
    .join("&");
  return crypto
    .createHash("sha1")
    .update(sortedParams + apiSecret)
    .digest("hex");
}

async function uploadImage(filepath, publicId, config) {
  const timestamp = Math.floor(Date.now() / 1000);
  const params = {
    folder: "briella-health",
    public_id: publicId,
    timestamp,
    overwrite: "true",
  };

  const signature = generateSignature(params, config.apiSecret);

  const formData = new FormData();
  const fileBuffer = fs.readFileSync(filepath);
  const blob = new Blob([fileBuffer], { type: "image/png" });
  formData.append("file", blob, path.basename(filepath));
  formData.append("folder", "briella-health");
  formData.append("public_id", publicId);
  formData.append("timestamp", timestamp.toString());
  formData.append("overwrite", "true");
  formData.append("api_key", config.apiKey);
  formData.append("signature", signature);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${config.cloudName}/image/upload`,
    { method: "POST", body: formData }
  );

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`Upload failed: ${response.status} ${error}`);
  }

  return response.json();
}

async function main() {
  const config = getCloudinaryConfig();
  if (!config.cloudName || !config.apiKey || !config.apiSecret) {
    console.error("Missing Cloudinary credentials. Set CLOUDINARY_URL or individual env vars.");
    console.error("Example: export CLOUDINARY_URL=cloudinary://key:secret@cloud-name");
    process.exit(1);
  }

  const prompts = JSON.parse(fs.readFileSync(PROMPTS_FILE, "utf-8"));

  if (!fs.existsSync(IMAGE_DIR)) {
    console.error(`No generated-images/ directory found. Run generate-images.mjs first.`);
    process.exit(1);
  }

  const existingFiles = new Set(fs.readdirSync(IMAGE_DIR).filter(f => f.endsWith('.png')));

  console.log(`\n  Briella Health — Cloudinary Upload`);
  console.log(`  ==================================`);
  console.log(`  Cloud: ${config.cloudName}`);
  console.log(`  Images found: ${existingFiles.size}\n`);

  const urlMap = {};
  let uploaded = 0;
  let skippedMissing = 0;

  for (const img of prompts.images) {
    if (!existingFiles.has(img.filename)) {
      console.log(`  SKIP ${img.id} — file not found`);
      skippedMissing++;
      continue;
    }

    const filepath = path.join(IMAGE_DIR, img.filename);
    console.log(`  Uploading: ${img.id}...`);

    try {
      const result = await uploadImage(filepath, img.id, config);
      const baseUrl = result.secure_url;

      // Build optimized delivery URLs with Cloudinary transformations
      urlMap[img.id] = {
        original: baseUrl,
        optimized: baseUrl.replace("/upload/", "/upload/f_auto,q_auto/"),
        thumbnail: baseUrl.replace("/upload/", "/upload/f_auto,q_auto,w_300,h_200,c_fill/"),
        placement: img.placement,
        dimensions: img.dimensions,
        width: result.width,
        height: result.height,
        bytes: result.bytes,
      };

      const sizeMB = (result.bytes / 1024 / 1024).toFixed(2);
      console.log(`    ✓ ${sizeMB} MB → ${result.secure_url}`);
      uploaded++;
    } catch (err) {
      console.error(`    ✗ Failed: ${err.message}`);
    }
  }

  // Write URL mapping
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(urlMap, null, 2));

  console.log(`\n  ==================================`);
  console.log(`  Uploaded: ${uploaded} | Missing: ${skippedMissing}`);
  console.log(`  URL map: ./scripts/cloudinary-urls.json`);
  console.log(`\n  Next: run 'node scripts/update-site-images.mjs' to wire into codebase\n`);
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
