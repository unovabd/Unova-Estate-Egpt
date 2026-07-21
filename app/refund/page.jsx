import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Refund & Cancellation Policy — Unova Estate | Unova Software',
  description: 'Read the Refund and Cancellation Policy for Unova Estate SaaS licensing and implementation services.',
  alternates: {
    canonical: '/refund',
  },
};

export default function RefundPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-indigo-500 selection:text-white">
      <Navbar activePage="refund" />

      <main className="relative z-10 pt-28 pb-24 px-5 max-w-4xl mx-auto w-full flex-1">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/90 shadow-sm space-y-8">
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Billing Policies</span>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mt-1">Refund & Cancellation Policy</h1>
            <p className="text-xs text-slate-400 mt-2">Last Updated: January 2026</p>
          </div>

          <div className="prose prose-slate max-w-none text-sm text-slate-600 leading-relaxed space-y-6">
            <p>
              At <strong>Unova Software</strong>, we strive to ensure total customer satisfaction with <strong>Unova Estate ERP & CRM</strong>. This Refund & Cancellation Policy explains our terms regarding subscription cancellations and refund requests.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-2">1. 30-Day Money-Back Guarantee (SaaS Subscriptions)</h2>
            <p>
              New SaaS subscription accounts are eligible for a 100% full refund within 30 days of initial deployment if the software fails to meet agreed operational benchmarks.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-2">2. Subscription Cancellation</h2>
            <p>
              Clients may cancel monthly or annual recurring SaaS subscriptions at any time via the admin portal or by emailing <code>support@unova.bd</code>. Cancellation takes effect at the end of the current billing cycle.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-2">3. Non-Refundable Services</h2>
            <p>
              Custom data migration engineering fees, dedicated on-premise hardware setup, and third-party SMS/WhatsApp credit packages are non-refundable once deployed.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-2">4. Refund Process</h2>
            <p>
              Approved refunds are processed within 7 business days back to the original payment method (bKash, Nagad, Bank Wire).
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
