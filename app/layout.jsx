import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import HoverPrefetch from "@/components/HoverPrefetch";

export const metadata = {
  title: "Unova Estate — AI-Powered Real Estate ERP & CRM | Unova Software",
  description:
    "Unova Estate by Unova Software is an AI-powered real estate ERP & CRM. Automate lead tracking, installment collections, property sales, commissions, and construction billing.",
  keywords:
    "unova, unova estate, unova software, real estate erp, real estate crm, property management software, real estate sales software, installment collection software, lead management real estate, برنامج إدارة العقارات, نظام إدارة المبيعات العقارية",
  metadataBase: new URL("https://unovasoftware.com"),
  alternates: {
    canonical: "/",
    languages: {
      en: "https://unovasoftware.com/",
      // Uncomment when the /ar route exists, otherwise it points to a 404.
      // ar: "https://unovasoftware.com/ar",
      "x-default": "https://unovasoftware.com/",
    },
  },
  openGraph: {
    title: "Unova Estate — AI-Powered Real Estate ERP & CRM | Unova Software",
    description:
      "AI-powered real estate ERP & CRM. CRM, HR, payroll, commissions & installment collection automation.",
    url: "https://unovasoftware.com/",
    siteName: "Unova Software",
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_AR"],
    images: [
      {
        url: "https://unovasoftware.com/unova-real-estate-crm-sales-dashboard-mockup.png",
        width: 1200,
        height: 630,
        alt: "Unova Estate AI-Powered Real Estate ERP CRM Sales Dashboard Mockup",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Unova Estate — AI-Powered Real Estate ERP & CRM",
    description: "AI-powered real estate ERP & CRM by Unova Software.",
    images: [
      "https://unovasoftware.com/unova-real-estate-crm-sales-dashboard-mockup.png",
    ],
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
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
    "@id": "https://unovasoftware.com/#organization",
    name: "Unova Software",
    legalName: "Unova Software Ltd.",
    url: "https://unovasoftware.com",
    logo: "https://unovasoftware.com/unova-real-estate-software-logo.png",
    email: "info@unovasoftware.com",
    telephone: "+201022631668",
    foundingDate: "2020",
    // Main office: marketing, sales & international relations
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cairo",
      addressCountry: "EG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+201022631668",
      email: "info@unovasoftware.com",
      contactType: "sales",
      availableLanguage: ["Arabic", "English"],
    },
    // Development centre
    department: {
      "@type": "Organization",
      name: "Unova Software — Development Centre",
      description: "Backend engineering and product development.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dhaka",
        addressCountry: "BD",
      },
    },
    sameAs: [
      "https://unova.eg/", // TODO: keep only if you own this site, otherwise remove
      "https://www.facebook.com/unovarem",
      "https://www.youtube.com/@UnovaSoftware",
      "https://www.linkedin.com/company/theunova/",
    ],
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": "https://unovasoftware.com/#software",
    name: "Unova Estate",
    operatingSystem: "Web, Windows, iOS, Android",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Real Estate ERP & CRM Software",
    description:
      "AI-powered real estate ERP & CRM. Manage leads, properties, sales orders, commissions, HR, payroll, and marketing.",
    // Change to "https://unovasoftware.com/real-estate-erp-software" when that page is live.
    url: "https://unovasoftware.com",
    publisher: { "@id": "https://unovasoftware.com/#organization" },
    featureList: [
      "Installment Collection Automation",
      "Lead Leakage Prevention Engine",
      "Construction Milestone Billing ERP",
      "WhatsApp Business API Integration",
      "Executive MD & CEO Dashboard",
      "Full Arabic & English Multi-lingual Support",
    ],
    targetAudience: {
      "@type": "Audience",
      audienceType: "Real Estate Developers & Agencies",
    },
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": "https://unovasoftware.com/#product",
    name: "Unova Estate — AI-Powered Real Estate ERP & CRM",
    image:
      "https://unovasoftware.com/unova-real-estate-crm-sales-dashboard-mockup.png",
    description:
      "AI-powered real estate ERP & CRM platform for housing and land developers.",
    brand: {
      "@type": "Brand",
      name: "Unova Software",
    },
    manufacturer: { "@id": "https://unovasoftware.com/#organization" },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Unova Software",
    url: "https://unovasoftware.com",
  };

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
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
