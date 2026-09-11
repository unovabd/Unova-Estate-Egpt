'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AskAI from './AskAI';
import { useLanguage } from '@/context/LanguageContext';

export default function Navbar({ activePage = '' }) {
  const [scrolled, setScrolled] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);
  const { language, toggleLanguage, t, isRtl } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled
        ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-sm py-2'
        : 'bg-white/90 backdrop-blur-md border-b border-slate-200/50 py-2.5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-5 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center">
          <img
            src="/unova-real-estate-software-logo.png"
            alt="Unova Estate Real Estate CRM & ERP Software Logo"
            className="h-7 sm:h-8 md:h-9 w-auto transition-all"
            loading="eager"
          />
        </Link>

        {/* Desktop Center Nav Links */}
        <div className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-600">
          <Link
            href="/#features"
            className={`hover:text-slate-950 transition-colors ${activePage === 'features' ? 'text-indigo-600 font-bold' : ''}`}
          >
            {t('nav.features')}
          </Link>
          <Link
            href="/solutions"
            className={`hover:text-slate-950 transition-colors ${activePage === 'solutions' ? 'text-indigo-600 font-bold' : ''}`}
          >
            {t('nav.solutions')}
          </Link>
          <Link
            href="/#pricing"
            className={`hover:text-slate-950 transition-colors ${activePage === 'pricing' ? 'text-indigo-600 font-bold' : ''}`}
          >
            {t('nav.pricing')}
          </Link>
          <Link
            href="/#contact"
            className={`hover:text-slate-950 transition-colors ${activePage === 'contact' ? 'text-indigo-600 font-bold' : ''}`}
          >
            {t('nav.contact')}
          </Link>
          <AskAI onOpenChange={setAiOpen} />
        </div>

        {/* Action Buttons & Language Switcher */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Switcher */}
          <button
            onClick={() => toggleLanguage()}
            className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200/80 rounded-full transition-all"
            title={language === 'en' ? 'تغيير للغة العربية' : 'Switch to English'}
          >
            <span className="text-sm">🌐</span>
            <span>{language === 'en' ? 'العربية' : 'English'}</span>
          </button>

          <a
            href="https://rems.unova.eg/login"
            className="text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-950 transition-colors hidden sm:block"
          >
            {t('nav.signin')}
          </a>
          <Link
            href="/demo"
            className="text-[11px] sm:text-xs md:text-sm font-bold bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full transition-all shadow-sm hover:shadow-indigo-500/25 whitespace-nowrap"
          >
            {t('nav.requestDemo')}
          </Link>

          {/* Ask AI Button in place of hamburger icon on Mobile */}
          <div className="md:hidden">
            <AskAI open={aiOpen} onOpenChange={setAiOpen} />
          </div>
        </div>
      </div>

      {/* MOBILE SCROLLABLE PILL BAR */}
      <div className="md:hidden border-t border-slate-100 mt-1.5 py-1.5 px-4 flex items-center justify-center gap-2.5 overflow-x-auto no-scrollbar scroll-smooth">
        <Link
          href="/#features"
          className={`text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap transition-all shadow-sm ${
            activePage === 'features' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          {t('nav.features')}
        </Link>
        <Link
          href="/solutions"
          className={`text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap transition-all shadow-sm ${
            activePage === 'solutions' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          {t('nav.solutions')}
        </Link>
        <Link
          href="/#pricing"
          className={`text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap transition-all shadow-sm ${
            activePage === 'pricing' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          {t('nav.pricing')}
        </Link>
        <Link
          href="/#contact"
          className={`text-xs font-bold px-4 py-1.5 rounded-full whitespace-nowrap transition-all shadow-sm ${
            activePage === 'contact' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          {t('nav.contact')}
        </Link>
      </div>
    </nav>
  );
}
