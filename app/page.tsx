import Hero from '../components/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import WhyChoose from '../sections/WhyChoose';
import Process from '../sections/Process';
import Testimonials from '../sections/Testimonials';
import FAQ from '../sections/FAQ';
import ContactCTA from '../sections/ContactCTA';
import ChatWidget from '../components/ChatWidget';
import WeatherWidget from '../components/WeatherWidget';
import Script from 'next/script';

export const metadata = {
  title: 'ClickGrow AI — AI-Powered Digital Growth Agency',
  description:
    'ClickGrow AI builds high-converting websites, automations, and AI-driven marketing to grow your business.',
  keywords: ['AI', 'digital agency', 'web development', 'SEO', 'automation', 'leads'],
  openGraph: {
    title: 'ClickGrow AI — AI-Powered Digital Growth Agency',
    description:
      'ClickGrow AI builds high-converting websites, automations, and AI-driven marketing to grow your business.',
    url: 'https://your-domain.com',
    siteName: 'ClickGrow AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ClickGrow AI — AI-Powered Digital Growth Agency',
    description:
      'ClickGrow AI builds high-converting websites, automations, and AI-driven marketing to grow your business.',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function Home() {
  return (
    <>
      <Script id="ldjson-homepage" type="application/ld+json">
        {`{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "ClickGrow AI",
          "description": "ClickGrow AI builds high-converting websites, automations, and AI-driven marketing to grow your business.",
          "url": "https://your-domain.com",
          "inLanguage": "en-US"
        }`}
      </Script>
      <Hero />
      <About />
      <Services />
      <WhyChoose />
      <Process />
      <Testimonials />
      <FAQ />
      <WeatherWidget />
      <ContactCTA />
      <ChatWidget />
    </>
  );
}
