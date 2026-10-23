import Link from '@/components/Link';
import { contacts, site, whatsappLink, defaultEnquiry } from '@/lib/site';
import { WhatsAppIcon, MailIcon } from './Icons';
import styles from './ContactBand.module.css';

export default function ContactBand({
  title = 'Ready to start your training?',
  text = 'Message Made Agus on WhatsApp for current fees, available places and registration. Mey Lan can help with accommodation and travel questions.',
  message = defaultEnquiry,
}) {
  return (
    <section className={`section section--deep ${styles.band}`}>
      <div className={`container ${styles.grid}`}>
        <div data-reveal="">
          <h2>{title}</h2>
          <p className={styles.text}>{text}</p>
        </div>
        <div className={styles.actions} data-reveal="">
          <a className="btn btn--light" href={whatsappLink(contacts.made.whatsapp, message)} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            WhatsApp Made Agus
          </a>
          <a className="btn btn--outline-light" href={`mailto:${site.email}`}>
            <MailIcon />
            Email us
          </a>
          <Link className={styles.more} href="/contact">
            All contact options
          </Link>
        </div>
      </div>
    </section>
  );
}
