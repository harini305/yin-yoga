'use client';

import { useEffect, useRef, useState } from 'react';
import Link from '@/components/Link';
import { usePathname } from 'next/navigation';
import { nav, contacts, whatsappLink, defaultEnquiry } from '@/lib/site';
import images from '@/lib/images.json';
import { WhatsAppIcon } from './Icons';
import styles from './Header.module.css';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    panelRef.current?.querySelector('a')?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  const isActive = (href) => pathname === href || (href === '/blog' && pathname.startsWith('/post/'));
  const enquire = whatsappLink(contacts.made.whatsapp, defaultEnquiry);

  return (
    <header className={`${styles.header} ${scrolled || open ? styles.raised : ''}`}>
      <div className={`container ${styles.bar}`}>
        <Link href="/" className={styles.brand} aria-label="Yin Yoga World, home">
          <img
            src={`/images/${images.logo.files[96]}`}
            srcSet={`/images/${images.logo.files[96]} 1x, /images/${images.logo.files[192]} 2x`}
            width="44"
            height="44"
            alt=""
          />
          <span className={styles.wordmark}>Yin Yoga World</span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Main">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isActive(item.href) ? 'page' : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <a className={`btn btn--primary ${styles.cta}`} href={enquire} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon />
          Enquire
        </a>

        <button
          ref={toggleRef}
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="visually-hidden">{open ? 'Close menu' : 'Open menu'}</span>
          <span className={styles.toggleLines} data-open={open} aria-hidden="true" />
        </button>
      </div>

      <div id="mobile-menu" ref={panelRef} className={styles.panel} data-open={open} hidden={!open}>
        {/* Close on any link tap, including the link to the page already open */}
        <nav className="container" aria-label="Mobile" onClick={(e) => e.target.closest('a') && setOpen(false)}>
          <ul>
            <li>
              <Link href="/" aria-current={pathname === '/' ? 'page' : undefined}>
                Home
              </Link>
            </li>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={isActive(item.href) ? 'page' : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a className={`btn btn--primary ${styles.panelCta}`} href={enquire} target="_blank" rel="noopener noreferrer">
            <WhatsAppIcon />
            Enquire on WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
