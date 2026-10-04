'use strict';
/**
 * Netlify publishes exactly ONE directory (`public`). Images live in the repo
 * root at /img, so they have to be copied into the publish directory at build
 * time — otherwise every image request is routed through the function.
 *
 * Run: npm run prepare:netlify   (also invoked by the Netlify build command)
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const SRC = path.join(ROOT, 'img');
const DEST = path.join(ROOT, 'public', 'img');

// Never ship the raw generator output.
const SKIP = new Set(['raw']);

function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  let count = 0;
  let bytes = 0;

  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    if (SKIP.has(entry.name)) continue;
    const src = path.join(from, entry.name);
    const dest = path.join(to, entry.name);

    if (entry.isDirectory()) {
      const res = copyDir(src, dest);
      count += res.count;
      bytes += res.bytes;
    } else {
      fs.copyFileSync(src, dest);
      count++;
      bytes += fs.statSync(dest).size;
    }
  }
  return { count, bytes };
}

function main() {
  if (!fs.existsSync(SRC)) {
    console.error('prepare-netlify: no img/ directory found at ' + SRC);
    process.exitCode = 1;
    return;
  }

  // Clean only the images we previously copied (never the whole public dir).
  if (fs.existsSync(DEST)) fs.rmSync(DEST, { recursive: true, force: true });

  const res = copyDir(SRC, DEST);
  console.log(
    `prepare-netlify: copied ${res.count} files (${(res.bytes / 1024 / 1024).toFixed(2)} MB) → public/img`
  );

  // Guard rails: the runtime needs these to exist inside the function bundle.
  const required = ['views/index.ejs', 'data/site.js', 'lib/root.js', 'img/manifest.json'];
  const missing = required.filter((f) => !fs.existsSync(path.join(ROOT, f)));
  if (missing.length) {
    console.error('prepare-netlify: MISSING required files → ' + missing.join(', '));
    process.exitCode = 1;
  }
}

main();
