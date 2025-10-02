import React from 'react';
import type { Metadata } from 'next';
import { Montserrat, Inter } from 'next/font/google';
import './globals.css';
import { SEO } from '@/components/seo/SEO';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-montserrat',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://draemylinprodeliki.com.br'),
  title: 'Dra. Emylin Prodeliki - Biomédica Estéta | Harmonização Facial',
  description: 'Harmonização facial com naturalidade e precisão. Dra. Emylin Prodeliki - Biomédica Estéta especializada em procedimentos personalizados com foco em segurança e resultados naturais.',
  keywords: 'harmonização facial, biomédica estéta, preenchimento, toxina botulínica, bioestimuladores, Dra Emylin Prodeliki',
  authors: [{ name: 'Dra. Emylin Prodeliki' }],
  creator: 'Dra. Emylin Prodeliki',
  publisher: 'Dra. Emylin Prodeliki',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://draemylinprodeliki.com.br',
    siteName: 'Dra. Emylin Prodeliki - Biomédica Estéta',
    title: 'Dra. Emylin Prodeliki - Harmonização Facial com Naturalidade',
    description: 'Harmonização facial com naturalidade e precisão. Procedimentos personalizados com foco em segurança e resultados naturais.',
    images: [
      {
        url: '/images/hero-dra-emylin.jpg',
        width: 1200,
        height: 630,
        alt: 'Dra. Emylin Prodeliki - Biomédica Estéta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dra. Emylin Prodeliki - Harmonização Facial',
    description: 'Harmonização facial com naturalidade e precisão. Procedimentos personalizados com foco em segurança.',
    images: ['/images/hero-dra-emylin.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        <link rel="canonical" href="https://draemylinprodeliki.com.br" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0B0B0B" />
      </head>
      <body className="font-body antialiased">
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo principal
        </a>
        <SEO />
        {children}
      </body>
    </html>
  );
}
