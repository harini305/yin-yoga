// Business details verified in docs/source-audit (03-content-inventory §1, 06 §1).
// Links were re-checked on 2026-10-23; see docs/phase-2/README.md for what still needs client confirmation.

export const site = {
  name: 'Yin Yoga World',
  legalName: 'RYS Yin Yoga World',
  url: 'https://www.yinyogaworld.yoga',
  description:
    'Yin Yoga teacher training in Bali by RYS Yin Yoga World: a 200-hour program in four 50-hour modules, with online and Jakarta options.',
  email: 'info.yinyogaworld@gmail.com',
  address: {
    lines: ['Perumahan Puri Bunga, Jl. Dharmawangsa Gg. Cerida No.19', 'Benoa, South Kuta, Badung Regency', 'Bali 80361, Indonesia'],
    short: 'Benoa, Bali, Indonesia',
    mapsUrl: 'https://maps.app.goo.gl/7xFQzKP8Ft8FpBiq6',
  },
};

export const contacts = {
  made: {
    name: 'Made Agus',
    role: 'Registration and TTC information',
    whatsapp: '6281338080993',
    display: '+62 813 3808 0993',
  },
  meylan: {
    name: 'Mey Lan',
    role: 'Accommodation, travel and general questions',
    whatsapp: '6281337927993',
    display: '+62 813 3792 7993',
  },
  // Jakarta registration contacts are published as phone numbers only
  jakarta: [
    { name: 'Debbie', tel: '+628159224007', display: '+62 815-9224-007' },
    { name: 'Deece', tel: '+628121283323', display: '+62 812-1283-323' },
  ],
};

// Only accounts that resolved to the business's own profile were kept
export const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/yinyogaworld/' },
  { label: 'YouTube', href: 'https://www.youtube.com/channel/UCrGHGVmMXofGOgQhyXGmBqA' },
  { label: 'X', href: 'https://x.com/yinyogaworld' },
];

export const youtubePlaylist = 'https://www.youtube.com/playlist?list=PLm20zUtQiaRvNFGsBr9n0jxb7RBKjpq-h';

export const nav = [
  { href: '/bali-200-hour-teacher-training', label: 'Bali 200 Hrs TTC' },
  { href: '/online-recording', label: 'Online' },
  { href: '/indonesia', label: 'Jakarta & Live Zoom' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Journal' },
  { href: '/contact', label: 'Contact' },
];

export function whatsappLink(number, text) {
  return text ? `https://wa.me/${number}?text=${encodeURIComponent(text)}` : `https://wa.me/${number}`;
}

export const defaultEnquiry = 'Hello Made, I would like information about the Yin Yoga teacher training.';
