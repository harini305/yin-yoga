import { baliCohorts, modules, upcoming } from '@/lib/programs';
import styles from './BaliSchedule.module.css';

// Upcoming Bali cohorts only; cohorts that have already started drop off automatically
export default function BaliSchedule({ stacked = false }) {
  const cohorts = upcoming(baliCohorts);

  if (!cohorts.length) {
    return <p>New Bali dates will be published soon. Please ask Made Agus for the next cohort.</p>;
  }

  return (
    <div className={`${styles.cohorts} ${stacked ? styles.stacked : ''}`}>
      {cohorts.map((c) => (
        <article key={c.id} className={styles.cohort} data-reveal="">
          <h3 className={styles.title}>
            <span className={styles.label}>Full 200 Hrs</span>
            {c.range}
          </h3>
          <table className={styles.table}>
            <caption className="visually-hidden">Module dates for the {c.label} cohort</caption>
            <tbody>
              {modules.map((m, i) => (
                <tr key={m.number}>
                  <th scope="row">
                    Module {m.number} <span>{m.title}</span>
                  </th>
                  <td>{c.modules[i]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </article>
      ))}
    </div>
  );
}
