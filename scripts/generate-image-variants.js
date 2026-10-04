'use strict';
/**
 * Praivelle House — image pipeline.
 *
 *   Phase 1 (one-time, only when img/raw contains generated PNGs):
 *     converts the raw renders into committed WebP masters in /img, composes the
 *     brand lockups (light + dark), and writes favicons, an apple-touch-icon,
 *     a real .ico and a 1200x630 OG image.
 *
 *   Phase 2 (idempotent, safe to run on every install):
 *     writes responsive WebP variants (img/<name>-<w>.webp) and img/manifest.json
 *     which the server reads at boot to build srcset attributes.
 *
 * Run: node scripts/generate-image-variants.js
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.resolve(__dirname, '..');
const IMG = path.join(ROOT, 'img');
const RAW = path.join(IMG, 'raw');
const MANIFEST = path.join(IMG, 'manifest.json');

/* --------------------------------------------------------------- palette */

const NAVY = '#0B1F3A';
const NAVY_DEEP = '#07162B';
const GOLD = '#C9A24B';
const CREAM = '#F5EFE3';

/* ------------------------------------------------------------------ config */

// Raw render (exact stem) -> committed master name.
const IMPORT = [
  { match: 'src-hero', as: 'hero' },
  { match: 'src-about-lobby', as: 'about-lobby' },
  { match: 'src-cta-band', as: 'cta-band' },
  { match: 'src-split-cellar', as: 'split-cellar' },
  { match: 'src-svc-rooms-suites', as: 'svc-rooms-suites' },
  { match: 'src-svc-spa-wellness', as: 'svc-spa-wellness' },
  { match: 'src-svc-dining', as: 'svc-dining' },
  { match: 'src-svc-weddings-events', as: 'svc-weddings-events' },
  { match: 'src-svc-meetings-corporate', as: 'svc-meetings-corporate' },
  { match: 'src-svc-experiences-concierge', as: 'svc-experiences-concierge' },
  { match: 'src-gallery-pool', as: 'gallery-pool' },
  { match: 'src-gallery-bar', as: 'gallery-bar' },
  { match: 'src-gallery-terrace', as: 'gallery-terrace' },
  { match: 'src-gallery-bath', as: 'gallery-bath' },
  { match: 'src-gallery-library', as: 'gallery-library' },
  { match: 'src-team-gm', as: 'team-genevieve-marchand' },
  { match: 'src-team-chef', as: 'team-julien-baptiste' },
  { match: 'src-team-spa', as: 'team-amara-osei' },
  { match: 'src-team-events', as: 'team-clara-whitfield' }
];

// Master name -> widths to generate. Largest entry should be <= the master width.
const VARIANTS = {
  hero: [480, 760, 1100, 1400],
  'about-lobby': [420, 700, 1000, 1400],
  'cta-band': [560, 900, 1200, 1400],
  'split-cellar': [420, 700, 1000, 1400],
  'svc-rooms-suites': [420, 700, 1000, 1400],
  'svc-spa-wellness': [420, 700, 1000, 1400],
  'svc-dining': [420, 700, 1000, 1400],
  'svc-weddings-events': [420, 700, 1000, 1400],
  'svc-meetings-corporate': [420, 700, 1000, 1400],
  'svc-experiences-concierge': [420, 700, 1000, 1400],
  'gallery-pool': [420, 700, 1000, 1400],
  'gallery-bar': [420, 700, 1000, 1400],
  'gallery-terrace': [420, 700, 1000, 1400],
  'gallery-bath': [420, 700, 1000, 1400],
  'gallery-library': [420, 700, 1000, 1400],
  'team-genevieve-marchand': [240, 360, 480, 720],
  'team-julien-baptiste': [240, 360, 480, 720],
  'team-amara-osei': [240, 360, 480, 720],
  'team-clara-whitfield': [240, 360, 480, 720]
};

/* ----------------------------------------------------------------- helpers */

function rawPath(stem) {
  const p = path.join(RAW, stem + '.png');
  return fs.existsSync(p) ? p : null;
}

async function toWebp(src, dest, width, quality = 82) {
  await sharp(src)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality, effort: 6 })
    .toFile(dest);
  return fs.statSync(dest).size;
}

/** Minimal single-image .ico container wrapping a PNG payload. */
function writeIco(pngBuffer, dest, size) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(1, 4);
  const entry = Buffer.alloc(16);
  entry.writeUInt8(size >= 256 ? 0 : size, 0);
  entry.writeUInt8(size >= 256 ? 0 : size, 1);
  entry.writeUInt8(0, 2);
  entry.writeUInt8(0, 3);
  entry.writeUInt16LE(1, 4);
  entry.writeUInt16LE(32, 6);
  entry.writeUInt32LE(pngBuffer.length, 8);
  entry.writeUInt32LE(22, 12);
  fs.writeFileSync(dest, Buffer.concat([header, entry, pngBuffer]));
}

/**
 * Build the circular PH monogram from the raw emblem render.
 * The source is a gold monogram on a solid navy field with a thin gold ring;
 * we crop to the ring and mask it to a perfect circle.
 */
async function buildMark() {
  const src = rawPath('src-logo-emblem');
  if (!src) return null;

  const size = 512;
  const cropped = await sharp(src)
    .extract({ left: 112, top: 112, width: 800, height: 800 })
    .resize(size, size, { fit: 'cover' })
    .png()
    .toBuffer();

  const mask = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">` +
      `<circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="#ffffff"/></svg>`
  );

  const circle = await sharp(cropped)
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toBuffer();

  await sharp(circle).webp({ quality: 92, effort: 6 }).toFile(path.join(IMG, 'logo-mark.webp'));
  fs.writeFileSync(path.join(IMG, 'logo-mark.png'), circle);
  console.log('  \u2713 logo-mark.webp (circular monogram, 512x512)');
  return circle;
}

/** Horizontal lockup: circular monogram + serif wordmark + spaced tagline. */
async function buildLockup(circle, variant) {
  const isLight = variant === 'light';
  const wordColor = isLight ? CREAM : NAVY;
  const tagColor = isLight ? GOLD : '#6B7C99';

  const W = 760;
  const H = 200;
  const markSize = 156;
  const markX = 6;
  const markY = Math.round((H - markSize) / 2);

  const svg = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
       <text x="${markX + markSize + 34}" y="96"
             font-family="Georgia, 'Times New Roman', serif" font-size="62"
             letter-spacing="-0.5" fill="${wordColor}">Praivelle House</text>
       <text x="${markX + markSize + 38}" y="138"
             font-family="Arial, Helvetica, sans-serif" font-size="19"
             letter-spacing="6.5" fill="${tagColor}">BOUTIQUE HOTEL</text>
     </svg>`
  );

  const out = path.join(IMG, isLight ? 'logo-light.webp' : 'logo.webp');
  await sharp({
    create: { width: W, height: H, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } }
  })
    .composite([
      { input: await sharp(circle).resize(markSize, markSize).png().toBuffer(), top: markY, left: markX },
      { input: svg, top: 0, left: 0 }
    ])
    .webp({ quality: 92, effort: 6 })
    .toFile(out);
  console.log(`  \u2713 ${path.basename(out)} (lockup, ${W}x${H})`);
}

/** Favicons + apple touch icon from the circular monogram. */
async function buildFavicons(circle) {
  const base = await sharp(circle)
    .resize(512, 512, { fit: 'contain', background: NAVY })
    .flatten({ background: NAVY })
    .png()
    .toBuffer();

  await sharp(base).resize(512, 512).webp({ quality: 92, effort: 6 }).toFile(path.join(IMG, 'favicon.webp'));

  const sizes = [
    [16, 'favicon-16.png'],
    [32, 'favicon-32.png'],
    [48, 'favicon-48.png'],
    [180, 'apple-touch-icon.png'],
    [192, 'favicon-192.png'],
    [512, 'favicon-512.png']
  ];
  for (const [size, name] of sizes) {
    await sharp(base).resize(size, size).png({ compressionLevel: 9 }).toFile(path.join(IMG, name));
  }
  const ico = await sharp(base).resize(32, 32).png().toBuffer();
  writeIco(ico, path.join(IMG, 'favicon.ico'), 32);
  console.log('  \u2713 favicons (16/32/48/180/192/512 + favicon.ico)');
}

/** 1200x630 Open Graph card built from the hero + brand lockup. */
async function buildOgImage() {
  const hero = path.join(IMG, 'hero.webp');
  if (!fs.existsSync(hero)) return;

  const W = 1200;
  const H = 630;
  const base = await sharp(hero).resize(W, H, { fit: 'cover', position: 'attention' }).toBuffer();

  const overlay = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
       <defs>
         <linearGradient id="g" x1="0" y1="0" x2="1" y2="0">
           <stop offset="0%" stop-color="${NAVY_DEEP}" stop-opacity="0.95"/>
           <stop offset="55%" stop-color="${NAVY}" stop-opacity="0.78"/>
           <stop offset="100%" stop-color="${NAVY}" stop-opacity="0.18"/>
         </linearGradient>
       </defs>
       <rect width="${W}" height="${H}" fill="url(#g)"/>
       <rect x="0" y="0" width="10" height="${H}" fill="${GOLD}"/>
       <text x="78" y="300" font-family="Georgia, 'Times New Roman', serif" font-size="60" fill="${CREAM}">Praivelle House</text>
       <text x="80" y="348" font-family="Arial, Helvetica, sans-serif" font-size="20" letter-spacing="6" fill="${GOLD}">BOUTIQUE HOTEL \u00b7 KANSAS CITY</text>
       <text x="80" y="452" font-family="Arial, Helvetica, sans-serif" font-size="27" fill="#E8E2D6">Twelve suites, a private spa and a table worth travelling for.</text>
       <text x="80" y="494" font-family="Arial, Helvetica, sans-serif" font-size="27" fill="#E8E2D6">(816) 555-0147  \u00b7  praivellehouse.com</text>
     </svg>`
  );

  const logoBuf = fs.existsSync(path.join(IMG, 'logo-light.webp'))
    ? await sharp(path.join(IMG, 'logo-light.webp')).resize({ width: 300 }).png().toBuffer()
    : null;

  const composite = [{ input: overlay, top: 0, left: 0 }];
  if (logoBuf) composite.push({ input: logoBuf, top: 58, left: 70 });

  await sharp(base)
    .composite(composite)
    .jpeg({ quality: 86, progressive: true, mozjpeg: true })
    .toFile(path.join(IMG, 'og-image.jpg'));
  console.log('  \u2713 og-image.jpg 1200x630');
}

/* ------------------------------------------------------- phase 1: import */

async function importSources() {
  console.log('Phase 1 \u2014 importing raw sources\u2026');
  let imported = 0;

  for (const item of IMPORT) {
    const src = rawPath(item.match);
    if (!src) {
      console.warn('  ! no raw file for', item.match);
      continue;
    }
    const dest = path.join(IMG, item.as + '.webp');
    const bytes = await toWebp(src, dest, 1600, 84);
    const meta = await sharp(dest).metadata();
    console.log(`  \u2713 ${item.as}.webp  ${meta.width}x${meta.height}  ${(bytes / 1024).toFixed(0)} KB`);
    imported++;
  }

  const circle = await buildMark();
  if (circle) {
    await buildLockup(circle, 'dark');
    await buildLockup(circle, 'light');
    await buildFavicons(circle);
  }

  await buildOgImage();

  console.log(`Phase 1 complete \u2014 ${imported} masters imported.`);
}

/* ----------------------------------------------------- phase 2: variants */

async function buildVariants() {
  console.log('\nPhase 2 \u2014 building responsive variants\u2026');
  const manifest = {};
  let made = 0;
  let pruned = 0;

  const names = Object.keys(VARIANTS).filter((n) => fs.existsSync(path.join(IMG, n + '.webp')));

  for (const name of names) {
    const master = path.join(IMG, name + '.webp');
    const originalBytes = fs.statSync(master).size;
    const meta = await sharp(master).metadata();
    const natural = meta.width;

    const planned = VARIANTS[name].filter((w) => w < natural);
    const built = [];

    for (const w of planned) {
      const dest = path.join(IMG, `${name}-${w}.webp`);
      const bytes = await toWebp(master, dest, w, 82);
      built.push({ w, bytes, dest });
    }

    // Keep only a strictly increasing size ladder, ascending by width, and never
    // offer a variant that is heavier than the master itself.
    built.sort((a, b) => a.w - b.w);
    const kept = [];
    let prevBytes = 0;
    for (const b of built) {
      if (b.bytes < originalBytes && b.bytes > prevBytes) {
        kept.push(b.w);
        prevBytes = b.bytes;
        made++;
      } else {
        fs.unlinkSync(b.dest);
        pruned++;
      }
    }

    // Remove only variants that are no longer in the plan (explicit names).
    const existing = fs
      .readdirSync(IMG)
      .filter((f) => f.startsWith(name + '-') && /-\d+\.webp$/.test(f));
    for (const f of existing) {
      const w = Number(f.replace(name + '-', '').replace('.webp', ''));
      if (!kept.includes(w)) {
        fs.unlinkSync(path.join(IMG, f));
        pruned++;
      }
    }

    manifest[name + '.webp'] = { natural, height: meta.height, variants: kept, bytes: originalBytes };
    console.log(`  ${name}: natural ${natural}w ${(originalBytes / 1024).toFixed(0)} KB \u2192 variants ${kept.join(', ') || '(none)'}`);
  }

  fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');
  console.log(`Phase 2 complete \u2014 ${made} variants written, ${pruned} pruned. manifest.json updated.`);
}

/* ------------------------------------------------------------------- main */

(async () => {
  try {
    if (!fs.existsSync(IMG)) throw new Error('img/ directory not found at ' + IMG);
    await importSources();
    await buildVariants();
  } catch (err) {
    console.error('Image pipeline failed:', err.stack || err.message);
    process.exitCode = 1;
  }
})();
