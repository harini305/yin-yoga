# 05 — Brand Reference (typography, colour, logo, visual identity)

**Method.** The values below come from three sources:

- **Computed CSS** sampled from every visible text and background element on all 58 routes at 1440px. Raw data: [data/style-summary.json](data/style-summary.json) and the `typo` arrays in `data/pages/*.json`.
- **`@font-face` rules** loaded by the pages.
- **Exact pixel sampling** of the original logo and share images (reference copies in [brand-reference/](brand-reference/)).

"Verified" means read directly from computed styles or image pixels. "Estimate" means judged by eye.

---

## 1. Typography (original site)

### 1.1 Font families in use

The original site uses **at least 12 families**, a typical result of the Wix editor:

| Family (Wix name → real face) | Where it is used | Evidence |
|---|---|---|
| **Quicksand** 400 (+ italic) | Main body copy on Home (About, FAQ answers, team bios, contact panel), FAQ questions (30px), blog dates/meta (12px) | computed (≈400 elements) · Google Font via Wix font cache |
| **Poppins**: `poppins-extralight` (loads the **Poppins ExtraLight** file at weight "400"; "700" = bold synthesis/alt file), `poppins-semibold` | Wordmark "Yin Yoga World" (50px, wt 700), body text on Online Recording / Offline / Live Zoom, Wix app UIs (booking, plans, blog tabs, login), Q&A labels | computed (≈840 elements) |
| **Raleway** 400 | Desktop navigation (14px, line-height 61px), footer "© by Yin Yoga World." | computed |
| **Avenir LT W01 35 Light** (+ 85 Heavy) | Blog post body (18px/27px), blog meta, Offline page intro, form labels | computed (≈1000 elements, mostly blog) |
| **Helvetica W01 Light / Roman** | Home module captions ("Module-1", "A Glimpse of…") | computed |
| **Sacramento** (script) | "Journey To The Self" (41px, navy #002D5C) | computed |
| **Arial / Arial Black** | "View detail" link (Arial), Offline page section titles "YIN YOGA TEACHER TRAINING 50 Hrs" (Arial Black 35px), chat widget (Arial 700) | computed |
| **Times New Roman** | Blog category tab links (14px, grey #8F908F), **a fallback that looks like a missing font**, not a design choice | computed |
| **Madefor Display** (Wix default) | Online Recording hero intro (18px, teal #52B3B8) | computed |
| **Futura LT W01 Book**, **Brandon Grotesque Light**, **Anton** | Loaded as `@font-face`; Futura is used on 2 elements, the others are loaded but barely or never used in sampled text | font-face list |

**Fonts baked into images** (not live text): heavy geometric sans display type on posters, flyers and headings ("TTC OFFLINE", "TERM & CONDITION", "WHY US", "PROGRAM & PRICING"); a script "Yin" on the share card; a bold rounded sans in the logo ribbon ("YIN YOGA WORLD"; *estimate:* Montserrat/Gotham-like bold).

**No font files exist in the project workspace** (it was empty). All fonts are served from `static.parastorage.com` (Wix).

### 1.2 Observed type scale (desktop 1440, verified computed values)

| Role | Family | Size / line-height | Weight | Colour |
|---|---|---|---|---|
| Wordmark | Poppins (ExtraLight file) | 50px / 67px | 700 | #439698 |
| Nav item | Raleway | 14px / 61px | 400 | #324158 (active #D80960) |
| Log In button text | Quicksand | 14px / 24.5px | 400 | #A3D9F6 on #4E6368 |
| Section headline (Online Recording Q&A) | Poppins | 28px / 49px | 700 | #0BAA9A |
| FAQ question | Quicksand | 30px / 30px | 400 | #52B3B8 |
| Q&A label "Q:" (Live Zoom) | Poppins | 25px / 43.75px | 700 | #D80960 |
| Team name (on slate) | Poppins | 33px / 45.5px | 400 | #FFFFFF |
| Body (Home About) | Quicksand | 15px / 28.2px | 400 | #002D5C |
| Body (Home FAQ answers) | Quicksand | 17px / 20.4px | 400 | #324158 |
| Body (program pages) | Poppins | 16–18px / 24–31.5px | 400/700 | #1E211E |
| Inline links ("read more", "more detail") | Poppins / Quicksand | 13–14px | 400–700 | #D80960 |
| Blog post body | Avenir 35 Light | 18px / 27px | 400 | #000000 |
| Blog card title | Quicksand | 20px | 400 | #000000 |
| Script accent | Sacramento | 41px / 51px | 400 | #002D5C |
| Footer | Raleway | 14px / 25px | 400 | #387A45 |

Letter-spacing is `normal` everywhere sampled, and no `text-transform` is used (uppercase is typed or baked into images). Mobile uses Wix's separate 320px layout scaled to the device, so mobile font sizes are effectively about 1.2× the CSS values at 390px.

### 1.3 Mandatory rule for the redesigned site

> **Exactly TWO font families across the entire redesigned website:** one for headings, and one for body text, navigation, buttons, forms, cards and footer. Both must be readable, professional and not overly decorative. Hierarchy comes from size, weight, line-height and letter-spacing. **No third family**: not for the script accent, footer, flyers, special sections or any single component.

**The final pair is NOT chosen in this audit** (as instructed). Notes for the Phase 2 decision:
- Families the brand already uses that would satisfy the rule: **Poppins** (geometric sans with a wide weight range; already carries the wordmark) and **Quicksand** (rounded, soft; the main body face on Home). **Raleway** is another existing option. Note that Quicksand is light and rounded and may read weakly at small sizes for long passages. Poppins ExtraLight at body sizes is also low-contrast; heavier weights would be needed.
- The Sacramento script, Arial Black and the poster display faces must **not** carry over as a third family; the "Journey To The Self" accent would be set in the heading family.
- Indonesian text (Live Zoom, Offline) needs only Latin glyphs. Both candidates support Latin Extended.

---

## 2. Colour

### 2.1 Verified brand colours from the original artwork (pixel sampling)

| Swatch | HEX | Source | Role |
|---|---|---|---|
| Pink / magenta | **#DB0D55** | Logo circle and ribbon (dominant), share card ribbon, favicon ribbon | **Primary brand colour** |
| Deep pink (shadow) | **#BC084D** | Logo ribbon fold / shading | Secondary tint of primary |
| Near-black | **#050608** | Logo yoga silhouettes, favicon background | Ink |
| Deep teal | **#0A4553** | og:image and LocalBusiness image background | Secondary brand colour (social/share identity) |
| Leaf green | #47B047 | Logo inner illustration (small area) | Incidental accent within the logo |
| Yellow | #F3EC17 | Logo inner rays (small area) | Incidental accent within the logo |
| Red | ~#C8232C *(estimate)* | Logo emblem circle (red dot) | Incidental, within the emblem |

### 2.2 Verified UI colours from computed CSS

| Swatch | HEX | Usage | Classification |
|---|---|---|---|
| Magenta (UI) | **#D80960** | Active nav item, inline links ("read more", "Google Review"), "Q:" labels, team-member names, hero "View detail" | Brand: the UI version of the logo pink (very close to #DB0D55) |
| Teal (wordmark) | **#439698** | "Yin Yoga World" wordmark | Brand secondary |
| Light teal | **#52B3B8** | FAQ questions, Online Recording intro, Live Zoom question text, large background areas | Brand secondary / accent |
| Green-teal | #0BAA9A | Online Recording section headlines | Accent (page-specific) |
| Slate | **#4E6368** | Log In button background, mobile menu overlay | Neutral brand UI |
| Navy-slate | **#2A3951** | Home "Lovely Team" section background | Neutral dark section |
| Ink navy | #324158 | Nav text, Home body text | Text |
| Deep navy | #002D5C | Home About body, form labels, script accent, contact **Send** button background | Text / CTA |
| Charcoal | #1E211E | Program page body text (Wix default "color_15") | Text |
| Grey-green | #697A70 / #50936A | Contact panel background (#697A70); "RATES" card / section background (#50936A) | Section backgrounds |
| Footer green | #387A45 | Footer copyright text | Incidental |
| Cream | #EEEBE4 | Offline Indonesia hero background | Section background |
| Light blue | #A3D9F6 | Log In text on slate | Incidental (low contrast) |
| Mid grey | #8F908F / #8D8D8D / #C7C8C7 | Blog meta, borders, placeholders | Neutral |
| Very dark | #152128 | Elfsight chat card header | **Third-party widget, not brand** |
| WhatsApp green | #0EC12F | Chat widget button | **Third-party widget, not brand** |
| Facebook blue | #1878F2 | Login modal "Sign up with Facebook" | **Third-party, not brand** |
| Pink accent | #F5539D | Single element | Incidental |

**Mint and dusty-pink icon circles** in the "Why Us" image (*estimate* ≈ #A8D9BE mint and ≈ #D9A0AA dusty pink) and the colourful module cover posters (orange, magenta, yellow, green, black) are artwork, not UI tokens.

**Hover states:** the nav hover colour could not be read reliably from computed styles (the test read the anchor's default colour). It was not verified, and Phase 2 should define its own. The active nav state is verified as #D80960.

### 2.3 Summary for the redesign palette (observations only)

- **Primary identity:** magenta-pink (#DB0D55 / #D80960) + near-black, from the logo.
- **Secondary:** teal family (#439698 / #52B3B8) on the website, and deep teal #0A4553 on social artwork.
- **Neutrals:** slate (#4E6368, #2A3951), navy text (#324158 / #002D5C), white backgrounds dominate (>90% of painted area).
- The current site mixes many near-duplicate greens, teals and navies across pages; Phase 2 should consolidate them into a small token set.

---

## 3. Logo and brand marks

| Mark | File / ID | Description | Notes |
|---|---|---|---|
| **Primary emblem** | `854627_1732f8c3fe9b4d4e9fe2d00b90e82d7c~mv2.png` (1464×1464, 0.56MB) → `brand-reference/logo-original__854627_1732f8c3.png` | Pink circle with thin inner rings; inside, a black triangle containing a white circle with a **swastika** (Hindu/Balinese sacred symbol) and black/red dots, with leaves; below, two black yoga silhouettes framing a white meditating figure on yellow/green rays; a pink ribbon reading **"YIN YOGA WORLD"** in white bold sans | Detailed illustration: **illegible below ~48px** (shown at 102px in the header). It has an **off-white square** behind the circle (not fully transparent), which shows on non-white backgrounds. The emblem includes a religious symbol that international audiences may misread; **do not alter or remove it without explicit client direction** (logged as a question in 08). |
| Ribbon wordmark | favicon source `854627_e67a4125…` (3000×3000 JPG) | Pink ribbon "YIN YOGA WORLD" on black | Used as favicon (32/180/192px); text is illegible at those sizes |
| Ribbon watermark | `854627_f188638d…` "yyw flag watermark copy.png" | Ribbon only | Online Recording contact block |
| Circular stamp | inside "fees & Payment rule.jpg" | Green circular stamp "YIN YOGA WORLD" around a triangle mark | Seen only in the T&C heading image |
| Share card | `854627_52aaccae…` (og:image) | Deep teal card: script "Yin", "YOGA TEACHER TRAINING", RYS 200 + RYS 300 badges, pink ribbon, Yoga Alliance logo, "BALI" | |
| Text wordmark | Live text | "Yin Yoga World" set in Poppins, teal #439698 | Not an image; would be set in the Phase 2 heading font |

**Placement:** desktop header centre-left emblem with the wordmark to its right; mobile shows the emblem centred above the wordmark.
**Third-party marks used:** Yoga Alliance RYS 200 / RYS 300 / E-RYT 500 / YACEP badges (embedded in images). Use them per Yoga Alliance's guidelines and only for the credentials the client holds.

---

## 4. Other visual identity elements

| Element | Observation |
|---|---|
| **Photography** | Real, warm, documentary photos of trainings: group certificate photos in a wooden Balinese shala with a flower mandala, Jakarta studio groups, candid practice shots, portrait headshots. Mostly good-resolution originals (2000–6000px). Strongest authentic asset. |
| **Image treatment** | Round (circle-cropped) portraits with thin borders; rectangular photos with no radius; posters and flyers with heavy text overlays; some images have a soft drop shadow (Wix frame). |
| **Shape language** | Pill shapes (black "TTC OFFLINE"/"TTC ONLINE" badges, "VENUE LOCATION" outline pill, rounded "Send" button), circles (portraits, icon discs), sharp-cornered content cards (blog). |
| **Shadows / depth** | Minimal; occasional Wix frame shadow on the hero poster; widget shadows are third-party. |
| **Icons** | Flat two-colour icons on mint/pink discs ("Why Us"), colourful Wix stock social icons, the Google Maps pin. |
| **Decorative motifs** | Emoji used as bullets in Indonesian copy (🔺 ✨ 🌟 💕 🔖 🎁 ✅), the panda mascot (group discount), colourful module covers with yoga illustrations, the script "Journey To The Self". |
| **Backgrounds** | Mostly white; slate/navy blocks for Team and Contact; cream on Offline hero; Wix stock looping videos behind some hero areas. |
| **Tone and personality** | Warm, personal, family-run, spiritual but practical ("Na'ma'ska'r", "Dear Yogiis", "Lovely Team"). Bilingual (English and Indonesian). Presentation is busy and inconsistent: many fonts, colours, text-in-images and very long pages. The **identity is clearly recognisable through the pink emblem, the teal wordmark, real training photos and the Bali/Indonesian context**. |
