import Img from '@/components/Img';
import PageIntro from '@/components/PageIntro';
import VideoLite from '@/components/VideoLite';
import ContactBand from '@/components/ContactBand';
import { PhoneIcon, WhatsAppIcon } from '@/components/Icons';
import { indonesiaEvents, upcoming } from '@/lib/programs';
import { module7Testimonials } from '@/lib/videos';
import { contacts, whatsappLink } from '@/lib/site';
import styles from './page.module.css';

export const revalidate = 86400;

export const metadata = {
  title: 'Jakarta and Live Zoom Programs',
  description:
    'Yin Yoga teacher training modules and special classes in Jakarta, and the live-online Module-7 "Into The Stillness" by RYS Yin Yoga World. Taught in Indonesian.',
  alternates: { canonical: '/indonesia' },
};

function Registration({ type, title }) {
  const message = `Halo Made, saya ingin mendaftar: ${title}.`;
  return (
    <div className={styles.register}>
      <p className={styles.registerLabel}>Registration</p>
      <ul>
        <li>
          <a href={whatsappLink(contacts.made.whatsapp, message)} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon width="18" />
            <span>
              Yin Yoga World <span className={styles.num}>{contacts.made.display}</span>
            </span>
          </a>
        </li>
        {type === 'jakarta' &&
          contacts.jakarta.map((c) => (
            <li key={c.name}>
              <a href={`tel:${c.tel}`}>
                <PhoneIcon width="18" />
                <span>
                  {c.name} <span className={styles.num}>{c.display}</span>
                </span>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default function IndonesiaPage() {
  const events = upcoming(indonesiaEvents);
  const liveZoom = events.find((e) => e.id.startsWith('live-zoom'));

  return (
    <>
      <PageIntro
        title="Jakarta and Live Zoom Programs"
        lead="Teacher training modules, workshops and special classes held in cities across Indonesia, plus live trainings on Zoom. These programs are taught in Indonesian, and places are limited."
        image="jakarta-group"
        imageAlt="A Jakarta training group smiling together in the studio"
      />

      <section className="section section--white">
        <div className="container">
          <div className="section-head" data-reveal="">
            <h2>Upcoming dates</h2>
            <p>Places are limited, so please register early. Listings disappear once a program has started.</p>
          </div>

          {events.length === 0 ? (
            <p>New dates will be announced soon. Message Made Agus to hear about the next program.</p>
          ) : (
            <div className={styles.events}>
              {events.map((e) => (
                <article key={e.id} id={e.id.startsWith('live-zoom') ? 'live-zoom' : undefined} className={styles.event} data-reveal="">
                  <div className={styles.when}>
                    <p className={styles.format}>{e.format}</p>
                    <p className={styles.date}>{e.date}</p>
                    <p className={styles.time}>{e.time}</p>
                  </div>
                  <div className={styles.what}>
                    <h3>
                      {e.title}
                      <span className={styles.subtitle}>&ldquo;{e.subtitle}&rdquo;</span>
                    </h3>
                    <dl className={styles.meta}>
                      <div>
                        <dt>Venue</dt>
                        <dd>{e.venue}</dd>
                      </div>
                      <div>
                        <dt>Price</dt>
                        <dd>{e.price}</dd>
                      </div>
                    </dl>
                    {e.notes && (
                      <ul className={`check-list ${styles.notes}`}>
                        {e.notes.map((n) => (
                          <li key={n}>{n}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <Registration type={e.contacts} title={`${e.title} ${e.subtitle}`} />
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {liveZoom && (
        <section className="section section--sand">
          <div className={`container ${styles.zoom}`}>
            <div>
              <h2 data-reveal="">Into The Stillness, live on Zoom</h2>
              <p className="lead" data-reveal="">
                A 100-hour module on the organs and the mind-body connection. In Eastern medicine the physical body cannot be separated from the
                mind: problems in one affect the other.
              </p>
              <h3 className={styles.small} data-reveal="">
                Topics
              </h3>
              <ul className="check-list" data-reveal="">
                {liveZoom.topics.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div className={styles.zoomSide}>
              <div className={`media ${styles.flyer}`} data-reveal="image">
                <Img
                  name="module-7-flyer"
                  alt="Module 7 Into The Stillness flyer: Yin Yoga teacher training, 100 hours, live online, December 9 to 20, 2026, price IDR 13.000.000"
                  sizes="(min-width: 900px) 30vw, 80vw"
                />
              </div>
            </div>
          </div>

          <div className={`container ${styles.faqGrid}`}>
            <div data-reveal="">
              <h3>What is TTC Live Online?</h3>
              <p>Teacher training held online using Zoom. The class is the same as the in-person training, and you may find it easier to focus because explanations and images are seen more clearly.</p>
            </div>
            <div data-reveal="">
              <h3>What do I need?</h3>
              <ul className="check-list">
                <li>A laptop, or a phone as an alternative</li>
                <li>A quiet, comfortable room and a reliable internet connection</li>
                <li>Props: yoga mat, 2 soft blocks, bolster, rope and blanket</li>
                <li>An external microphone helps during teaching practice, but is not required</li>
              </ul>
            </div>
            <div data-reveal="">
              <h3>Why choose it?</h3>
              <p>It costs less and saves energy, with no travel, accommodation or transport costs. Sessions are recorded, so you can review them at home.</p>
            </div>
          </div>

          <div className={`container ${styles.videos}`}>
            {module7Testimonials.map((v) => (
              <div key={v.id} data-reveal="">
                <VideoLite {...v} />
              </div>
            ))}
          </div>
        </section>
      )}

      <ContactBand
        title="Register for a program"
        text="Register with Yin Yoga World on WhatsApp. For the Jakarta programs you can also call Debbie or Deece."
        message="Halo Made, saya ingin informasi tentang program Yin Yoga World di Indonesia."
      />
    </>
  );
}
