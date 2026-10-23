import Link from '@/components/Link';
import Img from '@/components/Img';
import VideoLite from '@/components/VideoLite';
import ContactBand from '@/components/ContactBand';
import { ArrowIcon, WhatsAppIcon } from '@/components/Icons';
import { baliCohorts, modules, baliIncluded, upcoming } from '@/lib/programs';
import { baliTestimonials } from '@/lib/videos';
import { contacts, whatsappLink, defaultEnquiry, youtubePlaylist, site } from '@/lib/site';
import styles from './page.module.css';

export const revalidate = 86400;

const reasons = [
  {
    title: 'A complete, structured program',
    text: 'Four modules that build on each other, from meridians and anatomy to meditation and philosophy, designed to be used in your own teaching.',
  },
  {
    title: 'Recognised by Yoga Alliance',
    text: 'Yin Yoga World is a Registered Yoga School. Its graduates have the right to apply to become Registered Yoga Teachers (RYT 200 and RYT 300) with Yoga Alliance International.',
  },
  {
    title: 'Flexible when life happens',
    text: 'Under certain conditions, if you are unable to attend, you still receive the material through recording access.',
  },
  {
    title: 'Stay where suits you',
    text: 'Accommodation is not included, so you choose a place that fits your budget and preferences. Mey Lan is happy to recommend options nearby.',
  },
];

export default function Home() {
  const cohorts = upcoming(baliCohorts);

  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroText}>
            <h1 data-reveal="">Yin Yoga Teacher Training in Bali</h1>
            <p className="lead" data-reveal="">
              A 200-hour training in four 50-hour modules, led by Nyoman Wahyuni (Yuni), E-RYT 500. Based on Functional Yoga, with a
              special touch of Traditional Chinese Medicine and Tantra Yoga philosophy.
            </p>
            <div className="btn-row" data-reveal="">
              <Link className="btn btn--primary" href="/bali-200-hour-teacher-training">
                Dates and program
                <ArrowIcon />
              </Link>
              <a className="btn btn--outline" href={whatsappLink(contacts.made.whatsapp, defaultEnquiry)} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                Ask on WhatsApp
              </a>
            </div>

            <dl className={styles.facts} data-reveal="">
              {cohorts.length > 0 && (
                <div>
                  <dt>Next Bali cohorts</dt>
                  {cohorts.map((c) => (
                    <dd key={c.id}>{c.range}</dd>
                  ))}
                </div>
              )}
              <div>
                <dt>Format</dt>
                <dd>4 modules × 50 Hrs</dd>
                <dd>Join one module or all four</dd>
              </div>
              <div>
                <dt>Language</dt>
                <dd>English or Indonesian</dd>
              </div>
            </dl>
          </div>

          <div className={`media ${styles.heroMedia}`} data-reveal="image">
            <Img
              name="hero-shala"
              alt="Teacher training participants stretching on mats in an open-sided yoga shala while the teacher demonstrates at the front"
              sizes="(min-width: 900px) 52vw, 100vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className={`container ${styles.story}`}>
          <div className={`media ${styles.storyMedia}`} data-reveal="image">
            <Img
              name="practice-laughing"
              alt="Teacher trainees laughing together on their mats during a practice session"
              sizes="(min-width: 900px) 45vw, 100vw"
            />
          </div>
          <div className={styles.storyText}>
            <h2 data-reveal="">Learn to teach the quiet practice</h2>
            <p className="lead" data-reveal="">
              Yuni founded Yin Yoga World after completing her Yin Yoga teacher training with Jo Phee at Yinspiration. Since registering with
              Yoga Alliance USA, the school has offered workshops and teacher training across Indonesia.
            </p>
            <dl className={styles.milestones} data-reveal="">
              <div>
                <dt>2013</dt>
                <dd>School founded</dd>
              </div>
              <div>
                <dt>June 2017</dt>
                <dd>Registered with Yoga Alliance USA</dd>
              </div>
              <div>
                <dt>RYS 200 · 300</dt>
                <dd>Registered Yoga School</dd>
              </div>
              <div>
                <dt>RYT 500</dt>
                <dd>Eligibility for graduates of both programs</dd>
              </div>
            </dl>
            <Link className="text-link" href="/about" data-reveal="">
              Meet the teachers <ArrowIcon width="16" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className="container">
          <div className={`section-head ${styles.headRow}`}>
            <div data-reveal="">
              <h2>Four modules, 200 hours</h2>
              <p>Each module stands on its own, so experienced teachers can join one or two. Take all four to complete the 200 hours.</p>
            </div>
            <Link className="text-link" href="/bali-200-hour-teacher-training#modules" data-reveal="">
              Full curriculum <ArrowIcon width="16" />
            </Link>
          </div>

          <ol className={styles.modules}>
            {modules.map((m) => (
              <li key={m.number} className={styles.module} data-reveal="">
                <div className={styles.moduleCover}>
                  <Img name={m.image} alt="" sizes="96px" />
                </div>
                <div>
                  <p className={styles.moduleNo}>Module {m.number} · 50 Hrs</p>
                  <h3 className={styles.moduleTitle}>{m.title}</h3>
                  <p className={styles.moduleText}>{m.summary}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--white">
        <div className={`container ${styles.why}`}>
          <div className={styles.whySide}>
            <div className={`media ${styles.whyMedia}`} data-reveal="image">
              <Img
                name="graduates-shala"
                alt="A graduating group holding their certificates in a wooden Balinese shala, with a flower mandala on the floor"
                sizes="(min-width: 900px) 50vw, 100vw"
              />
            </div>
            <div className={styles.included} data-reveal="">
              <p className={styles.includedLabel}>Included in the Bali training</p>
              <ul>
                {baliIncluded.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h2 data-reveal="">Why train with Yin Yoga World</h2>
            <dl className={styles.reasons}>
              {reasons.map((r) => (
                <div key={r.title} data-reveal="">
                  <dt>{r.title}</dt>
                  <dd>{r.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head" data-reveal="">
            <h2>Other ways to train</h2>
            <p>Can&apos;t come to Bali? The same Yin Yoga World curriculum is taught online and in Jakarta.</p>
          </div>

          <div className={styles.paths}>
            <Link href="/online-recording" className={styles.path} data-reveal="">
              <div className={`media ${styles.pathMedia}`}>
                <Img name="online-module-book" alt="Two participants holding the pink Yin Yoga World module book" sizes="(min-width: 760px) 45vw, 100vw" />
              </div>
              <h3>Online Recording</h3>
              <p>Study the 200-hour program from recordings at your own pace, in English or Indonesian, with live Zoom meetings for each module.</p>
              <span className="text-link">
                Online program <ArrowIcon width="16" />
              </span>
            </Link>
            <Link href="/indonesia" className={styles.path} data-reveal="">
              <div className={`media ${styles.pathMedia}`}>
                <Img name="jakarta-group" alt="A Jakarta training group smiling together in a studio" sizes="(min-width: 760px) 45vw, 100vw" />
              </div>
              <h3>Jakarta and Live Zoom</h3>
              <p>Module trainings and special classes in Jakarta, plus the live-online Module-7 &ldquo;Into The Stillness&rdquo;. Taught in Indonesian.</p>
              <span className="text-link">
                Upcoming dates <ArrowIcon width="16" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--sand">
        <div className={`container ${styles.teachers}`}>
          <div className={styles.teachersHead} data-reveal="">
            <h2>Your teachers</h2>
            <p>A small team: Yuni leads the training, Made teaches Thai Yoga Massage and runs the studio side, and Mey Lan helps with everything around your stay.</p>
            <Link className="text-link" href="/about">
              About the school <ArrowIcon width="16" />
            </Link>
          </div>
          <div className={styles.teacher} data-reveal="">
            <Img name="portrait-yuni" alt="Yuni smiling with two graduates holding a certificate" sizes="160px" className={styles.portrait} />
            <div>
              <h3>Nyoman Wahyuni (Yuni)</h3>
              <p className={styles.role}>Lead teacher · E-RYT 500</p>
              <p>
                Teaching yoga since 2007 and Yin Yoga since completing the Yinspiration 200-hour training in 2013. A 500-hour Certified
                Yinspiration Teacher and Mentor Teacher for Yinspiration.
              </p>
            </div>
          </div>
          <div className={styles.teacher} data-reveal="">
            <Img name="portrait-made-thai" alt="Made Agus giving a Thai Yoga Massage stretch to a student" sizes="160px" className={styles.portrait} />
            <div>
              <h3>Made Agus Wirayasa</h3>
              <p className={styles.role}>Thai Yoga Massage teacher</p>
              <p>
                Began yoga about 22 years ago at Ananda Marga Tantra Yoga and trained in Thai Yoga Massage (Zen Thai Shiatsu) in 2012. Made
                also looks after registration, documentation and everything technical in the studio.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--white" id="graduates">
        <div className="container">
          <div className={`section-head ${styles.headRow}`}>
            <div data-reveal="">
              <h2>In our graduates&apos; words</h2>
              <p>Short video stories from recent Bali teacher trainings, recorded by the school.</p>
            </div>
            <a className="text-link" href={youtubePlaylist} target="_blank" rel="noopener noreferrer" data-reveal="">
              More on YouTube <ArrowIcon width="16" />
            </a>
          </div>
          <div className={styles.videos}>
            {baliTestimonials.map((v) => (
              <div key={v.id} data-reveal="">
                <VideoLite {...v} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactBand />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: site.legalName,
            url: site.url,
            email: site.email,
            telephone: `+${contacts.made.whatsapp}`,
            image: `${site.url}/opengraph-image.jpg`,
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Perumahan Puri Bunga, Jl. Dharmawangsa Gg. Cerida No.19',
              addressLocality: 'Benoa',
              addressRegion: 'Bali',
              postalCode: '80361',
              addressCountry: 'ID',
            },
          }),
        }}
      />
    </>
  );
}
