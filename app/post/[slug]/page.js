import Link from '@/components/Link';
import { notFound } from 'next/navigation';
import Img from '@/components/Img';
import { ArrowIcon } from '@/components/Icons';
import posts from '@/lib/posts.json';
import images from '@/lib/images.json';
import styles from './page.module.css';

export const dynamicParams = false;

// Largest generated width up to 1200px, a good size for social share previews
function shareImage(name) {
  const meta = images[name];
  const width = [...meta.widths].reverse().find((w) => w <= 1200) ?? meta.widths[0];
  return meta.files[width];
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.paragraphs[0].slice(0, 155),
    alternates: { canonical: `/post/${post.slug}` },
    openGraph: { type: 'article', images: [`/images/${shareImage(post.image)}`] },
  };
}

export default async function PostPage({ params }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const others = posts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <article className={styles.article}>
        <header className={`container container--narrow ${styles.header}`}>
          <Link href="/blog" className={styles.back}>
            Journal
          </Link>
          <h1 data-reveal="">{post.title}</h1>
          <p className={styles.meta} data-reveal="">
            {post.author} · <time dateTime={post.isoDate}>{post.date}</time> · {post.readTime}
          </p>
        </header>

        <div className={`container ${styles.cover}`} data-reveal="image">
          <div className="media">
            <Img name={post.image} alt="" sizes="(min-width: 1100px) 1000px, 100vw" priority />
          </div>
        </div>

        <div className={`container container--narrow ${styles.body}`}>
          {post.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </article>

      <section className={`section section--sand ${styles.more}`}>
        <div className="container">
          <h2 className={styles.moreTitle}>More from the journal</h2>
          <ul className={styles.moreList}>
            {others.map((p) => (
              <li key={p.slug}>
                <Link href={`/post/${p.slug}`}>
                  <span className={styles.moreDate}>{p.date}</span>
                  <span className={styles.moreName}>{p.title}</span>
                  <ArrowIcon width="20" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
