'use client';

import Link from 'next/link';
import Footer from '@/components/Footer';

const downloadItems = [
  {
    title: 'Unova REMS Official Brochure (PDF)',
    size: '4.8 MB',
    desc: 'Get a full overview of Unova Modules, mobile apps, WhatsApp integrations, and landowner ratio allocation setups.',
    link: '#'
  },
  {
    title: 'Real Estate Lead Tracker Template (Excel)',
    size: '1.2 MB',
    desc: 'A professional excel spreadsheet template containing lead scoring models, agent pipelines, and follow-up templates.',
    link: '#'
  },
  {
    title: 'Client Payment & Installment Scheduler',
    size: '850 KB',
    desc: 'An Excel template to calculate flat installment schedules, payment milestones, and post-dated cheque deposit dates.',
    link: '#'
  },
  {
    title: 'Property Handover Checklist (PDF)',
    size: '620 KB',
    desc: 'A comprehensive checklist for engineering teams to verify prior to flat handover and key dispatches.',
    link: '#'
  }
];

export default function DownloadsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#6DC042]/20 selection:text-slate-900 overflow-x-hidden relative flex flex-col justify-between">
      
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-20%] left-[10%] w-[700px] h-[700px] bg-indigo-600/[0.04] rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-[#6DC042]/[0.03] rounded-full blur-[120px]" />
      </div>

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src="/unova-real-estate-software-logo.png" alt="Unova Estate Logo" className="h-9 w-auto" />
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/resources" className="text-xs font-bold text-indigo-600 hover:text-indigo-500">
              ← Back to Resources
            </Link>
            <Link href="/demo" className="text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-full transition-all shadow-md">
              Request a Demo
            </Link>
          </div>
        </div>
      </nav>

      {/* CONTENT */}
      <main className="relative z-10 pt-32 pb-24 px-5 max-w-4xl mx-auto w-full flex-grow">
        
        {/* HEADER */}
        <div className="text-center space-y-4 mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6DC042]/10 border border-[#6DC042]/20 text-xs font-semibold text-[#6DC042]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6DC042] animate-pulse" />
            Free Templates & Assets
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Free Templates & <span className="bg-gradient-to-r from-[#6DC042] to-[#5da538] bg-clip-text text-transparent">Downloads</span>
          </h1>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xl mx-auto">
            Download our curated collection of real estate templates, calculators, brochures, and checklists to streamline your property business.
          </p>
        </div>

        {/* DOWNLOAD LIST */}
        <div className="space-y-6">
          {downloadItems.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 hover:shadow-md transition-shadow">
              <div className="space-y-1.5 max-w-xl">
                <div className="flex items-center gap-2.5">
                  <h3 className="text-base font-black text-slate-900">{item.title}</h3>
                  <span className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-0.5 rounded">
                    {item.size}
                  </span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
              <button className="flex-shrink-0 px-5 py-2.5 bg-slate-50 hover:bg-[#6DC042] hover:text-white border border-slate-200 text-slate-700 font-bold rounded-xl transition-all text-xs shadow-sm flex items-center gap-1.5">
                <span>📥</span> Download File
              </button>
            </div>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}
