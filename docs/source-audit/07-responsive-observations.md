# 07 — Responsive Observations

## Test setup (actual)

| Label | Viewport | Device emulation | Pages tested |
|---|---|---|---|
| Desktop | **1440 × 900** | Chromium, desktop UA | All 58 routes |
| Tablet | **768 × 1024** | Chromium, touch, **desktop UA** | 9 main routes (home, 3 program pages, review, blog, book-online, service page, plans) |
| Mobile | **390 × 844** | Chromium, touch, `isMobile`, iPhone iOS 17 UA | 9 main routes + 4 blog categories + booking calendar |

Metrics per page and viewport (document height, horizontal overflow, counts, media transfer) are in [data/responsive-metrics.csv](data/responsive-metrics.csv). Screenshots are in `screenshots/<page>/<viewport>-<width>__NN.jpg` (fold + one image per section).

**Limitations**

- Emulation only; no real iPad or phone was used.
- The tablet test used a desktop user agent, which shows what a desktop-class browser at 768px gets. Real iPads may be served Wix's mobile site or a scaled desktop view depending on UA and settings, so that is **unverified**.
- Section screenshots of very tall Wix sections sometimes show lazy-load gaps or the sticky header and chat widget overlapping; full-page captures duplicated content and were discarded.
- Hover and transition timing was not measured.

## 1. How the Wix site adapts (key architectural fact)

The site is a **Wix Classic (non-responsive) site with two fixed layouts**:

- **Desktop layout:** fixed **980px** content canvas, centred, at any width ≥ 980px. At 1440px the content sits in a 980px column with wide white margins (about 230px on each side), and full-bleed section backgrounds stretch edge to edge.
- **Mobile layout:** a separately edited **320px** canvas (`document width = 320`). Wix scales it to the device width, so at 390px everything is magnified about 1.22×.
- **No intermediate breakpoints.** Between about 400 and 980px a desktop-UA browser gets the 980px desktop canvas, which causes **horizontal overflow at 768px** (document width 980 vs viewport 768 on every tablet test). The "Log In" button and the right-hand nav items ("Google Review", "Contact", "More") fall outside the viewport.

## 2. Header and navigation

| | Desktop 1440 | Tablet 768 (desktop UA) | Mobile 390 |
|---|---|---|---|
| Layout | Logo + wordmark + search + Log In on row 1; 6 nav items + More on row 2; 234px tall | Same as desktop, cut off at the right; needs horizontal scrolling | Hamburger (left), logo (centre top), wordmark below it; about 120px tall |
| Menu | Hover "More" dropdown (Blog, Instagram) | Same; hover-dependent "More" on a touch device | Full-screen slate (#4E6368) overlay; close ✕ top-left; Log In at top; centred items; active item has a darker pill. Two items truncated ("Program Online Live Zoo…", "Program Offline Indonesi…") |
| Sticky | CSS sticky, but effectively scrolls away | Same | Not sticky (scrolls away) |
| Search | Visible field | Visible | **Not present** on mobile |

## 3. Content width, grid and spacing

- **Desktop:** almost every section is a single centred column, about 480–800px wide inside the 980px canvas. Very few multi-column layouts: module covers in a 2×2 grid, team cards 2-up, the contact panel split into 2 columns, Google reviews in 3 columns. Large, uneven vertical gaps (for example the empty band before "Watch more" in the testimonials section). The 12 YouTube testimonials are stacked in one narrow column (480×270), giving a 4,582px-tall section.
- **Mobile:** everything stacks in one column; module covers become single-column; team cards stack. Section order is **identical to desktop** on every page tested (body text is the same; only nav chrome differs).
- Page heights: Home 23,228px (desktop) / 17,611px (mobile ×1.22 ≈ 21,500 CSS px at 390); Online Recording 12,169 / 9,942; Offline Indonesia 9,760 / 8,681; Blog 16,041 / 4,987 (the mobile blog shows fewer cards initially).

## 4. Typography changes

- Mobile font sizes are set separately in the Wix mobile editor and then scaled. Body copy at 390px reads at about 13–16 CSS px. Some mobile text is **light grey on white** (Yuni and Made bios) with low contrast.
- **Text in images becomes illegible on mobile:** the RYS intro card, the "Why Us" list, the T&C heading, the hero price poster and the "RATES" card all shrink to about 300px wide, and their small text drops to roughly 6–8px equivalent.
- FAQ questions (30px with a 30px line height) wrap to 2–3 lines on mobile with almost no line gap.
- The homepage module paragraph mixes 15px and 23px spans *inside one paragraph* (random emphasis) on both desktop and mobile.

## 5. Images and media

- Images are served by Wix's image service at the rendered size, in AVIF where supported. Originals are much larger (see 04).
- Portrait circles and module covers keep their aspect ratio. Posters and flyers are shown whole (4:5 or tall), which makes very long scroll segments on mobile.
- **Videos autoplay on mobile too** (9 on Home). The reported media transfer for Home was about **178MB on desktop and about 150MB on mobile** in a full-scroll session (sum of `content-length` of the media responses; the real transferred bytes may be lower because browsers range-request video). This is still extremely heavy for mobile data.
- YouTube iframes: 12 on Home on both viewports.

## 6. Fixed and overlay elements

- **Elfsight WhatsApp widget:** the button is fixed bottom-left. The greeting card auto-opens on every page load. On mobile 390 the card covers about **45% of the viewport** (roughly y 250–730px), including the hero and the open mobile menu. A second floating "⋯" button (Wix quick-actions) sits bottom-right on mobile.
- No cookie banner was observed.
- No horizontal overflow on desktop 1440 or mobile 390 (document width = viewport) on any tested page.

## 7. Footer behaviour

- Desktop: the Home contact panel (2 columns: green-grey info + white form) followed by an 812px-tall footer area that holds only "© by Yin Yoga World.", which leaves a large empty band at the bottom of every page.
- Mobile: the contact panel stacks (info, then form). **The "© by Yin Yoga World." line is not present in the mobile text.** The last section is cut tight to a 40px footer strip.

## 8. Interactive components across viewports

| Component | Desktop | Mobile |
|---|---|---|
| Nav "More" | Hover dropdown | Folded into the hamburger list |
| Blog category tabs | Horizontal tabs + "More ▾" | Present (horizontal) |
| Google reviews | 3 columns + Load More | 1 column + Load More |
| Contact form | Two-column first/last name | Stacked fields |
| YouTube embeds | 480×270 | Full column width |

## 9. Takeaways for Phase 2 (behaviour, not design)

1. The new site must be **fluid**, with real breakpoints. The original has no tablet layout and overflows at 768px.
2. All text currently in images must become live text so it stays legible on mobile.
3. Never let a chat or overlay widget auto-cover content on mobile.
4. Media weight must drop by orders of magnitude (posters for video, lazy loading, click-to-play YouTube).
5. Keep the same content order on mobile and desktop (the original does this, and it works for the narrative), but shorten it.
