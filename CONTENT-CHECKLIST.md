# Content checklist

Every item below is a blank the site currently leaves visibly blank. Nothing here
is broken — the design treats an unfilled specification as a blank ruled line
inside a name plate, which is how a real notebook cover looks before it is filled
in. Filling these in makes the site more useful; guessing at them would make it
worse.

**Rule: never replace a `null` with an estimate.** A wrong page count or a wrong
paper grade loses an order and costs trust. A blank line says "ask us", which is
true and which starts a conversation.

---

## 1. Conflicts — resolve these first

I found two sources of business facts that disagree. I have **not** picked a
winner. The site currently uses the values from the old codebase
(`src/data/site.ts`).

The second source is the printed spec panel on a classmind A4 back cover
(`public/CMA4-spreads.jpeg`). I read it off a compressed photograph, so treat
every digit below as "probably" — that is exactly why none of it is published.

| Field | Old site (`site.ts`, live now) | Printed on the cover |
|---|---|---|
| Entity name | Chouksey Pustak & Paper Industries | **CHOUKSEY TRADERS** |
| Mobile | +91 94258 37763 | **94239 37703** |
| Landline | *(none)* | **0761-2404124** |
| Address | Krishna Kunj, Beside Petrol Pump, Madan Mahal | Krishna Kunj, **Prem Nagar, Madan Mahal Chowk**, Beside Petrol Pump |

**Action:** confirm which entity name and which numbers are current, then update
`src/data/site.ts`. If both phone numbers are live, add the landline to
`business.phones` — the header and footer will pick it up automatically. The
mobile number also drives the WhatsApp link, so a wrong one silently sends
enquiries nowhere.

---

## 2. Business facts

In `src/data/site.ts`, the `unconfirmed` object. Each renders as a blank line in
the "The business" plate on the About page.

- [ ] `foundedYear` — year established
- [ ] `capacity` — books per month or per year
- [ ] `moq` — minimum order quantity for a custom cover run
- [ ] `leadTime` — confirmed artwork to dispatch
- [ ] `gstin` — GST registration number
- [ ] `serviceArea` — districts or states you currently supply
- [ ] `mapEmbedUrl` — Google Maps embed URL. Until this is set, the About page
      shows a card that links out to Maps rather than an empty grey box.

---

## 3. Product specifications

In `src/data/products.ts`. Names, sub-brands and trim sizes are already filled —
those were read off the cover artwork, so they are safe. For each of the eight
lines, still needed:

- [ ] `spec.pages` — page count as printed on the cover
- [ ] `spec.paper` — GSM or grade. The classmind A4 panel appears to say
      **"'B' Grade"** and **192 pages**; confirm before publishing.
- [ ] `spec.ruling` — one of `single`, `double`, `four`, `square`, `interleaf`,
      `unruled`. Currently set only for the Creative Drawing book (`unruled`,
      which is definitional). **The Practical Book is very likely `interleaf`
      but I left it blank rather than assume.**
- [ ] `spec.binding` — centre pin, perfect bound, spiral
- [ ] `spec.size` — missing for Creative Drawing and Practical Book
- [ ] `packing.perBundle` / `packing.perCarton`

### Also worth confirming

- [ ] **Do you actually bind all six rulings?** The rulings board presents them
      as a vocabulary to specify from, not as a stock list — but if you never
      bind, say, four-ruled, remove it from `rulings` in `site.ts`.
- [ ] **A5 vs "Royal".** Your files are named `*Royal*` but the covers print
      "Premium A5 Notebook", so the site says A5. Confirm they are the same
      thing, and whether buyers ask for it by one name or the other.
- [ ] **MRP.** The cover panel appears to print **₹90**. The site deliberately
      quotes rather than lists prices, because wholesale rates are not MRP. Say
      if you want retail MRP shown anywhere.

---

## 4. Images

- [ ] **`MMSILVERA41.jpeg` carries a printed promotional overprint**
      ("सुपर ऑफर … 50% OFF"). It is real cover artwork, so it is included — but
      placed last in the SILVER gallery so it is not the thumbnail for the line.
      Remove it from `covers` if you do not want a discount claim on the site.
- [ ] **Three unused files.** These are wide marketing strips rather than single
      covers, and I could not tell what they contain, so nothing references them:
      `CMA45.jpeg` (1003×283), `CMDR6.jpeg` (1600×426),
      `MMSILVERA44.jpeg` (1600×900). Tell me what they are and I will place them.
- [ ] **Cover photography.** Existing covers are ~380 px wide, which is soft on a
      large screen. Re-shot or re-exported covers at ~1200 px would sharpen the
      catalogue noticeably. `SMA43.jpeg` (801 px) is the sharpest and is why it
      was chosen for the home page.
- [ ] **A trimmed logo.** `public/logo.png` is the trademark on a large white
      field. The header therefore rebuilds the wordmark in live type instead of
      using the image. A tight-cropped PNG or an SVG would let the real artwork
      be used everywhere.

---

## 5. Switch the enquiry form on

The form is deliberately disabled and says so on the page. It never claims to
have sent a message it did not send.

1. Go to [web3forms.com](https://web3forms.com), enter `choukseypaper@gmail.com`,
   and collect the access key from your inbox.
2. `cp .env.example .env.local`
3. Put the key in `VITE_WEB3FORMS_KEY`
4. Restart `npm run dev`

The form enables itself once the key is present. WhatsApp and email work now,
regardless.

---

## 6. Claims I removed and did not replace

The previous site published these. None of them had a source, so none of them
came across. If any are true, send evidence and they go back in:

- "100% recycled materials", "acid-free", "FSC Certified", "ColorLok"
- "0 Carbon Footprint", "100% renewable energy"
- "500K+ Products Sold", "50+ Wholesale Partners", "20+ Years of Excellence"
- Four named leadership profiles (Rajesh Kumar, Priya Sharma, Amit Patel,
  Neha Gupta) — no photographs and no way to verify they exist
- A 2005 / 2010 / 2015 / 2020 milestone timeline
- Five products priced in **US dollars** ($4.50–$12.00) with placeholder images
  from `picsum.photos`
- Factory photographs that were Unsplash stock images of other companies' plants
