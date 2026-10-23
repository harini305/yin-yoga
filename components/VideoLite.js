'use client';

import { useState } from 'react';
import Img from './Img';
import { PlayIcon } from './Icons';
import styles from './VideoLite.module.css';

// Shows a local poster frame; the YouTube player (and its scripts) only load after the visitor presses play.
export default function VideoLite({ id, title, name, context }) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure className={styles.video}>
      <div className={styles.frame}>
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button type="button" className={styles.poster} onClick={() => setPlaying(true)}>
            <Img name={`yt-${id}`} alt="" sizes="(min-width: 900px) 30vw, 90vw" />
            <span className={styles.play} aria-hidden="true">
              <PlayIcon />
            </span>
            <span className="visually-hidden">Play video: {title}</span>
          </button>
        )}
      </div>
      <figcaption className={styles.caption}>
        <strong>{name}</strong>
        <span>{context}</span>
      </figcaption>
    </figure>
  );
}
