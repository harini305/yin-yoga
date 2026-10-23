# 06 — Functionality & Technical Dependencies

**Platform:** Wix (Classic editor, non-responsive). Served by Cloudflare, with `x-wix-request-id` headers and assets on `static.wixstatic.com`, `static.parastorage.com` and `video.wixstatic.com`. HTML `lang="en"`. The `Content-Language: ru-RU` response header comes from the Wix edge and does not reflect site content. Wix config: locale `en`, regional `id-id`, currency IDR, timezone Asia/Jakarta.

Interaction tests were run with Playwright on 2026-10-23 (raw log: [data/interactions.json](data/interactions.json); screenshots: `screenshots/_interactions/`). **Nothing was submitted, booked, purchased, or signed up for.**

## 1. Feature inventory

Verification levels:

1. **Observed:** visible on the page.
2. **Interaction tested:** the visible interaction was exercised.
3. **Functionality verified:** the intended result was confirmed.
4. **Partially verified:** some behaviour confirmed, important details unknown.
5. **Unverified.**

| Feature | Where | Level | Findings | Phase 2 consideration |
|---|---|---|---|---|
| Desktop navigation | All pages | 3 Functionality verified | 6 links + "More" hover dropdown (Blog, Instagram). Active page shown in #D80960 with `aria-current="page"`. | Rebuild; remove "More" overflow by trimming items |
| Mobile navigation | All pages | 3 Functionality verified | Hamburger (`aria-label="Open navigation menu"`) opens a full-screen slate overlay with 10 items + Log In. Items differ from desktop (adds Testimony, Blog Indonesian). Two labels are truncated with "…". | Rebuild; remove the compromised link |
| "Contact" / "Testimony" anchors | Nav | 4 Partially verified | Both point to `/`; presumably Wix anchors to homepage sections. The scroll target was not confirmed. | Real section IDs or a contact page |
| Site search | Header | 3 Functionality verified | Typing "yin" showed no suggestion dropdown in the capture; Enter goes to `/search?q=yin` (Wix Site Search). JSON-LD declares a SearchAction. | Optional; low value for a site this size |
| Member Log In | Header | 2 Interaction tested | Opens the Wix Members "Sign Up" modal (Google, Facebook, email; "Already a member? Log In"). Member features beyond this are unknown. | Ask the client whether members are used; probably drop |
| Contact form | Home, Offline Indonesia | 4 Partially verified | Wix Forms: First Name, Last Name, Email (required), Message. An empty submit shows the native "Please fill out this field." on Email; an invalid email shows "Please enter a valid email address." **Not submitted**, so the delivery destination and notification email are unknown. | Needs a form backend (e.g. a Next.js route plus an email service or form provider). Confirm the recipient address with the client |
| WhatsApp chat widget | All pages | 4 Partially verified | Elfsight "WhatsApp Chat" v1.25.4 (`static.elfsight.com/platform/platform.js`). An auto-opening card with "Chat with Made"; clicking opened a popup with an empty URL in headless mode, so the target number was **not confirmed** (likely Made's WhatsApp). | Replace with a lightweight native WhatsApp link button (`wa.me/6281338080993`?). Confirm the number. The auto-open overlay hurts mobile UX |
| WhatsApp direct links | Home team, FAQ | 3 Functionality verified (redirect chain) | bit.ly → wa.link → `api.whatsapp.com/send?phone=…`: Made 6281338080993; Mey Lan 6281337927993 (one link pre-fills "Hello Pino"). | Use direct `wa.me` links with correct prefills |
| Google Reviews | `/review` | 3 Functionality verified (display) | Elfsight "Google Reviews" v3.56.2 inside a Wix HTML-embed iframe (`filesusr.com/html/854627_b3a9b4a8…html`). 3-column cards, "Read more" truncation, "Load More". 20 reviews loaded. | Elfsight embed (subscription; widget ID unknown), Google Places API, or curated excerpts the client has approved |
| Booking (Wix Bookings) | `/book-online`, service page, calendar | 3 Functionality verified (as **not working**) | "Book Now" → modal: "Sorry, this service is not yet available for online bookings. Please contact us for more information." Service page: "This service is not available…" and "No sessions in the next 7 days". | Not a live dependency. Use an enquiry/WhatsApp CTA unless the client wants real online booking (a separate project) |
| Pricing plans | `/plans-pricing` | 3 Functionality verified (empty) | "No plans available". | Drop |
| Cart / Stores | `/cart-page` | 1 Observed | Empty cart; no products found. | Drop |
| Payments | FAQ | 5 Unverified | Offline only: "Bank Transfer, Wise or PayPal", arranged via WhatsApp. No on-site checkout exists. | No payment integration required unless requested |
| YouTube embeds | Home (12), Live Zoom (2) | 2 Interaction tested (loaded) | Standard iframes (`enablejsapi=1`); each loads about 0.5MB of player JS. | Click-to-load "lite" embeds |
| Wix background/feature videos | Home (9), Online Recording (5), Live Zoom (2) | 1 Observed | MP4 from `video.wixstatic.com` (360p–720p), autoplaying muted. Several are 12–46MB. Two are Wix stock footage (`11062b_…`). | Keep only meaningful testimonial videos; host on YouTube or as compressed self-hosted files with posters; lazy-load |
| PDF downloads | Home (12 links), Online Recording (6) | 3 Functionality verified | 12 PDFs return 200; **2 return 404**. Several are image-only (pricing sheet, group poster). | Convert key content (pricing, T&C, modules) to HTML; keep PDFs as optional downloads |
| Maps | Home (Venue Location ×2), Live Zoom | 3 Functionality verified (redirect) | Google Maps short links → "YIN YOGA WORLD, Perumahan Puri Bunga, Jl. Dharmawangsa Gg. Cerida No.19, Benoa…". No embedded map iframe. | Keep the link; an optional static map image or lazy iframe |
| Social links | Footer contact block, menus | 1 Observed | X, Instagram, Facebook, TikTok, YouTube (`_blank`). | Keep (inline SVG icons; no Wix stock PNGs) |
| Blog | `/blog`, `/post/*` | 3 Functionality verified (display) | Wix Blog: category tabs, views, likes, star rating, comments (form visible, requires login), share buttons. All 40 posts load at once (no pagination). | Static MDX/JSON content or a headless CMS. Comments, likes and ratings unused (0 comments), so drop them |
| Hero "chevron" button | Home hero | 2 Interaction tested | A round button next to "TTC OFFLINE"; the accessible name is "Up". Its purpose (scroll or link) was not confirmed. | Drop |
| Sticky header | All pages | 3 Functionality verified | `position: sticky` in CSS, but it scrolls out of view (top −234px after scrolling 2500px). Effectively not sticky. | Decide in design |
| Animations | All pages | 1 Observed | Wix entrance animations (motion attribute observed: "done"); autoplaying videos; the "TTC OFFLINE" badge is a video loop. No scroll-driven animation was observed. | GSAP/ScrollTrigger in Phase 2, used with restraint |
| Translation tools | — | 1 Observed (absent) | No language switcher. English and Indonesian pages coexist, with no hreflang. | Decide whether to add a language structure |
| "Embedded Content" iframe | Home contact area | 1 Observed | Wix HTML embed (`filesusr.com/html/854627_80a16509…html`, 450×413) that renders **blank**. Purpose unknown. | Drop unless the client identifies it |

## 2. Third-party scripts and tracking (loaded on all pages)

| Service | Host | Purpose | Phase 2 action |
|---|---|---|---|
| Wix runtime (Thunderbolt) | static.parastorage.com, siteassets.parastorage.com | Platform | Removed by rebuild |
| Sentry | browser.sentry-cdn.com | Wix error monitoring | Removed |
| Elfsight platform + apps | static.elfsight.com, universe-static.elfsightcdn.com, files.elfsightcdn.com | WhatsApp Chat + Google Reviews widgets | Replace or re-embed (see above) |
| Google tag (GA4) | googletagmanager.com, `gtag/js?id=G-D39FB6N20M` | Analytics | **Keep the measurement ID** if the client wants continuity (confirm) |
| Google Ads remarketing | googleads.g.doubleclick.net, conversion ID **11320926867** | Ads / remarketing | Confirm with client; reinstall if active campaigns depend on it |
| Facebook / Meta | connect.facebook.net; meta `facebook-domain-verification=yui0f6lqzooozuomivlfpy2f08ygtb`, `fb:admins=yinyogaworld` | Pixel/SDK (pixel ID not captured) | Confirm whether a Meta Pixel is in use; keep the domain verification meta |
| Google Search Console | meta `google-site-verification=_uCf2i23FmzOM-30yua8iMLW1NLf_OeUh3TfyYTmdOI` | Site verification | **Keep this meta tag** (or re-verify via DNS) |
| YouTube | youtube.com | Embeds | Lite embeds |
| Wix app cloud | cf06bdf3-….wixappcloud.com | Wix app backend (likely Elfsight-for-Wix integration) | Removed |

## 3. Metadata and structured data to carry over

- JSON-LD: `WebSite` (+ `SearchAction`) and `LocalBusiness` (name, url, image, address, telephone `081338080993`). Recommend upgrading to an `EducationalOrganization`/`LocalBusiness` with the full address and `sameAs` social profiles in Phase 2, using confirmed facts only.
- OG and Twitter: site-wide default `og:image` is the teal share card; `twitter:card=summary_large_image`.
- Canonicals are present and self-referencing on all live pages.
- `robots` meta: `noindex` on the Wix system pages (search, cart, booking calendar, 404).
- The favicon set is generated from the ribbon JPG (32, 180, 192px).

## 4. Implementation dependencies and unknowns

1. **Form handling:** the Wix Forms recipient is unknown. A new backend and recipient address are required.
2. **Elfsight subscription:** whether the client wants to keep paying for it, and the widget IDs (not exposed in the captured DOM).
3. **Analytics and ads:** confirm the GA4 property, Google Ads conversion actions, and any Meta pixel ID before launch, so tracking is not lost.
4. **Domain and DNS:** `www.yinyogaworld.yoga` is on Wix via Cloudflare. Phase 2 deployment (Vercel) will need DNS changes and a redirect map for the legacy routes (see 02 §1). Outside Phase 1 scope.
5. **Media hosting:** about 266MB of Wix video and 129MB of image originals live on Wix CDNs. If the Wix plan is cancelled they may become unavailable, so **download needed originals before decommissioning Wix**.
6. **Blog content migration:** 40 posts are available as rendered text (`content/raw-text/post_*.txt`). Rich formatting (bold, links, inline images) is not preserved in those plain-text files; a proper export (Wix blog export or re-scrape of HTML) is needed if the blog is kept.
