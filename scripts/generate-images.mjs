#!/usr/bin/env node
/**
 * Briella Health — Batch Image Generator
 *
 * Generates all site images via Google Gemini API in one run.
 * Usage: node scripts/generate-images.mjs
 *
 * Requires: GEMINI_API_KEY env var (or uses the default below)
 * Output:   ./generated-images/<filename>.png
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PROMPTS_FILE = path.join(__dirname, "image-prompts.json");
const OUTPUT_DIR = path.join(__dirname, "..", "generated-images");
const API_KEY = process.env.GEMINI_API_KEY || "AIzaSyAeyQ6VUxedQd-f6CWuIU4bFdqyJTSNQJg";
const MODEL = "gemini-2.5-flash-image"; // Gemini native image generation
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent?key=${API_KEY}`;

// Rate limiting — Gemini free tier is 10 RPM
const DELAY_MS = 7000; // 7 seconds between requests to stay safe

async function generateImage(prompt, filename) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [
        {
          parts: [{ text: prompt }],
        },
      ],
      generationConfig: {
        responseModalities: ["IMAGE", "TEXT"],
      },
    }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(`API error ${response.status}: ${error}`);
  }

  const data = await response.json();

  // Extract image data from response
  const parts = data.candidates?.[0]?.content?.parts || [];
  const imagePart = parts.find((p) => p.inlineData);

  if (!imagePart) {
    console.error(`  No image returned for ${filename}. Response parts:`, parts.map(p => p.text || "[image]").join(", "));
    return false;
  }

  const buffer = Buffer.from(imagePart.inlineData.data, "base64");
  const outputPath = path.join(OUTPUT_DIR, filename);
  fs.writeFileSync(outputPath, buffer);

  const sizeMB = (buffer.length / 1024 / 1024).toFixed(2);
  console.log(`  Saved ${filename} (${sizeMB} MB)`);
  return true;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function main() {
  // Load prompts
  const prompts = JSON.parse(fs.readFileSync(PROMPTS_FILE, "utf-8"));
  const total = prompts.images.length;

  // Create output directory
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // Check which images already exist (skip completed ones for resume support)
  const existing = new Set(fs.readdirSync(OUTPUT_DIR));

  console.log(`\n  Briella Health Image Generator`);
  console.log(`  ==============================`);
  console.log(`  Total images: ${total}`);
  console.log(`  Already generated: ${[...existing].filter(f => f.endsWith('.png')).length}`);
  console.log(`  Output: ./generated-images/\n`);

  let generated = 0;
  let skipped = 0;
  let failed = 0;

  for (let i = 0; i < total; i++) {
    const img = prompts.images[i];
    const progress = `[${i + 1}/${total}]`;

    // Skip if already generated
    if (existing.has(img.filename)) {
      console.log(`${progress} SKIP ${img.filename} (already exists)`);
      skipped++;
      continue;
    }

    console.log(`${progress} Generating: ${img.id}`);
    console.log(`       For: ${img.placement}`);

    try {
      const success = await generateImage(img.prompt, img.filename);
      if (success) {
        generated++;
      } else {
        failed++;
      }
    } catch (err) {
      console.error(`  FAILED: ${err.message}`);
      failed++;
    }

    // Rate limit delay (skip for last image)
    if (i < total - 1 && !existing.has(prompts.images[i + 1]?.filename)) {
      console.log(`       Waiting ${DELAY_MS / 1000}s (rate limit)...\n`);
      await sleep(DELAY_MS);
    }
  }

  console.log(`\n  ==============================`);
  console.log(`  Done! Generated: ${generated} | Skipped: ${skipped} | Failed: ${failed}`);
  console.log(`  Images saved to: ./generated-images/\n`);

  if (failed > 0) {
    console.log(`  To retry failed images, just run this script again.`);
    console.log(`  It will skip existing files and only regenerate missing ones.\n`);
  }
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});
