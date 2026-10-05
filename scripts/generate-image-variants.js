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

const NAVY = '#2E3C85';
const NAVY_DEEP = '#1B2559';
const ORANGE = '#ED7D3B';
const TINT = '#F5F8FF';

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
  { match: 'src-svc-rooms-suites', as: 'room-garden-king' },
  { match: 'src-room-prairie-suite', as: 'room-prairie-suite' },
  { match: 'src-room-orchard-suite', as: 'room-orchard-suite' },
  { match: 'src-room-spa-suite', as: 'room-spa-suite' },
  { match: 'src-room-the-loft', as: 'room-the-loft' },
  { match: 'src-room-library-room', as: 'room-library-room' },
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
  'room-garden-king': [420, 700, 1000, 1400],
  'room-prairie-suite': [420, 700, 1000, 1400],
  'room-orchard-suite': [420, 700, 1000, 1400],
  'room-spa-suite': [420, 700, 1000, 1400],
  'room-the-loft': [420, 700, 1000, 1400],
  'room-library-room': [420, 700, 1000, 1400],
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
 * Build the brand mark from the raw monogram render.
 *
 * The source is an indigo disc carrying an orange interlocking P/H in a fine
 * double ring. We auto-crop to the disc, mask it to a true circle, and emit
 * two forms: the mark as drawn (for light surfaces) and a keyed-out version
 * with the indigo field removed so the ring and letterforms sit directly on
 * the navy footer without a disc-shaped hole.
 */
/* ------------------------------------------------------------ brand assets
   The client supplies their own logo and favicon, so this pipeline no longer
   draws them. It trims the transparent padding, exports web-sized derivatives,
   and derives a light-on-dark lockup for the navy footer. */

const LOGO_SRC = path.join(IMG, 'Praivelle House Logo.webp');
const FAVICON_SRC = path.join(IMG, 'Praivelle House Fav Icon.webp');

/* Exact brand colours, sampled from the supplied logo. */
const BRAND_NAVY = [0, 9, 79]; // #00094F
const BRAND_ORANGE = [203, 75, 11]; // #CB4B0B

/** Crop away fully transparent padding so the artwork fills its box. */
async function trimAlpha(buf, pad) {
  const p = pad == null ? 8 : pad;
  const { data, info } = await sharp(buf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const ch = info.channels;
  let minX = info.width;
  let minY = info.height;
  let maxX = -1;
  let maxY = -1;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      if (data[(y * info.width + x) * ch + 3] > 12) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  if (maxX < 0) return sharp(buf).png().toBuffer();
  const left = Math.max(0, minX - p);
  const top = Math.max(0, minY - p);
  const width = Math.min(info.width - left, maxX - minX + 1 + p * 2);
  const height = Math.min(info.height - top, maxY - minY + 1 + p * 2);
  return sharp(buf).extract({ left, top, width, height }).png().toBuffer();
}

/**
 * Key the brand navy to white so the lockup stays legible on the navy footer.
 * The orange is left exactly as supplied — it is the brand's, not ours to shift.
 */
async function navyToWhite(buf) {
  const { data, info } = await sharp(buf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const ch = info.channels;
  for (let i = 0; i < data.length; i += ch) {
    if (data[i + 3] === 0) continue;
    const r = data[i];
    const g = data[i + 1];
    const bl = data[i + 2];
    const dNavy = Math.hypot(r - BRAND_NAVY[0], g - BRAND_NAVY[1], bl - BRAND_NAVY[2]);
    const dOrange = Math.hypot(r - BRAND_ORANGE[0], g - BRAND_ORANGE[1], bl - BRAND_ORANGE[2]);
    if (dNavy < dOrange) {
      data[i] = 255;
      data[i + 1] = 255;
      data[i + 2] = 255;
    }
  }
  return sharp(data, { raw: { width: info.width, height: info.height, channels: 4 } }).png().toBuffer();
}

/** Web-sized logo lockups: one for light surfaces, one for dark. */
async function buildLogo() {
  if (!fs.existsSync(LOGO_SRC)) {
    console.log('  ! "Praivelle House Logo.webp" not found in /img — skipping');
    return null;
  }
  const trimmed = await trimAlpha(LOGO_SRC, 10);
  const src = await sharp(trimmed).metadata();
  const width = 480;
  const height = Math.round((width * src.height) / src.width);

  const dark = await sharp(trimmed).resize(width, height, { fit: 'inside' }).png().toBuffer();
  await sharp(dark).webp({ quality: 92, effort: 6 }).toFile(path.join(IMG, 'logo.webp'));
  console.log(`  \u2713 logo.webp ${width}x${height} (trimmed from ${src.width}x${src.height})`);

  const light = await navyToWhite(dark);
  await sharp(light).webp({ quality: 92, effort: 6 }).toFile(path.join(IMG, 'logo-light.webp'));
  console.log('  \u2713 logo-light.webp (brand navy keyed to white)');

  return { width, height };
}

/** Favicons, apple touch icon and maskable icon from the supplied mark. */
async function buildFavicons() {
  if (!fs.existsSync(FAVICON_SRC)) {
    console.log('  ! "Praivelle House Fav Icon.webp" not found in /img — skipping');
    return;
  }
  const trimmed = await trimAlpha(FAVICON_SRC, 6);
  const S = 512;
  const fitted = (fraction, canvas) =>
    sharp(trimmed)
      .resize(Math.round((canvas || S) * fraction), Math.round((canvas || S) * fraction), { fit: 'inside' })
      .png()
      .toBuffer();

  /* Square transparent canvas, artwork inside an 88% safe area. */
  const squared = await sharp({
    create: { width: S, height: S, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } }
  })
    .composite([{ input: await fitted(0.88), gravity: 'centre' }])
    .png()
    .toBuffer();

  for (const [size, name] of [
    [16, 'favicon-16.png'],
    [32, 'favicon-32.png'],
    [48, 'favicon-48.png'],
    [192, 'favicon-192.png'],
    [512, 'favicon-512.png']
  ]) {
    await sharp(squared).resize(size, size).png({ compressionLevel: 9 }).toFile(path.join(IMG, name));
  }

  /* Opaque versions: iOS and Android maskable icons must not be transparent. */
  await sharp({
    create: { width: 180, height: 180, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } }
  })
    .composite([{ input: await fitted(0.82, 180), gravity: 'centre' }])
    .png({ compressionLevel: 9 })
    .toFile(path.join(IMG, 'apple-touch-icon.png'));

  await sharp({
    create: { width: S, height: S, channels: 4, background: { r: 255, g: 255, b: 255, alpha: 1 } }
  })
    .composite([{ input: await fitted(0.6), gravity: 'centre' }])
    .png({ compressionLevel: 9 })
    .toFile(path.join(IMG, 'favicon-maskable-512.png'));

  const ico = await sharp(squared).resize(32, 32).png().toBuffer();
  writeIco(ico, path.join(IMG, 'favicon.ico'), 32);
  console.log('  \u2713 favicons (16/32/48/180/192/512 + maskable + favicon.ico)');
}

/** 1200x630 Open Graph card built from the hero + the supplied logo. */
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
           <stop offset="58%" stop-color="${NAVY}" stop-opacity="0.82"/>
           <stop offset="100%" stop-color="${NAVY}" stop-opacity="0.22"/>
         </linearGradient>
       </defs>
       <rect width="${W}" height="${H}" fill="url(#g)"/>
       <rect x="0" y="0" width="10" height="${H}" fill="${ORANGE}"/>
       <text x="80" y="400" font-family="Segoe UI, Arial, Helvetica, sans-serif" font-size="46" font-weight="700" letter-spacing="-1" fill="#FFFFFF">Twelve suites, a private spa and</text>
       <text x="80" y="458" font-family="Segoe UI, Arial, Helvetica, sans-serif" font-size="46" font-weight="700" letter-spacing="-1" fill="#FFFFFF">a table worth travelling for.</text>
       <text x="82" y="546" font-family="Segoe UI, Arial, Helvetica, sans-serif" font-size="25" fill="#E4E8F7">(816) 555-0147  \u00b7  praivellehouse.com</text>
     </svg>`
  );

  const composite = [{ input: overlay, top: 0, left: 0 }];
  const logoPath = path.join(IMG, 'logo-light.webp');
  if (fs.existsSync(logoPath)) {
    const logo = await sharp(logoPath).resize({ width: 330 }).png().toBuffer();
    composite.push({ input: logo, top: 74, left: 76 });
  }

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

  await buildLogo();
  await buildFavicons();
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
