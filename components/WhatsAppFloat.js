import { contacts, whatsappLink, defaultEnquiry } from '@/lib/site';
import { WhatsAppIcon } from './Icons';
import styles from './WhatsAppFloat.module.css';

// A plain link to WhatsApp. It never opens a chat card over the page.
export default function WhatsAppFloat() {
  return (
    <a
      className={styles.float}
      href={whatsappLink(contacts.made.whatsapp, defaultEnquiry)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Made Agus on WhatsApp (opens WhatsApp)"
    >
      <WhatsAppIcon />
    </a>
  );
}
