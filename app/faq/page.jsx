import FaqClient from '@/components/FaqClient';

export const metadata = {
  title: 'Frequently Asked Questions (FAQ) — Unova Estate',
  description: 'Find answers to general setup, CRM, lead tracking, construction billing, pricing, and security for Unova Estate.',
  alternates: {
    canonical: '/faq',
  },
};

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Unova Estate and how does it help real estate developers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unova Estate is Bangladesh's first AI-powered enterprise ERP & CRM platform built specifically for real estate developers, housing companies, and land developers. It streamlines lead tracking, installment collection, contractor billing, and MD executive dashboards in one unified cloud system."
        }
      },
      {
        "@type": "Question",
        "name": "How does the Installment Automation feature prevent delayed buyer payments?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unova Estate triggers automated SMS, WhatsApp, and email payment notifications 7 days, 3 days, and on the due date with integrated bKash, Nagad, and bank gateway payment links, reducing installment delays by up to 48%."
        }
      },
      {
        "@type": "Question",
        "name": "Can Unova Estate prevent lead leakage from Meta Facebook Ads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Unova Lead Engine connects directly to Facebook & Instagram Lead Ads via real-time Cloud API, routing 100% of new inquiries to sales executive mobile apps within 2 seconds using AI round-robin assignment."
        }
      },
      {
        "@type": "Question",
        "name": "Is Unova Estate suitable for both Land Plot Developers and Flat Construction Developers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes! Unova Estate features specialized modules for both flat developers (floor plan matrices, snagging lists, unit handovers) and land developers (CS/SA/RS/BRS Dag & Khatian registries, interactive plot layout maps)."
        }
      },
      {
        "@type": "Question",
        "name": "How secure is buyer financial data in Unova Estate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unova Estate uses bank-grade 256-bit SSL encryption, automated daily off-site cloud backups, role-based access permissions, and full audit logs for all financial vouchers and ledger modifications."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FaqClient />
    </>
  );
}
