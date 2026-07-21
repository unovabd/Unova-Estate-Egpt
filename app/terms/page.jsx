import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms & Conditions — Unova Estate | Unova Software',
  description: 'Review the Terms & Conditions governing the use of Unova Estate ERP & CRM software platforms.',
  alternates: {
    canonical: '/terms',
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-indigo-500 selection:text-white">
      <Navbar activePage="terms" />

      <main className="relative z-10 pt-28 pb-24 px-5 max-w-4xl mx-auto w-full flex-1">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/90 shadow-sm space-y-8">
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Legal & Agreements</span>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mt-1">Terms & Conditions</h1>
            <p className="text-xs text-slate-400 mt-2">Last Updated: January 2026</p>
          </div>

          <div className="prose prose-slate max-w-none text-sm text-slate-600 leading-relaxed space-y-6">
            <p>
              Welcome to <strong>Unova Estate</strong>. By accessing or using our software-as-a-service (SaaS) ERP and CRM solutions provided by <strong>Unova Software</strong>, you agree to comply with and be bound by the following Terms and Conditions.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-2">1. Subscription & Account Terms</h2>
            <p>
              Real estate developers, land plot developers, and housing companies subscribing to Unova Estate must provide accurate organizational information. Accounts are non-transferable without prior written permission from Unova Software.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-2">2. Acceptable Use Policy</h2>
            <p>Users agree not to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Reverse engineer, decompile, or attempt to extract source code from Unova Estate.</li>
              <li>Use the automated SMS or WhatsApp gateways for unsolicited spamming.</li>
              <li>Attempt unauthorized access to other developer organizations hosted on the shared cloud.</li>
            </ul>

            <h2 className="text-lg font-bold text-slate-900 pt-2">3. Service Level Agreement (SLA) & Uptime</h2>
            <p>
              Unova Software guarantees a 99.99% operational cloud uptime SLA for AWS multi-zone hosted instances, excluding scheduled maintenance announced 48 hours in advance.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-2">4. Intellectual Property</h2>
            <p>
              All software design, AI algorithms, trademarks, and source code associated with Unova Estate remain the exclusive intellectual property of Unova Software.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-2">5. Governing Law</h2>
            <p>
              These Terms and Conditions are governed by and construed in accordance with the laws of the People&apos;s Republic of Bangladesh.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
