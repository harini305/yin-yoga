'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Page-level scroll behaviour.
// - data-reveal ("" = fade up, "image" = soft unmask): elements entering the viewport together are staggered as one batch.
// - data-pin inside a data-pin-scope: on desktop the element stays pinned below the header while the rest of
//   its scope scrolls past, then releases at the end of the scope. Scroll speed is never changed.
export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const mm = gsap.matchMedia();

    mm.add('(min-width: 1024px)', () => {
      const offset = () => (parseFloat(getComputedStyle(root).getPropertyValue('--header-h')) || 72) + 32;
      const observers = [];

      gsap.utils.toArray('[data-pin]').forEach((el) => {
        const scope = el.closest('[data-pin-scope]') || el.parentElement;
        ScrollTrigger.create({
          trigger: el,
          start: () => `top ${offset()}px`,
          endTrigger: scope,
          end: () => `bottom ${offset() + el.offsetHeight}px`,
          pin: true,
          pinSpacing: false,
          invalidateOnRefresh: true,
        });

        // Opening an FAQ answer or switching a module tab changes the scope height
        let frame;
        const ro = new ResizeObserver(() => {
          cancelAnimationFrame(frame);
          frame = requestAnimationFrame(() => ScrollTrigger.refresh());
        });
        ro.observe(scope);
        observers.push(ro);
      });

      return () => observers.forEach((ro) => ro.disconnect());
    });

    if (root.classList.contains('motion')) {
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const targets = gsap.utils.toArray('[data-reveal]');
        const text = targets.filter((el) => el.dataset.reveal !== 'image');
        const media = targets.filter((el) => el.dataset.reveal === 'image');

        gsap.set(text, { y: 22 });
        gsap.set(media, { clipPath: 'inset(6% 6% 6% 6% round 14px)', scale: 1.03 });
        root.classList.add('motion-ready');

        ScrollTrigger.batch(text, {
          start: 'top 90%',
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.08, overwrite: true }),
        });

        ScrollTrigger.batch(media, {
          start: 'top 88%',
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              opacity: 1,
              scale: 1,
              clipPath: 'inset(0% 0% 0% 0% round 14px)',
              duration: 1.1,
              ease: 'power3.out',
              stagger: 0.1,
              clearProps: 'clipPath,transform',
            }),
        });
      });
    }

    // Layout can shift once web fonts and lazy images settle
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener('load', refresh);

    return () => {
      window.removeEventListener('load', refresh);
      mm.revert();
    };
  }, [pathname]);

  return null;
}
