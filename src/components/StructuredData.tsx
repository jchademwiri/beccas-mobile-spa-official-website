// app/components/StructuredData.tsx
import Script from 'next/script';

const StructuredData = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: "Becca's Mobile Spa",
    image: 'https://www.beccasmobilespa.com/logo.jpg',
    description:
      "Discover the path to wellness with Becca's Mobile Spa, where relaxation and rejuvenation come to you.",
    url: 'https://www.beccasmobilespa.com',
    telephone: '+27678345805',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '8474 Nkanyezi street',
      addressLocality: 'Sunbaai, Hermanus',
      postalCode: '7200',
      addressCountry: 'ZA',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-34.4092',
      longitude: '19.2504',
    },
    priceRange: 'R350 - R960',
    openingHours: 'Mo-Su 09:00-20:00',
    servesCuisine: 'Spa and Wellness Services',
    sameAs: [
      'https://www.facebook.com/beccasmobilespa',
      'https://www.instagram.com/beccasmobilespa',
    ],
  };

  return (
    <Script id='structured-data' type='application/ld+json'>
      {JSON.stringify(structuredData)}
    </Script>
  );
};

export default StructuredData;
