'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AskAI from './AskAI';
import Footer from './Footer';

const resourceItems = [
  {
    icon: '📖',
    title: 'Guides & Onboarding',
    desc: 'Access step-by-step user manuals, real estate workflow blueprints, and system setup guides to get your teams running in 24 hours.',
    link: '/docs',
    btnText: 'Open Guides',
    badge: 'User Manuals'
  },
  {
    icon: '🏆',
    title: 'Case Studies & Success',
    desc: 'Read detailed success stories of leading Bangladeshi developers and housing companies switching from manual ledgers to Unova.',
    link: '/blog',
    btnText: 'Read Stories',
    badge: 'Success Metrics'
  },
  {
    icon: '📊',
    title: 'ROI Calculator & Stats',
    desc: 'Interact with our custom real estate calculators to benchmark lead leakage stats and estimate your exact ERP return on investment.',
    link: '/resources/roi-calculator',
    btnText: 'Calculate ROI',
    badge: 'Interactive'
  },
  {
    icon: '📚',
    title: 'Real Estate Glossary',
    desc: 'A comprehensive dictionary covering local land mutation codes, government deed terms, RAJUK/CDA compliance codes, and ERP metrics.',
    link: '/resources/glossary',
    btnText: 'Open Dictionary',
    badge: 'Reference'
  },
  {
    icon: '📥',
    title: 'Free Templates & Excel',
    desc: 'Download free developer spreadsheets, flat installment schedules, client payment templates, and the official Unova REMS brochure.',
    link: '/resources/downloads',
    btnText: 'Get Templates',
    badge: 'Free Downloads'
  },
  {
    icon: '🎥',
    title: 'Video Walkthroughs',
    desc: 'Watch step-by-step video guides demonstrating flat grid inventory lockups, construction billing approvals, and WhatsApp notifications.',
    link: 'https://www.youtube.com/@UnovaSoftware',
    btnText: 'Watch Videos',
    badge: 'YouTube Hub'
  }
];

export default function ResourcesClient() {
  const [aiOpen, setAiOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
            <img src="/unova-real-estate-software-logo.png" alt="Unova Estate Logo" className="h-9 w-auto" loading="eager" />
          </Link>

          <div className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-600">
            <Link href="/#features" className="hover:text-slate-950 transition-colors">Features</Link>
            <Link href="/solutions" className="hover:text-slate-950 transition-colors">Solutions</Link>
            <Link href="/resources" className="hover:text-slate-950 transition-colors">Resources</Link>
            <Link href="/docs" className="hover:text-slate-950 transition-colors">Docs</Link>
            <Link href="/#pricing" className="hover:text-slate-950 transition-colors">Pricing</Link>
            <Link href="/#contact" className="hover:text-slate-950 transition-colors">Contact</Link>
            <AskAI open={aiOpen} onOpenChange={setAiOpen} />
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

      {/* MAIN */}
      <main className="relative z-10 pt-32 pb-24 px-5 max-w-7xl mx-auto w-full flex-grow">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6DC042]/10 border border-[#6DC042]/20 text-xs font-semibold text-[#6DC042]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6DC042] animate-pulse" />
            Knowledge & Resources Hub
          </div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-slate-900">
            Optimize Your <span className="bg-gradient-to-r from-[#6DC042] to-[#5da538] bg-clip-text text-transparent">Real Estate Growth</span>
          </h1>

          <p className="text-slate-500 text-sm leading-relaxed max-w-xl mx-auto">
            Access our user guides, tech documentation, interactive ROI calculators, local glossary list, and templates to scale your property operations.
          </p>
        </div>

        {/* RESOURCE CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resourceItems.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#6DC042]/30 transition-all duration-300 flex flex-col justify-between group hover:scale-[1.01]"
            >
              <div>
                <div className="flex justify-between items-start mb-5">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-[9px] font-black tracking-wider text-[#6DC042] uppercase bg-[#6DC042]/10 border border-[#6DC042]/20 px-2.5 py-0.5 rounded-md">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-slate-900 mb-2.5 leading-snug">{item.title}</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed mb-6">{item.desc}</p>
              </div>

              {item.link.startsWith('http') ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 bg-slate-50 hover:bg-[#6DC042] hover:text-white border border-slate-200/50 hover:border-[#6DC042] text-slate-700 font-bold rounded-xl transition-all duration-300 text-xs shadow-sm"
                >
                  {item.btnText}
                </a>
              ) : (
                <Link
                  href={item.link}
                  className="w-full text-center py-2.5 bg-slate-50 hover:bg-[#6DC042] hover:text-white border border-slate-200/50 hover:border-[#6DC042] text-slate-700 font-bold rounded-xl transition-all duration-300 text-xs shadow-sm"
                >
                  {item.btnText}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* ASK AI CALLOUT */}
        <div className="mt-16 bg-[#6DC042]/5 border border-[#6DC042]/20 rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex gap-4 items-start text-left">
            <span className="text-3xl">🤖</span>
            <div>
              <h4 className="text-base font-extrabold text-slate-900">Have a quick question about Unova Estate?</h4>
              <p className="text-slate-500 text-xs mt-1">Get instant answers from our AI-powered support assistant right now.</p>
            </div>
          </div>
          <button
            onClick={() => setAiOpen(true)}
            className="w-full sm:w-auto px-6 py-3 bg-[#6DC042] hover:bg-[#5da538] text-white font-bold rounded-xl transition-all text-xs shadow-sm"
          >
            Ask Unova AI
          </button>
        </div>
      </main>

      <Footer />

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-[#6DC042] hover:bg-[#5da538] text-white flex items-center justify-center shadow-lg transition-all duration-300 ${
          showScrollTop && !aiOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7" />
        </svg>
      </button>

    </div>
  );
}
