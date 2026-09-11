'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLanguage } from '@/context/LanguageContext';

const Icon = ({ d, className = 'w-6 h-6' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d={d} />
  </svg>
);

const CheckIcon = ({ cls = 'w-4 h-4 text-[#6DC042]' }) => (
  <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
  </svg>
);

export default function SolutionDetailClient({ solution, relatedSolutions }) {
  const { t, isRtl } = useLanguage();
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeSectionId, setActiveSectionId] = useState('');

  const createSlug = (str) => {
    if (!str) return '';
    return str
      .replace(/<[^>]+>/g, '')
      .replace(/&amp;/g, 'and')
      .replace(/&/g, 'and')
      .replace(/&[a-z0-9#]+;/gi, '')
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');
  };

  const tocSections = [
    { id: 'capabilities-section', title: isRtl ? 'المميزات الرئيسية' : 'Key Capabilities' },
    { id: 'benchmarks-section', title: isRtl ? 'مؤشرات الأداء' : 'System Benchmarks' }
  ];

  const h2Matches = solution.contentHtml.match(/<h2[^>]*>(.*?)<\/h2>/g) || [];
  h2Matches.forEach((h2Tag) => {
    let title = h2Tag.replace(/<[^>]+>/g, '').trim();
    title = title
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");

    if (title.toLowerCase().includes('schedule') || title.toLowerCase().includes('walkthrough') || title.toLowerCase().includes('demo')) {
      return;
    }

    const slug = createSlug(title);
    tocSections.push({ id: `section-${slug}`, title });
  });

  tocSections.push({ id: 'specs-section', title: isRtl ? 'مواصفات النظام' : 'System Specs' });
  tocSections.push({ id: 'faq-section', title: isRtl ? 'الأسئلة الشائعة' : 'Frequently Asked Questions' });

  const processedContentHtml = solution.contentHtml.replace(/<h2([^>]*)>(.*?)<\/h2>/g, (match, attrs, text) => {
    const cleanText = text.replace(/<[^>]+>/g, '').trim();
    const slug = createSlug(cleanText);
    return `<h2 id="section-${slug}" ${attrs}>${text}</h2>`;
  });

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSectionId(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (let i = tocSections.length - 1; i >= 0; i--) {
        const sec = tocSections[i];
        const el = document.getElementById(sec.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSectionId(sec.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tocSections]);

  const renderHero = () => {
    return (
      <div className="relative overflow-hidden bg-slate-50/20 text-slate-900 pt-36 pb-20 px-5 border-b border-slate-200/50">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#6DC042]/10 to-emerald-500/5 blur-[120px] rounded-full pointer-events-none z-0" />

        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-bold text-indigo-600 backdrop-blur-sm shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              {isRtl ? 'حلول إدارية للمؤسسات العقارية' : 'Real Estate Enterprise Solution'}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-slate-900">
              {solution.title}
            </h1>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
              {solution.metaDescription}
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
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white p-1 backdrop-blur-xl">
              <img src={solution.heroImage || 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80'} alt={solution.title} className="w-full h-80 object-cover rounded-2xl" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-extrabold text-xl">
                {solution.statsValue || '45%'}
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{solution.statsLabel || (isRtl ? 'زيادة الكفاءة' : 'Efficiency Increase')}</p>
                <p className="text-xs font-black text-slate-800">{isRtl ? 'عائد استثمار مثبت' : 'Proven ROI Lift'}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-600/10 selection:text-slate-900 overflow-x-hidden relative flex flex-col justify-between">
      <Navbar activePage="solutions" />

      {renderHero()}

      <main className="max-w-7xl mx-auto px-5 py-12 relative z-10 flex-grow w-full">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Article Body */}
          <div className="lg:col-span-8 space-y-10 bg-white p-6 md:p-10 rounded-3xl border border-slate-200/85 shadow-sm">
            <div id="capabilities-section" className="space-y-6 scroll-mt-24">
              <h2 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#6DC042]" />
                {isRtl ? 'المميزات الرئيسية والنتائج' : 'Key Capabilities & Outcomes'}
              </h2>
              <div className="grid md:grid-cols-3 gap-5">
                {[
                  { icon: solution.benefit1_icon, title: solution.benefit1_title, desc: solution.benefit1_desc },
                  { icon: solution.benefit2_icon, title: solution.benefit2_title, desc: solution.benefit2_desc },
                  { icon: solution.benefit3_icon, title: solution.benefit3_title, desc: solution.benefit3_desc }
                ].map((b, bi) => (
                  <div key={bi} className="bg-slate-50/50 p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#6DC042]/30 transition-all group">
                    <span className="text-3xl block mb-3 group-hover:scale-110 transition-transform">{b.icon}</span>
                    <h3 className="text-xs font-bold text-slate-900 mb-1.5">{b.title}</h3>
                    <p className="text-slate-500 text-[11px] leading-relaxed">{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Performance Benchmarks Card */}
            <div id="benchmarks-section" className="bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 text-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-800 space-y-6 scroll-mt-24">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div>
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block mb-1">
                    {isRtl ? 'مؤشرات كفاءة النظام' : 'Performance Benchmarks'}
                  </span>
                  <h3 className="text-lg md:text-xl font-extrabold text-white">
                    {isRtl ? 'معدلات تحسين الأداء' : 'System Efficiency Gains'}
                  </h3>
                </div>
                <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold rounded-full w-fit">
                  {isRtl ? 'نتائج مؤكدة' : 'Verified Metrics'}
                </span>
              </div>

              <div className="grid md:grid-cols-2 gap-6 pt-2">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-300">{isRtl ? 'سرعة تحصيل الأقساط' : 'Instalment Collection Speed'}</span>
                    <span className="text-[#6DC042]">91% {isRtl ? 'في الموعد' : 'On-Time'}</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-[#6DC042] h-full rounded-full w-[91%]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-slate-300">{isRtl ? 'تقليل الهدر في المواد' : 'Material Wastage Reduction'}</span>
                    <span className="text-indigo-400">75% {isRtl ? 'وفر' : 'Saved'}</span>
                  </div>
                  <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                    <div className="bg-indigo-500 h-full rounded-full w-[75%]" />
                  </div>
                </div>
              </div>
            </div>

            {/* Markdown Body */}
            <article className="prose-custom max-w-none text-slate-600 border-t border-slate-200 pt-8">
              <div dangerouslySetInnerHTML={{ __html: processedContentHtml }} />
            </article>

            {/* Specs Checklist */}
            <div id="specs-section" className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200/80 space-y-6 scroll-mt-24">
              <h3 className="text-sm font-black text-slate-900">{isRtl ? 'مواصفات ربط النظام' : 'System Integration Specs'}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[solution.feature1, solution.feature2, solution.feature3, solution.feature4].map((f, fi) => (
                  <div key={fi} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200/60 shadow-sm">
                    <CheckIcon cls="w-4 h-4 text-[#6DC042] flex-shrink-0" />
                    <span className="text-xs font-semibold text-slate-700">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div id="faq-section" className="space-y-6 border-t border-slate-200 pt-8 scroll-mt-24">
              <h2 className="text-xl font-black text-slate-900 tracking-tight">{isRtl ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}</h2>
              <div className="space-y-3">
                {[
                  { q: solution.faq1_q, a: solution.faq1_a },
                  { q: solution.faq2_q, a: solution.faq2_a },
                  { q: solution.faq3_q, a: solution.faq3_a }
                ].map((faq, index) => (
                  <div key={index} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                    <button
                      onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                      className="w-full text-left px-5 py-4 font-bold text-xs text-slate-900 flex items-center justify-between gap-4"
                    >
                      <span>{faq.q}</span>
                      <span className="text-indigo-600 text-base">{activeFaq === index ? '−' : '+'}</span>
                    </button>
                    {activeFaq === index && (
                      <div className="px-5 pb-4 text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Sidebar: Table of Contents & Related */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 space-y-6">
              <div className="bg-white p-6 rounded-3xl border border-slate-200/85 shadow-sm space-y-4">
                <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block border-b border-slate-100 pb-2">
                  {isRtl ? 'الانتقال إلى قسم:' : 'Jump to section :'}
                </span>
                <nav className="space-y-1">
                  {tocSections.map((sec) => (
                    <button
                      key={sec.id}
                      onClick={() => scrollToSection(sec.id)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all flex items-center justify-between ${
                        activeSectionId === sec.id
                          ? 'bg-indigo-50 text-indigo-600 font-bold border-l-2 border-indigo-600'
                          : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                      }`}
                    >
                      <span>{sec.title}</span>
                      <span className="text-[10px] opacity-40">→</span>
                    </button>
                  ))}
                </nav>
              </div>

              {/* Related Solutions */}
              {relatedSolutions && relatedSolutions.length > 0 && (
                <div className="bg-white p-6 rounded-3xl border border-slate-200/85 shadow-sm space-y-4">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block border-b border-slate-100 pb-2">
                    {isRtl ? 'حلول ذات صلة:' : 'Related Solutions'}
                  </span>
                  <div className="space-y-3">
                    {relatedSolutions.map((rs, rsi) => (
                      <Link key={rsi} href={`/solutions/${rs.slug}`} className="block p-3 rounded-2xl bg-slate-50 hover:bg-indigo-50/50 border border-slate-100 transition-all group">
                        <p className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{rs.title}</p>
                        <p className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">{rs.metaDescription}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}