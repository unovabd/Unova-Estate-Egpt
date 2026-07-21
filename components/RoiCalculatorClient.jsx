'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AskAI from './AskAI';
import Footer from './Footer';

export default function RoiCalculatorClient() {
  const [aiOpen, setAiOpen]             = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // User inputs
  const [dealSize, setDealSize]         = useState(5000000); // 50 Lakh BDT
  const [monthlyLeads, setMonthlyLeads] = useState(100);
  const [conversionRate, setConversionRate] = useState(3); // 3%
  const [leakageRate, setLeakageRate]   = useState(15); // 15%

  // Calculations
  const dealsClosedCurrent = (monthlyLeads * (conversionRate / 100));
  const revenueCurrent = dealsClosedCurrent * dealSize;

  // Unova efficiency impact: reduces leakage to 2%, increases conversion by 1.2%
  const newConversionRate = conversionRate + 1.2;
  const dealsClosedNew = (monthlyLeads * (newConversionRate / 100));
  const revenueNew = dealsClosedNew * dealSize;

  const monthlyIncrease = revenueNew - revenueCurrent;
  const yearlyIncrease = monthlyIncrease * 12;

  // Assume an average monthly software subscription of 20,000 BDT
  const estimatedCost = 20000;
  const roiMultiplier = monthlyIncrease / estimatedCost;
  const roiPercentage = Math.round(roiMultiplier * 100);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const formatBDT = (num) => {
    if (num >= 10000000) {
      return `${(num / 10000000).toFixed(2)} Crore BDT`;
    }
    if (num >= 100000) {
      return `${(num / 100000).toFixed(2)} Lakh BDT`;
    }
    return `${num.toLocaleString()} BDT`;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#6DC042]/20 selection:text-slate-900 overflow-x-hidden relative flex flex-col justify-between">
      
      {/* Ambient glow */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-20%] left-[10%] w-[700px] h-[700px] bg-indigo-600/[0.04] rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-violet-600/[0.04] rounded-full blur-[120px]" />
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

      {/* MAIN */}
      <main className="relative z-10 pt-32 pb-24 px-5 max-w-5xl mx-auto w-full flex-1">
        
        {/* Back Link */}
        <Link
          href="/resources"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Resources
        </Link>

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-600">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            ROI Calculator
          </div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-slate-900">
            Calculate Your Revenue Growth <span className="bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">with Unova ERP</span>
          </h1>

          <p className="text-slate-500 text-sm leading-relaxed max-w-xl mx-auto">
            Input your sales figures to estimate how much revenue you can recover by preventing lead leakage and automating customer payment schedules.
          </p>
        </div>

        {/* CALCULATOR INTERFACE */}
        <div className="grid md:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Panel */}
          <div className="md:col-span-5 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
            <h3 className="text-lg font-black text-slate-900 border-b border-slate-100 pb-3">Your Metrics</h3>

            {/* Input 1: Deal Size */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Average Property Value</span>
                <span className="text-indigo-600">{formatBDT(dealSize)}</span>
              </div>
              <input
                type="range"
                min="1000000"
                max="30000000"
                step="500000"
                value={dealSize}
                onChange={(e) => setDealSize(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </div>

            {/* Input 2: Monthly Leads */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Leads Generated / Month</span>
                <span className="text-indigo-600">{monthlyLeads} leads</span>
              </div>
              <input
                type="range"
                min="10"
                max="500"
                step="10"
                value={monthlyLeads}
                onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </div>

            {/* Input 3: Conversion Rate */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Current Sales Conversion</span>
                <span className="text-indigo-600">{conversionRate}%</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="10"
                step="0.1"
                value={conversionRate}
                onChange={(e) => setConversionRate(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </div>

            {/* Input 4: Leakage Rate */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-slate-700">
                <span>Estimated Lead Leakage</span>
                <span className="text-indigo-600">{leakageRate}%</span>
              </div>
              <input
                type="range"
                min="5"
                max="40"
                step="1"
                value={leakageRate}
                onChange={(e) => setLeakageRate(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
            </div>

          </div>

          {/* Results Panel */}
          <div className="md:col-span-7 space-y-6">
            
            {/* Main Stats */}
            <div className="bg-indigo-900 text-white rounded-3xl p-8 shadow-md relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-850 pointer-events-none" />
              <div className="relative z-10 space-y-6">
                
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-indigo-300">Estimated Monthly Growth</p>
                  <h2 className="text-3xl md:text-4xl font-black mt-1 text-white">{formatBDT(monthlyIncrease)}</h2>
                  <p className="text-xs text-indigo-200 mt-2 leading-relaxed">
                    By implementing automated follow-up trackers and instant Facebook Lead syncs, your sales pipeline will experience zero leakages.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 border-t border-indigo-800 pt-6">
                  <div>
                    <p className="text-[9px] uppercase font-bold tracking-wider text-indigo-300">Annualized Boost</p>
                    <p className="text-base font-extrabold mt-0.5 text-white">{formatBDT(yearlyIncrease)}</p>
                  </div>
                  <div>
                    <p className="text-[9px] uppercase font-bold tracking-wider text-indigo-300">Estimated Software ROI</p>
                    <p className="text-base font-extrabold mt-0.5 text-emerald-400">+{roiPercentage}%</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Comparison Details */}
            <div className="grid sm:grid-cols-2 gap-4">
              
              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <p className="text-[9px] uppercase font-bold tracking-wider text-slate-400">Current Performance</p>
                <div className="mt-2 space-y-2">
                  <div className="flex justify-between text-xs text-slate-600">
                    <span>Deals Closed / Mo:</span>
                    <span className="font-bold text-slate-900">{dealsClosedCurrent.toFixed(1)}</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-600 border-t border-slate-100 pt-2">
                    <span>Est. Revenue / Mo:</span>
                    <span className="font-bold text-slate-900">{formatBDT(revenueCurrent)}</span>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
                <p className="text-[9px] uppercase font-bold tracking-wider text-indigo-600">Performance with Unova</p>
                <div className="mt-2 space-y-2">
                  <div className="flex justify-between text-xs text-slate-600">
                    <span>Deals Closed / Mo:</span>
                    <span className="font-bold text-slate-900 text-indigo-600">{dealsClosedNew.toFixed(1)} (+{((newConversionRate - conversionRate) * monthlyLeads / 100).toFixed(1)})</span>
                  </div>
                  <div className="flex justify-between text-xs text-slate-600 border-t border-slate-100 pt-2">
                    <span>Est. Revenue / Mo:</span>
                    <span className="font-bold text-indigo-600">{formatBDT(revenueNew)}</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Disclaimer */}
            <p className="text-[10px] text-slate-400 leading-relaxed text-center">
              *Calculations are based on average industry analytics of real estate lead conversion improvements following automated pipeline adoption. Software subscription costs are estimates.
            </p>

          </div>

        </div>
      </main>

      <Footer />

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center shadow-lg transition-all duration-300 ${
          showScrollTop && !aiOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7" />
        </svg>
      </button>

    </div>
  );
}
