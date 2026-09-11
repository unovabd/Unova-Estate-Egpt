import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'About Unova Estate — Mission, Vision & Leadership | Unova Software',
  description: 'Learn about Unova Software, our mission to digitize real estate in Egypt & MENA region, our vision, and leadership team.',
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-indigo-500 selection:text-white">
      <Navbar activePage="about" />

      <main className="relative z-10 pt-28 pb-24 px-5 max-w-7xl mx-auto w-full flex-1 space-y-16">
        {/* HERO HEADER */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100">
            About Unova Software
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Pioneering AI Technology for Egypt &amp; MENA Real Estate
          </h1>
          <p className="text-base md:text-lg text-slate-600 font-normal">
            Unova Estate (by Unova Software) is on a mission to empower housing developers, land plot developers, and building conglomerates with enterprise AI automation.
          </p>
        </div>

        {/* MISSION & VISION GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-2xl font-bold">
              🎯
            </div>
            <h2 className="text-2xl font-black text-slate-900">Our Mission</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              To eliminate operational inefficiencies, payment defaults, and lead leakage in Egypt and MENA&apos;s real estate industry by delivering bank-grade, AI-driven ERP and CRM systems built specifically for regional business workflows.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl font-bold">
              🔭
            </div>
            <h2 className="text-2xl font-black text-slate-900">Our Vision</h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              To become the undisputed #1 operating system for real estate and infrastructure developers across Egypt and the Middle East, setting the benchmark for transparency, digital customer experience, and smart automation.
            </p>
          </div>
        </div>

        {/* LEADERSHIP */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200/90 shadow-sm space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl md:text-3xl font-black text-slate-900">Leadership &amp; Values</h2>
            <p className="text-sm text-slate-500">
              Guided by engineering ethics, innovation, and an unrelenting commitment to customer success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 text-center">
              <div className="w-16 h-16 rounded-full bg-indigo-600 text-white font-bold text-xl flex items-center justify-center mx-auto shadow-md">
                US
              </div>
              <h3 className="font-bold text-slate-900 text-base">Unova Engineering Team</h3>
              <p className="text-xs text-indigo-600 font-semibold">Core Product &amp; AI Development</p>
              <p className="text-xs text-slate-500 mt-2">Dedicated engineers building next-gen cloud architectures for real estate automation.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 text-center">
              <div className="w-16 h-16 rounded-full bg-emerald-600 text-white font-bold text-xl flex items-center justify-center mx-auto shadow-md">
                CS
              </div>
              <h3 className="font-bold text-slate-900 text-base">Customer Success Specialists</h3>
              <p className="text-xs text-emerald-600 font-semibold">24/7 Onboarding &amp; Support</p>
              <p className="text-xs text-slate-500 mt-2">Ensuring 100% smooth data migration and training for real estate staff in Cairo &amp; Alexandria.</p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 text-center">
              <div className="w-16 h-16 rounded-full bg-sky-600 text-white font-bold text-xl flex items-center justify-center mx-auto shadow-md">
                SE
              </div>
              <h3 className="font-bold text-slate-900 text-base">Security &amp; Compliance Officers</h3>
              <p className="text-xs text-sky-600 font-semibold">Data Protection &amp; Audit</p>
              <p className="text-xs text-slate-500 mt-2">Maintaining bank-grade encryption and regional financial compliance.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-indigo-900 to-slate-900 text-white rounded-3xl p-8 md:p-12 text-center space-y-6 shadow-xl">
          <h2 className="text-2xl md:text-4xl font-black">Ready to Transform Your Real Estate Business?</h2>
          <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto">
            Join leading property and land developers across Egypt operating on Unova Estate.
          </p>
          <div className="pt-2">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-950 font-bold rounded-2xl shadow-lg hover:bg-slate-100 transition-all text-sm"
            >
              Book a Free Demo Walkthrough
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
