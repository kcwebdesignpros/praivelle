'use strict';
/**
 * Host-agnostic project root resolution.
 *
 * Works in three environments:
 *   • normal Node process  → __dirname is <root>/lib
 *   • Netlify function     → __dirname is <root>/netlify/functions (bundled)
 *   • Vercel function      → __dirname varies
 * We probe upward until we find views/index.ejs.
 */

const fs = require('fs');
const path = require('path');

function resolveRoot() {
  const candidates = [
    process.env.APP_ROOT,
    path.join(__dirname, '..'),
    path.join(__dirname, '..', '..'),
    path.join(__dirname, '..', '..', '..'),
    process.cwd()
  ].filter(Boolean);

  for (const dir of candidates) {
    try {
      if (fs.existsSync(path.join(dir, 'views', 'index.ejs'))) return path.resolve(dir);
    } catch (_) {
      /* keep probing */
    }
  }
  return path.resolve(__dirname, '..');
}

module.exports = resolveRoot();
