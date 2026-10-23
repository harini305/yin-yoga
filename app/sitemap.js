import posts from '@/lib/posts.json';
import { site } from '@/lib/site';

export default function sitemap() {
  const pages = ['', '/bali-200-hour-teacher-training', '/online-recording', '/indonesia', '/about', '/contact', '/blog'];
  return [
    ...pages.map((path) => ({ url: `${site.url}${path}`, changeFrequency: 'monthly', priority: path === '' ? 1 : 0.8 })),
    ...posts.map((p) => ({ url: `${site.url}/post/${p.slug}`, lastModified: p.isoDate, priority: 0.4 })),
  ];
}
