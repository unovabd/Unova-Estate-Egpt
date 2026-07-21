'use client';

import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';

export default function ClientDetailClient({ client, relatedClients = [] }) {
  if (!client) return null;

  // JSON-LD Structured Schema Data for SEO & LLM search engines
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': `${client.name} Case Study - Real Estate ERP Success`,
    'description': client.summary,
    'author': {
      '@type': 'Organization',
      'name': 'Unova Estate ERP'
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Unova Estate',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://rems.unova.bd/unova-real-estate-software-logo.png'
      }
    },
    'about': {
      '@type': 'Organization',
      'name': client.name,
      'location': client.location
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans antialiased selection:bg-indigo-600/20 selection:text-slate-900 flex flex-col justify-between relative overflow-x-hidden">
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Global Ambient Glow */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-20%] left-[10%] w-[700px] h-[700px] bg-indigo-600/[0.04] rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-violet-600/[0.04] rounded-full blur-[120px]" />
      </div>

      {/* REUSABLE TOP NAVBAR */}
      <Navbar activePage="clients" />

      {/* MAIN CONTENT */}
      <main className="relative z-10 pt-28 pb-24 px-5 max-w-7xl mx-auto w-full flex-1 space-y-10">

        {/* HERO CLIENT HEADER */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 md:p-10 shadow-sm space-y-6">
          {/* Back button above logo */}
          <div>
            <Link
              href="/clients"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back
            </Link>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-4">
              {client.logoImg ? (
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white border border-slate-200/90 p-2 flex items-center justify-center shadow-md">
                  <img src={client.logoImg} alt={`${client.name} Logo`} className="max-h-full max-w-full object-contain" />
                </div>
              ) : (
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${client.bgGradient} flex items-center justify-center text-white font-black text-xl shadow-lg`}>
                  {client.logoBadge}
                </div>
              )}
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-100 mb-1.5">
                  {client.categoryName}
                </span>
                <h1 className="text-2xl md:text-4xl font-black text-slate-900 tracking-tight">{client.name}</h1>
                <p className="text-xs md:text-sm text-slate-500 font-medium mt-0.5">{client.tagline}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-200/70 w-full md:w-auto">
              <div>
                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Location</p>
                <p className="font-semibold text-slate-800">{client.location}</p>
              </div>
              <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
              <div>
                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Established</p>
                <p className="font-semibold text-slate-800">{client.founded}</p>
              </div>
              <div className="h-8 w-px bg-slate-200 hidden sm:block"></div>
              <div>
                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider">Completed Projects</p>
                <p className="font-semibold text-slate-800">{client.projectsCompleted}</p>
              </div>
            </div>
          </div>

          {/* KPI HIGHLIGHT BANNER */}
          <div className="bg-gradient-to-r from-indigo-900 via-slate-900 to-slate-900 p-7 md:p-9 rounded-2xl text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-indigo-300">Verified Business Impact</span>
              <h2 className="text-2xl md:text-4xl font-black text-white mt-1">{client.kpi}</h2>
              <p className="text-xs md:text-sm text-slate-300 mt-2 max-w-xl leading-relaxed">{client.summary}</p>
            </div>
            <Link
              href="/demo"
              className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-full shadow-lg transition-all flex-shrink-0"
            >
              Book Similar Demo
            </Link>
          </div>
        </div>

        {/* VERIFIED PERFORMANCE METRICS GRID */}
        <div>
          <h3 className="text-xs uppercase font-bold tracking-wider text-slate-400 mb-4 px-1">
            Quantified Operational Results
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {client.results.map((r, idx) => (
              <div key={idx} className="bg-white border border-slate-200/90 rounded-2xl p-5 text-center shadow-sm">
                <p className="text-3xl md:text-4xl font-black text-indigo-600">{r.metric}</p>
                <p className="text-xs text-slate-600 mt-2 font-medium leading-snug">{r.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* EXECUTIVE TESTIMONIAL QUOTE */}
        <blockquote className="bg-white border-l-4 border-indigo-600 border border-slate-200/90 p-7 rounded-r-3xl text-slate-700 text-sm md:text-base leading-relaxed italic shadow-sm">
          &ldquo;{client.quote}&rdquo;
          <footer className="not-italic mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
            <div>
              <p className="font-bold text-slate-900 text-sm">{client.quoteAuthor}</p>
              <p className="text-xs text-indigo-600 font-semibold">{client.quoteRole}, {client.shortName}</p>
            </div>
          </footer>
        </blockquote>

        {/* CHALLENGE VS SOLUTION COMPARISON GRID */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white border border-slate-200/90 rounded-3xl p-7 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-rose-600 font-bold text-sm">
              <span className="p-1 bg-rose-50 rounded-md">⚠️</span>
              <h3>The Operational Challenge</h3>
            </div>
            <div className="text-xs md:text-sm text-slate-600 leading-relaxed whitespace-pre-line">
              {client.challenge}
            </div>
          </div>

          <div className="bg-white border border-slate-200/90 rounded-3xl p-7 space-y-4 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
              <span className="p-1 bg-emerald-50 rounded-md">🚀</span>
              <h3>Unova ERP Solution Executed</h3>
            </div>
            <div className="text-xs md:text-sm text-slate-600 leading-relaxed whitespace-pre-line">
              {client.solution}
            </div>
          </div>
        </div>

        {/* ACTIVE MODULES */}
        <div className="bg-white border border-slate-200/90 rounded-3xl p-7 shadow-sm">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
            Unova Software Modules Active in this Deployment
          </h3>
          <div className="flex flex-wrap gap-3">
            {client.modulesUsed.map((m, idx) => (
              <div key={idx} className="flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-800 text-xs font-semibold px-3.5 py-2 rounded-xl">
                <span className="text-emerald-600 font-bold">✓</span>
                <span>{m}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RELATED CASE STUDIES */}
        {relatedClients.length > 0 && (
          <div className="pt-8 border-t border-slate-200">
            <h3 className="text-sm font-bold text-slate-900 mb-6">Explore Other Client Success Stories</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedClients.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/clients/${rel.slug}`}
                  className="group bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl p-5 transition-all shadow-sm hover:shadow-md hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-9 h-9 rounded-lg bg-gradient-to-br ${rel.bgGradient} flex items-center justify-center text-white font-bold text-xs shadow-sm`}>
                      {rel.logoBadge}
                    </div>
                    <h4 className="font-bold text-slate-900 text-xs group-hover:text-indigo-600 transition-colors">
                      {rel.name}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-500 line-clamp-2 mb-3">
                    {rel.summary}
                  </p>
                  <span className="text-[11px] font-bold text-indigo-600 group-hover:underline flex items-center gap-1">
                    Read Story →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

      </main>

      {/* REUSABLE FOOTER */}
      <Footer />
    </div>
  );
}
