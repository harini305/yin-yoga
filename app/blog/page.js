import Link from '@/components/Link';
import Img from '@/components/Img';
import posts from '@/lib/posts.json';
import styles from './page.module.css';

export const metadata = {
  title: 'Journal',
  description: 'Notes from the Yin Yoga teacher training days in Bali, written by Made Agus of Yin Yoga World.',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <>
      <section className={styles.head}>
        <div className="container">
          <h1 data-reveal="">Journal</h1>
          <p className="lead" data-reveal="">
            Short notes from the teacher training days, written by Made Agus: what happened in the shala, and what it taught us.
          </p>
        </div>
      </section>

      <section className={styles.list}>
        <div className="container">
          <Link href={`/post/${featured.slug}`} className={styles.featured} data-reveal="">
            <div className={`media ${styles.featuredMedia}`}>
              <Img name={featured.image} alt="" sizes="(min-width: 900px) 50vw, 100vw" priority />
            </div>
            <div>
              <p className={styles.meta}>
                <time dateTime={featured.isoDate}>{featured.date}</time> · {featured.readTime}
              </p>
              <h2>{featured.title}</h2>
              <p className={styles.excerpt}>{featured.paragraphs[0]}</p>
            </div>
          </Link>

          <ul className={styles.grid}>
            {rest.map((p) => (
              <li key={p.slug} data-reveal="">
                <Link href={`/post/${p.slug}`} className={styles.card}>
                  <div className={`media ${styles.cardMedia}`}>
                    <Img name={p.image} alt="" sizes="(min-width: 900px) 30vw, (min-width: 600px) 45vw, 100vw" />
                  </div>
                  <p className={styles.meta}>
                    <time dateTime={p.isoDate}>{p.date}</time> · {p.readTime}
                  </p>
                  <h2 className={styles.cardTitle}>{p.title}</h2>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
