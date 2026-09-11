'use client';

import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function DemoClient() {
  const { t, isRtl } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500/10 selection:text-indigo-900 overflow-x-hidden relative flex flex-col justify-between">
      
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-20%] left-[10%] w-[700px] h-[700px] bg-indigo-600/[0.04] rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-violet-600/[0.04] rounded-full blur-[120px]" />
      </div>

      {/* NAVIGATION */}
      <Navbar activePage="demo" />

      {/* MAIN CONTENT */}
      <main className="relative z-10 pt-36 pb-16 px-5 max-w-5xl mx-auto w-full flex-1 flex flex-col items-center">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-600">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            {isRtl ? 'حجز عرض توضيحي مباشر' : 'Book a Demo'}
          </div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-slate-900">
            {isRtl ? 'شاهد نظام يونوفا إستيت' : 'See Unova Estate'} <span className="text-indigo-600">{isRtl ? 'في عملك' : 'In Action'}</span>
          </h1>

          <p className="text-slate-500 text-sm leading-relaxed">
            {isRtl
              ? 'احجز عرضاً توضيحياً مباشراً ومخصصاً لمدة 30 دقيقة مع أحد خبراء المنتجات لدينا في الوقت الذي يناسبك.'
              : 'Schedule a personalized, 30-minute live demo with one of our product experts. Choose a date and time that works best for you.'}
          </p>
        </div>

        {/* Calendly Embed Card */}
        <div data-booking-layout="true" className="w-full max-w-[840px] bg-white border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm">
          <div className="w-full" style={{ height: '630px' }}>
            <iframe
              src="https://calendly.com/unovabd/30min?background_color=ffffff&text_color=0f172a&primary_color=4f46e5"
              width="100%"
              height="100%"
              style={{ border: 'none' }}
              title="Schedule a Demo"
            ></iframe>
          </div>
        </div>

      </main>

      {/* FOOTER */}
      <Footer />

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 ${isRtl ? 'left-8' : 'right-8'} z-50 w-11 h-11 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center shadow-[0_4px_14px_rgba(99,102,241,0.4)] transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7" />
        </svg>
      </button>

    </div>
  );
}
