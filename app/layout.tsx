import './globals.css';
import { Metadata } from 'next';
import Providers from '../components/Providers';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export const metadataBase = new URL('https://your-domain.com');

export const metadata: Metadata = {
  title: 'ClickGrow AI Digital Agency',
  description: 'AI-Powered Digital Growth Solutions — web development, SEO, AI automation',
  keywords: ['AI', 'digital agency', 'web development', 'SEO', 'automation', 'leads'],
  metadataBase,
  openGraph: {
    title: 'ClickGrow AI Digital Agency',
    description: 'AI-Powered Digital Growth Solutions',
    url: metadataBase.toString(),
    siteName: 'ClickGrow AI',
    images: ['/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClickGrow AI Digital Agency',
    description: 'AI-Powered Digital Growth Solutions',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ClickGrow AI',
    url: 'https://your-domain.com',
    sameAs: [],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-000-000-0000',
        contactType: 'Customer service',
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body className="bg-white text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-100">
        <Providers>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
