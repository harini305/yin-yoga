import EnquiryForm from '@/components/EnquiryForm';
import { MailIcon, PhoneIcon, PinIcon, WhatsAppIcon } from '@/components/Icons';
import { contacts, site, socials, whatsappLink, defaultEnquiry } from '@/lib/site';
import styles from './page.module.css';

export const metadata = {
  title: 'Contact',
  description: 'Contact Yin Yoga World on WhatsApp or email about the Bali, online and Jakarta Yin Yoga teacher trainings.',
  alternates: { canonical: '/contact' },
};

const topics = [
  'Bali 200 Hrs teacher training',
  'A single Bali module',
  'Online Recording training',
  'Live Zoom Module-7',
  'Jakarta programs',
  'Accommodation in Bali',
  'Something else',
];

export default function ContactPage() {
  return (
    <section className={styles.contact}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.info}>
          <h1 data-reveal="">Get in touch</h1>
          <p className="lead" data-reveal="">
            The quickest way to reach us is WhatsApp. Made Agus answers questions about the trainings and registration. Mey Lan can help with
            accommodation and travel.
          </p>

          <ul className={styles.channels} data-reveal="">
            <li>
              <WhatsAppIcon className={styles.icon} />
              <div>
                <p className={styles.channelName}>{contacts.made.name}</p>
                <p className={styles.channelRole}>{contacts.made.role}</p>
                <a href={whatsappLink(contacts.made.whatsapp, defaultEnquiry)} target="_blank" rel="noopener noreferrer">
                  {contacts.made.display}
                </a>
              </div>
            </li>
            <li>
              <WhatsAppIcon className={styles.icon} />
              <div>
                <p className={styles.channelName}>{contacts.meylan.name}</p>
                <p className={styles.channelRole}>{contacts.meylan.role}</p>
                <a href={whatsappLink(contacts.meylan.whatsapp, 'Hi Mey Lan, I have a question about staying in Bali for the teacher training.')} target="_blank" rel="noopener noreferrer">
                  {contacts.meylan.display}
                </a>
              </div>
            </li>
            <li>
              <MailIcon className={styles.icon} />
              <div>
                <p className={styles.channelName}>Email</p>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </div>
            </li>
            <li>
              <PhoneIcon className={styles.icon} />
              <div>
                <p className={styles.channelName}>Jakarta programs</p>
                <p className={styles.channelRole}>Registration by phone</p>
                {contacts.jakarta.map((c) => (
                  <a key={c.name} href={`tel:${c.tel}`} className={styles.block}>
                    {c.name} · {c.display}
                  </a>
                ))}
              </div>
            </li>
            <li>
              <PinIcon className={styles.icon} />
              <div>
                <p className={styles.channelName}>Studio in Bali</p>
                <address className={styles.address}>
                  {site.address.lines.map((l) => (
                    <span key={l}>{l}</span>
                  ))}
                </address>
                <a href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer">
                  Open in Google Maps
                </a>
              </div>
            </li>
          </ul>

          <p className={styles.socials} data-reveal="">
            Follow us on{' '}
            {socials.map((s, i) => (
              <span key={s.label}>
                <a href={s.href} target="_blank" rel="noopener noreferrer">
                  {s.label}
                </a>
                {i < socials.length - 2 ? ', ' : i === socials.length - 2 ? ' and ' : '.'}
              </span>
            ))}
          </p>
        </div>

        <div className={styles.formCol} data-reveal="">
          <h2 className={styles.formTitle}>Write your message</h2>
          <EnquiryForm topics={topics} />
        </div>
      </div>
    </section>
  );
}
