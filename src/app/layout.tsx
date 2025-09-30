import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'House of Momma - Sportieve Fitcations op exotische locaties',
  description: 'House of Momma biedt Fitcations: sportieve vakanties waar performance, herstel en beleving samenkomen. In samenwerking met Primal organiseren we exclusieve trips op unieke locaties.',
  keywords: 'fitcation, sportieve vakantie, kitesurfen, zanzibar, egyptian desert, primal, house of momma',
  authors: [{ name: 'House of Momma' }],
  openGraph: {
    title: 'House of Momma - Sportieve Fitcations op exotische locaties',
    description: 'House of Momma biedt Fitcations: sportieve vakanties waar performance, herstel en beleving samenkomen.',
    url: 'https://houseofmomma.com',
    siteName: 'House of Momma',
    images: [
      {
        url: '/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'House of Momma - Sportieve Fitcations',
      },
    ],
    locale: 'nl_NL',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'House of Momma - Sportieve Fitcations op exotische locaties',
    description: 'House of Momma biedt Fitcations: sportieve vakanties waar performance, herstel en beleving samenkomen.',
    images: ['/hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className="antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
