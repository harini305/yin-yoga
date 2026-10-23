import styles from './Faq.module.css';

// Native <details> accordion: keyboard and screen-reader friendly without extra script
export default function Faq({ items }) {
  return (
    <div className={styles.faq}>
      {items.map((item) => (
        <details key={item.q} className={styles.item}>
          <summary>
            <span>{item.q}</span>
            <span className={styles.icon} aria-hidden="true" />
          </summary>
          <div className={styles.answer}>
            {item.a.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {item.rundown && (
              <table className={styles.rundown}>
                <caption className="visually-hidden">Example Day 1 rundown</caption>
                <tbody>
                  {item.rundown.map(([time, what]) => (
                    <tr key={time}>
                      <th scope="row">{time}</th>
                      <td>{what}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}
