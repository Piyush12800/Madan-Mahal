# Madan Mahal

Website for **Chouksey Pustak & Paper Industries**, Jabalpur — school notebooks,
drawing books and practical books under the *schoolmind*, *classmind*,
*REEL BOOK* and *MadanMahal SILVER* labels.

Live: [choukseypaper.in](https://www.choukseypaper.in/)

---

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
```

```bash
npm run build      # typechecks, then builds to dist/
npm run preview    # serve the built output
npm run typecheck
```

Node 18+.

## Turn the enquiry form on

The form ships **disabled**, and says so on the page. It will not report success
for a message it has not sent.

```bash
cp .env.example .env.local
# add a free key from https://web3forms.com registered to choukseypaper@gmail.com
```

WhatsApp and email work without any configuration.

---

## Deploying

The site uses real URLs (`/catalogue/schoolmind-a4`), not `/#/` fragments, so the
host must serve `index.html` for unmatched paths. Everything needed is in
`public/` and gets copied into `dist/`:

| Host | Handled by |
|---|---|
| Apache / cPanel shared hosting | `public/.htaccess` |
| Netlify, Cloudflare Pages | `public/_redirects` |
| Vercel | add a rewrite of `/(.*)` → `/index.html` |
| nginx | `try_files $uri /index.html;` |

Upload the **contents of `dist/`** to the web root. If the old build is still
there, clear it first — the previous site's files are not overwritten by name.

> Without a fallback rule, the home page works and every other URL 404s. That is
> the one deployment mistake to watch for.

---

## Where things live

```
src/
  data/site.ts       Business facts. `unconfirmed` holds deliberate blanks.
  data/products.ts   The eight product lines and their cover artwork.
  types.ts           `Confirmable<T>` — how an unknown value is modelled.
  components/
    Section.tsx      Page shell: the margin rule and the margin eyebrow.
    Plate.tsx        The name plate. Read this one first.
    RulingSwatch.tsx Rulings drawn in CSS.
    CoverArt.tsx     A cover in its own measured proportion.
  index.css          All design tokens, in @theme.
```

Content edits are almost always `src/data/`. See **CONTENT-CHECKLIST.md** for
what is still blank and why.

---

## The design, briefly

Everything derives from the product and the registered mark, so that the site
looks like the thing a buyer holds.

**Colour** comes from the trademark: red `#E1231E`, yellow `#FFD400`, ink
`#14100E`. The ground `#F3F2EE` is the cool off-white of notebook paper, and
kraft `#C9A87C` is bale-wrapper brown. Red at full strength only clears 4.2:1 on
the light grounds, so small red text uses `brand-dark` `#B31813` instead — that
split is deliberate, don't collapse it.

**Type** has three jobs. *Archivo* 800/900 caps for display, because the
trademark wordmark is a bold grotesque in caps. *Instrument Sans* for reading.
*DM Mono* for specifications, because Indian wholesale invoices are typed and
data should look typed.

**The name plate is the signature.** Every Indian school copy has a
`Name ___ Class ___ Subject ___` box printed on the cover. That box carries the
specifications here, with dotted leaders. It earns its place twice: it is the one
structural device drawn from the product itself, and an unconfirmed figure
renders as a blank ruled line — so honest gaps look intentional, because they
are.

**The margin rule** runs continuously down the site at a fixed offset, as it runs
down every page of a copy. Section eyebrows sit in the margin, where a teacher's
marks go. They are words, not numbers — the sections are not a sequence.

**Rulings are drawn, not photographed.** Single, double, four-line, square,
interleaf and unruled are each rendered in CSS as themselves, so a buyer
comparing two of them sees the actual difference.

Motion is one orchestrated page-load moment — the rules draw in, the hero
settles — and hover states. `prefers-reduced-motion` is respected.

---

## What changed from the previous version

**Fabricated content removed.** The old site listed five invented products priced
in US dollars with `picsum.photos` placeholder images, four named leadership
profiles, a milestone timeline, and claims including "100% recycled",
"FSC Certified", "0 Carbon Footprint" and "500K+ Products Sold". None had a
source. The factory carousel was Unsplash stock photography of other companies'
plants. All of it is gone; CONTENT-CHECKLIST.md §6 lists it so anything true can
be restored with evidence.

**Bugs fixed.**

- The contact form ran a `setTimeout`, logged to the console, and displayed
  "Message Sent!". Nothing was ever sent. It is now a real Web3Forms submission
  that stays visibly disabled until it can deliver.
- `Footer.tsx` read `COMPANY_INFO.phone`, a key that does not exist, so the
  footer phone number rendered blank.
- `index.html` loaded `/index.css`, which was not in the repository — a 404 on
  every page load.
- The mobile menu dropped the "Get a Quote" call to action entirely.
- The logo was forced to `h-40 w-60`, distorting a 3:2 image to 3:2 → 2:3 and
  overflowing a 96 px navbar with a 160 px image.
- The 1.2 MB trademark PNG was the favicon, loading in full on every page. It is
  now 138 KB, with a separate 6.5 KB favicon.

**Build and SEO.** Tailwind moved off the `cdn.tailwindcss.com` script (which is
explicitly not for production) to a real build. React was being loaded twice —
once via an `esm.sh` import map and again through `package.json`. `HashRouter`
became `BrowserRouter`, so pages have indexable URLs; each route now sets its own
title and description, and there is `LocalBusiness` structured data, a sitemap
and a `robots.txt`.

**Accessibility.** Keyboard focus is visible everywhere, there is a skip link,
the mobile menu is a labelled `aria-expanded` control, filter chips report
`aria-pressed`, and text colours were adjusted until small text cleared 4.5:1.
