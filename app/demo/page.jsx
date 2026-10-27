import DemoClient from "@/components/DemoClient";

export const metadata = {
  title:
    "Book a Free Demo — Unova Estate Real Estate ERP & CRM | Unova Software",
  description:
    "Schedule a live 30-minute personalized demo of Unova Estate, the AI-powered real estate ERP & CRM, with our product experts.",
  alternates: {
    canonical: "https://unovasoftware.com/demo",
    languages: {
      en: "https://unovasoftware.com/demo",
      // ar: 'https://unovasoftware.com/ar/demo', // uncomment when /ar/demo exists
      "x-default": "https://unovasoftware.com/demo",
    },
  },
  openGraph: {
    title: "Book a Free Demo — Unova Estate | Unova Software",
    description:
      "Schedule a live 30-minute personalized demo of Unova Estate, the AI-powered real estate ERP & CRM.",
    url: "https://unovasoftware.com/demo",
    siteName: "Unova Software",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://unovasoftware.com/unova-real-estate-crm-sales-dashboard-mockup.png",
        width: 1200,
        height: 630,
        alt: "Unova Estate AI-Powered Real Estate ERP CRM Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Book a Free Demo — Unova Estate",
    description:
      "Live 30-minute personalized demo of the AI-powered real estate ERP & CRM.",
    images: [
      "https://unovasoftware.com/unova-real-estate-crm-sales-dashboard-mockup.png",
    ],
  },
};

export default function DemoPage() {
  return <DemoClient />;
}
