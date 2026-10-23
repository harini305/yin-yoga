import Link from '@/components/Link';
import { nav } from '@/lib/site';
import styles from './not-found.module.css';

export const metadata = {
  title: 'Page not found',
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className={styles.wrap}>
      <div className="container container--narrow">
        <p className={styles.code}>404</p>
        <h1>This page has moved on</h1>
        <p className="lead">
          The page you were looking for isn&apos;t here. Our website has been simplified, so some older pages now live in one place.
        </p>
        <div className="btn-row">
          <Link className="btn btn--primary" href="/">
            Back to home
          </Link>
          <Link className="btn btn--outline" href="/bali-200-hour-teacher-training">
            Bali teacher training
          </Link>
        </div>
        <ul className={styles.links}>
          {nav.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
