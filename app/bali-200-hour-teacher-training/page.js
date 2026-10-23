import Link from '@/components/Link';
import Img from '@/components/Img';
import PageIntro from '@/components/PageIntro';
import BaliSchedule from '@/components/BaliSchedule';
import ModuleExplorer from '@/components/ModuleExplorer';
import Faq from '@/components/Faq';
import ContactBand from '@/components/ContactBand';
import { ArrowIcon, PinIcon, WhatsAppIcon } from '@/components/Icons';
import { baliCohorts, baliIncluded, baliProps, upcoming } from '@/lib/programs';
import { baliFaq } from '@/lib/faq';
import { contacts, site, whatsappLink } from '@/lib/site';
import styles from './page.module.css';

export const revalidate = 86400;

export const metadata = {
  title: 'Bali 200 Hrs Yin Yoga Teacher Training',
  description:
    '200-hour Yin Yoga teacher training in Bali with RYS Yin Yoga World: four 50-hour modules covering meridians, anatomy, fascia, Ayurveda, meditation and Tantra yoga philosophy.',
  alternates: { canonical: '/bali-200-hour-teacher-training' },
};

const feesMessage = 'Hello Made, I would like the current fees and registration details for the Bali 200 Hrs Yin Yoga teacher training.';

export default function BaliPage() {
  const cohorts = upcoming(baliCohorts);

  return (
    <>
      <PageIntro
        title="Bali 200 Hrs Yin Yoga Teacher Training"
        lead="Yin Yoga teacher training at Yin Yoga World in Bali: four 50-hour modules that move from the physical and energetic body to meditation and stillness. Join the full 200 hours or a single module."
        image="practice-lunge"
        imageAlt="Students in a low lunge with their hands on blue blocks, bolsters beside their mats"
      >
        <div className="btn-row">
          <a className="btn btn--primary" href="#dates">
            See dates
          </a>
          <a className="btn btn--outline" href={whatsappLink(contacts.made.whatsapp, feesMessage)} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            Ask about fees
          </a>
        </div>
      </PageIntro>

      <section className="section section--white" id="dates">
        <div className={`container ${styles.pinGrid}`} data-pin-scope="">
          <div className={styles.datesIntro} data-pin="">
            <h2 data-reveal="">Dates</h2>
            <p data-reveal="">
              Each cohort runs the four modules back to back. You can apply for the full 200 hours or for individual modules.
            </p>
            <dl className={styles.keyFacts} data-reveal="">
              <div>
                <dt>Language</dt>
                <dd>English or Indonesian, depending on the group</dd>
              </div>
              <div>
                <dt>Venue</dt>
                <dd>Yin Yoga World, {site.address.short}</dd>
              </div>
              <div>
                <dt>Fees</dt>
                <dd>
                  Current fees are confirmed directly by our team.{' '}
                  <a href={whatsappLink(contacts.made.whatsapp, feesMessage)} target="_blank" rel="noopener noreferrer">
                    Ask Made Agus
                  </a>
                  .
                </dd>
              </div>
            </dl>
          </div>
          <div>
            <BaliSchedule stacked />
            {cohorts.length > 0 && (
              <p className={`note ${styles.datesNote}`}>Dates as published by Yin Yoga World. Please confirm your place before booking travel.</p>
            )}
          </div>
        </div>
      </section>

      <section className="section section--sand" id="modules">
        <div className={`container ${styles.pinGrid}`} data-pin-scope="">
          <div className={styles.pinHead} data-pin="">
            <h2 data-reveal="">What you will learn</h2>
            <p data-reveal="">
              Basic Yin Yoga for teaching, with an asana lab for each pose and guided practice, Yin Yoga theory, Traditional Chinese
              Medicine, an introduction to Ayurveda, the emotional side of the practice and yoga philosophy based on Tantra Yoga.
            </p>
          </div>
          <div data-reveal="">
            <ModuleExplorer dates={cohorts} />
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className={`container ${styles.includes}`}>
          <div className={`media ${styles.includesMedia}`} data-reveal="image">
            <Img
              name="graduation-certificate"
              alt="Made Agus and Yuni with a graduate holding her certificate in a carved wooden shala"
              sizes="(min-width: 900px) 40vw, 100vw"
            />
          </div>
          <div className={styles.includesText}>
            <h2 data-reveal="">What&apos;s included</h2>
            <div className={styles.lists}>
              <div data-reveal="">
                <h3>With your training</h3>
                <ul className="check-list">
                  {baliIncluded.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
              <div data-reveal="">
                <h3>Props provided</h3>
                <ul className="check-list">
                  {baliProps.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className={styles.excluded} data-reveal="">
              <strong>Not included:</strong> accommodation. Choose a homestay or hotel near the studio to suit your budget.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.practical}`}>
          <div data-reveal="">
            <h2>Certification</h2>
            <p>
              RYS Yin Yoga World is a Registered Yoga School with Yoga Alliance. Your certificate is issued by RYS Yin Yoga World, and you can
              use it to register with Yoga Alliance International as an RYT. The Yoga Alliance registration fee is paid by you.
            </p>
          </div>
          <div data-reveal="">
            <h2>Getting here</h2>
            <address className={styles.address}>
              Yin Yoga World
              {site.address.lines.map((l) => (
                <span key={l}>{l}</span>
              ))}
            </address>
            <a className="text-link" href={site.address.mapsUrl} target="_blank" rel="noopener noreferrer">
              <PinIcon width="18" /> Open in Google Maps
            </a>
            <p className={styles.small}>Online transport such as Gojek or Grab can bring you to the studio.</p>
          </div>
          <div data-reveal="">
            <h2>How to register</h2>
            <ol className={styles.steps}>
              <li>Message Made Agus on WhatsApp with the cohort or module you would like to join.</li>
              <li>He confirms available places, current fees, deposit and cancellation terms.</li>
              <li>Payment is made by bank transfer, Wise or PayPal.</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section section--white" id="faq">
        <div className={`container ${styles.pinGrid}`} data-pin-scope="">
          <div className={styles.pinHead} data-pin="">
            <h2 data-reveal="">Questions</h2>
            <p data-reveal="">
              Can&apos;t find your answer? <Link href="/contact">Get in touch</Link> and we&apos;ll reply on WhatsApp or email.
            </p>
          </div>
          <div data-reveal="">
            <Faq items={baliFaq} />
          </div>
        </div>
      </section>

      <ContactBand
        title="Join the next Bali training"
        text="Places, current fees and payment terms are confirmed personally by Made Agus. Send a message and he will take you through the next steps."
        message={feesMessage}
      />
    </>
  );
}
