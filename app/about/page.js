import Img from '@/components/Img';
import PageIntro from '@/components/PageIntro';
import ContactBand from '@/components/ContactBand';
import { WhatsAppIcon } from '@/components/Icons';
import { contacts, whatsappLink } from '@/lib/site';
import styles from './page.module.css';

export const metadata = {
  title: 'About the School and Teachers',
  description:
    'RYS Yin Yoga World was founded in 2013 by Nyoman Wahyuni (Yuni), E-RYT 500, and registered with Yoga Alliance in 2017. Meet Yuni, Made Agus and Mey Lan.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <PageIntro
        title="About Yin Yoga World"
        lead="Yin Yoga World was founded in 2013, after Nyoman Wahyuni, known as Yuni, completed her Yin Yoga teacher training with Jo Phee at Yinspiration. In June 2017 the school registered with Yoga Alliance USA."
        image="graduation-certificate"
        imageAlt="Made Agus and Yuni with a graduate holding her certificate in a carved wooden shala"
      />

      <section className="section section--white">
        <div className={`container ${styles.story}`}>
          <h2 data-reveal="">Our story</h2>
          <div className="prose" data-reveal="">
            <p>
              Since 2017 Yin Yoga World has offered workshops and teacher training across Indonesia. During the pandemic most classes moved
              online, and in 2023 the school started its teacher training courses and offline workshops.
            </p>
            <p>
              Today the school is a Registered Yoga School for RYS 200 and RYS 300 with Yoga Alliance. Students who complete both programs are
              eligible to register as RYT 500. Under RYS Yin Yoga World the team also runs TTC Wheel Yoga and TTC Qi Gong, all based on
              Functional Yoga.
            </p>
            <p>The hope is to keep sharing, both locally and globally, in the years to come.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className={styles.teamTitle} data-reveal="">
            The team
          </h2>

          <article className={styles.person} data-reveal="">
            <Img name="portrait-yuni" alt="Yuni smiling with two graduates holding a certificate" sizes="(min-width: 760px) 220px, 160px" className={styles.portrait} />
            <div className={styles.bio}>
              <h3>Nyoman Wahyuni (Yuni)</h3>
              <p className={styles.role}>Lead teacher · E-RYT 500</p>
              <p>
                Yuni was first introduced to yoga 20 years ago, when her focus was a simple asana practice that supported meditation. Wanting to
                teach, she trained in Tantra, Hatha and Prenatal Yoga, and has been teaching yoga since 2007.
              </p>
              <p>
                In 2012 she attended a Yin Yoga workshop and instantly fell in love with it. The following year she completed the Yinspiration
                200-hour Yin Yoga teacher training in Ubud, Bali, which made her realise her love for the quiet, meditative practice of Yin.
                She has taught Yin Yoga in Bali and all over Indonesia since.
              </p>
              <p>
                Yuni has completed the 300-hour Speciality program with Yinspiration and is a 500-hour Certified Yinspiration Teacher. She
                regularly assists Jo Phee in her trainings and serves as a Mentor Teacher for Yinspiration. She lives in Bali with her family
                and travels across Indonesia to lead teacher trainings and workshops.
              </p>
            </div>
          </article>

          <article className={styles.person} data-reveal="">
            <Img name="portrait-made-thai" alt="Made Agus giving a Thai Yoga Massage stretch to a student" sizes="(min-width: 760px) 220px, 160px" className={styles.portrait} />
            <div className={styles.bio}>
              <h3>Made Agus Wirayasa</h3>
              <p className={styles.role}>Thai Yoga Massage teacher · Photographer and videographer</p>
              <p>
                Made started yoga about 22 years ago, studying at Ananda Marga Tantra Yoga. For Made, teaching yoga is a universal call to share
                kindness. Drawn increasingly to healing therapy, in 2012 he trained in Thai Yoga Massage and received a 99-hour certificate from
                Gwyn Williams (Zen Thai Shiatsu).
              </p>
              <p>
                During the training you will see Made often: he documents each course and helps with everything technical in the studio. Simple,
                multi-talented and straight to the point, he is also your contact for registration and information.
              </p>
              <a className="btn btn--outline" href={whatsappLink(contacts.made.whatsapp)} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                WhatsApp Made · {contacts.made.display}
              </a>
            </div>
          </article>

          <article className={styles.person} data-reveal="">
            <Img name="portrait-meylan" alt="Mey Lan sitting in tall grass with a camera, wearing a knitted panda hat" sizes="(min-width: 760px) 220px, 160px" className={styles.portrait} />
            <div className={styles.bio}>
              <h3>Mey Lan</h3>
              <p className={styles.role}>Marketing, graphic design and social media</p>
              <p>
                Mey Lan looks after marketing and the Yin Yoga World social media. Agile, cheerful and always optimistic, with a sincere sense
                of humour, she makes you feel at home quickly. Ask her about accommodation, places to visit, transport and more.
              </p>
              <a className="btn btn--outline" href={whatsappLink(contacts.meylan.whatsapp)} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon />
                WhatsApp Mey Lan · {contacts.meylan.display}
              </a>
            </div>
          </article>
        </div>
      </section>

      <ContactBand />
    </>
  );
}
