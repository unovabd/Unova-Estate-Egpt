'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';
import { CLIENT_CATEGORIES, CLIENT_CASE_STUDIES } from '../lib/clients';

export default function ClientsHubClient() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredClients = useMemo(() => {
    return CLIENT_CASE_STUDIES.filter(c => {
      const matchesCat = selectedCategory === 'all' || c.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q ||
        c.name.toLowerCase().includes(q) ||
        c.tagline.toLowerCase().includes(q) ||
        c.summary.toLowerCase().includes(q) ||
        c.location.toLowerCase().includes(q) ||
        c.modulesUsed.some(m => m.toLowerCase().includes(q));
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-indigo-600/20 selection:text-slate-900 flex flex-col justify-between relative overflow-x-hidden">
      
      {/* REUSABLE TOP NAVBAR */}
      <Navbar activePage="clients" />

      {/* MAIN CONTENT */}
      <main className="relative z-10 pt-28 pb-24 px-5 max-w-7xl mx-auto w-full flex-1">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-600">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            Our Trusted Partners
          </div>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-slate-900">
            Egypt&apos;s Top Real Estate <span className="bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">Developers &amp; Agencies</span>
          </h1>

          <p className="text-slate-500 text-xs md:text-sm leading-relaxed max-w-xl mx-auto">
            Click any logo to read their full case study &amp; verified results.
          </p>
        </div>

        {/* SEARCH & FILTERS SECTION */}
        <div className="max-w-3xl mx-auto mb-14 space-y-5">
          {/* Search Bar */}
          <div className="relative w-full max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search by company name or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-5 py-2.5 rounded-full text-xs bg-slate-50 border border-slate-200 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 shadow-inner font-medium transition-all text-slate-900 placeholder-slate-400"
            />
            <svg className="absolute left-4 top-3 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-2.5 text-xs text-slate-400 hover:text-slate-700 font-semibold"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center flex-wrap gap-2">
            {CLIENT_CATEGORIES.map(cat => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                    active
                      ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                      : 'bg-slate-50 text-slate-600 hover:text-slate-900 border border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* PURE LOGO GRID WALL */}
        {filteredClients.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-3xl border border-slate-200 max-w-xl mx-auto">
            <p className="text-slate-500 text-sm font-medium">No clients matching &ldquo;{searchQuery}&rdquo;</p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-4 text-xs font-bold text-indigo-600 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-8 items-center justify-center">
            {filteredClients.map((client) => (
              <div
                key={client.slug}
                className="flex items-center justify-center"
              >
                {/* Clean Pure Logo Cell */}
                <Link
                  href={`/clients/${client.slug}`}
                  className="w-full h-32 sm:h-36 bg-white hover:bg-slate-50 rounded-2xl border border-slate-200 hover:border-indigo-500/50 p-4 transition-all duration-300 flex items-center justify-center shadow-sm hover:shadow-xl hover:-translate-y-1 overflow-hidden group"
                >
                  {client.logoImg ? (
                    <img
                      src={client.logoImg}
                      alt={`${client.name} Logo`}
                      className="max-h-20 max-w-full object-contain filter group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${client.bgGradient} flex items-center justify-center text-white font-black text-base shadow-md group-hover:scale-105 transition-transform`}>
                      {client.logoBadge}
                    </div>
                  )}
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* BOTTOM SECTION CTA */}
        <div className="mt-20 bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-8 text-center text-white relative overflow-hidden shadow-xl max-w-4xl mx-auto">
          <div className="relative z-10 space-y-3">
            <h2 className="text-xl md:text-2xl font-black tracking-tight">
              Want Your Company Featured Here?
            </h2>
            <p className="text-slate-300 text-xs max-w-lg mx-auto leading-relaxed">
              Streamline your real estate sales, installment collections, and project inventory with Unova Estate ERP.
            </p>
            <div className="pt-2 flex items-center justify-center gap-3">
              <Link
                href="/demo"
                className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-full shadow-md transition-all"
              >
                Book a Demo Today
              </Link>
            </div>
          </div>
        </div>

      </main>

      {/* REUSABLE FOOTER */}
      <Footer />
    </div>
  );
}
