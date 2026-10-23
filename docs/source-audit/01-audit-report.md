# 01 — Audit Report: yinyogaworld.yoga (Phase 1)

| | |
|---|---|
| **Site** | https://www.yinyogaworld.yoga |
| **Business** | Yin Yoga World / RYS Yin Yoga World: Yin Yoga teacher training (Bali, Jakarta, online), Yoga Alliance RYS |
| **Platform** | Wix Classic (non-responsive), behind Cloudflare |
| **Audit date** | 2026-10-23 |
| **Workspace at start** | `D:\yinyogaworld34`, empty (no source, assets or prior evidence) |
| **Scope** | Research only. No code, redesign, configuration, push or deploy. |

## 1. Method

1. Read `robots.txt` and the sitemap index (4 child sitemaps), giving **8 pages + 40 posts + 5 blog category URLs + 1 booking service = 54 URLs**.
2. Probed 22 common or legacy paths for hidden routes, finding 4 extra Wix system routes (`/cart-page`, `/account/my-account`, `/booking-calendar/yoga-ttc-200-hrs`, `/search`), 1 redirect (`/blank`) and 404s for the rest.
3. Rendered **58 routes** in headless Chromium (Playwright 1.58, Chromium installed locally) with full scroll to trigger lazy loading, for **81 page×viewport captures**:
   - all routes at 1440×900;
   - 9 main routes also at 768×1024 and 390×844;
   - blog categories and the booking calendar also at 390.
4. For each capture, extracted the rendered text, headings, links, images (natural and rendered size, alt), CSS background images, videos, iframes, form fields, buttons, computed fonts and colours, `@font-face` rules, script hosts, sections with offsets, metadata, and the network log. Data: `data/pages/*.json`.
5. Took a fold screenshot plus one screenshot per section (279 images, `screenshots/`).
6. Ran scripted interaction tests (nav dropdown, mobile menu, search, login modal, form validation without submitting, chat widget, Book Now, plans, blog loading, sticky header). Data: `data/interactions.json`.
7. Extracted text from inside the embedded iframes (Elfsight Google Reviews).
8. Probed every Wix media original for byte size and pixel dimensions using range requests, without bulk downloading. Downloaded the 12 working PDFs to a temporary scratch folder to extract their text (the PDF files themselves are not stored in the project). Saved 4 small brand originals as reference copies (2.8MB).
9. Resolved external short links (bit.ly, wa.link, Google Maps short links, the old domain).
10. Read text that exists only in images (poster, Why Us, RATES card, pricing PDF) by viewing the originals, and transcribed it.

## 2. Coverage record

### 2.1 Fully inspected (rendered, text and assets extracted, screenshots, metadata)
- **Main:** `/`, `/ttc-online-recording`, `/ttc-online-live-zoom`, `/ttc-offline-bahasa-indonesia`, `/review`, `/blog`: desktop, tablet and mobile.
- **Secondary:** `/book-online`, `/service-page/yoga-ttc-200-hrs`, `/plans-pricing`: desktop, tablet and mobile.
- **Blog categories ×4** (desktop + mobile); **40 blog posts** (desktop).
- **Wix system:** `/booking-calendar/yoga-ttc-200-hrs` (desktop + mobile), `/search`, `/cart-page`, `/account/my-account`, 404 page (desktop).
- 12 linked PDFs (text extracted; image-only PDFs transcribed).

### 2.2 Partially inspected
- `/blog` sitemap category URL list included `/blog` itself as a 5th "category" (it is the main blog). Category pages were captured at desktop and mobile only.
- Blog posts were captured at desktop only (template identical across posts); bodies saved as plain text without rich formatting.
- `/review`: widget content extracted (20 reviews after "Load More"); the widget's configuration and aggregate rating were not visible.
- The homepage "Embedded Content" iframe loads but renders blank; its purpose is unknown.

### 2.3 Discovered but inaccessible or not applicable
- Wix dashboard, site settings, form submission inbox, Elfsight configuration, member-only areas (no credentials, and out of scope).

### 2.4 Broken or unavailable routes
- `/_files/ugd/854627_6f6ffaa0d0d34b30b8ce7bc1b9e919af.pdf`: **404** (linked from Home).
- `/_files/ugd/854627_77a1acaca97b4155aeea0a36a0e316be.pdf`: **404** (linked from Home).
- `http://yinyogaworld.com/` ("Blog Indonesian"): redirects to an **unrelated gambling site**.
- Book Online service: page loads, but booking is disabled ("not yet available for online bookings").
- Service card image `854627_aa2d0101…jpg`: original returns **403**, so the card renders a grey placeholder.

### 2.5 Interactive states not verified
- Navigation hover colours (the computed-style read returned defaults).
- "Contact" and "Testimony" anchor scroll targets.
- The Elfsight chat widget's WhatsApp destination.
- Contact form submission and delivery (deliberately not submitted).
- Wix entrance animation timings; real-device tablet behaviour (emulation only, desktop UA).
- Logged-in member features, blog comments and ratings (require login).

### 2.6 Technical limitations
- Wix full-page screenshots duplicate content on very tall sections, so they were replaced by section-by-section captures. Some section shots include the sticky header or chat overlay, or lazy-load gaps.
- Media byte totals use `content-length` headers; video may be range-requested by real browsers, so the real transferred bytes can be lower.
- The live Google reviews and YouTube data are a snapshot.

## 3. Key findings (summary)

1. **Small site, heavy pages.** 6 meaningful content pages + blog. Home alone is 23,228px tall with 9 autoplaying Wix videos (12–46MB each at 360–720p), 12 YouTube iframes and 6–10MB PNG portraits. About 178MB of media was reported in one full scroll.
2. **Core business = Bali 200 Hrs Yin Yoga TTC** (4×50 Hrs modules, EB IDR 18M / normal 25M, max 6 students per batch per the poster), plus Online Recording (IDR 6.0M / 6.75M per module), Live Zoom Module-7 100 Hrs (Rp 13M, Dec 2026) and Jakarta modules and classes (Rp 7.0–7.25M; special class Rp 300K).
3. **Critical facts live in images and PDFs** (price poster, pricing PDF, RATES card, Why Us list, intro card), so they are not searchable, not accessible, and illegible on mobile.
4. **Conflicting facts:** price (16M vs 18M/25M), participant cap (6 vs 15), cancellation window (30/45/60 days), EB deadline (30 vs 45 days), schedule vs "weekends off". The client must decide (08 §2).
5. **Broken or risky:** a compromised "Blog Indonesian" link to a gambling site, 2 dead PDFs, disabled booking with a broken image, an empty Plans page.
6. **Brand:** pink/magenta emblem (#DB0D55; UI #D80960) + teal wordmark (#439698) + slate/navy neutrals; warm, real training photography. Typography is chaotic (≥12 families; main faces Quicksand, Poppins, Raleway, Avenir).
7. **Responsiveness:** fixed 980px desktop canvas plus a separate 320px mobile canvas; no tablet layout (overflow at 768px). The auto-opening WhatsApp widget covers about 45% of the mobile viewport.
8. **Conversion path:** WhatsApp (Made, Mey Lan; Jakarta contacts) plus a Wix contact form; payment offline (bank transfer, Wise, PayPal). No working online booking or checkout.
9. **Bilingual:** English (Home, Online Recording, most blog posts) and Indonesian (Live Zoom, Offline pages, some posts), with no language switcher or hreflang.
10. **SEO basics are weak:** the Home H1 is "Lovely Team"; most pages lack an H1 and a meta description; the `/review` title is generic. JSON-LD LocalBusiness is present.
11. **Blog:** 40 short reflective posts by Made Agus (2024–2025), single or double-digit views, 0 comments. Low priority.

## 4. Deliverables

See [README.md](README.md) for the index of documents, data files, screenshots and reference copies.

## 5. Confirmation of Phase 1 boundaries

- **No** website code, components, layouts or redesign were created.
- **No** packages were installed in the project. Playwright was installed only in the session's temporary scratch directory, outside the project.
- **No** project configuration was created or changed (there is none yet).
- **No** original files were modified, deleted or overwritten (the workspace was empty). Only `docs/source-audit/` was created.
- **No** GitHub push and **no** Vercel deployment.
- Bulk media was **not** downloaded (about 129MB of images and 266MB of video remain on Wix CDNs and are mapped in the manifest). Only 4 brand reference images (2.8MB) were saved.
