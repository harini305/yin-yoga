'use client';

import { useRef, useState } from 'react';
import Img from './Img';
import { modules } from '@/lib/programs';
import styles from './ModuleExplorer.module.css';

// Accessible tabs (WAI-ARIA pattern: arrow keys, Home/End) for the four 50-hour modules
export default function ModuleExplorer({ dates }) {
  const [active, setActive] = useState(0);
  const tabs = useRef([]);

  const focusTab = (i) => {
    const next = (i + modules.length) % modules.length;
    setActive(next);
    tabs.current[next]?.focus();
  };

  const onKeyDown = (e) => {
    const keys = { ArrowRight: active + 1, ArrowDown: active + 1, ArrowLeft: active - 1, ArrowUp: active - 1, Home: 0, End: modules.length - 1 };
    if (e.key in keys) {
      e.preventDefault();
      focusTab(keys[e.key]);
    }
  };

  const m = modules[active];

  return (
    <div className={styles.explorer}>
      <div className={styles.tabs} role="tablist" aria-label="Training modules" onKeyDown={onKeyDown}>
        {modules.map((mod, i) => (
          <button
            key={mod.number}
            ref={(el) => (tabs.current[i] = el)}
            type="button"
            role="tab"
            id={`module-tab-${mod.number}`}
            aria-selected={i === active}
            aria-controls={`module-panel-${mod.number}`}
            tabIndex={i === active ? 0 : -1}
            className={styles.tab}
            onClick={() => setActive(i)}
          >
            <span className={styles.tabLabel}>Module {mod.number}</span>
            <span className={styles.tabTitle}>{mod.title}</span>
          </button>
        ))}
      </div>

      <div
        key={m.number}
        className={styles.panel}
        role="tabpanel"
        id={`module-panel-${m.number}`}
        aria-labelledby={`module-tab-${m.number}`}
        tabIndex={0}
      >
        <div className={styles.cover}>
          <Img name={m.image} alt={`Module ${m.number} cover: ${m.title}`} sizes="(min-width: 900px) 260px, 45vw" />
        </div>
        <div className={styles.body}>
          <h3>
            {m.title} <span className={styles.hours}>50 Hrs</span>
          </h3>
          <p>{m.summary}</p>
          <ul className="check-list">
            {m.topics.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          {dates && (
            <p className={styles.dates}>
              <strong>Bali dates:</strong> {dates.map((d) => d.modules[active]).join(' · ')}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
