import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactSection from '@/components/ContactSection';

export const metadata = {
  title: 'Contact Us — Unova Estate | Unova Software',
  description: 'Get in touch with Unova Software. Call our hotline, email support, or visit our Dhaka office for real estate ERP consultations.',
  alternates: {
    canonical: '/contact',
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
            Have questions about Unova Estate ERP? Talk to our software specialists or visit our corporate office in Dhaka.
          </p>
        </div>

        {/* Contact Section Widget */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
