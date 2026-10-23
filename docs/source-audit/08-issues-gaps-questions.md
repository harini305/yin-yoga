# 08 — Issues, Gaps, Inconsistencies & Open Questions

Ordered by severity. Each item is an **observation with evidence**; nothing here has been corrected on the client's behalf.

## 1. Critical: live site problems worth telling the client now

| # | Issue | Evidence | Impact |
|---|---|---|---|
| C1 | **"Blog Indonesian" in the mobile menu links to `http://yinyogaworld.com/`, which now redirects (301) to `https://flower.uk.com/`, a Vietnamese gambling site** (page title "7+ Nhà Cái Tặng Tiền Cược Miễn Phí Khi Đăng Ký 2026"). The old domain appears to have lapsed and been re-registered. | `curl` redirect chain, 2026-10-23; mobile menu capture `screenshots/_interactions/home-mobile-menu-open.jpg` + `data/interactions.json` | Reputational and SEO risk on the live site today. The client may want to remove this link from the Wix menu immediately, independent of the rebuild. |
| C2 | **Two PDF links on Home return 404**: the RYS intro card image link (`…/854627_6f6ffaa0d0d34b30b8ce7bc1b9e919af.pdf`) and the module teaser paragraph (`…/854627_77a1acaca97b4155aeea0a36a0e316be.pdf`). | HTTP 404 | Broken user journeys |
| C3 | **Online booking does not work**: "Book Now" → "Sorry, this service is not yet available for online bookings"; service page "This service is not available". The `/book-online` page is still indexed (in the sitemap). | Interaction test | Dead-end for visitors arriving from search |
| C4 | **Book Online card image broken** (grey placeholder); the original `854627_aa2d0101…jpg` returns 403. | Screenshot + HTTP 403 | Visible defect |

## 2. Conflicting facts (need a client decision)

| # | Topic | Conflict | Sources |
|---|---|---|---|
| F1 | **Bali 200 Hrs price** | Rp 16.000.000 (Wix booking service) vs EB IDR 18.000.000 / Normal IDR 25.000.000 (hero poster + pricing PDF) | `/book-online`, `/service-page/…`, poster image, PDF `fd39a448` |
| F2 | **Maximum participants** | 6 (hero poster; homepage T&C text; T&C PDF B) vs **15** (T&C PDF A) | Home, PDFs `88001706` vs `23e5b0e5` |
| F3 | **Full-refund cancellation window** | **60 days** ("Why Us › Enroll Risk free" image) vs **45 days** (T&C B) vs **30 days** (T&C A) | Home Why Us image, PDFs |
| F4 | **Early-bird full payment deadline** | 45 days before (homepage text, T&C B) vs 30 days (T&C A) | Home, PDFs |
| F5 | **Teaching days vs start dates** | FAQ: "5 days a week… every Saturday and Sunday" off, "22 days program". But every Bali cohort starts on a **Sunday** (Oct 4 2026, Apr 4 2027, Oct 3 2027 are Sundays) and Module-1 runs Sun–Fri (6 days, "4–9 Oct"). Total span Oct 4–31 = 28 days. | FAQ text vs PDF dates (weekday computed) |
| F6 | **Class hours** | FAQ: 8am–6pm (rundown ends 18.00). Jakarta modules and Live Zoom: 8am–5pm. Possibly different by program; confirm. | FAQ, Offline/Live Zoom pages |
| F7 | **Years of experience** | "Professional: More than 6 years of school experience" (Why Us) vs founded 2013, registered with Yoga Alliance June 2017, which would be 9+ years by 2026. Possibly stale copy. | Why Us image vs About text |
| F8 | **Group discount wording** | Poster: "25% OFF for group of 3 or more" but prices quoted only for "3 YOGIS" (totals). No price for groups larger than 3. | Online Recording poster/PDF |
| F9 | **Timezone label** | Wix booking shows "Western Indonesia Time (WIB)" (UTC+7). Bali is on WITA (UTC+8). Jakarta events correctly say WIB. | Service page vs geography |
| F10 | **Location naming** | Footer "Nusa Dua, Bali"; service page "Benoa, Badung Regency"; Maps "Benoa, South Kuta"; schema "Kabupaten Badung". Same place described four ways. | Footer, service page, Maps, JSON-LD |
| F11 | **Phone formatting** | Main number written 5 different ways (`+ (62) 8133 8080 993`, `+(62) 8133-8080-993`, `08133 8080 993`, `+62 8133 8080 993`, `081338080993`). | Multiple |
| F12 | **Mey Lan's WhatsApp link** | `bit.ly/hellopino` opens WhatsApp to Mey Lan's number pre-filled "Hello Pino". A Google review also thanks "Pino" as a team member. This looks like a former or alias staff name. | Redirect chain; review by Brianna Gamino |
| F13 | **Yoga Alliance status wording** | Home: "Currently, we have RYS200 and RYS300". Online Recording: "RYS 200, RYS 300, YACEP". Intro card badges: RYS 200/300, E-RYT 500, YACEP. Live Zoom: "Yoga Alliance (RYT 300 Program)". Confirm current credentials on the YA profile (sid 9944) before reuse. | Multiple |
| F14 | **Module-7 / 100 Hrs** | Live Zoom advertises "Module-7 'Into The Stillness' 100 Hrs" (RYT 300 track); the 300 Hrs curriculum (modules 5–7?) is not described anywhere else. | Live Zoom page |
| F15 | **Online recording language** | "presented in English and Indonesia language"; the FAQ says one language per cohort for offline. Fine, but the online-recording language options should be confirmed. | Online Recording |

## 3. Time-sensitive content (state on 2026-10-23)

- **TTC 200 Hrs Offline Bali, Oct 4–31, 2026: currently in progress** (Module-3 ends today, Oct 23). Still listed in the pricing PDF; the homepage poster already shows only the 2027 cohorts.
- Upcoming: Jakarta Module-2 **Nov 18–22, 2026**; Special Class "AcuYin" **Mon Nov 23, 2026**; Live Zoom Module-7 **Dec 9–20, 2026**; Jakarta Module-3 **Jan 20–24, 2027**; Bali **Apr 4–May 1, 2027**; Jakarta Module-1 **May 26–30, 2027**; Bali **Oct 3–30, 2027**.
- Phase 2 needs a maintainable way to update schedules (structured data file or CMS) so that past events drop off.

## 4. Spelling and copy errors (record only; correct only with client approval)

| Text as published | Location | Likely intended |
|---|---|---|
| "Accomodation" / "accomodation" | PDF, Why Us | Accommodation |
| "borned by students" | Why Us | borne by students |
| "We specializes" | Meta description, service page | We specialise/specialize |
| "rercording" | Online Recording ("What are the requirements for following TTC rercording online?") | recording |
| "Yogiis" | Online Recording ("Dear Yogiis") | Yogis (may be intentional) |
| "Yoga Yoga TTC" | Online Recording ("Yoga Yoga TTC can be done via online") | Yin Yoga TTC |
| "TTTC modules" | Module-4 teaser | TTC |
| "Our yoga teacher training are designed" | Online Recording hero | is designed / trainings are |
| "Can apply per Modul" | Hero poster | Module |
| "Lovely  Team" (double space) | Home H1 | — |
| "Desease" | Offline page ("Emotion and Desease") | Disease |
| "2 day off" | FAQ | 2 days off |
| "Na'ma'ska'r" | Footer, Offline | Stylised; likely intentional, confirm |
| "T-Shirt\*" | Pricing PDF | The asterisk has no footnote |
| Truncated menu labels | Mobile menu | — |

## 5. Content gaps (information a visitor needs that the site doesn't clearly provide)

1. **No single price table** that is live text. Bali prices exist only in an image and an image-only PDF; online prices only in an image.
2. **Accommodation**: "no accommodation included", "chat Mey Lan" for references, with no list of nearby options.
3. **How to register**: only "contact via WhatsApp". No clear step-by-step (deposit 30% → confirmation → balance).
4. **Payment details**: methods are named (bank transfer, Wise, PayPal) but no process, deposit amounts in IDR, or USD equivalents (except the group poster).
5. **Live Zoom and Offline pages are Indonesian only**. Is an English version expected?
6. **Minimum number of participants** (T&C mentions a "threshold minimum" without giving the number).
7. **Venue description and photos** for the Bali "home" studio (a review calls it "a welcoming private home"). There are training photos but no venue section.
8. **Certification process** (what certificate, how to register as RYT) is spread across the FAQ and Online Recording page.
9. **Aggregate Google rating and review count** are not displayed.
10. **Privacy policy / terms of website use: none found.** A privacy notice may be needed for the contact form and tracking (GA4, Google Ads, Meta) in Phase 2.

## 6. Duplicated, repetitive or low-value content

- Module descriptions appear in 3–4 places (Home teaser, Online Recording "Module book", Offline page in Indonesian, 6 PDFs).
- Every Offline event appears twice: once as text and once as a flyer image with the same facts.
- The 12 single-column YouTube testimonials plus the 3 hero testimonial videos make about 7,000px of testimonial video on Home.
- Team members repeated: Made Agus appears in About, Team and Teachers with different bios and titles ("ZenThai Shiatsu", "Teacher, Photographer & Videographer", "Thai Yoga Massage Teacher").
- Two T&C versions; two "Return Again" blog posts.
- Wix stock background videos (`11062b_…`) add weight without brand meaning.
- Empty pages: Plans & Pricing, Book Online, the blank embedded-content iframe.

## 7. Design problems not to carry into Phase 2

- Text baked into images (headings, Why Us, T&C heading, price cards, intro card).
- 12+ font families; random font-size changes inside paragraphs.
- 980px fixed canvas with no tablet layout; horizontal overflow at 768px.
- An auto-opening chat overlay covering content.
- Very long single-column pages with large empty gaps; an 812px near-empty footer area.
- Light-grey low-contrast body text on mobile; light-blue "Log In" text on slate.
- The only H1 on Home is "Lovely Team"; most pages have no H1; heading levels are used for styling (H6 for a section title).
- 6–17MB image originals and 12–46MB videos autoplaying.

## 8. Access and coverage limitations

- **Not inspected:** Wix site admin and dashboard (no access); the destination of contact form submissions; member-area pages behind login; Wix blog drafts or unpublished pages (none are publicly discoverable; the sitemap matches the rendered blog list of 40); the Elfsight widget configuration.
- **Not verified:** nav hover colours; real-device tablet behaviour; the "Contact"/"Testimony" anchor targets; the chat widget's WhatsApp target; Google Ads and Meta pixel IDs (the Ads conversion ID was seen in network requests, the pixel ID was not); whether the Wix Members/Stores apps hold any data.
- Captured content is a **snapshot of 2026-10-23**. Google reviews and the YouTube titles are live third-party data.

## 9. Questions for the client (to resolve before or during Phase 2)

1. Which **prices** are current for Bali 200 Hrs (16M vs 18M EB / 25M normal) and per module? Are online recording prices still IDR 6.0M / 6.75M?
2. Which **T&C / cancellation policy** is valid (6 or 15 participants; 30, 45 or 60-day windows)?
3. Is the **"Blog Indonesian" / yinyogaworld.com** link known? (Recommend removing it from the live site now.)
4. Should the redesign keep **Indonesian-only pages** as they are, translate them, or add a language switcher?
5. Is **online booking or payment** wanted, or is WhatsApp enquiry the intended conversion path?
6. Should the **blog** be kept (40 posts, low traffic signals), simplified, or archived?
7. Are **Wix Members** (Log In) and **Pricing Plans** used for anything (online recording access, perhaps)?
8. Who receives **contact form** submissions, and which address should Phase 2 send to?
9. Keep **Elfsight** (paid widgets) or switch to native WhatsApp links and a Google reviews link or integration?
10. Confirm **WhatsApp numbers and roles** (Made: 0813-3808-0993; Mey Lan: 0813-3792-7993; Jakarta: Debbie, Deece). Who is "Pino"?
11. Confirm **Yoga Alliance credentials** to display (RYS 200, RYS 300, YACEP, E-RYT 500) and permission to use YA badges.
12. **Logo:** is there a vector (SVG/AI) master, and a simplified mark for small sizes? The emblem includes a swastika (a sacred Hindu/Balinese symbol); does the client want it presented as is in all contexts? This is the client's decision, not a recommendation to change it.
13. Can **testimonial videos** be reduced to a curated set? Are the student names and recordings cleared for continued use?
14. Confirm **analytics and ads** continuity (GA4 `G-D39FB6N20M`, Google Ads `11320926867`, any Meta pixel).
15. Is the **"22 days program, Sat–Sun off"** description still accurate given that cohorts start on Sundays?
