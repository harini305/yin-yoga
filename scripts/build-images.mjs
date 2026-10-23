// Generates pre-sized WebP derivatives from the original Wix assets.
// Next.js image optimisation is disabled (images.unoptimized), so the site ships these files directly.
// Usage: npm run images
import sharp from 'sharp';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

const ROOT = path.resolve(import.meta.dirname, '..');
const SRC = path.join(ROOT, 'assets-source', 'originals');
const OUT = path.join(ROOT, 'public', 'images');
const MANIFEST = path.join(ROOT, 'lib', 'images.json');

// name -> original file (Wix media ID kept as the source filename), optional crop, output widths
const IMAGES = {
  'hero-shala': { src: '854627_c7a6e0a663d44f00a5008107e98ef2bd~mv2.jpg', widths: [640, 1024, 1600, 2200] },
  'graduates-shala': { src: '854627_a27fdc8bd9014644ad8469b4b90b3654~mv2.jpg', crop: [0, 0, 2000, 1528], widths: [640, 1024, 1600] },
  'practice-lunge': { src: '854627_ba58bdd42b3e42748ea6200b35d3533a~mv2.jpg', widths: [640, 1024, 1600, 2200] },
  'practice-laughing': { src: '854627_a15e6d2c070f4ec39d08b0563b2a0d2d~mv2.jpg', widths: [640, 1024, 1600] },
  'practice-mural': { src: '854627_a91b8e5097b248f69a80e0422d645b0e~mv2.jpg', widths: [640, 900] },
  'practice-bolster': { src: '854627_182fedfd82874bffa0ad64c7f999c9f3~mv2.jpg', widths: [640, 1000] },
  'teaching-notes': { src: '854627_617155a65da047e1bdf0cea44144ff56~mv2.jpg', widths: [640, 1024, 1600] },
  'teacher-savasana': { src: '854627_e382ce3c68414880b1c81c37e72f15ae~mv2.jpg', widths: [480, 800, 1200] },
  'garden-group': { src: '854627_bc99291e447b4f839956871213479a1e~mv2.jpg', widths: [640, 1000] },
  'graduation-certificate': { src: '854627_b1293ae9a0a94857985d473977b61fb7~mv2.jpg', widths: [480, 900] },
  'jakarta-group': { src: '854627_92532d71b4e54b7ebf32d5e4d347c7d1~mv2.jpg', trim: true, widths: [640, 1024, 1600] },
  'online-module-book': { src: '854627_0f5781045e6f47228f3800b3494a0904~mv2.jpg', trim: true, widths: [640, 1024, 1600, 2200] },
  'online-zoom-session': { src: '854627_bb095a9cdda54a70a4d609420f3688c3~mv2.jpg', widths: [480, 800] },
  'module-1': { src: '854627_5ab0313939174c6aafa049b3a255f3b2~mv2.jpg', widths: [360, 720] },
  'module-2': { src: '854627_89371dee2d2c42d4adb67d554e0e8b00~mv2.jpg', widths: [360, 720] },
  'module-3': { src: '854627_b04e7038f4514da0b0bda512f5f5affe~mv2.jpg', widths: [360, 720] },
  'module-4': { src: '854627_a0d6c291307941c8a64f76663efc00f5~mv2.jpg', widths: [360, 720] },
  'module-7-flyer': { src: '854627_cfe9e082a2d54332af3f603542c71484~mv2.jpg', widths: [480, 800] },
  'portrait-yuni': { src: '854627_6667fa44793c422cae3fd4480f611b3e~mv2.png', widths: [320, 640] },
  'portrait-made-thai': { src: '854627_d4be177c33954613aa10b6641695ffa1~mv2.png', widths: [320, 640] },
  'portrait-meylan': { src: '854627_7a993ad4d31247d09781ef4475c704d6~mv2.png', widths: [320, 640] },
  'logo': { src: '854627_1732f8c3fe9b4d4e9fe2d00b90e82d7c~mv2.png', widths: [96, 192] },
  'yt-F3oCSKOpb9s': { src: 'youtube/F3oCSKOpb9s.jpg', widths: [480, 960] },
  'yt-Hsi0eDZel5o': { src: 'youtube/Hsi0eDZel5o.jpg', widths: [480, 960] },
  'yt-QdTXGP8KhbQ': { src: 'youtube/QdTXGP8KhbQ.jpg', widths: [480, 960] },
  'yt-yiRzFk8rv60': { src: 'youtube/yiRzFk8rv60.jpg', widths: [480] },
  'yt-qj4fGoUC7a4': { src: 'youtube/qj4fGoUC7a4.jpg', widths: [480, 960] },
};

// Start clean so renamed or removed images never linger as duplicates
fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });
const manifest = {};

for (const [name, cfg] of Object.entries(IMAGES)) {
  const file = path.join(SRC, cfg.src);
  if (!fs.existsSync(file)) {
    console.warn(`missing original: ${cfg.src}`);
    continue;
  }
  let base = sharp(file).rotate();
  if (cfg.crop) {
    const [left, top, width, height] = cfg.crop;
    base = base.extract({ left, top, width, height });
  }
  let buffer = await base.toBuffer();
  // Some originals have a white frame baked in around the photo
  if (cfg.trim) buffer = await sharp(buffer).trim({ background: '#ffffff', threshold: 18 }).toBuffer();
  const meta = await sharp(buffer).metadata();
  const widths = cfg.widths.filter((w) => w <= meta.width);
  if (!widths.length) widths.push(meta.width);

  // The content hash in each filename lets browsers and the CDN cache the file for a year (see next.config.mjs)
  const files = {};
  for (const w of widths) {
    const out = await sharp(buffer)
      .resize({ width: w, withoutEnlargement: true })
      .webp({ quality: name.startsWith('module') ? 82 : 76, effort: 5 })
      .toBuffer();
    const hash = crypto.createHash('sha1').update(out).digest('hex').slice(0, 8);
    files[w] = `${name}-${w}.${hash}.webp`;
    fs.writeFileSync(path.join(OUT, files[w]), out);
  }
  manifest[name] = { width: meta.width, height: meta.height, widths, files, source: cfg.src };
  console.log(`${name}: ${widths.join(', ')}`);
}

// Favicon / app icons and the share image (Next.js file conventions in app/)
const logo = path.join(SRC, IMAGES.logo.src);
await sharp(logo).resize(96, 96).png({ compressionLevel: 9, palette: true }).toFile(path.join(ROOT, 'app', 'icon.png'));
// favicon.ico (a single 32px PNG inside an ICO container) answers browsers' automatic /favicon.ico request
const ico = await sharp(logo).resize(32, 32).png({ palette: true }).toBuffer();
const header = Buffer.alloc(22);
header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(1, 4);
header.writeUInt8(32, 6); header.writeUInt8(32, 7); header.writeUInt16LE(1, 10); header.writeUInt16LE(32, 12);
header.writeUInt32LE(ico.length, 14); header.writeUInt32LE(22, 18);
fs.writeFileSync(path.join(ROOT, 'app', 'favicon.ico'), Buffer.concat([header, ico]));
await sharp(logo).resize(180, 180).flatten({ background: '#ffffff' }).png().toFile(path.join(ROOT, 'app', 'apple-icon.png'));
await sharp(path.join(SRC, '854627_52aaccae22ee44d0a5b539cead118512~mv2.jpg'))
  .resize(1200, 630, { fit: 'cover' })
  .jpeg({ quality: 82 })
  .toFile(path.join(ROOT, 'app', 'opengraph-image.jpg'));

fs.writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + '\n');
console.log(`wrote ${Object.keys(manifest).length} images`);
