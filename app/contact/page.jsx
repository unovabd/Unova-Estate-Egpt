import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactSection";

export const metadata = {
  title: "Contact Us — Unova Estate | Unova Software",
  description:
    "Get in touch with Unova Software. Call our hotline, email our support team, or book a consultation about our AI-powered real estate ERP & CRM.",
  alternates: {
    canonical: "https://unovasoftware.com/contact",
    languages: {
      en: "https://unovasoftware.com/contact",
      // ar: 'https://unovasoftware.com/ar/contact', // uncomment when /ar/contact exists
      "x-default": "https://unovasoftware.com/contact",
    },
  },
  openGraph: {
    title: "Contact Us — Unova Estate | Unova Software",
    description:
      "Get in touch with Unova Software. Call our hotline, email our support team, or book a consultation about our AI-powered real estate ERP & CRM.",
    url: "https://unovasoftware.com/contact",
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
    title: "Contact Us — Unova Estate | Unova Software",
    description:
      "Talk to Unova Software about our AI-powered real estate ERP & CRM.",
    images: [
      "https://unovasoftware.com/unova-real-estate-crm-sales-dashboard-mockup.png",
    ],
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-indigo-500 selection:text-white">
      <Navbar activePage="contact" />

      <main className="relative z-10 pt-28 pb-24 px-5 max-w-7xl mx-auto w-full flex-1 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
            Get in Touch
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            We&apos;re Here to Help Digitized Your Real Estate Business
          </h1>
          <p className="text-base text-slate-600">
            Have questions about Unova Estate ERP? Talk to our software
            specialists or visit our corporate office in Dhaka.
          </p>
        </div>

        {/* Contact Section Widget */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
