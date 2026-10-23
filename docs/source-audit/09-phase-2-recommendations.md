# 09 — Phase 2 Recommendations & Mandatory Requirements

> **Status:** recommendations only. Phase 2 has **not** started. Nothing here has been implemented, and no project configuration has been changed. Implementation begins only after explicit client/user approval.

## 1. Target stack (as specified)

- **Next.js** (App Router), **JavaScript** (not TypeScript), **React**.
- **GSAP + ScrollTrigger** for motion, used only where it serves a clear purpose.
- Fully responsive, fluid layouts with real breakpoints (the original has none between 320 and 980px; see 07).
- The workspace `D:\yinyogaworld34` currently contains only `docs/source-audit/`. There is no existing app, `package.json` or `next.config.*` yet.

## 2. Mandatory design rules (must be followed in Phase 2)

### 2.1 Typography
- **Exactly two font families across the entire website:** one for headings, and one for body text, navigation, buttons, forms, cards, footer and all other UI.
- Both must be **readable, professional and not overly decorative**.
- **No third family**: not for decorative headings, the "Journey To The Self" script accent, the footer, flyers, or any special section or component.
- Consistent heading and body sizes across equivalent components on every route.
- A controlled, responsive type scale (for example a small set of fluid `clamp()` steps). Hierarchy comes from **weight, size, line-height and letter-spacing**, not extra families.
- The pair is to be chosen in Phase 2. Options already in the brand are documented in [05-brand-reference.md §1.3](05-brand-reference.md) (Poppins, Quicksand, Raleway).

### 2.2 Visual design
- A professional, human-designed appearance; avoid repetitive AI-looking layouts and generic template patterns.
- Intentional alignment between images and text; consistent content widths, margins and spacing tokens.
- **No** unnecessary decorative numbering, eyebrow text, random symbols, floating badges or ornamental elements.
- Visual effects only when they serve a clear design purpose.
- Preserve the recognisable identity: **magenta-pink logo colour (#DB0D55 / UI #D80960), teal (#439698 / #52B3B8), near-black and slate neutrals, the emblem logo, and real training photography**. Reduce the original's many near-duplicate colours to a small token set.

### 2.3 Content
- Keep pages concise and focused; avoid repeated paragraphs, unnecessary sections and excessive length (the original Home is 23,000px).
- Preserve meaningful facts and essential information (see [03-content-inventory.md](03-content-inventory.md) §8 for priority).
- **Do not invent** claims, testimonials, FAQs, prices, dates, credentials or blog posts.
- Convert all text that is currently baked into images (price cards, Why Us, intro card, headings) into **live text**, keeping the facts unchanged.
- Use client-confirmed values wherever the original conflicts (see [08](08-issues-gaps-questions.md) §2). Until confirmed, mark them clearly as pending rather than choosing one.

### 2.4 Footer
- Compact and content-driven; only necessary, verified information (contact, WhatsApp, email, address or map link, socials, Yoga Alliance link, copyright).
- No excessive padding, unnecessary columns, duplicated content or oversized layout (the original has an 812px near-empty footer band).
- The final content section must be fully visible above the footer, with a natural transition into it.
- Prevent overlap, clipping, excessive blank space and fixed-footer interference (also from any floating WhatsApp button).

### 2.5 Images and performance
- Prefer the **original assets** (mapped in [04-assets-manifest.csv](04-assets-manifest.csv)). No AI-generated or unrelated stock imagery where originals exist. Wix stock media (`11062b_…` IDs) is not an owned original and should not be reused.
- Plan **local resizing and compression**: originals run up to 6654×8318 and 16.8MB (flyers), with 6–10MB PNG portraits. Target sensible maximum dimensions (for example ≤2400px wide for full-bleed images, ≤1200px for content images, ≤600px for portraits), using modern formats (WebP/AVIF) with JPEG fallback where needed.
- Avoid duplicate copies and unnecessary large downloads.
- Lazy-load below-the-fold images, use appropriate `sizes`/`srcset`, and set explicit width and height to prevent layout shift.
- **Videos:** do not autoplay heavy MP4s. Use poster images, click-to-play, and lite YouTube embeds. Of the about 266MB of Wix video, keep only meaningful testimonial or feature clips.
- **Next.js image configuration:** avoid using the default Vercel Image Optimization quota by setting
  ```js
  // next.config.(m)js — MERGE into the existing config; do not replace unrelated settings
  images: { unoptimized: true }
  ```
  Because optimisation is disabled, Phase 2 must ship **pre-sized, pre-compressed responsive image files** itself (for example multiple widths generated at build or prep time).
- **Do not change project configuration during Phase 1** (none was changed).

### 2.6 Blog
- Low priority. 40 real posts exist (all by Made Agus, Jan 2024 – Oct 2025). If included, keep it simple: initial visual presentation of **no more than 10 images** unless otherwise requested; no comments, likes or ratings (all unused on the original). Never fabricate posts.

## 3. Recommended implementation considerations

### 3.1 Information architecture
See the proposal in [02-page-inventory.md §4](02-page-inventory.md). Core: Home · Bali 200 Hrs TTC · Online Recording · Indonesia Programs (Live Zoom + Offline Jakarta) · About/Teachers · Reviews · (Blog) · Contact section. Set up redirects from legacy routes (`/book-online`, `/service-page/yoga-ttc-200-hrs`, `/plans-pricing`, `/blog/categories/*`, Wix system routes). Keep `/post/<slug>` URLs if the blog is retained.

### 3.2 Content as data
- Put programs, cohorts, prices, events, team, FAQ and testimonials in structured files (JSON/JS modules) so schedules can be updated without touching layout, and so past events drop off automatically by date.
- Bilingual content: keep the Indonesian pages' copy as published; decide on language structure with the client (`lang` attributes per page or section, hreflang if translated).

### 3.3 Conversion path
- The primary CTA is **WhatsApp enquiry** (the business already operates this way). Use direct `wa.me/<number>?text=<prefill>` links with correct names; drop the bit.ly → wa.link chains and the "Hello Pino" prefill once confirmed.
- Secondary: a contact form with a real backend (recipient to be confirmed), validation and a success state.
- A lightweight floating WhatsApp button that **never auto-opens** over content.

### 3.4 Integrations to decide
Elfsight Google Reviews (or a Google Places API / static curated excerpts with permission), GA4 `G-D39FB6N20M`, Google Ads `11320926867`, any Meta pixel, and the Search Console verification meta. Consider a consent banner if tracking is kept.

### 3.5 SEO
- One H1 per page; meaningful titles and meta descriptions on every page (most are missing or generic on the original); keep canonical URLs; keep and improve JSON-LD (LocalBusiness/EducationalOrganization with confirmed address, phone, `sameAs`); a per-page og:image where useful; sitemap and robots.

### 3.6 Accessibility
Real text instead of image text, sufficient colour contrast (the original light-grey and light-blue text fails), visible focus states, labelled form fields, alt text (the original repeats "yin yoga teacher training bali" on most images), `prefers-reduced-motion` support for GSAP, and keyboard-operable navigation.

### 3.7 Motion (GSAP / ScrollTrigger)
Subtle reveals and section transitions only. No scroll-jacking, and no animation that hides essential content before it loads. Respect reduced-motion settings.

### 3.8 Asset preparation workflow (Phase 2)
1. Download only the originals that Phase 2 will use (from `original_url` in the manifest) into a project asset source folder outside `public/`.
2. Resize and compress them into `public/` derivatives at the planned widths.
3. Keep the `brand-reference/` copies in this audit folder untouched.
4. Download needed media **before** any Wix plan cancellation (06 §4.5).

## 4. Pre-implementation checklist

- [ ] Client answers to [08 §9](08-issues-gaps-questions.md) (prices, T&C, languages, blog, booking, form recipient, tracking, logo master).
- [ ] Remove the compromised "Blog Indonesian" link from the live Wix site (client action, recommended now).
- [ ] Choose the two font families (heading + body) and document them.
- [ ] Confirm the IA and redirect map.
- [ ] Confirm which testimonial videos and reviews may be used.
- [ ] Obtain a vector logo if available.
- [ ] Approval to begin Phase 2.
