'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AskAI from './AskAI';

export default function Navbar({ activePage = '' }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aiOpen, setAiOpen] = useState(false);

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
        ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200/80 shadow-sm py-2.5'
        : 'bg-white/90 backdrop-blur-md border-b border-slate-200/50 py-3'
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
            Features
          </Link>
          <Link
            href="/solutions"
            className={`hover:text-slate-950 transition-colors ${activePage === 'solutions' ? 'text-indigo-600 font-bold' : ''}`}
          >
            Solutions
          </Link>
          <Link
            href="/#pricing"
            className={`hover:text-slate-950 transition-colors ${activePage === 'pricing' ? 'text-indigo-600 font-bold' : ''}`}
          >
            Pricing
          </Link>
          <Link
            href="/#contact"
            className={`hover:text-slate-950 transition-colors ${activePage === 'contact' ? 'text-indigo-600 font-bold' : ''}`}
          >
            Contact
          </Link>
          <AskAI onOpenChange={setAiOpen} />
        </div>

        {/* Action Buttons & Mobile Toggle */}
        <div className="flex items-center gap-2.5">
          <a
            href="https://rems.unova.bd/login"
            className="text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-950 transition-colors hidden sm:block"
          >
            Sign in
          </a>
          <Link
            href="/demo"
            className="text-[11px] sm:text-xs md:text-sm font-bold bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full transition-all shadow-sm hover:shadow-indigo-500/25 whitespace-nowrap"
          >
            Request a Demo
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE DESKTOP PARITY SCROLLABLE PILL BAR */}
      <div className="md:hidden border-t border-slate-100 mt-2 pt-2 px-4 flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth">
        <Link
          href="/#features"
          className={`text-[11px] font-bold px-3 py-1 rounded-full whitespace-nowrap transition-all ${
            activePage === 'features' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          Features
        </Link>
        <Link
          href="/solutions"
          className={`text-[11px] font-bold px-3 py-1 rounded-full whitespace-nowrap transition-all ${
            activePage === 'solutions' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          Solutions
        </Link>
        <Link
          href="/#pricing"
          className={`text-[11px] font-bold px-3 py-1 rounded-full whitespace-nowrap transition-all ${
            activePage === 'pricing' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          Pricing
        </Link>
        <Link
          href="/#contact"
          className={`text-[11px] font-bold px-3 py-1 rounded-full whitespace-nowrap transition-all ${
            activePage === 'contact' ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
          }`}
        >
          Contact
        </Link>
        <AskAI open={aiOpen} onOpenChange={setAiOpen} />
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-b border-slate-200 px-6 py-5 space-y-3 shadow-xl transition-all animate-fadeIn mt-2">
          <div className="flex flex-col space-y-2.5 font-semibold text-slate-700 text-sm">
            <Link
              href="/#features"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-slate-100 hover:text-indigo-600 transition-colors"
            >
              Features
            </Link>
            <Link
              href="/solutions"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-slate-100 hover:text-indigo-600 transition-colors"
            >
              Solutions
            </Link>
            <Link
              href="/#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-slate-100 hover:text-indigo-600 transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 border-b border-slate-100 hover:text-indigo-600 transition-colors"
            >
              Contact
            </Link>
            <div className="py-2 border-b border-slate-100 text-indigo-600 font-bold flex items-center">
              <AskAI open={aiOpen} onOpenChange={setAiOpen} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
