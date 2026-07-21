import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Downloads (Brochure, Leaflet & Company Profile) — Unova Estate',
  description: 'Download Unova Estate ERP product brochures, feature leaflets, company profile PDF, and real estate implementation guides.',
  alternates: {
    canonical: '/resources/downloads',
  },
};

export default function DownloadsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-indigo-500 selection:text-white">
      <Navbar activePage="resources" />

      <main className="relative z-10 pt-28 pb-24 px-5 max-w-5xl mx-auto w-full flex-1 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
            Resources & Downloads
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Brochures, Leaflets & Company Profile
          </h1>
          <p className="text-base text-slate-600">
            Explore and download official Unova Estate ERP documentation, feature leaflets, and real estate developer guidebooks.
          </p>
        </div>

        {/* Downloads Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-2xl font-bold">
                📄
              </div>
              <h3 className="text-xl font-bold text-slate-900">Unova Estate Product Brochure (2026)</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Comprehensive 16-page PDF overview covering CRM, Lead Engine, Installment Automation, and MD Dashboards.
              </p>
            </div>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-5 py-3 rounded-2xl bg-indigo-600 text-white text-xs font-bold hover:bg-indigo-700 transition-all shadow-md"
            >
              Request Full Brochure (PDF)
            </Link>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl font-bold">
                🗺️
              </div>
              <h3 className="text-xl font-bold text-slate-900">Land Developer & Plot Registry Guide</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Feature leaflet detailing CS/SA/RS Dag legal registry search and interactive plot map workflows.
              </p>
            </div>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-5 py-3 rounded-2xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-all shadow-md"
            >
              Request Land Guide (PDF)
            </Link>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl font-bold">
                🏗️
              </div>
              <h3 className="text-xl font-bold text-slate-900">Construction Milestone Billing Leaflet</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Implementation guide for site inspection apps, rebar/cement store ledgers, and contractor bill audits.
              </p>
            </div>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-5 py-3 rounded-2xl bg-blue-600 text-white text-xs font-bold hover:bg-blue-700 transition-all shadow-md"
            >
              Request Construction Guide (PDF)
            </Link>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-2xl font-bold">
                🏢
              </div>
              <h3 className="text-xl font-bold text-slate-900">Unova Software Corporate Profile</h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Official corporate deck detailing Unova Software architecture, cloud security compliance, and support SLAs.
              </p>
            </div>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-5 py-3 rounded-2xl bg-slate-900 text-white text-xs font-bold hover:bg-slate-800 transition-all shadow-md"
            >
              Request Corporate Profile (PDF)
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
