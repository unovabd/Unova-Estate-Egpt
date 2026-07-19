'use client';

import { useState } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

const glossaryTerms = [
  {
    term: 'PDC (Post-Dated Cheque)',
    definition: 'A cheque written by a property buyer with a future collection date. Unova REMS automatically tracks PDCs, sends automated WhatsApp reminders to clients 7 days prior to deposit, and alerts the developer\'s finance team.'
  },
  {
    term: 'Land Joint-Venture (যৌথ অংশীদারিত্ব)',
    definition: 'An agreement between a landowner and a developer. Unova manages joint-venture flat ratio splits (e.g., 40/60), automatic revenue share disbursal, and landowner allocation grids.'
  },
  {
    term: 'Lead Leakage (লিড লিক)',
    definition: 'The loss of potential customer sales due to delayed response times or unassigned follow-ups. Unova prevents lead leakage using AI-driven routing, instantly assigning leads to agents with WhatsApp alerts within 60 seconds.'
  },
  {
    term: 'Flat Inventory Grid (ফ্ল্যাট ইনভেন্টরি গ্রিড)',
    definition: 'A live, color-coded visual matrix showing the exact status (Available, Booked, Blocked, Sold) of all flats, parking spots, and commercial spaces across real estate projects.'
  },
  {
    term: 'Milestone Billing (মাইলস্টোন বিলিং)',
    definition: 'A payment scheme where customers are billed based on construction progress (e.g., foundation casting, 1st-floor slab, brickwork) rather than strict calendar dates. Unova automates milestone billing.'
  },
  {
    term: 'Land Mutation (ভূমি নামজারি)',
    definition: 'The government process of updating ownership logs in the land registry. Unova\'s legal module includes a tracker for mutation filings, registry document vaults, and government clearance logs.'
  },
  {
    term: 'RAJUK & CDA Compliance',
    definition: 'Building approval and setback guidelines set by the Capital Development Authority (RAJUK) and Chittagong Development Authority (CDA). Unova maps floor layouts and deviations to stay compliant.'
  },
  {
    term: 'Post-Dated Cheque Vault (PDC ভল্ট)',
    definition: 'A secure digital ledger inside Unova Accounting where physically received customer cheques are logged, tracked by bank drawer, and cleared against outstanding installment invoices.'
  }
];

export default function GlossaryPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = glossaryTerms.filter(t => 
    t.term.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.definition.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            Knowledge Reference
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Real Estate <span className="bg-gradient-to-r from-[#6DC042] to-[#5da538] bg-clip-text text-transparent">ERP Glossary</span>
          </h1>
          <p className="text-slate-500 text-sm leading-relaxed max-w-xl mx-auto">
            A comprehensive reference dictionary covering local Bangladesh property registry terms, land codes, and ERP billing terminology.
          </p>

          {/* Search bar */}
          <div className="max-w-md mx-auto pt-4">
            <input
              type="text"
              placeholder="Search glossary terms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-2.5 rounded-full text-xs bg-white border border-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 shadow-sm"
            />
          </div>
        </div>

        {/* GLOSSARY ITEMS */}
        <div className="space-y-6">
          {filtered.length > 0 ? (
            filtered.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm space-y-2 hover:shadow-md transition-shadow">
                <h3 className="text-base font-black text-slate-900">{item.term}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.definition}</p>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-white border border-slate-200/60 rounded-2xl">
              <span className="text-3xl block mb-2">🔍</span>
              <p className="text-slate-500 text-xs">No glossary terms match your search query.</p>
            </div>
          )}
        </div>

      </main>

      <Footer />
    </div>
  );
}
