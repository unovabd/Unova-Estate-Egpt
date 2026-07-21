import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy — Unova Estate | Unova Software',
  description: 'Read the Privacy Policy for Unova Estate ERP & CRM. Learn how we collect, protect, and handle user and financial data.',
  alternates: {
    canonical: '/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-indigo-500 selection:text-white">
      <Navbar activePage="privacy" />

      <main className="relative z-10 pt-28 pb-24 px-5 max-w-4xl mx-auto w-full flex-1">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/90 shadow-sm space-y-8">
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Legal & Compliance</span>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mt-1">Privacy Policy</h1>
            <p className="text-xs text-slate-400 mt-2">Last Updated: January 2026</p>
          </div>

          <div className="prose prose-slate max-w-none text-sm text-slate-600 leading-relaxed space-y-6">
            <p>
              At <strong>Unova Estate</strong> (developed by <strong>Unova Software</strong>), accessible from <code>https://estate.unova.app</code> and <code>https://unova.bd</code>, protecting user, organizational, and buyer financial data is our top priority. This Privacy Policy outlines the types of information we collect and how we safeguard it.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-2">1. Information We Collect</h2>
            <p>
              We collect information to provide superior ERP and CRM services to real estate developers, housing companies, and land plot developers in Bangladesh. This includes:
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Organizational & Contact Information:</strong> Name, phone number, corporate email address, and office address upon requesting a demo or registering.</li>
              <li><strong>Lead & Customer Data:</strong> Information entered into the CRM via Meta Lead Ads API, website webhooks, or manual entry by sales officers.</li>
              <li><strong>Financial & Transactional Records:</strong> Installment collection schedules, payment gateway tokens (bKash, Nagad, bank wire), and digital money receipt logs.</li>
            </ul>

            <h2 className="text-lg font-bold text-slate-900 pt-2">2. How We Use Your Information</h2>
            <p>We use collected data solely for system functionality, including:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Operating and maintaining the Unova Estate ERP cloud platform.</li>
              <li>Automating SMS, WhatsApp, and email installment reminders to property buyers.</li>
              <li>Generating C-suite executive BI dashboards and cash flow forecasts.</li>
              <li>Providing technical customer support and system updates.</li>
            </ul>

            <h2 className="text-lg font-bold text-slate-900 pt-2">3. Data Security & Storage</h2>
            <p>
              All customer data is encrypted in transit using bank-grade 256-bit SSL encryption and at rest using AES-256 encryption. We host our cloud infrastructure on Multi-AZ AWS servers with automated daily off-site snapshot backups.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-2">4. Third-Party Sharing</h2>
            <p>
              We do not sell, trade, or rent organizational or buyer data to third parties. Data is shared only with authorized payment gateways (e.g. bKash, Nagad, bank APIs) and Meta/WhatsApp APIs strictly for requested notification services.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-2">5. Contact Us</h2>
            <p>
              If you have questions regarding this Privacy Policy, please contact our Data Protection Officer at:
              <br />
              <strong>Email:</strong> support@unova.bd | <strong>Hotline:</strong> +8801766774016
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
