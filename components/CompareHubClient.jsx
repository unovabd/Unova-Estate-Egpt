'use client';

import { useState } from 'react';
import Link from 'next/link';
import AskAI from './AskAI';
import Footer from './Footer';

export default function CompareHubClient({ comparisons }) {
  const [aiOpen, setAiOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = comparisons.filter(c => {
    const matchesCategory = activeFilter === 'all' || c.category === activeFilter;
    const matchesSearch = c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.competitorName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#6DC042]/20 selection:text-slate-900 overflow-x-hidden relative flex flex-col justify-between">
      
      {/* Global ambient glow */}
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
            <Link href="/resources" className="hover:text-slate-950 transition-colors">Resources</Link>
            <Link href="/docs" className="hover:text-slate-950 transition-colors">Docs</Link>
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

      {/* MAIN CONTENT */}
      <main className="relative z-10 pt-32 pb-24 px-5 max-w-6xl mx-auto w-full flex-grow">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6DC042]/10 border border-[#6DC042]/20 text-xs font-semibold text-[#6DC042]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#6DC042] animate-pulse" />
            Unova Comparisons
          </div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-slate-900">
            Unova Vs <span className="bg-gradient-to-r from-[#6DC042] to-[#5da538] bg-clip-text text-transparent">Generic CRMs & Workflows</span>
          </h1>

          <p className="text-slate-500 text-sm leading-relaxed max-w-2xl mx-auto">
            See how specialized real estate modules, local check tracking vaults, and integrated cost-centers stack up against general-purpose sales tools and manual workflows.
          </p>
        </div>

        {/* SEARCH & FILTERS */}
        <div className="max-w-4xl mx-auto mb-12 flex flex-col md:flex-row gap-4 items-center justify-between">
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { id: 'all', label: 'All Comparisons' },
              { id: 'competitor', label: 'Competitor Comparison' },
              { id: 'process', label: 'Process Comparison' }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
                  activeFilter === f.id
                    ? 'bg-[#6DC042] text-white border-[#6DC042] shadow-sm'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-800'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search comparisons..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full text-xs bg-white border border-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 shadow-sm"
            />
            <svg className="absolute left-3.5 top-2.5 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* COMPARISONS GRID */}
        {filtered.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {filtered.map((comp, idx) => (
              <div 
                key={idx}
                className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm hover:shadow-md hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between group hover:scale-[1.01]"
              >
                <div>
                  <div className="w-full h-48 rounded-2xl overflow-hidden mb-6 relative bg-slate-100">
                    <img 
                      src={comp.heroImage} 
                      alt={comp.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                    <span className="absolute bottom-4 left-4 px-2.5 py-0.5 bg-[#6DC042] text-white text-[10px] font-black uppercase tracking-wider rounded-md">
                      {comp.category === 'competitor' ? `vs ${comp.competitorName}` : 'Process Comparison'}
                    </span>
                  </div>
                  <h3 className="text-base font-black text-slate-900 mb-3 group-hover:text-[#6DC042] transition-colors">
                    {comp.title}
                  </h3>
                  
                  {/* Summary bullets list */}
                  <ul className="space-y-2 mb-6">
                    {[comp.summaryPoint1, comp.summaryPoint2].map((pt, pi) => (
                      <li key={pi} className="flex items-start gap-2.5 text-xs text-slate-500">
                        <span className="text-[#6DC042] font-extrabold mt-0.5">•</span>
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link 
                    href={`/compare/${comp.slug}`} 
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-500 flex items-center gap-1 group-hover:gap-1.5 transition-all"
                  >
                    Read Detailed Report
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white border border-slate-200/60 rounded-3xl max-w-xl mx-auto shadow-sm">
            <span className="text-4xl mb-4 block">🔍</span>
            <h3 className="text-base font-bold text-slate-800 mb-1">No comparisons found</h3>
            <p className="text-slate-500 text-xs">Try adjusting your query words.</p>
          </div>
        )}
      </main>

      <Footer />

      {/* Ask AI chat box */}
      <AskAI open={aiOpen} onOpenChange={setAiOpen} />

    </div>
  );
}