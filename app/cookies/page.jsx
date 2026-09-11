import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Cookie Policy — Unova Estate | Unova Software',
  description: 'Understand how Unova Estate uses cookies and web storage to enhance user authentication and session performance.',
  alternates: {
    canonical: '/cookies',
  },
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-indigo-500 selection:text-white">
      <Navbar activePage="cookies" />

      <main className="relative z-10 pt-28 pb-24 px-5 max-w-4xl mx-auto w-full flex-1">
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/90 shadow-sm space-y-8">
          <div>
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">Privacy & Security</span>
            <h1 className="text-3xl md:text-4xl font-black text-slate-900 mt-1">Cookie Policy</h1>
            <p className="text-xs text-slate-400 mt-2">Last Updated: January 2026</p>
          </div>

          <div className="prose prose-slate max-w-none text-sm text-slate-600 leading-relaxed space-y-6">
            <p>
              This Cookie Policy explains how <strong>Unova Software</strong> uses cookies and similar web technologies on <strong>Unova Estate</strong> (<code>estate.unova.app</code>).
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-2">1. Essential Authentication Cookies</h2>
            <p>
              These cookies are necessary to authenticate logged-in sales officers, accounts managers, and executive directors securely across session refreshes.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-2">2. Performance & Analytics Cookies</h2>
            <p>
              We use aggregated analytics cookies to monitor page load times, system response speeds, and optimize cloud server performance for users in Egypt and the MENA region.
            </p>

            <h2 className="text-lg font-bold text-slate-900 pt-2">3. Cookie Preference Management</h2>
            <p>
              Users can manage or disable non-essential cookies via their browser settings anytime without affecting core ERP authentication functionality.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
