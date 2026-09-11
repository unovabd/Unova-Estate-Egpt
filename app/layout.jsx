import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import HoverPrefetch from '@/components/HoverPrefetch';

export const metadata = {
  title: 'Unova Estate — #1 AI-Powered Real Estate ERP in Egypt & MENA | Unova',
  description:
    'Unova Estate (by Unova Software) is the #1 AI-powered real estate ERP & CRM in Egypt and MENA. Automate lead tracking, installment collections, property sales, commissions, and construction billing.',
  keywords:
    'unova, unova estate, unova egypt, real estate software egypt, property management software cairo, CRM real estate egypt, ERP real estate mena, lead management cairo, installment collection egypt, عقارات مصر, أتمتة العقارات, برنامج إدارة العقارات',
  metadataBase: new URL('https://estate.unova.app'),
  alternates: {
    canonical: '/',
    languages: {
      'en-EG': '/en',
      'ar-EG': '/ar',
      'x-default': '/',
    },
  },
  openGraph: {
    title: 'Unova Estate — Real Estate ERP & CRM in Egypt & MENA | Unova Software',
    description:
      'The #1 AI-powered real estate ERP & CRM in Egypt & MENA. CRM, HR, payroll, commissions & installment collection automation.',
    url: 'https://estate.unova.app',
    siteName: 'Unova Estate (Unova Software Egypt)',
    type: 'website',
    locale: 'ar_EG',
    alternateLocale: ['en_US', 'ar_EG'],
    images: [
      {
        url: '/unova-real-estate-crm-sales-dashboard-mockup.png',
        width: 1200,
        height: 630,
        alt: 'Unova Estate AI-Powered Real Estate ERP CRM Sales Dashboard Mockup',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unova Estate — #1 Real Estate ERP in Egypt & MENA',
    description: 'The #1 AI-powered real estate ERP & CRM by Unova Software for Egypt & MENA market.',
    images: ['/unova-real-estate-crm-sales-dashboard-mockup.png'],
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://estate.unova.app/#organization',
    name: 'Unova Estate Egypt',
    legalName: 'Unova Software Ltd.',
    url: 'https://estate.unova.app',
    logo: 'https://estate.unova.app/unova-real-estate-software-logo.png',
    foundingDate: '2020',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cairo',
      addressCountry: 'EG',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+201000000000',
      contactType: 'customer service',
      areaServed: ['EG', 'MENA'],
      availableLanguage: ['Arabic', 'English'],
    },
    sameAs: [
      'https://unova.eg/',
      'https://www.facebook.com/unovarem',
      'https://www.youtube.com/@UnovaSoftware',
      'https://www.linkedin.com/company/theunova/',
    ],
  };

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': 'https://estate.unova.app/#software',
    name: 'Unova Estate',
    operatingSystem: 'Web, Windows, iOS, Android',
    applicationCategory: 'BusinessApplication',
    applicationSubCategory: 'Real Estate ERP & CRM Software',
    description:
      'The #1 AI-powered real estate ERP & CRM in Egypt and MENA region. Manage leads, properties, sales orders, commissions, HR, payroll, and marketing.',
    url: 'https://estate.unova.app',
    publisher: { '@id': 'https://estate.unova.app/#organization' },
    featureList: [
      'Installment Collection Automation',
      'Lead Leakage Prevention Engine',
      'Construction Milestone Billing ERP',
      'WhatsApp Business API Integration',
      'Executive MD & CEO Dashboard',
      'Full Arabic & English Multi-lingual Support',
    ],
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EGP',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '145',
      bestRating: '5',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Egypt',
    },
    targetAudience: {
      '@type': 'Audience',
      audienceType: 'Real Estate Developers & Agencies in Egypt & MENA',
    },
  };

  const productSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': 'https://estate.unova.app/#product',
    name: 'Unova Estate — AI-Powered Real Estate ERP & CRM Egypt',
    image: 'https://estate.unova.app/unova-real-estate-crm-sales-dashboard-mockup.png',
    description: 'The #1 AI-powered real estate ERP & CRM platform for housing and land developers in Egypt.',
    brand: {
      '@type': 'Brand',
      name: 'Unova Software',
    },
    manufacturer: { '@id': 'https://estate.unova.app/#organization' },
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'EGP',
      lowPrice: '0',
      offerCount: '1',
      url: 'https://estate.unova.app/demo',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '145',
      bestRating: '5',
      worstRating: '1',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Unova Estate Egypt',
    url: 'https://estate.unova.app',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://estate.unova.app/clients?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&family=Public+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased font-sans">
        <LanguageProvider>
          {children}
          <HoverPrefetch />
        </LanguageProvider>
      </body>
    </html>
  );
}
