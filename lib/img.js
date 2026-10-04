'use strict';
/**
 * Responsive image helper.
 *
 * Reads img/manifest.json (written by scripts/generate-image-variants.js) at boot
 * and builds srcset/sizes strings so the browser always downloads the smallest
 * suitable WebP. Falls back gracefully if the manifest is missing.
 */

const fs = require('fs');
const path = require('path');
const ROOT = require('./root');

const MANIFEST_PATH = path.join(ROOT, 'img', 'manifest.json');

let MANIFEST = {};
try {
  MANIFEST = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
} catch (_) {
  MANIFEST = {};
}

// Sensible fallbacks for the committed masters, used if the manifest is absent.
const FALLBACK = {
  'hero.webp': { natural: 1536, height: 1024, variants: [480, 760, 1100, 1400] },
  'about-lobby.webp': { natural: 1536, height: 1024, variants: [420, 700, 1000, 1400] },
  'cta-band.webp': { natural: 1536, height: 1024, variants: [560, 900, 1200, 1400] },
  'split-cellar.webp': { natural: 1536, height: 1024, variants: [420, 700, 1000, 1400] },
  'gallery-pool.webp': { natural: 1536, height: 1024, variants: [420, 700, 1000, 1400] },
  'gallery-bar.webp': { natural: 1536, height: 1024, variants: [420, 700, 1000, 1400] },
  'gallery-terrace.webp': { natural: 1536, height: 1024, variants: [420, 700, 1000, 1400] },
  'gallery-bath.webp': { natural: 1536, height: 1024, variants: [420, 700, 1000, 1400] },
  'gallery-library.webp': { natural: 1536, height: 1024, variants: [420, 700, 1000, 1400] },
  'team-genevieve-marchand.webp': { natural: 1024, height: 1024, variants: [240, 360, 480, 720] },
  'team-julien-baptiste.webp': { natural: 1024, height: 1024, variants: [240, 360, 480, 720] },
  'team-amara-osei.webp': { natural: 1024, height: 1024, variants: [240, 360, 480, 720] },
  'team-clara-whitfield.webp': { natural: 1024, height: 1024, variants: [240, 360, 480, 720] }
};

function meta(src) {
  if (!src) return null;
  const key = String(src).split('/').pop();
  return MANIFEST[key] || FALLBACK[key] || null;
}

/** Build a srcset string for a master image path. */
function srcset(src) {
  const m = meta(src);
  if (!m) return '';
  const base = String(src).replace(/\.webp$/, '');
  const parts = (m.variants || []).map((w) => `${base}-${w}.webp ${w}w`);
  parts.push(`${src} ${m.natural}w`);
  return parts.join(', ');
}

function width(src) {
  const m = meta(src);
  return m ? m.natural : undefined;
}

function height(src) {
  const m = meta(src);
  return m ? m.height : undefined;
}

function esc(s) {
  return String(s == null ? '' : s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Full <img> tag with responsive sources and correct intrinsic dimensions.
 * @param {string} src
 * @param {string} alt
 * @param {object} [opts] { sizes, cls, eager, width, height, style }
 */
function imgTag(src, alt, opts) {
  const o = opts || {};
  const w = o.width || width(src);
  const h = o.height || height(src);
  const ss = srcset(src);
  const attrs = [
    `src="${esc(src)}"`,
    ss ? `srcset="${esc(ss)}"` : '',
    `sizes="${esc(o.sizes || '100vw')}"`,
    w ? `width="${w}"` : '',
    h ? `height="${h}"` : '',
    `alt="${esc(alt)}"`,
    `loading="${o.eager ? 'eager' : 'lazy'}"`,
    `decoding="async"`,
    o.eager ? 'fetchpriority="high"' : '',
    o.cls ? `class="${esc(o.cls)}"` : '',
    o.style ? `style="${esc(o.style)}"` : ''
  ].filter(Boolean);
  return `<img ${attrs.join(' ')}>`;
}

module.exports = { imgTag, srcset, width, height, meta, manifest: MANIFEST };
