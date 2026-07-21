import './globals.css';
import HoverPrefetch from '@/components/HoverPrefetch';

export const metadata = {
  title: 'Unova Estate — #1 AI-Powered Real Estate ERP in Bangladesh | Unova',
  description:
    "Unova Estate (by Unova Software) is Bangladesh's #1 AI-powered real estate ERP & CRM. Automate lead tracking, installment collections, property sales, commissions, and construction billing.",
  keywords:
    'unova, unova estate, unova software, unova.bd, unova rem, unova real estate, real estate software bangladesh, property management software, CRM real estate, ERP real estate, lead management, commission tracking',
  metadataBase: new URL('https://estate.unova.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Unova Estate — Real Estate ERP & CRM | Unova Software',
    description:
      "Bangladesh's #1 AI-powered real estate ERP & CRM. CRM, HR, payroll, commissions & installment collection automation.",
    url: 'https://estate.unova.app',
    siteName: 'Unova Estate (Unova Software)',
    type: 'website',
    locale: 'en_US',
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
    title: 'Unova Estate — #1 Real Estate ERP in Bangladesh',
    description: "Bangladesh's first AI-powered real estate ERP & CRM by Unova Software.",
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
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://estate.unova.app/#organization",
    "name": "Unova Estate",
    "legalName": "Unova Software",
    "url": "https://estate.unova.app",
    "logo": "https://estate.unova.app/unova-real-estate-software-logo.png",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dhaka",
      "addressCountry": "BD"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+8801766774016",
      "contactType": "customer service",
      "areaServed": "BD",
      "availableLanguage": ["English", "Bengali"]
    },
    "sameAs": [
      "https://unova.bd/",
      "https://www.facebook.com/unovarem",
      "https://www.youtube.com/@UnovaSoftware",
      "https://www.linkedin.com/company/theunova/"
    ]
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://estate.unova.app/#software",
    "name": "Unova Estate",
    "operatingSystem": "Web, Windows, iOS, Android",
    "applicationCategory": "BusinessApplication",
    "applicationSubCategory": "Real Estate ERP & CRM Software",
    "description": "Bangladesh's first AI-powered real estate ERP & CRM. Manage leads, properties, sales orders, commissions, HR, payroll, and marketing.",
    "url": "https://estate.unova.app",
    "publisher": { "@id": "https://estate.unova.app/#organization" },
    "featureList": [
      "Installment Collection Automation",
      "Lead Leakage Prevention Engine",
      "Construction Milestone Billing ERP",
      "WhatsApp Business API Integration",
      "Executive MD & CEO Dashboard"
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BDT"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "120",
      "bestRating": "5"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Bangladesh"
    },
    "targetAudience": {
      "@type": "Audience",
      "audienceType": "Real Estate & Land Developers in Bangladesh"
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://estate.unova.app/#product",
    "name": "Unova Estate — AI-Powered Real Estate ERP & CRM",
    "image": "https://estate.unova.app/unova-real-estate-crm-sales-dashboard-mockup.png",
    "description": "Bangladesh's first AI-powered real estate ERP & CRM platform for housing and land developers.",
    "brand": {
      "@type": "Brand",
      "name": "Unova Software"
    },
    "manufacturer": { "@id": "https://estate.unova.app/#organization" },
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "BDT",
      "lowPrice": "0",
      "offerCount": "1",
      "url": "https://estate.unova.app/demo"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "120",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Unova Estate ERP",
    "review": [
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Senior GM, Finance & Accounts" },
        "publisher": { "@type": "Organization", "name": "Top Real Estate Developer, Dhaka" },
        "datePublished": "2026-01-15",
        "reviewBody": "Unova Real Estate ERP completely transformed our payment collection workflow. Automated SMS reminders and instant digital money receipts eliminated 90% of manual follow-up calls.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Head of Sales & Marketing" },
        "publisher": { "@type": "Organization", "name": "Leading Apartment Developer, Panthapath" },
        "datePublished": "2026-02-10",
        "reviewBody": "In luxury real estate, responding to a lead within 3 minutes instead of 3 hours doubles conversion. Unova Meta Integration guaranteed zero lead leakage for our sales team.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      },
      {
        "@type": "Review",
        "author": { "@type": "Person", "name": "Executive Director" },
        "publisher": { "@type": "Organization", "name": "Pioneer Property Developer, Gulshan" },
        "datePublished": "2026-03-01",
        "reviewBody": "Unova AI sales assistant enables our buyers to explore floor plans, EMI calculators, and site visit schedules instantly on WhatsApp.",
        "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Unova Estate",
    "url": "https://estate.unova.app",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://estate.unova.app/clients?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700;800;900&display=swap"
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <HoverPrefetch />
      </body>
    </html>
  );
}
