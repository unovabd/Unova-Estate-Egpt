'use client';

import { useState } from 'react';
import Link from 'next/link';
import AskAI from './AskAI';
import Footer from './Footer';

const CheckIcon = ({ cls = 'w-4 h-4 text-[#6DC042]' }) => (
  <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
  </svg>
);

const CrossIcon = ({ cls = 'w-4 h-4 text-rose-500' }) => (
  <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function CompareDetailClient({ comparison, relatedComparisons }) {
  const [aiOpen, setAiOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-600/10 selection:text-slate-900 overflow-x-hidden relative flex flex-col justify-between">
      
      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src="/unova-real-estate-software-logo.png" alt="Unova Estate Logo" className="h-9 w-auto" loading="eager" />
          </Link>

          <div className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-600">
            <Link href="/#features" className="hover:text-slate-950 transition-colors">Features</Link>
            <Link href="/solutions" className="hover:text-slate-950 transition-colors">Solutions</Link>
            <Link href="/resources" className="hover:text-slate-950 transition-colors">Resources</Link>
            <Link href="/#pricing" className="hover:text-slate-950 transition-colors">Pricing</Link>
            <Link href="/#contact" className="hover:text-slate-950 transition-colors">Contact</Link>
            <AskAI onOpenChange={setAiOpen} />
          </div>

          <div className="flex items-center gap-3">
            <Link href="https://rems.unova.bd/login" className="text-sm font-semibold text-slate-600 hover:text-slate-950 transition-colors hidden sm:block">
              Sign in
            </Link>
            <Link href="/demo" className="text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-full transition-all shadow-md">
              Request a Demo
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO HEADER */}
      <section className="relative overflow-hidden bg-slate-50/20 text-slate-900 pt-36 pb-20 px-5 border-b border-slate-200/50">
        {/* Dotted Grid Background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Soft background ambient glow circles */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#6DC042]/10 to-emerald-500/5 blur-[120px] rounded-full pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6DC042]/10 border border-[#6DC042]/20 text-xs font-semibold text-[#6DC042] backdrop-blur-sm shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6DC042] animate-pulse" />
              Platform Comparison Study
            </span>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-slate-900">
              Unova vs <span className="bg-gradient-to-r from-[#6DC042] to-[#5da538] bg-clip-text text-transparent">{comparison.competitorName}</span>
            </h1>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed max-w-xl">
              {comparison.metaDescription}
            </p>
            <div className="flex gap-4 pt-2">
              <Link href="/demo" className="px-6 py-3 bg-[#6DC042] hover:bg-[#5da538] text-white font-bold rounded-full transition-all text-xs shadow-md">
                Schedule Custom Demo
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative z-10">
            <img src={comparison.heroImage} alt={comparison.title} className="w-full h-80 object-cover rounded-3xl shadow-lg border border-slate-200" />
          </div>
        </div>
      </section>

      {/* COMPARISON MAIN GRID */}
      <main className="max-w-7xl mx-auto px-5 py-16 grid lg:grid-cols-12 gap-12 relative z-10 flex-grow w-full">
        
        {/* Left Side: Summary, Table, Article */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Summary Bullets Board */}
          <div className="bg-white p-6 md:p-8 rounded-3xl border border-slate-200/85 shadow-sm space-y-6">
            <h2 className="text-base font-black text-slate-900 tracking-tight">Executive Summary</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: 'Unova Advantage', point: comparison.summaryPoint1, color: 'text-indigo-600' },
                { label: comparison.category === 'competitor' ? `${comparison.competitorName} Drawback` : 'Legacy Process Drawback', point: comparison.summaryPoint2, color: 'text-amber-600' }
              ].map((summary, si) => (
                <div key={si} className="bg-slate-50/50 p-4 rounded-xl border border-slate-200/60">
                  <p className={`text-[10px] font-black uppercase tracking-wider ${summary.color} mb-1`}>{summary.label}</p>
                  <p className="text-slate-600 text-xs leading-relaxed">{summary.point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Feature Matrix Table */}
          <div className="bg-white rounded-3xl border border-slate-200/85 shadow-sm overflow-hidden space-y-6 py-6">
            <h2 className="text-base font-black text-slate-900 tracking-tight px-6 md:px-8">Feature Comparison Matrix</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                    <th className="py-3.5 px-6 font-bold text-slate-700">Capabilities</th>
                    <th className="py-3.5 px-6 font-bold text-slate-700">{comparison.category === 'competitor' ? comparison.competitorName : 'Legacy Process'}</th>
                    <th className="py-3.5 px-6 font-bold text-slate-900 bg-indigo-50/50 border-l border-indigo-100/50">Unova REMS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-500">
                  {[
                    { key: comparison.matrixKey1, comp: comparison.matrixCompValue1, unova: comparison.matrixUnovaValue1 },
                    { key: comparison.matrixKey2, comp: comparison.matrixCompValue2, unova: comparison.matrixUnovaValue2 },
                    { key: comparison.matrixKey3, comp: comparison.matrixCompValue3, unova: comparison.matrixUnovaValue3 },
                    { key: comparison.matrixKey4, comp: comparison.matrixCompValue4, unova: comparison.matrixUnovaValue4 }
                  ].map((row, ri) => (
                    <tr key={ri} className="hover:bg-slate-50/30 transition-colors">
                      <td className="py-4 px-6 font-semibold text-slate-800">{row.key}</td>
                      <td className="py-4 px-6 text-xs leading-relaxed max-w-[200px]">
                        <span>{row.comp}</span>
                      </td>
                      <td className="py-4 px-6 bg-indigo-50/20 font-semibold text-slate-950 border-l border-indigo-100/50">
                        <div className="flex items-center gap-2">
                          <CheckIcon cls="w-3.5 h-3.5 text-[#6DC042] flex-shrink-0 mt-0.5" />
                          <span>{row.unova}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Parsed Markdown Body */}
          <article className="bg-white p-6 md:p-10 rounded-3xl border border-slate-200/85 shadow-sm prose prose-slate max-w-none text-slate-600 text-xs md:text-sm leading-relaxed space-y-6">
            <div dangerouslySetInnerHTML={{ __html: comparison.contentHtml }} />
          </article>

        </div>

        {/* Right Side: Sidebar */}
        <aside className="lg:col-span-4 space-y-8 sticky top-24 self-start">
          
          {/* Quick Call to Action card */}
          <div className="bg-indigo-900 text-white p-6 rounded-3xl border border-indigo-950 shadow-lg space-y-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 to-indigo-900 opacity-90" />
            <div className="absolute top-[-50%] left-[-20%] w-[300px] h-[300px] bg-violet-600/10 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10 space-y-4">
              <span className="text-3xl block">🚀</span>
              <h3 className="text-base font-black leading-tight">Ready to switch to Unova?</h3>
              <p className="text-indigo-200 text-xs leading-relaxed">
                Learn how we help you migrate your CRM databases and spreadsheet inventory registers into Unova in 2 weeks.
              </p>
              <div className="space-y-2 pt-2">
                <Link href="/demo" className="block w-full py-2.5 bg-white text-indigo-900 font-bold text-xs rounded-xl shadow-md hover:bg-slate-50 transition-all text-center">
                  Book a Free Demo
                </Link>
                <a href="https://wa.me/8801766774016" target="_blank" rel="noopener noreferrer" className="block w-full py-2.5 bg-indigo-800 text-white font-bold text-xs rounded-xl border border-indigo-700 hover:bg-indigo-800/80 transition-all text-center">
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Related Comparisons list */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-xs font-bold text-slate-900 border-b border-slate-100 pb-2">Other Platform Comparisons</h3>
            <div className="space-y-4">
              {relatedComparisons.map((rel, ri) => (
                <div key={ri} className="group/item flex gap-3.5">
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-slate-100">
                    <img src={rel.heroImage} alt={rel.title} className="w-full h-full object-cover transition-transform duration-300 group-hover/item:scale-105" />
                  </div>
                  <div>
                    <Link href={`/compare/${rel.slug}`} className="text-xs font-bold text-slate-800 hover:text-[#6DC042] transition-colors line-clamp-1">
                      {rel.title}
                    </Link>
                    <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-2 leading-relaxed">{rel.metaDescription}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </aside>

      </main>

      <Footer />

      {/* Ask AI chat box */}
      <AskAI open={aiOpen} onOpenChange={setAiOpen} />

    </div>
  );
}