import Link from '@/components/Link';
import Img from '@/components/Img';
import PageIntro from '@/components/PageIntro';
import ContactBand from '@/components/ContactBand';
import { ArrowIcon, WhatsAppIcon } from '@/components/Icons';
import { modules, onlineRates } from '@/lib/programs';
import { contacts, whatsappLink } from '@/lib/site';
import styles from './page.module.css';

export const metadata = {
  title: 'Online Recording 200 Hrs Yin Yoga Teacher Training',
  description:
    'Study the Yin Yoga World 200-hour teacher training online from recordings, in English or Indonesian, with live Zoom meetings and a module book for each 50-hour module.',
  alternates: { canonical: '/online-recording' },
};

const enquiry = 'Hello Made, I would like information about the Online Recording Yin Yoga teacher training.';

const howItWorks = [
  ['About 80% recorded', 'Most of the material is taught through recordings that you study yourself, and can play back whenever you like.'],
  ['2–3 months of access', 'Long enough to fit the learning around your work and daily life.'],
  ['Live Zoom meetings', 'Two to three meetings of about 1–3 hours for each 50-hour module, at a time agreed together, to discuss tasks and questions.'],
  ['Private or group', 'Follow the program 1-on-1 or as a group, especially for the live Zoom meetings.'],
];

const youGet = [
  'Guidebook (module book)',
  'Access to the recordings for 2–3 months',
  'E-certificate',
  'Direct access to the teacher via Zoom or email',
  'Eligibility to register with Yoga Alliance (registration fee not included)',
];

const youNeed = [
  'A laptop, or even just a mobile phone',
  'Some experience of Yin Yoga classes, so the learning comes more easily',
  'Props: yoga mat, bolster, 2 soft blocks and a rope',
];

export default function OnlineRecordingPage() {
  return (
    <>
      <PageIntro
        title="Online Recording 200 Hrs Teacher Training"
        lead="The Yin Yoga World teacher training as recordings, presented in English and Indonesian. Study at your own pace, meet your teacher on Zoom, and take each 50-hour module separately or complete all four for the 200 hours."
        image="online-module-book"
        imageAlt="Two participants, each holding the pink Yin Yoga World module book"
      >
        <div className="btn-row">
          <a className="btn btn--primary" href="#rates">
            Rates
          </a>
          <a className="btn btn--outline" href={whatsappLink(contacts.made.whatsapp, enquiry)} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            Ask a question
          </a>
        </div>
      </PageIntro>

      <section className="section section--white">
        <div className="container">
          <div className="section-head" data-reveal="">
            <h2>How it works</h2>
            <p>To receive the Yoga Alliance certificate for the 200 hours, all four modules are required.</p>
          </div>
          <dl className={styles.how}>
            {howItWorks.map(([title, text]) => (
              <div key={title} data-reveal="">
                <dt>{title}</dt>
                <dd>{text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section section--sand">
        <div className={`container ${styles.needs}`}>
          <div className={`media ${styles.zoom}`} data-reveal="image">
            <Img name="online-zoom-session" alt="Screenshots from a live Zoom session of the online training, with a participant holding her certificate" sizes="(min-width: 900px) 30vw, 70vw" />
          </div>
          <div className={styles.needsText}>
            <div data-reveal="">
              <h2>What you get</h2>
              <ul className="check-list">
                {youGet.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
            <div data-reveal="">
              <h2>What you need</h2>
              <p>Open to practitioners of all levels.</p>
              <ul className="check-list">
                {youNeed.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white" id="rates">
        <div className={`container ${styles.rates}`}>
          <div data-reveal="">
            <h2>Rates</h2>
            <p className={styles.ratesIntro}>Per 50-hour module, as published by Yin Yoga World.</p>
            <table className={styles.table}>
              <caption className="visually-hidden">Online Recording rates per module</caption>
              <thead>
                <tr>
                  <th scope="col">Module</th>
                  <th scope="col">Rate</th>
                </tr>
              </thead>
              <tbody>
                {onlineRates.map((r) => (
                  <tr key={r.module}>
                    <th scope="row">
                      {r.module} <span>{r.hours}</span>
                    </th>
                    <td>{r.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <aside className={styles.group} data-reveal="">
            <p className={styles.groupTitle}>25% off for groups of 3 or more</p>
            <p>Studying with friends? Ask us for the group rate for your module.</p>
            <a className="btn btn--primary" href={whatsappLink(contacts.made.whatsapp, 'Hello Made, I would like the group rate for the Online Recording training.')} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon />
              Ask for group rate
            </a>
            <p className="note">Please confirm the current rate with us before paying.</p>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className={`section-head ${styles.headRow}`}>
            <div data-reveal="">
              <h2>The four modules</h2>
              <p>The same curriculum as the Bali training, taught by Yuni (lead teacher) with Thai Yoga Massage by Made Agus.</p>
            </div>
            <Link className="text-link" href="/bali-200-hour-teacher-training#modules" data-reveal="">
              Full curriculum <ArrowIcon width="16" />
            </Link>
          </div>
          <ol className={styles.moduleRow}>
            {modules.map((m) => (
              <li key={m.number} data-reveal="">
                <Img name={m.image} alt={`Module ${m.number} cover: ${m.title}`} sizes="(min-width: 760px) 22vw, 45vw" />
                <p>
                  Module {m.number} <strong>{m.title}</strong>
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ContactBand
        title="Start learning online"
        text="Message Made Agus to arrange your access, or email info.yinyogaworld@gmail.com with any questions about the online program."
        message={enquiry}
      />
    </>
  );
}
