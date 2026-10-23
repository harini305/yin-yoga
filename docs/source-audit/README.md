# Source Audit: yinyogaworld.yoga (Phase 1)

Research-only audit of **https://www.yinyogaworld.yoga** (Wix), captured **2026-10-23**, to prepare a frontend rebuild in Next.js. **No implementation has started.** Phase 2 needs explicit approval.

## Read in this order

| File | What it gives you |
|---|---|
| [01-audit-report.md](01-audit-report.md) | Method, coverage (inspected / partial / inaccessible / broken), key findings, Phase 1 boundary confirmation |
| [08-issues-gaps-questions.md](08-issues-gaps-questions.md) | **Start here for decisions**: critical live-site issues, conflicting prices and policies, typos, gaps, client questions |
| [02-page-inventory.md](02-page-inventory.md) | Every route with status and recommendation, shared components, page-by-page section order, proposed IA |
| [03-content-inventory.md](03-content-inventory.md) | All facts to preserve: programs, dates, prices, policies, FAQ, team, contacts, testimonials, blog summary, content priorities |
| [04-assets-manifest.csv](04-assets-manifest.csv) | 116 media items (83 images, 16 videos, 14 PDFs, 3 head images): original URL, page/section, dimensions, file size, intended use, flags |
| [05-brand-reference.md](05-brand-reference.md) | Fonts in use, type scale, verified HEX colours (logo and CSS), logo variants, imagery and tone; the two-font rule |
| [06-functionality-and-dependencies.md](06-functionality-and-dependencies.md) | Features with verification levels, third-party scripts and tracking IDs, metadata, implementation dependencies |
| [07-responsive-observations.md](07-responsive-observations.md) | Behaviour at 1440 / 768 / 390, Wix fixed-canvas architecture, overlays, footer |
| [09-phase-2-recommendations.md](09-phase-2-recommendations.md) | **Mandatory Phase 2 design rules** (two fonts, visual, content, footer, images and `images: { unoptimized: true }`), IA, data model, checklist |

## Evidence and data

| Path | Contents |
|---|---|
| `content/raw-text/` | Verbatim rendered text of all 58 routes (desktop), with title, meta, canonical and heading outline at the top of each file |
| `content/pdf-text/` | Text of the 12 working PDFs; manual transcriptions for the image-only pricing sheet and group-discount poster |
| `content/google-reviews-snapshot.json` | 20 Google reviews loaded by the Elfsight widget (live third-party data; snapshot) |
| `data/pages/<slug>__<viewport>.json` | Full extraction per capture: text, headings, links, images, backgrounds, videos, iframes, inputs, fonts, colours, sections, metadata, network log |
| `data/assets-probed.json`, `data/assets-raw.json` | Asset aggregation behind the manifest |
| `data/blog-posts-index.csv` | 40 posts: URL, title, date, author, category, read time, word count, language, og:image |
| `data/seo-metadata.csv` | Title, description, og, canonical, robots, H1 for every route |
| `data/responsive-metrics.csv` | Document height and width, overflow, element counts and media bytes per page and viewport |
| `data/style-summary.json` | Site-wide font, text colour, background colour and script-host frequencies |
| `data/interactions.json` | Interaction test log |
| `data/embedded-frames.json` | Text pulled from embedded iframes |
| `data/crawl-log-*.json` | Crawl status per URL and viewport |
| `screenshots/` | 279 fold and section captures + 10 interaction captures. Index with viewports: [screenshots/INDEX.md](screenshots/INDEX.md) |
| `brand-reference/` | Reference copies of 4 original brand images: logo (1464² PNG), favicon source, og:image, LocalBusiness image. **Do not edit.** |

## Headline facts

- **Programs:**
  - Bali 200 Hrs TTC (4×50 Hrs modules; EB IDR 18M / normal 25M; 2027 cohorts Apr 4–May 1 and Oct 3–30).
  - Online Recording (IDR 6.0M per module, Module 4 IDR 6.75M).
  - Live Zoom Module-7 100 Hrs (Rp 13M, Dec 9–20, 2026).
  - Jakarta modules (Rp 7.0–7.25M) and a special class (Rp 300K, Nov 23, 2026).
- **Brand:** magenta-pink emblem #DB0D55 (UI #D80960), teal wordmark #439698, slate and navy neutrals, real training photography.
- **Most urgent:** the mobile-menu "Blog Indonesian" link goes to a gambling site through a lapsed domain. There are also conflicting prices and cancellation terms, 2 broken PDFs, and disabled online booking.

## Not done in Phase 1 (by design)

No code, no redesign, no package installs in the project, no configuration changes, no deletions, no GitHub push, no Vercel deploy. Bulk media (about 129MB of images and 266MB of video) was mapped but not downloaded.
