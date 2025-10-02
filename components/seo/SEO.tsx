import Head from 'next/head';
import { SITE_CONFIG } from '@/lib/constants';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({
  title = SITE_CONFIG.name,
  description = SITE_CONFIG.description,
  image = '/images/hero-dra-emylin.jpg',
  url = SITE_CONFIG.url,
  type = 'website',
}: SEOProps) {
  const fullTitle = title.includes(SITE_CONFIG.name) ? title : `${title} | ${SITE_CONFIG.name}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/logo.png`,
    image: `${SITE_CONFIG.url}${image}`,
    telephone: `+55${SITE_CONFIG.phone}`,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.city,
      addressRegion: SITE_CONFIG.address.state,
      postalCode: SITE_CONFIG.address.zipCode,
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -23.5505, // São Paulo coordinates - replace with actual
      longitude: -46.6333,
    },
    openingHours: [
      'Mo-Fr 09:00-18:00',
      'Sa 09:00-14:00',
    ],
    priceRange: '$$',
    medicalSpecialty: 'Aesthetic Medicine',
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'CRBM',
      identifier: SITE_CONFIG.crbm,
    },
    sameAs: [
      SITE_CONFIG.social.instagram,
      SITE_CONFIG.social.whatsapp,
    ],
  };

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="harmonização facial, biomédica estéta, preenchimento, toxina botulínica, bioestimuladores, Dra Emylin Prodeliki, São Paulo" />
      <meta name="author" content={SITE_CONFIG.name} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${SITE_CONFIG.url}${image}`} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_CONFIG.url}${image}`} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#0B0B0B" />
      <meta name="msapplication-TileColor" content="#0B0B0B" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Head>
  );
}
