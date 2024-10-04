import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Footer } from '@/components/footer';
import StructuredData from '@/components/StructuredData';
import { Toaster } from '@/components/ui/toaster';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: "Becca's Mobile Spa - Relaxation and Rejuvenation at Your Doorstep",
  description:
    "Discover the path to wellness with Becca's Mobile Spa. Enjoy tailored spa experiences in the comfort of your home. Book your massage today!",
  keywords: [
    'mobile spa',
    'massage',
    'relaxation',
    'wellness',
    'Swedish massage',
    'deep tissue massage',
    'reflexology',
  ],
  authors: [{ name: "Becca's Mobile Spa" }],
  openGraph: {
    title: "Becca's Mobile Spa - In-Home Massage Services",
    description:
      'Experience professional massage services in the comfort of your own home. Book your relaxation session now!',
    url: 'https://www.beccasmobilespa.com/',
    siteName: "Becca's Mobile Spa",
    images: [
      {
        url: 'https://www.beccasmobilespa.com/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Becca's Mobile Spa - In-Home Massage Services",
    description:
      'Experience professional massage services in the comfort of your own home. Book your relaxation session now!',
    images: ['https://www.beccasmobilespa.com/twitter-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData />
        {children}
        <Footer />
        <Analytics />
        <Toaster />
      </body>
    </html>
  );
}
