'use client';

import { useState } from 'react';
import { contacts, site, whatsappLink } from '@/lib/site';
import { WhatsAppIcon, MailIcon } from './Icons';
import styles from './EnquiryForm.module.css';

// No form backend has been confirmed, so this composes a message and hands it to WhatsApp
// or the visitor's email app. Nothing is sent from this website.
export default function EnquiryForm({ topics }) {
  const [values, setValues] = useState({ name: '', topic: topics[0], message: '' });
  const [errors, setErrors] = useState({});
  const [handedOff, setHandedOff] = useState(null);

  const update = (field) => (e) => {
    setValues((v) => ({ ...v, [field]: e.target.value }));
    setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const compose = () => {
    const lines = [`Hello Made, my name is ${values.name.trim()}.`, `I'm interested in: ${values.topic}.`];
    if (values.message.trim()) lines.push('', values.message.trim());
    return lines.join('\n');
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = 'Please enter your name.';
    setErrors(next);
    if (next.name) document.getElementById('enquiry-name')?.focus();
    return !next.name;
  };

  const openWhatsApp = () => {
    if (!validate()) return;
    window.open(whatsappLink(contacts.made.whatsapp, compose()), '_blank', 'noopener');
    setHandedOff('whatsapp');
  };

  const openEmail = () => {
    if (!validate()) return;
    const subject = `Enquiry: ${values.topic}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(compose())}`;
    setHandedOff('email');
  };

  return (
    <form className={styles.form} onSubmit={(e) => (e.preventDefault(), openWhatsApp())} noValidate>
      <div className={styles.field}>
        <label htmlFor="enquiry-name">Your name</label>
        <input
          id="enquiry-name"
          name="name"
          autoComplete="name"
          value={values.name}
          onChange={update('name')}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'enquiry-name-error' : undefined}
          required
        />
        {errors.name && (
          <p id="enquiry-name-error" className={styles.error}>
            {errors.name}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="enquiry-topic">I&apos;m interested in</label>
        <select id="enquiry-topic" name="topic" value={values.topic} onChange={update('topic')}>
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label htmlFor="enquiry-message">
          Your question <span className={styles.optional}>(optional)</span>
        </label>
        <textarea id="enquiry-message" name="message" rows={4} value={values.message} onChange={update('message')} />
      </div>

      <div className={styles.actions}>
        <button type="submit" className="btn btn--primary">
          <WhatsAppIcon />
          Continue in WhatsApp
        </button>
        <button type="button" className="btn btn--outline" onClick={openEmail}>
          <MailIcon />
          Continue by email
        </button>
      </div>

      <p className={styles.help}>
        This form doesn&apos;t send anything by itself. It prepares your message in WhatsApp (to Made Agus, {contacts.made.display})
        or in your email app (to {site.email}), and you press send there.
      </p>

      <p className={styles.status} role="status">
        {handedOff === 'whatsapp' && 'Your message is ready in WhatsApp. It is only sent once you press send there.'}
        {handedOff === 'email' &&
          `Your message is ready in your email app. If nothing opened, write to ${site.email} directly.`}
      </p>
    </form>
  );
}
