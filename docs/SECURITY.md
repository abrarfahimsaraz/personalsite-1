# Security Hardening — abrarfahim.site

Production security posture for the portfolio (Vite + React SPA on Vercel).
Applied 2026-07-11. This is a **static SPA** — there is no server/API runtime,
no database, no auth, and no admin routes.

---

## 1. What was implemented (in this repo)

### HTTP security headers — `vercel.json`
Applied to every response (`source: "/(.*)"`):

| Header | Value | Purpose |
|---|---|---|
| `Content-Security-Policy` | strict, hash-based (see below) | Blocks XSS, injection, clickjacking |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` | Forces HTTPS; preload-list eligible |
| `X-Content-Type-Options` | `nosniff` | Stops MIME sniffing |
| `X-Frame-Options` | `DENY` | Anti-clickjacking (legacy; CSP `frame-ancestors 'none'` is the modern twin) |
| `X-XSS-Protection` | `0` | Disables the buggy legacy auditor (CSP supersedes it) |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Limits referrer leakage |
| `Permissions-Policy` | camera/mic/geo/usb/payment/… all `=()` | Denies unused browser features |
| `Cross-Origin-Opener-Policy` | `same-origin` | Isolates the browsing context |
| `Cross-Origin-Resource-Policy` | `same-origin` | Blocks cross-origin hotlinking/embedding of our assets |
| `X-Permitted-Cross-Domain-Policies` | `none` | Denies Adobe cross-domain policy abuse |
| `X-DNS-Prefetch-Control` | `on` | Perf |

Asset caching: `/assets/*` → `Cache-Control: public, max-age=31536000, immutable`
(safe because Vite content-hashes those filenames).

### Content-Security-Policy (strict, no `unsafe-inline` for scripts)
```
default-src 'self';
script-src 'self' 'sha256-<jsonld>' 'sha256-<bootstrap>'
           https://cdnjs.cloudflare.com          (GSAP)
           https://www.googletagmanager.com       (GA4 loader)
           https://www.google-analytics.com;      (GA4)
style-src  'self' 'unsafe-inline' https://fonts.googleapis.com;
img-src    'self' data: https://www.googletagmanager.com https://*.google-analytics.com;
font-src   'self' https://fonts.gstatic.com;
connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com
            https://*.google-analytics.com https://*.analytics.google.com;
object-src 'none'; base-uri 'self'; form-action 'self';
frame-src 'none'; frame-ancestors 'none';
manifest-src 'self'; worker-src 'self'; upgrade-insecure-requests
```

Notes / deliberate tradeoffs:
- **Scripts use SHA-256 hashes, not `unsafe-inline`.** The two inline scripts
  (JSON-LD + the theme/font bootstrap) are pinned by hash. `unsafe-eval` is
  **not** allowed (verified: `new Function` is blocked at runtime).
- **The inline `onload` handler on the font `<link>` was removed** and folded
  into the hashed bootstrap script, so no `unsafe-hashes` is needed.
- **`style-src` keeps `'unsafe-inline'`.** React, framer-motion, and GSAP inject
  inline `style="…"` attributes at runtime that cannot be hashed on a static
  host. This is the standard, accepted tradeoff for a client-rendered SPA; it
  does not weaken script XSS protection.
- **COEP (`Cross-Origin-Embedder-Policy: require-corp`) is intentionally NOT
  set.** It would block the GSAP CDN, Google Fonts, and GA4 (none send CORP
  headers), breaking the site. Cross-origin isolation buys nothing here (no
  `SharedArrayBuffer`/high-res timers). To enable it later, self-host GSAP +
  fonts (see §4), then add the header.

### ⚠️ CRLF / CSP-hash gotcha (important for future edits)
Browsers normalize `CRLF -> LF` before hashing an inline script, so the CSP hash
must be computed over **LF-normalized** content. On Windows the raw file has
CRLF, which produces a hash the browser never matches → the script is silently
blocked. Guards in place:
- `.gitattributes` pins `index.html` to `eol=lf`.
- `scripts/csp-hashes.mjs` computes the correct LF hashes.

**Workflow when you change an inline script in `index.html`:**
```
npm run build
node scripts/csp-hashes.mjs      # prints the LF sha256 values
# paste both values into vercel.json -> script-src
```

### Application-layer
- **`src/components/SafeHtml.tsx`** (renders blog HTML): now blocks unsafe URL
  schemes in `<a href>` — only `http/https/mailto/tel` and relative URLs pass;
  `javascript:`, `data:`, `vbscript:` are dropped. Any `target="_blank"` link is
  forced to `rel="noopener noreferrer"`.
- **Dependencies:** `npm audit fix` patched the browser-facing react-router
  open-redirect (→ 6.30.4) plus 7 other advisories. Remaining 2 advisories
  (esbuild/vite) are **dev-server-only** and never ship to production; fixing
  them needs a breaking Vite 8 major, deferred.

### `/.well-known/security.txt` (RFC 9116)
Served from `public/.well-known/security.txt`. Update `Expires` before
2027-07-11. Optionally sign with PGP and add an `Encryption:` line.

---

## 2. CORS
There is **no server/API** in this project, so there is no `Access-Control-Allow-Origin`
surface and no `*` to remove. If a backend/API is ever added, use an explicit
origin allowlist (never `*` with credentials).

## 3. Admin routes
None exist. The SPA has no `/admin`, no privileged routes, no client-side auth.
Unknown paths render the `NotFound` page.

## 4. Server fingerprinting
Vercel does not emit `X-Powered-By` for static output (none present). The
`Server: Vercel` header is set by the platform and cannot be removed via
`vercel.json` — it exposes no version and is acceptable.

---

## 5. Requires DNS / provider configuration (NOT in this repo)

These cannot be committed to the repo — set them at the **domain registrar /
DNS provider** for `abrarfahim.site`. Recommended records:

### Email authentication (do all three, even though the site may not send mail —
prevents spoofing of the domain):
- **SPF** — TXT `@`:
  `v=spf1 -all` (if the domain sends NO email), or include your mail provider,
  e.g. `v=spf1 include:_spf.google.com -all`.
- **DKIM** — TXT record provided by your mail host (e.g. Google Workspace:
  `google._domainkey`). Skip only if truly no mail.
- **DMARC** — TXT `_dmarc`:
  `v=DMARC1; p=reject; rua=mailto:abrarfahim8@iut-dhaka.edu; fo=1; adkim=s; aspf=s`
  (start with `p=none` to monitor, then move to `quarantine` → `reject`).

### Certificate issuance control:
- **CAA** — CAA `@`: `0 issue "letsencrypt.org"` (Vercel uses Let's Encrypt).
  Add `0 iodef "mailto:abrarfahim8@iut-dhaka.edu"` for violation reports.

### Transport security for email:
- **MTA-STS** — requires serving a policy at
  `https://mta-sts.abrarfahim.site/.well-known/mta-sts.txt` with:
  ```
  version: STSv1
  mode: enforce
  mx: <your-mx-host>
  max_age: 604800
  ```
  plus TXT `_mta-sts` = `v=STSv1; id=<timestamp>`. (Only if the domain sends/
  receives mail; needs the `mta-sts` subdomain pointed at a host you control.)
- **TLS-RPT** (optional) — TXT `_smtp._tls`:
  `v=TLSRPTv1; rua=mailto:abrarfahim8@iut-dhaka.edu`

### DNS integrity:
- **DNSSEC** — enable at the registrar (one toggle on most providers). Confirms
  DNS answers are not tampered with.

### HSTS preload:
- After deploying (headers live), submit the apex domain at
  https://hstspreload.org/. The header already meets the criteria
  (`max-age>=31536000; includeSubDomains; preload`).

---

## 6. SSL / SNI
Vercel auto-provisions and renews Let's Encrypt certs with SNI + TLS 1.2/1.3;
HTTP is redirected to HTTPS. Verify post-deploy:
- https://www.ssllabs.com/ssltest/analyze.html?d=abrarfahim.site (target A/A+)
- Confirm the cert covers both apex and `www` (add `www` in Vercel Domains if used).

---

## 7. Post-deploy verification checklist
1. Load the site → open DevTools Console → **zero CSP violation errors**.
   (If GA is enabled and a violation appears, widen `connect-src`/`img-src` to the
   exact GA endpoint shown.)
2. Custom fonts render (Inter body, Space Grotesk headings) — confirms the font
   swap ran and `style-src`/`font-src` are correct.
3. Scroll animations work — confirms GSAP loaded from the CDN under CSP.
4. https://securityheaders.com/?q=abrarfahim.site → target **A/A+**.
5. https://csp-evaluator.withgoogle.com/ → paste the CSP, review.
6. `curl -sI https://abrarfahim.site/.well-known/security.txt` → 200, text/plain.
