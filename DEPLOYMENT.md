# Deploying Praivelle House

Three deployment targets are supported from this one repository. Only the
platform-specific config files differ.

| Target | Config file | Notes |
|---|---|---|
| **Netlify** | `netlify.toml` + `netlify/functions/server.js` | Requires the wrapper + image-copy step |
| **Vercel** | `vercel.json` | Runs Express natively |
| **VPS** | none | PM2 + Nginx, no cold starts |

---

## 1. Netlify (primary target)

Netlify runs **no long-lived Node process**. The whole Express app is bundled
into one catch-all function by esbuild and shipped without `node_modules`. Three
pieces make that work:

```
netlify/functions/server.js     module.exports.handler = serverless(require('../../server'))
netlify.toml                    build command + redirect + included_files
scripts/prepare-netlify.js      copies /img → public/img for the CDN
```

### Deploy

1. Push this repository to GitHub.
2. In Netlify: **Add new site → Import an existing project** → pick the repo.
3. Netlify reads `netlify.toml`, so leave the build settings alone.
4. **Site configuration → Environment variables** → add:

   | Key | Value |
   |---|---|
   | `SITE_URL` | `https://www.praivellehouse.com` |
   | `NODE_VERSION` | `20` (already set in `netlify.toml`) |

5. **Deploy site.**
6. Add the custom domain, then **redeploy** so `SITE_URL` is baked into the
   canonicals, Open Graph URLs, JSON-LD `@id`s and `sitemap.xml`.

> Changing `SITE_URL` requires a redeploy. It is read at build/run time, not per
> request.

### Verify the build before you push

```bash
npm install          # installs esbuild + sharp (dev only)
npm run verify:bundle
```

This bundles `netlify/functions/server.js` with esbuild exactly as Netlify does,
copies `views/ data/ lib/ img/manifest.json` into an isolated temp directory
with **no `node_modules` on the resolution path**, asserts that isolation, then
invokes the real handler with synthetic Lambda events for all 25 routes plus the
enquiry form. It catches the two failure modes that a local `node server.js`
never will.

> On Windows, esbuild's postinstall script can fail with `EBUSY` while Defender
> scans the binary. Install with `npm install --ignore-scripts` and copy
> `node_modules/@esbuild/win32-x64/esbuild.exe` somewhere writable before running
> it. This affects local verification only — Netlify bundles on Linux.

---

## The two gotchas that break every Netlify Express deploy

### 1. `Failed to lookup view "index"`

Template engines read views from **disk at runtime**, not via `require`, so the
bundler cannot discover them. Without `included_files` every page 500s.

```toml
[functions]
  node_bundler = "esbuild"
  included_files = ["views/**", "data/**", "lib/**", "img/**", "public/**"]
```

### 2. `Cannot find module 'ejs'`

Express never `require`s the view engine directly — it resolves it lazily in
`express/lib/view.js`:

```js
var fn = require(mod).__express;   // `mod` is a VARIABLE → invisible to bundlers
```

esbuild cannot see that, so it leaves a runtime `require('ejs')` in the bundle.
The fix is to register the engine up front, which makes Express skip the lookup
entirely (it is guarded by `if (!opts.engines[this.ext])`):

```js
const ejs = require('ejs');          // static require → the bundler inlines it
app.engine('ejs', ejs.__express);    // pre-registered → no dynamic require
app.set('view engine', 'ejs');
```

The top-level `require('ejs')` is load-bearing. The same applies to any Express
view engine (pug, hbs, nunjucks), not just ejs.

### 3. A third one that bites your own data files

It is tempting to write a dynamic require in a content loader:

```js
// data/services/index.js  ← BREAKS THE DEPLOY
const FILES = ['rooms-suites', 'spa-wellness'];
module.exports = FILES.map((f) => require('./' + f));
```

esbuild cannot resolve `'./' + f`, so **every page** of the deployed site dies
with `Error: Module not found in bundle: ./rooms-suites` — while the local
`node server.js` works perfectly. Always list the requires statically:

```js
module.exports = [
  require('./rooms-suites'),
  require('./spa-wellness')
].sort((a, b) => (a.order || 99) - (b.order || 99));
```

### Static assets

Netlify publishes exactly ONE directory (`public`). Images live in the repo root
at `/img`, so `scripts/prepare-netlify.js` copies them into `public/img` at build
time. Without it every image request is routed through the function.
`public/img/` is git-ignored — it is a build artefact.

---

## 2. Vercel

Vercel runs Express natively, so no wrapper function is needed.

```json
{
  "version": 2,
  "builds": [{ "src": "server.js", "use": "@vercel/node" }],
  "routes": [{ "src": "/(.*)", "dest": "server.js" }]
}
```

`vercel.json` also needs `includeFiles` for `views/**`, `data/**`, `lib/**`,
`public/**` and `img/**` — otherwise the function throws `Failed to lookup view`.

**Steps:** push to Git → import → Framework Preset **Other** → leave Build and
Output directories empty → set `SITE_URL` → deploy → add the domain → redeploy.

---

## 3. VPS (PM2 + Nginx)

Full control, no cold starts.

```bash
# Node 20 via NodeSource, then:
npm ci --omit=dev
npm run prepare:netlify      # or serve /img directly with Nginx
pm2 start server.js --name praivelle-house
pm2 save
pm2 startup
```

Nginx reverse proxy to `127.0.0.1:3000`, then TLS:

```bash
certbot --nginx -d praivellehouse.com -d www.praivellehouse.com
```

Set `SITE_URL` in the PM2 environment (`pm2 restart --update-env`).

---

## The enquiry form

There is no database in this build. `POST /contact` validates the input, logs
the enquiry to stdout so it is never silently lost, and renders a success state.

```js
console.log('[Praivelle enquiry]', JSON.stringify({ at, name, email, phone, guestType, interest, arrivalWindow, message }));
```

Wire it to a real transport before launch — any one of these:

- **SMTP** — add `nodemailer` and send to `reservations@praivellehouse.com`.
- **A form endpoint** — Netlify Forms, Formspree or Basin; post the fields and
  keep the existing success state.
- **A serverless email API** — Resend, Postmark or SendGrid, called from the
  handler.

Two spam defences are already in place: a hidden honeypot field (`website`) that
bots fill and humans never see, and a minimum-time check hook (`startedAt`).

---

## Verification checklist

```bash
node --check server.js                    # syntax

# every route
for p in "/" "/about" "/team" "/services" "/services/rooms-suites" \
         "/services/spa-wellness" "/services/dining" "/services/weddings-events" \
         "/services/meetings-corporate" "/services/experiences-concierge" \
         "/offers" "/gallery" "/reviews" "/blog" "/faq" "/contact" "/careers" \
         "/privacy-policy" "/terms" "/accessibility" "/sitemap" \
         "/sitemap.xml" "/robots.txt" "/nope"; do
  curl -s -o /dev/null -w "%{http_code}  $p\n" "http://localhost:3000$p"
done
# expect 200 for real routes, 404 for /nope

npm run check:seo        # titles, canonicals, JSON-LD, H1s, word counts
npm run verify:bundle    # the real Netlify serverless build
```

- `POST /contact` → **200** valid, **422** invalid.
- Confirm `Content-Encoding: gzip` and that each expected `@type` appears in the
  HTML.
- Check `robots.txt` carries an **absolute** `Sitemap:` URL.

---

## Refreshing assets

```bash
npm run fonts     # re-download the self-hosted typefaces
npm run images    # rebuild WebP variants + img/manifest.json from img/raw
```

`img/raw/` holds the generated source renders and is git-ignored. The committed
WebP masters, responsive variants, favicons and `og-image.jpg` live in `img/`.

To replace a photograph: drop a new PNG into `img/raw/` using the same
`src-<name>.png` stem, then run `npm run images`.

---

Web and Marketing By [KC Web Design Pros](https://kansascitywebdesignpros.com/)
