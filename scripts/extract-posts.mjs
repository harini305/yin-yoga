// Builds lib/posts.json from the verbatim post text captured in the Phase 1 audit.
// Only a small, curated set of the 40 original posts is kept (each with one original cover image).
// Usage: node scripts/extract-posts.mjs
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const RAW = path.join(ROOT, 'docs', 'source-audit', 'content', 'raw-text');

// slug (as on the original site) -> raw-text file stem and cover image name from lib/images.json
const POSTS = [
  { slug: 'understanding-the-art-of-teaching-yoga', file: 'post_understanding-the-art-of-teaching-yoga', image: 'teacher-savasana' },
  { slug: 'yin-yoga-an-ancient-tradition-of-transformations', file: 'post_yin-yoga-an-ancient-tradition-of-transformations', image: 'practice-bolster' },
  { slug: 'a-stunning-small-step', file: 'post_a-stunning-small-step', image: 'practice-lunge' },
  { slug: 'new-world-new-friends', file: 'post_new-world-new-friends', image: 'garden-group' },
  { slug: 'anatomy-our-body-is-created-unique-and-different-from-each-other-love-it', file: 'post_anatomy-our-body-is-created-unique-and-different-from-each-o', image: 'practice-mural' },
  { slug: 'day-3-yin-yoga-teacher-training-raise-your-energy-say-hi-to-the-beautiful-world', file: 'post_day-3-yin-yoga-teacher-training-raise-your-energy-say-hi-to-', image: 'hero-shala' },
  { slug: 'teaching-practice', file: 'post_teaching-practice', image: 'teaching-notes' },
];

const DATE_RE = /^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) \d{1,2}, \d{4}$/;
const WEEKDAY_RE = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), /;
const CATEGORIES = ['200Hrs Teacher Training', 'Module 1 Listen To Your Body', 'Module 2 Unwind & Letting Go', 'Yin Yoga Special Class'];

const out = POSTS.map(({ slug, file, image }) => {
  const text = fs.readFileSync(path.join(RAW, `${file}.txt`), 'utf8');
  const title = text.match(/^TITLE: (.+)$/m)[1].trim();
  const lines = text.split('=== RENDERED TEXT')[1].split('\n').map((l) => l.replace(/​/g, '').trim());

  const authorAt = lines.findIndex((l, i) => l === 'Made Agus' && DATE_RE.test(lines[i + 1] || ''));
  const date = lines[authorAt + 1];
  const readTime = lines[authorAt + 2];
  const start = lines.indexOf('No ratings yet', authorAt) + 1;
  // The body ends before the view counter; Wix also prints a long-form date and category labels just above it
  const end = lines.findIndex((l, i) => i > start && /^\d+ views?$/.test(l));
  const paragraphs = lines.slice(start, end).filter(Boolean);
  // Drop trailing Wix chrome: long-form date, category labels and hashtag tags (e.g. "teachertraining")
  const isChrome = (l) => WEEKDAY_RE.test(l) || CATEGORIES.includes(l) || /^[a-z]+$/.test(l);
  while (paragraphs.length && isChrome(paragraphs.at(-1))) paragraphs.pop();

  return { slug, title, author: 'Made Agus', date, isoDate: new Date(`${date} 12:00 UTC`).toISOString().slice(0, 10), readTime, image, paragraphs };
});

out.sort((a, b) => b.isoDate.localeCompare(a.isoDate));
fs.writeFileSync(path.join(ROOT, 'lib', 'posts.json'), JSON.stringify(out, null, 2) + '\n');
for (const p of out) console.log(p.isoDate, p.readTime, p.paragraphs.length, p.title);
