#!/usr/bin/env node
/**
 * Briella Health — Auto-update site images from Cloudinary URLs
 *
 * Reads cloudinary-urls.json and updates the Next.js codebase to use
 * Cloudinary CDN URLs instead of Unsplash or placeholder images.
 *
 * Usage: node scripts/update-site-images.mjs
 * (Run after upload-to-cloudinary.mjs)
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const URL_MAP_FILE = path.join(__dirname, "cloudinary-urls.json");
const SRC_DIR = path.join(__dirname, "..", "src");

function loadUrlMap() {
  if (!fs.existsSync(URL_MAP_FILE)) {
    console.error("No cloudinary-urls.json found. Run upload-to-cloudinary.mjs first.");
    process.exit(1);
  }
  return JSON.parse(fs.readFileSync(URL_MAP_FILE, "utf-8"));
}

function replaceInFile(filepath, replacements) {
  let content = fs.readFileSync(filepath, "utf-8");
  let changed = false;

  for (const [oldStr, newStr] of replacements) {
    if (content.includes(oldStr)) {
      content = content.replace(oldStr, newStr);
      changed = true;
      console.log(`    Replaced image URL in ${path.relative(SRC_DIR, filepath)}`);
    }
  }

  if (changed) {
    fs.writeFileSync(filepath, content);
  }
  return changed;
}

function findTsxFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory() && entry.name !== "node_modules") {
      results.push(...findTsxFiles(fullPath));
    } else if (entry.name.endsWith(".tsx") || entry.name.endsWith(".ts")) {
      results.push(fullPath);
    }
  }
  return results;
}

function main() {
  const urlMap = loadUrlMap();
  const available = Object.keys(urlMap);

  console.log(`\n  Briella Health — Site Image Updater`);
  console.log(`  ===================================`);
  console.log(`  Cloudinary images available: ${available.length}\n`);

  // Define the mapping: image ID → what Unsplash URL patterns to replace
  const personaMapping = {
    "persona-health-optimizers": "photo-1549060279-7e168fcee0c2",
    "persona-family-focused": "photo-1491013516836-7db643ee125a",
    "persona-longevity": "photo-1545205597-3d9d02c29597",
    "persona-busy-professional": "photo-1556157382-97eda2d62296",
    "persona-frustrated-patient": "photo-1544005313-94ddf0286df2",
    "persona-provider-partner": "photo-1579684385127-1ef15d508118",
  };

  const allFiles = findTsxFiles(SRC_DIR);
  let totalReplacements = 0;

  for (const file of allFiles) {
    const content = fs.readFileSync(file, "utf-8");
    const replacements = [];

    // Replace Unsplash persona images with Cloudinary URLs
    for (const [imageId, unsplashId] of Object.entries(personaMapping)) {
      if (urlMap[imageId] && content.includes(unsplashId)) {
        // Match the full Unsplash URL pattern
        const unsplashPattern = new RegExp(
          `https://images\\.unsplash\\.com/${unsplashId}[^"'\\s]*`,
          "g"
        );
        const matches = content.match(unsplashPattern);
        if (matches) {
          for (const match of matches) {
            replacements.push([match, urlMap[imageId].optimized]);
          }
        }
      }
    }

    if (replacements.length > 0) {
      let updatedContent = content;
      for (const [oldStr, newStr] of replacements) {
        updatedContent = updatedContent.replace(oldStr, newStr);
        totalReplacements++;
        console.log(`  ✓ ${path.relative(SRC_DIR, file)}: replaced ${oldStr.substring(0, 60)}...`);
      }
      fs.writeFileSync(file, updatedContent);
    }
  }

  console.log(`\n  ===================================`);
  console.log(`  Total replacements: ${totalReplacements}`);
  console.log(`\n  Available Cloudinary URLs for manual use:\n`);

  // Print all URLs for easy copy-paste into code
  for (const [id, data] of Object.entries(urlMap)) {
    console.log(`  ${id}:`);
    console.log(`    ${data.optimized}`);
    console.log(`    Placement: ${data.placement}\n`);
  }

  if (totalReplacements > 0) {
    console.log(`  Next steps:`);
    console.log(`  1. Review changes: git diff`);
    console.log(`  2. Test locally: npm run dev`);
    console.log(`  3. Commit & deploy: git add -A && git commit -m "swap to Cloudinary images"`);
  }
}

main();
