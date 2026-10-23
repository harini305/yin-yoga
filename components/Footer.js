import Link from '@/components/Link';
import { nav, site, contacts, socials, whatsappLink } from '@/lib/site';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.brand}>
          <p className={styles.name}>Yin Yoga World</p>
          <p>
            Registered Yoga School (RYS 200 and RYS 300) with Yoga Alliance, teaching Yin Yoga in Bali, across Indonesia and online
            since 2013.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className={styles.heading}>Explore</h2>
          <ul className={styles.list}>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={styles.heading}>Contact</h2>
          <ul className={styles.list}>
            <li>
              <a href={whatsappLink(contacts.made.whatsapp)} target="_blank" rel="noopener noreferrer">
                WhatsApp {contacts.made.display}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer">
                {site.address.short}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className={styles.heading}>Follow</h2>
          <ul className={styles.list}>
            {socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`container ${styles.base}`}>
        <p>© {new Date().getFullYear()} Yin Yoga World. Na&apos;ma&apos;ska&apos;r.</p>
      </div>
    </footer>
  );
}
