import localFont from 'next/font/local';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import Motion from '@/components/Motion';
import { site } from '@/lib/site';
import './globals.css';

// The two site fonts, self-hosted (Google Fonts, SIL Open Font License):
// Montserrat (matches the lettering in the logo ribbon) for headings and the wordmark,
// Poppins for body text and all UI
const montserrat = localFont({
  src: [{ path: './fonts/montserrat-latin-600-800.woff2', weight: '600 800', style: 'normal' }],
  variable: '--font-montserrat',
  display: 'swap',
});
const poppins = localFont({
  src: [
    { path: './fonts/poppins-latin-400.woff2', weight: '400', style: 'normal' },
    { path: './fonts/poppins-latin-500.woff2', weight: '500', style: 'normal' },
    { path: './fonts/poppins-latin-600.woff2', weight: '600', style: 'normal' },
  ],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'Yin Yoga Teacher Training Bali | Yin Yoga World',
    template: '%s | Yin Yoga World',
  },
  description: site.description,
  openGraph: {
    type: 'website',
    siteName: site.name,
    title: '200 Hrs Yin Yoga Teacher Training by RYS Yin Yoga World',
    description: site.description,
  },
  twitter: { card: 'summary_large_image' },
  verification: { google: '_uCf2i23FmzOM-30yua8iMLW1NLf_OeUh3TfyYTmdOI' },
  other: { 'facebook-domain-verification': 'yui0f6lqzooozuomivlfpy2f08ygtb' },
};

export const viewport = {
  themeColor: '#faf7f2',
};

// Adds the "motion" class before first paint so reveal targets start hidden only when animation will run
const motionScript = `try{if(!window.matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('motion')}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    // data-scroll-behavior lets Next.js turn off smooth scrolling during page changes, so new pages open at the top
    <html lang="en" data-scroll-behavior="smooth" className={`${montserrat.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppFloat />
        <Motion />
      </body>
    </html>
  );
}
