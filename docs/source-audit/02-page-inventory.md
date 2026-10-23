# 02 — Page & Route Inventory

Captured 2026-10-23. Every route below was rendered in headless Chromium (Playwright). Text and metadata for each route are in `data/pages/<slug>__<viewport>.json`; screenshots are in `screenshots/<slug>/`. Section `y` values are desktop (1440px) pixel offsets from the top of the page.

## 1. Route table

| # | Route | HTTP | Type | Source of discovery | Status / recommendation for Phase 2 |
|---|---|---|---|---|---|
| 1 | `/` (Home, "TTC 200Hrs Bali") | 200 | Main nav, landing + product page | nav, sitemap | **Implement** (redesign; split long content, see §3.1) |
| 2 | `/ttc-online-recording` | 200 | Main nav, program page | nav, sitemap | **Implement** |
| 3 | `/ttc-online-live-zoom` | 200 | Main nav, program page (Indonesian) | nav, sitemap | **Implement** (consider merging with Offline Indonesia into a "Programs in Indonesia" listing; client decision) |
| 4 | `/ttc-offline-bahasa-indonesia` | 200 | Main nav, events listing (Indonesian) | nav, sitemap | **Implement** |
| 5 | `/review` | 200 | Main nav, third-party reviews widget | nav, sitemap | **Implement or consolidate** into a testimonials section |
| 6 | `/blog` | 200 | Listing (40 posts) | "More" menu, mobile menu, sitemap | **Implement simply** (low priority, ≤10 images initially) |
| 7 | `/blog/categories/200hrs-teacher-training` | 200 | Category listing (20) | blog tabs, sitemap | Legacy route: filter or redirect |
| 8 | `/blog/categories/module-1-listen-to-your-body` | 200 | Category listing (6) | blog tabs, sitemap | Legacy route: filter or redirect |
| 9 | `/blog/categories/module-2-unwind-letting-go` | 200 | Category listing (1) | blog tabs, sitemap | Legacy route: filter or redirect |
| 10 | `/blog/categories/yin-yoga-special-class` | 200 | Category listing (1) | blog "More ▾" tab, sitemap | Legacy route: filter or redirect |
| 11–50 | `/post/<slug>` ×40 | 200 | Blog detail | sitemap, blog list | Keep slugs if blog is kept (SEO); full list in `data/blog-posts-index.csv` |
| 51 | `/book-online` | 200 | Wix Bookings service list | sitemap (not in nav) | **Do not rebuild as is.** The service is not bookable ("Sorry, this service is not yet available for online bookings"); replace with an enquiry/WhatsApp CTA; redirect |
| 52 | `/service-page/yoga-ttc-200-hrs` | 200 | Wix Bookings service detail | sitemap | Same as above; its price is outdated (Rp 16M) |
| 53 | `/booking-calendar/yoga-ttc-200-hrs` | 200 (`noindex`) | Wix booking calendar ("Schedule your service") | probed | Wix system route; drop |
| 54 | `/plans-pricing` | 200 | Wix Pricing Plans, **empty** ("No plans available") | sitemap | **Drop**; redirect to the programs/pricing content |
| 55 | `/search?q=` | 200 (`noindex`) | Wix site search results | header search, JSON-LD SearchAction | Optional; low priority |
| 56 | `/cart-page` | 200 (`noindex`) | Wix Stores cart (empty, "My cart") | probed | Wix system route; drop |
| 57 | `/account/my-account` | 200 | Wix Members area → shows Sign Up / Log In | header "Log In" | Drop unless client actively uses member accounts (unverified) |
| 58 | `/blank` | 301 → `/` | Leftover page | probed | Ignore |
| — | `/about`, `/contact`, `/faq`, `/gallery`, `/shop`, `/events`, `/team`, `/testimonials`, `/schedule`, `/pricing-plans/list`, … | 404 | — | probed | Not present |
| — | `/_files/ugd/854627_6f6ffaa0….pdf`, `/_files/ugd/854627_77a1acaa….pdf` | **404** | Broken document links on Home | home links | Fix or remove |
| — | `http://yinyogaworld.com/` ("Blog Indonesian", mobile menu) | 301 → gambling site | **Compromised external link** | mobile menu | **Remove immediately** (see 08 §1) |

**Anchors:** "Contact" (desktop and mobile) and "Testimony" (mobile) point to `/` and appear to be Wix anchor links to homepage sections. The exact scroll targets were not verified.
**Robots:** `robots.txt` allows everything except `*?lightbox=`, blocks PetalBot, and rate-limits dotbot and AhrefsBot. Sitemap index: `pages`, `blog-posts`, `blog-categories`, `booking-services`.

## 2. Shared components (all pages)

| Component | Description |
|---|---|
| **Header** (234px tall on desktop) | Centred logo emblem (102×102) + "Yin Yoga World" wordmark (Poppins 50px, teal #439698) + search field ("Search…") + slate "Log In" button (#4E6368 bg, light-blue text #A3D9F6). The nav row is below: 6 items + "More" dropdown (Raleway 14px #324158; active item #D80960). Header is `position: sticky` in CSS but scrolls away with the page (observed `top:-234px` after scrolling). |
| **Mobile header** | Hamburger (left) · logo · wordmark. The menu opens as a full-screen slate overlay (see 07). |
| **Footer** | Very small: "© by Yin Yoga World." (Raleway 14px, green #387A45). On Home the contact block above it acts as the real footer. Empty "Embedded Content" iframe (450×413) in the home contact area. |
| **WhatsApp chat widget** (Elfsight) | On every page. A floating green WhatsApp button bottom-left plus an auto-opening "Made · Online · Hello I'm Made. How can i help you? · Chat with Made" card that covers part of the content (about 45% of the viewport on mobile). |
| **Contact form** (Wix Forms) | Home and Offline Indonesia: First Name, Last Name, Email\* (required), Message, Send. |
| **Blog chrome** | Category tab bar (All Posts · 200Hrs Teacher Training · Module 1… · Module 2… · More ▾), post cards (image, date, title, excerpt, views, comments, ⋮ menu). |

## 3. Page-by-page inventory

### 3.1 Home `/`, "Home | Yin Yoga World"
- **Purpose:** main landing page and the de-facto product page for the **Bali 200 Hrs TTC**; also carries About, Team, FAQ, T&C, testimonials and contact. Desktop height **23,228px** (mobile 17,611px).
- **Sections in order** (desktop y / height):
  1. Header (0 / 234)
  2. Hero (234 / 3017): "TTC OFFLINE" animated pill (video) + chevron · 2027 schedule poster (image with prices) · "View detail" (PDF) · 3 stacked testimonial videos · "More on youtube"
  3. RYS intro card (3251 / 1316): image with baked-in text + accreditation badges
  4. Telling Stories (4567 / 990): image title, "Journey To The Self" (Sacramento script), video
  5. About RYS Yin Yoga World + Yuni + Made Agus bios (5557 / 2085): round portraits, "more detail"/"read more" PDFs
  6. What you will learn (7642 / 2062): heading image, teaser text, 4 module covers → PDFs, "VENUE LOCATION" button
  7. Term & Condition (9704 / 1443): video, heading image, policy text, "read more", RISK FREE badge, graduation photo
  8. Why Us (11147 / 2500): **one tall image** with group photo + 7 benefits
  9. Testimonials "What impressed them" (13647 / 4582): 12 YouTube iframes in a single column + "Watch more"
  10. FAQ (18229 / 1702): 10 Q&As as static text
  11. Lovely Team (19931 / 1325): Made Agus + Mey Lan cards on a slate background, WhatsApp links
  12. Contact (21256 / 1160): green-grey panel (address, phone, email, socials, venue) + form
  13. Footer (22416 / 812)
- **Retain:** schedule and prices (confirmed), accreditation, About, bios, modules, T&C (single version), Why Us facts, testimonials, FAQ, team contacts, contact form, map.
- **Assets:** 32 `<img>`, 9 Wix videos, 13 iframes. Heaviest: hero testimonial videos (37–45MB each at 360p), portrait PNGs of 6–10MB. See 04 manifest.
- **Interactive:** nav, search, Log In modal, PDF links (two 404), YouTube embeds, Wix video autoplay, Maps link, WhatsApp links, contact form (only the required-email validation was tested), chat widget.
- **SEO:** title "Home | Yin Yoga World" (weak); meta description present; og:title "200Hrs Yoga Teacher Training by RYS Yin Yoga World"; **only H1 is "Lovely Team"**; JSON-LD WebSite + LocalBusiness.
- **Risks:** key facts in images, conflicting T&C, broken PDFs, extremely long page, very heavy media.
- **Redesign notes:** split into Home (overview) + a Bali 200 Hrs program page, or keep one page with a shorter, clearer structure. Move FAQ, T&C and Team to focused sections. Convert image-text to real text.

### 3.2 TTC Online Recording `/ttc-online-recording`
- **Purpose:** sell the self-paced recorded 200 Hrs program. Height 12,169px.
- **Sections:** header · hero (image title "YIN YOGA TTC ONLINE RECORDING", intro copy, "English & Indonesia" sticker, panda "25% off group" sticker → PDF, stock background video + feature video) · full-width banner photo · "Dear Yogiis" intro + Q&A ("What is…", "Requirements" [title typo "rercording"], "Why…", "Is this TTC scheduled…", "What do you get…") with a tall image · "Brief explanation of TTC material" (45.6MB video) + "More info" PDF · "Module book" (4 module covers + teasers + "read more" PDFs) · Teachers (Yuni, Made) · RATES image · Contact (email) + ribbon watermark · footer.
- **SEO:** no meta description; no H1 (H6 used for "What is TTC Online Recording").
- **Redesign notes:** the price table becomes real text; module content is shared with Home (one source of truth).

### 3.3 Program Online Live Zoom `/ttc-online-live-zoom` (Indonesian)
- **Purpose:** live Zoom TTC; currently lists **Module-7 "Into The Stillness" 100 Hrs, Dec 9–20, 2026, Rp 13.000.000**. Height 5,116px.
- **Sections:** header · "TTC ONLINE" pill video + Q&A (3 questions) · decorative video · Module-7 listing text + flyer · 2 YouTube testimonials · footer.
- **SEO:** meta description *"Yin yoga TTC live zoom online. Journey Reflections. Delving into life's mystical journeys…"* does not match the page; no H1.

### 3.4 Program Offline Indonesia `/ttc-offline-bahasa-indonesia` (Indonesian)
- **Purpose:** Jakarta events. Height 9,760px.
- **Sections:** header · "Program Training / Offline Indonesia" + intro + group photo · Special Class "AcuYin" (23 Nov 2026) + flyer · YTT Module-2 Jakarta (Nov 18–22, 2026) + flyer · YTT Module-3 Jakarta (Jan 20–24, 2027) + flyer · YTT Module-1 Jakarta (May 26–30, 2027) + flyer · Contact us panel + form · footer.
- **SEO:** no meta description, no H1 (module titles use H3/H4 inconsistently).
- **Redesign notes:** an event-card layout (date, venue, price, contact) instead of four long sections that each repeat a flyer.

### 3.5 Google Review `/review`
- Header · Elfsight Google Reviews widget (Wix HTML iframe, 923×1006, 3-column cards, "Load More") · footer. Page title is the generic "yin yoga world | yoga"; no H1.

### 3.6 Blog `/blog`, category pages, and 40 posts
- **Blog list:** category tabs + 40 cards in one long column (16,041px), with no pagination or load-more. **Category pages:** same layout, filtered. **Post template:** tabs · H1 title · author avatar "Made Agus" · date · read time · star rating (0) · cover image (740px wide) · body · views/comments/like · share (Facebook, X, LinkedIn, link) · "Recent Posts" (3 cards) · comments with a rating form.
- **SEO:** posts have an H1 and custom og:image; only 1 of 40 has a meta description.

### 3.7 Book Online `/book-online` and service page
- "Our Services": a single card "Yoga TTC 200 hrs, 16.000.000 Rupiah Indonesia, Book Now". **The card image is broken** (grey placeholder; the original returns 403). Clicking **Book Now** shows "Sorry, this service is not yet available for online bookings. Please contact us for more information. Got It".
- The service page shows "This service is not available…", the description, "Upcoming Sessions: No sessions in the next 7 days", time zone WIB, and contact details/address.

### 3.8 Plans & Pricing `/plans-pricing`
- "No plans available. Once there are plans available for purchase, you'll see them here. Back to Home Page." Empty Wix app page.

### 3.9 Wix system pages
- `/search`: results page (search for "yin" tested), `noindex`. `/cart-page`: empty cart, `noindex`. `/account/my-account`: Sign Up / Log In screen. `/booking-calendar/yoga-ttc-200-hrs`: calendar, `noindex`. 404: Wix default "404 Error: Page Not Found".

## 4. Proposed Phase 2 information architecture (for discussion, not decided)

This is a starting point that keeps every essential fact without adding unnecessary pages. The client must confirm it.

- **Home**: overview, next Bali cohort, the three program types, accreditation, testimonials teaser, contact CTA.
- **Bali 200 Hrs TTC**: schedule and prices, modules, inclusions, venue, T&C, FAQ.
- **Online Recording**: format, requirements, rates, group discount.
- **Indonesia programs** (Live Zoom + Offline Jakarta), possibly as one page with Indonesian copy kept as published.
- **About / Teachers**: history, Yuni, Made, Mey Lan.
- **Reviews / Testimonials**: video wall + Google reviews.
- **Blog** (simple; optional).
- **Contact**: could be a section plus the footer rather than a page.
- **Legacy redirects:** `/book-online`, `/service-page/*`, `/plans-pricing`, `/blog/categories/*` (if filters are used), and Wix system routes.
