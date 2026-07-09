# Site Updates Batch — Design Spec (2026-07-10)

Portfolio site (Vite + React + TS, Tailwind, glassmorphism system). Branch `site-updates`.
Ships to `main` → Vercel (`abrarfahim.site`). 17 requested changes, decisions locked with the user.

## Locked decisions
- Home hero: **Dynamic Spotlight** direction (approved via mock).
- Accent palette: **enriched indigo→violet** (deepen/saturate existing family).
- Light-theme background: **medium lavender**.
- Theme default: **light**, keep the dark-mode toggle.
- Stat tiles: **frosted-glass + gradient numerals** (restore old tile look; white-numeral idea dropped — unreadable on light glass).
- Featured Publications: **reorder to lead with energy/newest** (Hybrid MPPT first).
- Research focus cards: **replace** with Renewable Energy / Optimal Power Flow / Smart Grids / Fuel Cells.
- Anemia: published "Pediatric Anemia" **replaces** the in-prep "Transparent…Anemia Prediction" entry.
- Item-3 link mapping: `document/11502183` → Hybrid MPPT, `document/11545730` → Pediatric Anemia (flip if wrong).

## Changes by area

### Theme / visual (items 6, 15)
- `index.html`: root `class="dark"` → light; pre-paint script adds `dark` only when `theme==='dark'`; `theme-color` light.
- `ThemeToggle.tsx`: default to light unless stored `theme==='dark'`.
- `index.css` `:root`: retune `--background`, `--backdrop` to medium lavender; enrich `--primary`, `--grad-1/2/3`, glass/shadow tokens for premium light look. `.dark` untouched.

### Home (items 1, 5, 8, 9, 11)
- Remove floating "Publications" badge over portrait (item 1).
- Rebuild hero → Dynamic Spotlight: gradient headline, role chips, CTAs, socials, portrait + rotating featured-paper **spotlight card** (item 5).
- Stat tiles: frosted glass + gradient numerals (restored). No solid fills.
- New **"Ongoing Research Works"** section after hero: the 2 In-Prep papers, link to `/research/<id>` (item 9).
- Move "Where I focus my research" to **below** Featured Publications (item 8).
- Focus cards → 4 energy areas (item 11).
- `featuredPapers`: lead with Hybrid MPPT + newest published.

### Data — `src/lib/data.ts` (items 3, 4, 12, 13)
- Delete `sdn-intrusion` (item 12).
- Add `hybrid-mppt` (Published, `doi`=IEEE 11502183 URL, tags: Renewable Energy/Power Systems/PV).
- Replace `anemia-prediction` entry with published Pediatric Anemia (Published, `doi`=IEEE 11545730 URL) (item 3).
- `opf-comparative` + `solar-street-lighting`: status → **In Preparation** (item 13).
- Synnax `Data Scientist` dates → **May 2025 – June 2026** (item 4). Recompute "current roles" (only NEXT Ventures remains "Present").

### Layout fixes (items 7, 14)
- `ContactPage.tsx`: prevent mid-word breaks. Keep icon+title fixed; value wraps at natural boundaries (insert `<wbr>` after `/` in URLs / `@`; use `break-normal` + `overflow-wrap:normal`, no `break-words`). e.g. `github.com/` ↵ `abrarfahimsaraz`.
- `PageHero.tsx`: reduce bottom padding ~half; reduce page content top padding ~half so the gap under every title halves (item 14). Applies site-wide via shared PageHero + per-page wrappers.

### Perf (item 2)
- Light default → dark-only particle SVG no longer loads.
- Ambient blobs: smaller/softer, fewer simultaneous heavy blurs; gate largest blur to `lg+`; reduce backdrop-filter blur radius on small screens; keep `prefers-reduced-motion` honored.

### Item 10 (PhD/Masters → "Higher Studies")
- Broad re-scan of `src` + `public`. No matches expected → likely no change. If found, replace with "Higher Studies".

### SEO / readiness (items 16, 17)
- `public/sitemap.xml`: remove `sdn-intrusion`, add `hybrid-mppt`, keep/adjust anemia route id, refresh `lastmod` to 2026-07-10.
- `ResearchDetailPage`: add **ScholarlyArticle** JSON-LD + visible external link (IEEE `doi`) → backlinks (item 16).
- Verify canonical, OG, Twitter, Person/WebSite JSON-LD intact; alt text; `robots.txt`; production build green; preview sanity (item 17).

## Verify then ship
1. `npm run build` green + preview: light default, hero, tiles, gap, contact wrap, research pages, perf smoke.
2. Parallel review fan-out (a11y/contrast, responsive, SEO/structured-data, correctness) → fix findings.
3. Merge `site-updates` → `main`, push → Vercel.
