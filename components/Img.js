import images from '@/lib/images.json';

// Responsive <img> for the pre-sized WebP files in public/images (see scripts/build-images.mjs).
// Width and height come from the original so the browser reserves the right space before load.
export default function Img({ name, alt, sizes = '100vw', priority = false, className, style }) {
  const meta = images[name];
  if (!meta) throw new Error(`Unknown image: ${name}`);
  const largest = meta.widths[meta.widths.length - 1];
  const srcSet = meta.widths.map((w) => `/images/${meta.files[w]} ${w}w`).join(', ');

  return (
    <img
      src={`/images/${meta.files[largest]}`}
      srcSet={srcSet}
      sizes={sizes}
      width={meta.width}
      height={meta.height}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={priority ? 'high' : undefined}
      decoding="async"
      className={className}
      style={style}
    />
  );
}
