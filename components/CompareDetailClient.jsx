'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLanguage } from '@/context/LanguageContext';

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
  const { t, isRtl } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-600/10 selection:text-slate-900 overflow-x-hidden relative flex flex-col justify-between">
      
      <Navbar activePage="compare" />

      {/* HERO HEADER */}
      <section className="relative overflow-hidden bg-slate-50/20 text-slate-900 pt-36 pb-20 px-5 border-b border-slate-200/50">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#6DC042]/10 to-emerald-500/5 blur-[120px] rounded-full pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6DC042]/10 border border-[#6DC042]/20 text-xs font-bold text-[#6DC042]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#6DC042] animate-pulse" />
              {isRtl ? 'دراسة مقارنة الأنظمة' : 'Comparison Study'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-slate-900">
              {comparison.title}
            </h1>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
              {comparison.metaDescription}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/demo" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full transition-all text-xs shadow-md">
                {t('nav.requestDemo')}
              </Link>
              <a href="https://wa.me/201000000000" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-full border border-slate-200 transition-all text-xs shadow-sm">
                💬 {isRtl ? 'تواصل عبر الواتساب' : 'WhatsApp Us'}
              </a>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white p-1">
              <img src={comparison.heroImage} alt={comparison.title} className="w-full h-80 object-cover rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLE CONTENT */}
      <main className="max-w-7xl mx-auto px-5 py-12 relative z-10 flex-grow w-full">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-10 bg-white p-6 md:p-10 rounded-3xl border border-slate-200/85 shadow-sm">
            <article className="prose-custom max-w-none text-slate-600">
              <div dangerouslySetInnerHTML={{ __html: comparison.contentHtml }} />
            </article>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 bg-white p-6 rounded-3xl border border-slate-200/85 shadow-sm space-y-4">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block border-b border-slate-100 pb-2">
                {isRtl ? 'مقارنات ذات صلة:' : 'Related Comparisons'}
              </span>
              <div className="space-y-3">
                {relatedComparisons && relatedComparisons.map((rc, rci) => (
                  <Link key={rci} href={`/compare/${rc.slug}`} className="block p-3 rounded-2xl bg-slate-50 hover:bg-indigo-50/50 border border-slate-100 transition-all group">
                    <p className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{rc.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}