import Img from './Img';
import styles from './PageIntro.module.css';

export default function PageIntro({ title, lead, image, imageAlt, children, lang }) {
  return (
    <section className={`${styles.intro} ${image ? styles.withImage : ''}`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.text}>
          <h1 data-reveal="">{title}</h1>
          {lead && (
            <p className="lead" data-reveal="" lang={lang}>
              {lead}
            </p>
          )}
          {children && <div data-reveal="">{children}</div>}
        </div>
        {image && (
          <div className={`media ${styles.media}`} data-reveal="image">
            <Img name={image} alt={imageAlt} sizes="(min-width: 900px) 46vw, 100vw" priority />
          </div>
        )}
      </div>
    </section>
  );
}
