# Phase 2: Frontend redesign (local review build)

Frontend only. Nothing is deployed, pushed or connected to a backend.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm run images     # regenerate public/images from assets-source/originals
```

## Routes

| Route | Content | Replaces (308 redirect in next.config.mjs) |
|---|---|---|
| `/` | Bali 200 Hrs TTC introduction, modules, why train here, other formats, teachers, video testimonials | `/review` → `/#graduates` |
| `/bali-200-hour-teacher-training` | Dates, module curriculum (tabs), inclusions, certification, venue, registration steps, FAQ | `/book-online`, `/service-page/*`, `/booking-calendar/*`, `/plans-pricing` |
| `/online-recording` | Format, what you get or need, published rates, group offer, modules | `/ttc-online-recording` |
| `/indonesia` | Jakarta modules, special class and Live Zoom Module-7 (past dates drop off automatically) | `/ttc-online-live-zoom`, `/ttc-offline-bahasa-indonesia` |
| `/about` | History, Yuni, Made Agus, Mey Lan | |
| `/contact` | WhatsApp, email, Jakarta phones, address and Maps, enquiry composer | |
| `/blog`, `/post/[slug]` | 7 of the 40 original posts (7 cover images), verbatim text | other 33 posts and `/blog/categories/*` → `/blog` |
| 404 | Custom page | Wix system routes → `/` |

No privacy page was created: the audit found no source content for one. Add one if the client adds analytics or a form backend.

## Design decisions

- **Fonts (exactly two, self-hosted in `app/fonts`):** Montserrat (600–800) for headings and the wordmark, matching the bold geometric lettering in the logo ribbon; Poppins for body text and all UI.
- **Colour tokens (`app/globals.css`):** pink `#D80960`, teal `#439698` (darkened to `#2C6F71` for small text contrast), deep teal `#0A4553`, slate-navy `#2A3951`, warm paper and sand neutrals.
- **Motion:** GSAP + ScrollTrigger in `components/Motion.js`: fade-up and soft image unmask on scroll, run once. Disabled under `prefers-reduced-motion`. Content falls back to visible if scripts fail. On the Bali page (desktop, 1024px and up), ScrollTrigger `pin` holds the text column of the Dates, curriculum and FAQ sections in place while their content scrolls, using `data-pin` / `data-pin-scope` attributes. Scroll speed is unchanged and there is no pinning on tablet or mobile.
- **Images:** `next.config.mjs` sets `images: { unoptimized: true }`. `scripts/build-images.mjs` produces pre-sized WebP files (3.6 MB in total). Videos are YouTube click-to-load with local poster frames, so no player loads until a visitor presses play.
- **Content as data:** `lib/programs.js` (modules, cohorts, events, rates), `lib/faq.js`, `lib/site.js` (contacts, socials), `lib/videos.js`, `lib/posts.json`. Pages using dates revalidate daily.

## Assets

Originals are in `assets-source/originals/`, named by their Wix media ID. 32 site images and 6 YouTube poster frames were downloaded on 2026-10-23.

| Asset | Status |
|---|---|
| `854627_aa2d0101…jpg` (Book Online card) | **Missing**: returns 403. Not needed because the booking page was dropped. |
| `854627_6f6ffaa0….pdf`, `854627_77a1acac….pdf` | **Missing**: return 404. Not linked. |
| Wix videos (hero testimonials, feature videos) | Not downloaded (12–46 MB each). The YouTube versions are used instead. |
| Working PDFs (bios, T&C, module glimpses) | Not linked: their content is now HTML, and the files live on Wix's CDN. |

## Content withheld until the client confirms it (audit 08 §2)

- Bali 200 Hrs fees (Rp 16M vs EB 18M / normal 25M) and per-module Bali prices. The site directs visitors to Made Agus instead.
- Maximum group size (6 vs 15), cancellation windows (30, 45 or 60 days), early-bird deadline (30 vs 45 days), deposit rule.
- Bali class hours and the "5 days a week, weekends off" schedule (conflicts with the cohort dates).
- "More than 6 years of experience" and "Enroll risk free" from the Why Us image.

Shown as published, but the client should confirm:

- Online Recording rates (IDR 6.000.000 / 6.750.000) and the "25% off for groups of 3 or more" offer.
- All 2026–2027 dates and prices for Jakarta and Live Zoom, and the 2027 Bali cohorts.
- Credentials: RYS 200 / RYS 300, E-RYT 500, and the "RYT 300 program" label for Module-7.

## Functionality that needs client input

- **Contact form:** no verified recipient or backend. `/contact` composes the message and opens WhatsApp or the visitor's email app, and says plainly that nothing is sent by the website.
- **Online booking and payment:** not built, because the original booking is switched off.
- **Social links:** Instagram, YouTube and X are shown. Facebook and TikTok blocked automated checks, so they were left out pending confirmation.
- **Yoga Alliance profile link:** the published URL (`SchoolPublicProfile?sid=9944…`) now redirects to a generic directory page, so it is not linked. A current profile URL is needed.
- **Analytics** (GA4 `G-D39FB6N20M`, Google Ads, Meta pixel): not installed and need a decision. The Search Console and Facebook domain verification meta tags are kept.
- **Logo:** the original PNG is used, cropped to a circle. A vector master would improve the small header mark.
- **Indonesian content:** the Indonesia page is in English with Indonesian-language programs noted. A bilingual structure needs a decision.
