// Program facts from docs/source-audit/03-content-inventory.md §2 and the module PDFs (content/pdf-text).
// Deliberately absent until the client confirms them (08 §2): Bali 200 Hrs fees, group size,
// cancellation and early-bird windows, class hours and weekly schedule for Bali.

export const modules = [
  {
    number: 1,
    title: 'Listen To Your Body',
    image: 'module-1',
    summary:
      'The basic principles of Yin Yoga through the physical and the energetic body, using Traditional Chinese Medicine and an introduction to Ayurveda.',
    topics: [
      'The 12 meridians (energy pathways) of Traditional Chinese Medicine',
      'Characteristics of each meridian and the signs of imbalance',
      'The Five Elements and how they connect to the meridians',
      'The meridian body clock',
      'Yin Yoga poses based on the meridians',
      'Anatomy: lower body and spine',
      'Creating class sequences',
      'Your own constitution through the Five Elements of Ayurveda',
    ],
  },
  {
    number: 2,
    title: 'Unwind & Letting Go',
    image: 'module-2',
    summary:
      'The quieter, Yin side of the practice: Meridian Nidra, fascia and myofascial release, pranayama and Ayurvedic diet.',
    topics: [
      'Yin Yoga theory and daily practice, applying meridians and fascia theory',
      'Pranayama to improve the flow of energy in the body',
      'Meridian Nidra: relaxation with visualisation along the meridians',
      'Ayurveda: diet patterns suited to your body type',
      'Myofascial release',
      'Fascia theory',
      'Sequencing Yin Yoga and Yin-Yang Yoga classes',
      'Anatomy',
    ],
  },
  {
    number: 3,
    title: 'Earth & Sky',
    image: 'module-3',
    summary:
      'Finding the balance between Yin and Yang: joint anatomy, the emotional side of practice and an introduction to prenatal yoga.',
    topics: [
      'Joint anatomy',
      'Introduction to prenatal yoga',
      'Pranayama that is also safe during pregnancy',
      'Emotion and disease from a Traditional Chinese Medicine perspective',
      'The function of and relationship between Yin and Yang Yoga',
      'Introduction to Hatha-Vinyasa sequences',
      'Wall Yin practice',
    ],
  },
  {
    number: 4,
    title: 'Replenish The Chi',
    image: 'module-4',
    summary:
      'Silence, calm and contemplation: meditation, yoga philosophy based on Tantra Yoga, Yoga Nidra and Thai Yoga Massage.',
    topics: [
      'A quieter and quieter Yin Yoga practice',
      'Meditation and pranayama: theory and practice',
      'Yoga philosophy, including the eight limbs of yoga',
      'Bio-psychology of yoga: glands and chakra theory',
      'Yoga Nidra: theory and practice',
      'Thai Yoga Massage with Made Agus Wirayasa',
      'Sequencing a Yin Yoga class',
    ],
  },
];

// Bali "Home TTC 200" cohorts from the schedule poster and the Program & Pricing PDF
export const baliCohorts = [
  {
    id: 'bali-2026-oct',
    label: 'October 2026',
    start: '2026-10-04',
    end: '2026-10-31',
    range: '4 – 31 October 2026',
    modules: ['4 – 9 Oct', '12 – 16 Oct', '19 – 23 Oct', '26 – 30 Oct'],
  },
  {
    id: 'bali-2027-apr',
    label: 'April 2027',
    start: '2027-04-04',
    end: '2027-05-01',
    range: '4 April – 1 May 2027',
    modules: ['4 – 9 Apr', '12 – 16 Apr', '19 – 23 Apr', '26 Apr – 1 May'],
  },
  {
    id: 'bali-2027-oct',
    label: 'October 2027',
    start: '2027-10-03',
    end: '2027-10-30',
    range: '3 – 30 October 2027',
    modules: ['3 – 8 Oct', '11 – 15 Oct', '18 – 22 Oct', '25 – 30 Oct'],
  },
];

export const baliIncluded = ['Certificate', 'Module pack', 'T-shirt', 'Lunch', 'Coffee break'];
export const baliProps = ['Yoga mat', 'Soft block', 'Yoga rope', 'Bolster', 'Notes and pen'];

export const onlineRates = [
  { module: 'Module 1 · Listen To Your Body', hours: '50 Hrs', price: 'IDR 6.000.000' },
  { module: 'Module 2 · Unwind & Letting Go', hours: '50 Hrs', price: 'IDR 6.000.000' },
  { module: 'Module 3 · Earth & Sky', hours: '50 Hrs', price: 'IDR 6.000.000' },
  { module: 'Module 4 · Replenish The Chi', hours: '50 Hrs', price: 'IDR 6.750.000' },
];

// Live Zoom and Offline Indonesia listings (the Jakarta programs are taught in Indonesian)
export const indonesiaEvents = [
  {
    id: 'jakarta-module-2-2026',
    format: 'In person · Jakarta',
    title: 'Yin Yoga Teacher Training 50 Hrs, Module-2',
    subtitle: 'Unwind and Letting Go',
    start: '2026-11-18',
    end: '2026-11-22',
    date: '18 – 22 November 2026',
    time: '8am – 5pm WIB',
    venue: 'Houm Yoga, Jakarta Selatan',
    price: 'Rp 7.000.000',
    contacts: 'jakarta',
  },
  {
    id: 'jakarta-special-class-2026',
    format: 'Special class · Jakarta',
    title: 'Yin Yoga Special Class Jakarta',
    subtitle: 'AcuYin: Touch to Flow',
    start: '2026-11-23',
    end: '2026-11-23',
    date: 'Monday 23 November 2026',
    time: '9am – 11am WIB',
    venue: 'Houm Yoga, Jakarta Selatan',
    price: 'Rp 300.000',
    notes: [
      'Yin Yoga with applied acupressure, by Nyoman Wahyuni',
      'Bonus: acupressure stick',
      'Thai Yoga Massage demo (ZenThai Shiatsu) by Made Agus',
      'Limited seats',
    ],
    contacts: 'jakarta',
  },
  {
    id: 'live-zoom-module-7-2026',
    format: 'Live online · Zoom',
    title: 'Yin Yoga Teacher Training 100 Hrs, Module-7',
    subtitle: 'Into The Stillness',
    start: '2026-12-09',
    end: '2026-12-20',
    date: '9 – 20 December 2026',
    time: '8am – 5pm WIB, with 2 days off',
    venue: 'Live online by Zoom',
    price: 'Rp 13.000.000',
    notes: ['Module book and certificate', 'Listed as part of the Yoga Alliance RYT 300 program'],
    topics: [
      'Yin Yoga theory and practice',
      'Mindfulness meditation theory and practice',
      'The functions of the 6 Yin organs, 6 Yang organs and 6 extraordinary organs',
      'How each organ relates to mental and emotional health',
      'Acupoints that can stimulate the Qi of an organ',
      'Anatomy of the spine',
      'How each Yin Yoga asana relates to the organs',
      'Thai Yoga Massage',
    ],
    contacts: 'main',
  },
  {
    id: 'jakarta-module-3-2027',
    format: 'In person · Jakarta',
    title: 'Yin Yoga Teacher Training 50 Hrs, Module-3',
    subtitle: 'Earth & Sky',
    start: '2027-01-20',
    end: '2027-01-24',
    date: '20 – 24 January 2027',
    time: '8am – 5pm WIB',
    venue: 'Houm Yoga, Jakarta Selatan',
    price: 'Rp 7.250.000',
    contacts: 'jakarta',
  },
  {
    id: 'jakarta-module-1-2027',
    format: 'In person · Jakarta',
    title: 'Yin Yoga Teacher Training 50 Hrs, Module-1',
    subtitle: 'Listen to Your Body',
    start: '2027-05-26',
    end: '2027-05-30',
    date: '26 – 30 May 2027',
    time: '8am – 5pm WIB',
    venue: 'Jakarta Selatan',
    price: 'Rp 7.250.000',
    contacts: 'jakarta',
  },
];

// Dates are compared in Indonesia (Asia/Jakarta) so a listing disappears the day after it starts
function todayInJakarta(now = new Date()) {
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Jakarta' }).format(now);
}

export function upcoming(items, now) {
  const today = todayInJakarta(now);
  return items.filter((item) => item.start > today);
}
