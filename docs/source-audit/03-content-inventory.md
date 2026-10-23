# 03 — Content Inventory (preservation reference)

Captured **2026-10-23** from https://www.yinyogaworld.yoga (Wix). This file pulls together the facts and copy Phase 2 needs to keep. The full verbatim text of every page is in [content/raw-text/](content/raw-text/). PDF text and transcriptions are in [content/pdf-text/](content/pdf-text/). The Google reviews snapshot is [content/google-reviews-snapshot.json](content/google-reviews-snapshot.json).

**Labels used**

- **[TEXT]**: live HTML text, copied from the rendered DOM.
- **[IMG-TEXT]**: text that exists only inside an image, transcribed by eye from the original image.
- **[PDF]**: from a linked PDF.
- **[WIDGET]**: from a third-party widget.

Spelling is kept exactly as published; `[sic]` marks obvious errors. Corrections are not made here (see [08-issues-gaps-questions.md](08-issues-gaps-questions.md)).

---

## 1. Business identity

| Item | Value | Source |
|---|---|---|
| Business name | Yin Yoga World / "RYS Yin Yoga World" | Header, footer [TEXT] |
| Site display name | Yin Yoga World | Wix site settings (`siteDisplayName`) |
| Founded | 2013 (after Nyoman Wahyuni completed Yin Yoga TT with Jo Phee at Yinspiration) | Home › About [TEXT] |
| Yoga Alliance registration | Registered with Yoga Alliance USA in June 2017; currently RYS200 and RYS300 (+ YACEP per online-recording page) | Home › About [TEXT]; Online Recording [TEXT] |
| Yoga Alliance profile | https://www.yogaalliance.org/SchoolPublicProfile?sid=9944&lid=12815 (home FAQ "click here"); directory search link on Online Recording page | [TEXT] links |
| Other programs mentioned | TTC Wheel Yoga, TTC Qi Gong ("Everything is based on Functional Yoga") | Home › About [TEXT] |
| Positioning (meta) | "Embark your yoga journey with Yin Yoga World in the heart of serene paradise: Bali Island! Yoga Teacher Training based on Functional Yoga with a special touch of Traditional Chinese Medicine and Tantra Yoga Philosophy." | Home meta description |
| Default share title | "200Hrs Yoga Teacher Training by RYS Yin Yoga World" | og:title / twitter:title |
| Greeting used as brand voice | "Na'ma'ska'r" (stylised spelling, repeated in footer and Offline page) | [TEXT] |

### 1.1 Contact details (verify all with the client before reuse)

| Item | Value as published | Where |
|---|---|---|
| Main phone / WhatsApp | `+ (62) 8133 8080 993`; also written `+(62) 8133-8080-993`, `08133 8080 993`, `+62 8133 8080 993 (WhatsApp)`; schema: `081338080993` | Home footer, team card, Offline/Live Zoom pages, JSON-LD |
| WhatsApp, Made Agus | bit.ly/helloMade → wa.link/4z9l8a → `api.whatsapp.com/send?phone=6281338080993` (prefilled "Hello Made, i want to get information about") | Home team card + FAQ |
| WhatsApp, Mey Lan | `+(62) 8133-7927-993`. Links: bit.ly/hellomeylan → phone 6281337927993 ("Hi Mey Lan…"), and bit.ly/**hellopino** → same phone, prefilled **"Hello Pino"** | Home team card + FAQ |
| Jakarta registration contacts | Debbie: +62 815-9224-007 · Deece: +62 812-1283-323 | Offline Indonesia page [TEXT] |
| Email | info.yinyogaworld@gmail.com | Footer, Online Recording, Offline page |
| Address (service page) | YIN YOGA WORLD, PERUMAHAN PURI BUNGA, Jalan Dharmawangsa Gg. Cerida, Benoa, Badung Regency, Bali, Indonesia | /service-page/yoga-ttc-200-hrs [TEXT] |
| Address (Google Maps target) | YIN YOGA WORLD, PERUMAHAN PURI BUNGA, Jl. Dharmawangsa Gg. Cerida No.19, Benoa, South Kuta, Badung Regency, Bali 80361 | maps.app.goo.gl/7xFQzKP8Ft8FpBiq6 and maps.app.goo.gl/NJ8WZbmiQurdc2478 (both resolve to the same place) |
| Address (schema.org) | No.19 Jalan Dharmawangsa, Kabupaten Badung, 80361, ID | JSON-LD LocalBusiness |
| Address (footer) | "Nusa Dua, Bali - Indonesia" | Home footer [TEXT] |
| Jakarta venue | Houm Yoga, Jakarta Selatan | Offline Indonesia [TEXT] |
| Timezone | Asia/Jakarta per Wix settings. Booking UI shows "Western Indonesia Time (WIB)", though Bali actually uses WITA (see 08) | Wix config / service page |
| Currency | IDR | Wix config |

### 1.2 Social links (footer, all `target=_blank`)

| Network | URL |
|---|---|
| Twitter / X | https://x.com/yinyogaworld |
| Instagram | http://www.instagram.com/yinyogaworld (also in desktop "More" menu and mobile menu) |
| Facebook | https://www.facebook.com/yinyogaworld/ |
| TikTok | https://www.tiktok.com/@yinyogaworld |
| YouTube | https://www.youtube.com/channel/UCrGHGVmMXofGOgQhyXGmBqA (testimonial playlist: https://www.youtube.com/watch?v=LWVbu3BIr_I&list=PLm20zUtQiaRvNFGsBr9n0jxb7RBKjpq-h) |
| LinkedIn (Made Agus, personal) | http://www.linkedin.com/in/madeaguswirayasa |

---

## 2. Programs and prices (the core facts)

> Prices are the most error-prone content on the site: they are spread across HTML text, images, PDFs and a Wix Booking service, **and they conflict** (see §2.6 and 08-issues). Phase 2 must get one confirmed price table from the client.

### 2.1 Yin Yoga TTC 200 Hrs: Offline Bali (main product, "Home TTC 200 Bali")

**Hero poster on the homepage [IMG-TEXT]**, image `854627_11abfecde22e…` ("Flyer ttc200 2027 copy.jpg"):

> YIN YOGA · HOME TTC 200 BALI · SCHEDULE 2027 · **April 4 – May 1, 2027** · **October 3 – 30, 2027** · Price — EB: IDR 18.000.000 · Normal: IDR 25.000.000 · Maximum participant / batch: 6 · Language: Indonesia or English · Can apply per Modul [sic] · What you get — Certificate, Module pack, T-shirt, lunch, coffee break · www.yinyogaworld.yoga · RYS 200 badge

**"View detail" PDF**, `854627_fd39a448…pdf` [PDF, image-only, transcribed]:

| Cohort | Dates | Full 200 Hrs | Module-1 Listen To Your Body | Module-2 Unwind & Letting Go | Module-3 Earth & Sky | Module-4 Replenish The Chi |
|---|---|---|---|---|---|---|
| 2026 Offline Bali | Oct 4 – 31, 2026 | Normal IDR 25.000.000 · EB IDR 18.000.000 | 4–9 Oct 2026 | 12–16 Oct 2026 | 19–23 Oct 2026 | 26–30 Oct 2026 |
| 2027 Offline Bali | Apr 4 – May 1, 2027 | same | 4–9 Apr 2027 | 12–16 Apr 2027 | 19–23 Apr 2027 | 26 Apr – 1 May 2027 |
| 2027 Offline Bali | Oct 3 – 30, 2027 | same | 3–8 Oct 2027 | 11–15 Oct 2027 | 18–22 Oct 2027 | 25–30 Oct 2027 |

Per-module price (all cohorts): Modules 1–3 cost EB IDR 5.500.000 (Normal IDR 6.500.000). Module 4 costs EB IDR 6.500.000 (Normal IDR 7.500.000).
Venue: "Yin Yoga World (Google)". Language: English or Indonesia. Includes: Module Pack, Certificate, T-Shirt\*, Lunch, Coffee break, Snack (the asterisk has no footnote). Excludes: Accomodation [sic].

**Wix Bookings service** (`/book-online`, `/service-page/yoga-ttc-200-hrs`) [TEXT]: "Yoga TTC 200 hrs · Yin Yang Yoga Teacher Training 200 Hrs Bali · **Rp 16.000.000**" · location "Jalan Dharmawangsa". Status: "This service is not available, please contact for more information." Description: "Embark your yoga journey with 200hours Yin Yang Yoga Teacher Training by Yin Yoga World in the heart of serene paradise: Bali Island! We specializes [sic] in yoga teacher training based on Functional Yoga with a special touch of Traditional Chinese Medicine and Tantra Yoga Philosophy. Don't miss early bird price. Enroll now!"

### 2.2 Module descriptions (shared across Bali, Jakarta and Online)

From the "A Brief Description Of Module 1 – 4" PDF [PDF] and the module glimpse PDFs. Full text is in `content/pdf-text/`.

- 200 Hrs = 4 short modules × 50 Hrs. Modules can be taken independently (one or two modules), for example by existing teachers.
- Overall curriculum: basic Yin Yoga for teaching, asana lab per pose, guided practice, Yin Yoga theory, Traditional Chinese Medicine, an introduction to Ayurveda, the emotional side of practice, and yoga philosophy based on Tantra Yoga.
- **Module-1 "Listen To Your Body"**: the basic principles of Yin (physical and energetic body), 12 meridians (TCM), meridian characteristics and symptoms, Five Elements, the meridian body clock, assisted Yin, Cakra Balancing Therapy, poses by meridian, anatomy (lower body and spine), sequencing, and Ayurvedic constitution.
- **Module-2 "Unwind & Letting Go"**: pranayama, Meridian Nidra (introduced by teacher Jo Phee), Ayurveda diet, myofascial release, fascia theory, sequencing (Yin and Yin-Yang), and anatomy.
- **Module-3 "Earth & Sky"**: the balance of Yin and Yang, the emotional side, joint anatomy, an introduction to prenatal yoga, pranayama safe in pregnancy, emotion and disease (TCM), Yin and Yang yoga, an introduction to Hatha-Vinyasa, and wall Yin practice.
- **Module-4 "Replenish The Chi"**: meditation and stillness, yoga philosophy (Tantra), and an introduction to Yoga Nidra.

Homepage teaser copy [TEXT]: "A little explanation about each module, so throughout the four short modules or 200 hrs for the whole, we will learn about the basic yin yoga for teaching…" (it links to a **404 PDF**).

### 2.3 Yin Yoga TTC 200 Hrs: Online Recording (`/ttc-online-recording`)

[TEXT] Key facts:

- The program consists of 4 modules × 50 Hrs. It is recorded in English and Indonesian, and each module can be taken separately. All modules are required to get the international certificate from Yoga Alliance.
- About 80% of the material is recorded. Access lasts around 2–3 months. Live Zoom meetings of about 1–3 hours each are held 2–3 times per 50 Hrs module, at mutually agreed times.
- Requirements: open to all levels. Participants need a laptop or phone, should already know Yin Yoga (having attended classes), and need props: mat, bolster, 2 soft blocks and a rope.
- Format: private 1-on-1 or group.
- Participants get: a Guidebook (Module Book), 2–3 months of recording access, an e-certificate, direct access to the teacher via Zoom or email, and eligibility to register at Yoga Alliance (registration fee not included).

**Rates [IMG-TEXT]** ("RATES copy.jpg", `854627_ef98b8b7…`): RATES · TTC RECORDING ONLINE 200 HRS PROGRAM · Module-1 (50 HRS): IDR 6.000.000 · Module-2: IDR 6.000.000 · Module-3: IDR 6.000.000 · Module-4: IDR 6.750.000.

**Group offer [IMG-TEXT + PDF]**: "25% OFF FOR GROUP OF 3 OR MORE" · 3 YOGIS: IDR 13.500.000 / US$ 834 for each module of 1–3; IDR 15.200.000 / US$ 938 for module 4. (These equal 3 × the rate − 25%, so they are totals for 3 people.)
Hero stickers [IMG-TEXT]: "ENGLISH & INDONESIA", "25% OFF FOR GROUP OF 3 OR MORE".
Hero copy [TEXT]: "Get ready to experience the ultimate quiet practice with Yin Yoga World! Our yoga teacher training are [sic] designed to help you unwind, destress, and find inner peace. Join us today and discover the amazing benefits of Yin Yoga!"
Teachers listed: Yuni (Lead teacher), Made Agus (Thai Yoga Massage Teacher).

### 2.4 Program Online Live Zoom (`/ttc-online-live-zoom`), in Indonesian

[TEXT] Q&A: *Apa itu TTC Live Online?* (TTC held online using Zoom). *Bagaimana cara melakukannya?* (Prepare a gadget, a quiet room, props: mat, 2 soft blocks, bolster, rope, blanket; good internet; an external microphone recommended for teaching practice, but not required). *Apa keuntungan…?* (Cheaper, no travel or accommodation costs; same class as offline; recordings available for review).

**Current listing [TEXT]:**

- Yin Yoga Teacher Training 100 Hrs | Module-7 "Into The Stillness", by RYS Yin Yoga World.
- Date/Time: **December 9 – 20, 2026**, 8am–5pm WIB (2 days off).
- Module 7 · Live Online by Zoom · 100 Hrs.
- **Price: Rp. 13.000.000.**
- Facilities (Fasilitas): Module book and certificate. ✅ Yoga Alliance (RYT 300 Program).
- Materi: yin yoga theory and practice; mindfulness meditation; the functions of the 6 Yin organs, 6 Yang organs and 6 extraordinary organs; organ–emotion relationships; acupoints; spinal anatomy; asanas and their organ relationships; Thai Yoga massage.
- Registration: Yin Yoga World 08133 8080 993.

Embedded YouTube testimonials: "Testimony Into The Stillness, YTT Modul 7 By Ratu Helena" (yiRzFk8rv60), "TESTIMONY INTO THE STILLNESS By Dedeh" (qj4fGoUC7a4).

### 2.5 Program Offline Indonesia (`/ttc-offline-bahasa-indonesia`), in Indonesian

[TEXT] Intro: "Hello yogis. Na'ma'ska'r. Program ini diperuntukkan bagi calon peserta yang ingin mengikuti secara offline…" (offline TTC, workshops and special classes in Indonesian cities, taught in Indonesian; limited slots).

| Event | Date / time | Venue | Price | Notes |
|---|---|---|---|---|
| Yin Yoga Special Class Jakarta: "AcuYin: Touch to Flow" (Yin Yoga with Applied Acupressure) by Nyoman Wahyuni | Monday 23 November 2026, 9–11am WIB | Houm Yoga Jakarta Selatan | Rp. 300.000 | Bonus: acupressure stick + Thai Yoga Massage demo (ZenThai Shiatsu) by Made Agus. "Limited seat" |
| YTT 50 Hrs Module-2 Jakarta 2026 "Unwind and Letting Go" | November 18 – 22, 2026, 8am–5pm WIB | Houm Yoga, Jakarta Selatan | Rp. 7.000.000 | |
| YTT 50 Hrs Module-3 Jakarta 2027 "Earth & Sky" | January 20 – 24, 2027, 8am–5pm WIB | Houm Yoga, Jakarta Selatan | Rp. 7.250.000 | |
| YTT 50 Hrs Module-1 Jakarta 2027 "Listen to Your Body" | May 26 – 30, 2027, 8am–5pm WIB | "Jakarta Selatan" (no studio named) | Rp. 7.250.000 | |

Registration for all of these: Yin Yoga World 08133 8080 993 · Debbie +62 815-9224-007 · Deece +62 812-1283-323. Each event has a 4:5 flyer image that repeats the text facts.

### 2.6 Price and fact conflicts to resolve (summary; details in 08)

1. Bali 200 Hrs: the Wix booking service says **Rp 16.000.000**, while the poster and PDF say **EB 18.000.000 / Normal 25.000.000**.
2. Bali maximum group size: the poster and T&C version B say **6**; T&C version A says **15**.
3. Full-refund cancellation window: "Why Us" says **60 days**, T&C B says **45 days**, T&C A says **30 days**.
4. Early-bird full payment deadline: the homepage text and T&C B say **45 days** before; T&C A says **30 days**.

---

## 3. Policies

**Homepage "Term & Condition — Fees & Payment Rule" [TEXT + IMG-TEXT heading]:**
> To be officially registered as a prospective participant, a payment of 30% of the total training price is required, due to limited slot up to 6 participants. This is a shared commitment between the Student and Yin Yoga World regarding the training program. An early accepted registration guarantees the Student's enrollment and provided the threshold minimum number of students is reached by the registration deadline, ensures the training proceeds as scheduled. The balance, if any, will be due and payable as stipulated, typically 30 days prior to the program's start. To receive the early bird registration fee, the entire enrollment fee must be paid in full 45 days before the training begins. The amount of money we receive is according to the price of TTC. This means that all money transfer costs are borne by prospective TTC participants.
Followed by a "read more" link to T&C PDF B and a "RISK FREE" badge.

**T&C PDF B** (`854627_8800170637…`) cancellation policy:

1. Cancellation ≥45 days before: the advance deposit is refunded.
2. Cancellation 45–30 days before: 50% of the total fee is forfeited (a deposit-only payment is forfeited entirely).
3. Cancellation <30 days before, or inability to continue: 100% is lost.
4. Refunds are processed within 30 days of approval.

**T&C PDF A** (`854627_23e5b0e5…`, linked from an icon in the same section) has different terms: max 15 participants, EB payment 30 days before, full refund ≥30 days, 50% forfeit at 30–15 days, 100% forfeit <15 days, plus a clause for a fair partial refund when withdrawing for illness or accident.

**"Why Us" › Enroll Risk free [IMG-TEXT]:** "Once registered, and any cancellation 60 days prior the training, we will refund your advance deposit to your appointed account, Bank transfer fee will be borned [sic] by students."

**Payment methods (FAQ) [TEXT]:** Bank Transfer, Wise or PayPal ("Please chat Made Agus").

---

## 4. Homepage copy, in original section order

The full verbatim text is in `content/raw-text/home.txt`. Summarised by section:

1. **Hero** [IMG-TEXT poster + video]: animated "TTC OFFLINE" pill (a video), the 2027 schedule poster (§2.1), a "View detail" link (PDF), three stacked testimonial video clips ("TESTIMONY BY PIA", …, "YIN YOGA TEACHER TRAINING BALI 2024 · TESTIMONY TTC 200 HRS BY NINA"), and a "More on youtube" link.
2. **RYS intro card** [IMG-TEXT]: "RYS 200 Yoga Alliance — The sun shines full of joy. Aren't you excited? — Let's Start Your Yoga Teacher Training Today — Yin Yoga World is a Registered Yoga School (RYS) with Yoga Alliance. All students who have graduated from our school have the right to apply to become Registered Yoga Teacher RYT 200 and RYT 300 at Yoga Alliance International", with RYS 300, E-RYT 500 and YACEP badges. Links to a **404 PDF**.
3. **Telling Stories** [IMG-TEXT title "TELLING STORIES"] plus script text [TEXT] "Journey To The Self" and a feature video.
4. **About: RYS Yin Yoga World** [TEXT], verbatim:
   > Yin Yoga World was founded in 2013 after Nyoman Wahyuni E-RYT500 or known as Yuni completed Yin Yoga Teacher Training by Jo Phee at Yinspiration. Then in June 2017 it was registered with Yoga Alliance USA. From 2017 until now Yin Yoga World actively provides workshops and teacher training in Indonesia. During the pandemic time, we had more classes online. Then, we start TTC and Offline Workshops in 2023. Currently, we have RYS200 and RYS300. This means, if you take the two programs above, students are eligible to be registered as RYT500 from Yoga Alliance. Under RYS Yin Yoga World, we also do TTC Wheel Yoga and TTC Qi Gong. Everything is based on Functional Yoga. We hope in the years to come we can continue to share both locally and globally. *Google Review* (link)

   **Nyoman Wahyuni E-RYT500, "Yuni – Lead Teacher"** [TEXT]: introduced to yoga 20 years ago; trained in Tantra, Hatha and Prenatal yoga; teaching since 2007. Attended a Yin Yoga workshop in 2012, then the Yinspiration 200 hrs Yin TT in Ubud (2013). Completed the 300 hrs Speciality with Yinspiration; a 500 hrs "Certified Yinspiration Teacher"; assists Jo Phee and serves as a Mentor Teacher for Yinspiration. Lives in Bali and travels across Indonesia. Link: "more detail" (PDF bio).

   **Made Agus, "ZenThai Shiatsu"** [TEXT]: started yoga about 22 years ago at Ananda Marga Tantra Yoga; "teaching yoga is a universal call for sharing the kindness"; in 2012 took Thai Yoga Massage training (99 hour certificate from Gwyn Williams, Zen Thai Shiatsu); LinkedIn link; "read more" (PDF bio).
5. **What you will learn** [IMG-TEXT heading]: module teaser paragraph (§2.2), "Read more" (PDF), and the 4 module cover posters with captions "A Glimpse of Module-1: Listen To Your Body", "…Module-2: Unwind & Letting Go.", "…Module-3: Earth & Sky.", "…Module-4: Replenish The Chi." (each links to a PDF), then the "VENUE LOCATION" button (Google Maps).
6. **Term & Condition** (§3), with a graduation photo, a "RISK FREE" badge and a video.
7. **Why Us** [IMG-TEXT, single image]:
   - **Flexible Program**: "Under certain conditions, if you are unable to attend, you will still receive the material via recording access."
   - **Professional**: "More than 6 years of school experience"
   - **Yoga Alliance**: "Graduates are internationally certified by Yoga Alliance"
   - **Affordable**: "Affordable Tutorial Fee"
   - **Flexible Accomodation** [sic]: "You can choose your accomodation based on your budget and preference yourself"
   - **Complete Program**: "Complete & structured program that you can use for your teaching experience"
   - **Enroll Risk free**: see §3
8. **Testimonials: "What impressed them"** [IMG-TEXT heading]: 12 YouTube embeds (§6.1) plus a "Watch more" link.
9. **FAQ: "Frequently Asked Question"** [TEXT, shown as a static list rather than an accordion], verbatim Q&A:
   - *Does this TTC program include accommodation?* No. You can book a homestay or hotel close to the Yoga Studio/Venue. Very easy to find, because our location is located at tourism area. And you can use online transportation (Gojek or Grab) to reach Yin Yoga World.
   - *Will I get a Yoga Alliance certificate?* Certificate will be given by RYS Yin Yoga World. And if you wish to register Yoga Alliance International (USA), then you can use the certificate as a reference. The cost of registering with Yoga Alliance is completely borne by you.
   - *Does this TTC have to be taken Full Offline?* It's best to do our TTC Full Offline. However, due to certain reasons and if you're not being able to do that, an alternative is provided, namely a combination with the zoom recording class. Prices will adjust.
   - *Is this TTC entirely in English?* The language used depends on the type of participant. If there are participants who don't speak Indonesian (foreigners), we will use all English. Alternatively, if all participants speak Indonesian, we will use Indonesian. We don't use two languages simultaneously, and we also don't use translators.
   - *Is this School accredited with Yoga Alliance?* Yes, RYS Yin Yoga World is a Registered Yoga School (RYS) with Yoga Alliance, which designates this teacher training program as one which follows Yoga Alliance's standards. *click here* (YA profile)
   - *What time do the classes start and how many days per week?* Our class will start 8am and end at 6pm. In the 22 days program, we will do classes 5 days a week. Every weekend there are 2 day off (holiday), every Saturday and Sunday. You can use it to rest, sightseeing, take a break and enjoy the beauty of Bali.
   - *Can you explain the rundown?* Yes, please check our example of rundown as follows: Day 1: 08.00–10.00 Introduction of Yin Yoga theory · 10.00–10.30 break · 10.30–12.30 asana lab and practice · 12.30–13.45 lunch break · 13.45–16.15 Meridian theory · 16.15–16.30 short break · 16.30–18.00 guided practice
   - *Do you have accommodation/ lodging references?* Yes. We are ready to help. Please chat Mey Lan
   - *Do I need to bring our own yoga props?* No. We Provide everything including: yoga mat, soft block, yoga rope, bolster, notes, and pen. However, you can bring your favorite yoga mat if you want.
   - *How do I pay?* You can make payment by Bank Transfer, Wise or PayPal. Please chat Made Agus
10. **Lovely Team** [TEXT] (this is the page's only H1):
    - **Made Agus**, "Teacher, Photographer & Videographer": "Apart from being a Thai Yoga Massage teacher, during TTC you will often meet Made. Made will carry out documentation and help with all technical stuff in the studio. Made is simple, multi-talented and "straight to the point", effective in ensuring that all matters can be handled well. For registration and information about TTC, please contact Made Agus Wirayasa at this number: WhatsApp message +(62) 8133-8080-993"
    - **Mey Lan**, "Marketing, Graphic Designer & Social Media": "Mey Lan is our marketing, as well as admin on Yin Yoga World social media. Her personality is agile, cheerful and always optimistic. With a social style that is sincere and full of jokes, you will quickly feel friendly and comfortable. You can also ask Mey Lan many things, such as recommendations for accommodation, vacation spots, transportation, etc. For registration and information about TTC, please contact Mey Lan at this number: WhatsApp message +(62) 8133-7927-993"
11. **Contact block** [TEXT]: "Na'ma'ska'r · RYS Yin Yoga World · Nusa Dua, Bali - Indonesia · + (62) 8133 8080 993 · info.yinyogaworld@gmail.com", social icons, the "VENUE LOCATION" button, and a form (First Name, Last Name, Email\*, Message, Send).
12. **Footer**: "© by Yin Yoga World."

---

## 5. Navigation labels (as published)

- **Desktop header:** TTC 200Hrs Bali (→ `/`) · TTC Online Recording · Program Online Live Zoom · Program Offline Indonesia · Google Review · Contact (→ `/`, anchor) · More ▸ [Blog, Instagram]. Header also has a "Search..." field and a "Log In" button.
- **Mobile menu:** TTC 200Hrs Bali · TTC Online Recording · Program Online Live Zoo[m] · Program Offline Indonesi[a] (both truncated) · Google Reviews (plural here) · Testimony (→ `/`) · Instagram · Blog · **Blog Indonesian (→ http://yinyogaworld.com/, now a gambling site; see 08 §1)** · Contact. Also Log In.

---

## 6. Testimonials and social proof

### 6.1 YouTube testimonial embeds on the homepage (titles as shown by YouTube)

| # | Title | Video ID |
|---|---|---|
| 1 | Joanna Testimony TTC 200 Hrs Bali - 2025 | F3oCSKOpb9s |
| 2 | Brianna Testimony TTC 200 Hrs Bali - 2025 | Hsi0eDZel5o |
| 3 | Testimony Yin Yoga TTC200 Hrs Batch#1 2025 By: Rezzy | QdTXGP8KhbQ |
| 4 | Testimony TTC200 Hrs Batch#1 2025 By: Lila | IYPCeZu7Zyg |
| 5 | Testimony Yin yoga TTC 200Hrs Bali 2024 By: Gizel | LWVbu3BIr_I |
| 6 | Testimony Yin yoga TTC 200Hrs Bali 2024 By: Petch | PzOxH0Ey3Yk |
| 7 | Testimony TTC 200 By Ajnamukti | rXUnTwiihPs |
| 8 | TESTIMONY BY: JADE | VHOiE2yzRv4 |
| 9 | TESTIMONY BY: DANNI | myn3mfHHhUg |
| 10 | Testimony Yin Yoga Special Class by Zuleyka | RxWY5OcTGf4 |
| 11 | Testimony Yin Yoga Special Class by Yasin | H5vqpYZs-5c |
| 12 | Testimony Yin Yoga Special Class by Judy | RQD5c49VyFs |

There are also 3 Wix-hosted testimonial clips in the hero (Pia, an unnamed second clip, Nina) and 2 YouTube embeds on the Live Zoom page (§2.4).

### 6.2 Google reviews (`/review`) [WIDGET]

An Elfsight "Google Reviews" widget inside a Wix HTML iframe. 20 reviews loaded at capture time (2 months to 11 months old). Text is saved in `content/google-reviews-snapshot.json`. The aggregate rating and total count were not shown in the widget layout captured. **These are live third-party data, not site content.** Phase 2 should use a live integration, or excerpts the client has explicitly approved.

---

## 7. Blog / editorial

- 40 published posts (sitemap = rendered list = 40). All are by **Made Agus**, dated **Jan 15, 2024 → Oct 14, 2025**, 1–3 min reads (~108–609 words). Index: [data/blog-posts-index.csv](data/blog-posts-index.csv). Verbatim text: `content/raw-text/post_*.txt`.
- Categories (as listed on category pages): 200Hrs Teacher Training (20), Module 1 Listen To Your Body (6), Module 2 Unwind & Letting Go (1), Yin Yoga Special Class (1). Twelve posts are uncategorised. Category pages show no visible H1.
- Character: short reflective journal notes from TTC days (e.g. "Day 3 TTC…", "Catatan Yin Yoga TTC Modul-2", "From Yin Yoga TTC200 Hrs – Bali (Sept 28 – Oct 25, 2025)"). Two or three posts are in Indonesian or mixed language ("Life Beyond Perception", "Yin Yoga Teacher Training 50 Hrs in Batam", "Yin Yoga Special Class Jakarta").
- Engagement shown: view counts in single or double digits (2–38), 0 comments on all, and a star rating widget showing "No ratings yet".
- Two near-duplicate titles: "Return Again." (`/post/return-again`, Jan 24, 2024) and "Return Again" (`/post/return-again-1`, Apr 22, 2024).

---

## 8. Content priority notes for Phase 2

| Priority | Content |
|---|---|
| **Essential** | Program list (Bali 200 Hrs and modules, Online Recording, Live Zoom Module-7, Jakarta modules and special class), confirmed dates and prices, inclusions and exclusions, venue and map, the WhatsApp and email contacts, the Yoga Alliance RYS status with profile link, lead teacher bio (Yuni), T&C and cancellation (a single confirmed version), FAQ, testimonials (video) |
| **Important** | About and history, Made Agus bio, team (Mey Lan), module descriptions, Why Us (rewritten as real text, facts unchanged), Google reviews link or integration, social links |
| **Can be condensed** | Long Online Recording "Why TTC Recording Online?" paragraphs; duplicated module text (home + recording page + PDFs); flyer images that repeat page text; the 12-video testimonial wall (could use fewer up front with a link to the playlist) |
| **Low priority / review** | Blog (40 short posts, low engagement), Plans & Pricing (empty), Book Online (service unavailable), Wix member Log In, site search |
| **Do not carry over** | "Blog Indonesian" link (compromised domain), the broken PDF links, outdated pricing on the booking service, the "Hello Pino" prefill, the Wix stock background videos |
