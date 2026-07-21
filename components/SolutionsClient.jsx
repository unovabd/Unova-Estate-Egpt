'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AskAI from './AskAI';
import Navbar from './Navbar';
import Footer from './Footer';

const Icon = ({ d, className = 'w-6 h-6' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d={d} />
  </svg>
);

const CheckIcon = ({ cls = 'w-4 h-4 text-indigo-600 flex-shrink-0' }) => (
  <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
  </svg>
);

const solutions = [
  {
    categories: ['industry', 'module', 'usecase'],
    slug: 'erp-for-real-estate-developers',
    icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z',
    img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80',
    title: 'ERP for Real Estate Developers',
    desc: 'End-to-end automation tailored specifically for building developers. Manage projects from acquisition, joint-venture landowner shares, building progress, to sales handover.',
    points: ['Project & Unit Inventory tracking', 'Landowner share calculation', 'Milestone progress mapping', 'Dynamic pricing control']
  },
  {
    categories: ['industry', 'module', 'usecase'],
    slug: 'erp-for-land-developers',
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
    img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80',
    title: 'ERP for Land & Plot Developers',
    desc: 'Manage raw land purchases, joint-ventures, mutation legalities, layout plan mapping, and plot distributions. Track Dag, Khatian, and boundary mapping directly.',
    points: ['CS/SA/RS/BRS Dag Registry', 'Plot layout visualization', 'Legal vetting activity logs', 'Land mutation workflow tracker']
  },
  {
    categories: ['challenge', 'usecase', 'goal'],
    slug: 'lead-leakage-prevention',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80',
    title: 'Lead Leakage Prevention',
    desc: 'Capture all enquiries from Facebook leads, WhatsApp, website forms, and walk-ins instantly. Auto-assign to sales executives with real-time response notifications.',
    points: ['Instant Facebook Lead Sync', 'Omnichannel enquiry capture', 'Automatic round-robin assignment', 'Unattended lead alert system']
  },
  {
    categories: ['challenge', 'module', 'usecase', 'goal'],
    slug: 'installment-collection-automation',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&q=80',
    title: 'Installment & Collection Automation',
    desc: 'Manage customer payment schedules. Set up automated SMS & Email reminders for upcoming installments, generate invoices, and print receipts on payment arrival.',
    points: ['Automated payment schedules', 'SMS & Email installment reminders', 'Money receipt generation', 'Late payment fine calculators']
  },
  {
    categories: ['challenge', 'usecase', 'goal'],
    slug: 'sales-commission-tracking',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
    title: 'Sales & Commission Tracking',
    desc: 'Configure flexible commission policies for booking, signing, and installments. Auto-calculate multi-tier splits for sales executives, managers, and external agents.',
    points: ['Sales policy configuration', 'Agent & broker portal links', 'Auto-split commission tables', 'Flows directly into payroll']
  },
  {
    categories: ['role', 'goal'],
    slug: 'ceo-md-dashboards',
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    title: 'Software for CEOs & Managing Directors',
    desc: 'Get full transparency over company operations. Monitor sales pipelines, material costs, cash flow status, and pending approvals directly from your executive mobile dashboard.',
    points: ['Real-time executive metrics', 'Material budget vs actual cost', 'Pending PO & RA bill approvals', 'Total collection vs dues dashboard']
  },
  {
    categories: ['role', 'module', 'usecase'],
    slug: 'sales-manager-software',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80',
    title: 'Software for Sales Managers',
    desc: 'Monitor team performance, log conversion rates, check lead interaction histories, allocate premium inventory, and manage marketing ROI inside a unified system.',
    points: ['Sales team lead performance tracker', 'Detailed lead call history logs', 'Inventory booking & lock requests', 'Campaign ROI reports']
  },
  {
    categories: ['role', 'module'],
    slug: 'finance-accounts-erp',
    icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
    img: 'https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=400&q=80',
    title: 'Software for Finance & Accounts Teams',
    desc: 'Enterprise double-entry ledger system. Track project cost centers, manage post-dated checks (PDC), automate bank reconciliation, and view instant Balance Sheets and P&Ls.',
    points: ['Multi-level project cost centers', 'PDC cheque tracker with alerts', 'Auto-reconciled bank ledger', 'Balance Sheet & Trial Balance']
  },
  {
    categories: ['challenge', 'module', 'usecase'],
    slug: 'marketing-automation-solution',
    icon: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z',
    img: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=400&q=80',
    title: 'Marketing Automation Solution',
    desc: 'Automate marketing campaigns. Connect Meta Cloud API for WhatsApp, sync bulk SMS gateways, and send automated newsletters based on customer stages.',
    points: ['Official WhatsApp API Link', 'Automated drip marketing campaigns', 'Bulk customized SMS scheduler', 'Open & click analytics tracker']
  },
  {
    categories: ['challenge', 'module', 'goal'],
    slug: 'executive-reporting-dashboard',
    icon: 'M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
    title: 'Executive Reporting Dashboard',
    desc: 'Get clean reports for all modules. Monitor daily construction logs, collection schedules, accounts balances, store inventories, and HR metrics in visual charts.',
    points: ['Custom drag-and-drop report creator', 'Automated email report scheduler', 'Multi-format export (PDF/Excel)', 'Real-time charts & graphics']
  },
  {
    categories: ['challenge', 'module'],
    slug: 'dedicated-cloud-database',
    icon: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=400&q=80',
    title: 'Dedicated Cloud Database Solution',
    desc: 'For large enterprises. Get complete database isolation, customized deployment options on private AWS/Azure cloud, and dedicated code branches.',
    points: ['Isolated dedicated database', 'Custom domain & SSO setup', '99.9% SLA uptime warranty', 'Hourly automated database backup']
  },
  {
    categories: ['challenge', 'module', 'usecase'],
    slug: 'ai-sales-assistant',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h0a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80',
    title: 'AI Sales Assistant Integration',
    desc: 'Integrate artificial intelligence to qualify leads automatically. The AI reviews lead inputs, predicts buying intent score, and recommends best next actions.',
    points: ['Automated Lead Qualification score', 'AI Suggested Follow-up scripts', 'Intelligent call script transcription', 'Wrong entry anomaly alerts']
  }
];

export default function SolutionsClient() {
  const [aiOpen, setAiOpen]             = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeFilter, setActiveFilter]   = useState('all');
  const [searchQuery, setSearchQuery]     = useState('');

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const filteredSolutions = solutions.filter(sol => {
    const matchesCategory = activeFilter === 'all' || 
                            (Array.isArray(sol.categories) && sol.categories.includes(activeFilter)) ||
                            sol.category === activeFilter;
    const matchesSearch = sol.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          sol.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#6DC042]/20 selection:text-slate-900 overflow-x-hidden relative flex flex-col justify-between">
      
      {/* Global ambient glow */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-20%] left-[10%] w-[700px] h-[700px] bg-indigo-600/[0.04] rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-violet-600/[0.04] rounded-full blur-[120px]" />
      </div>

      {/* REUSABLE NAVIGATION */}
      <Navbar activePage="solutions" />

      {/* MAIN CONTENT */}
      <main className="relative z-10 pt-32 pb-24 px-5 max-w-6xl mx-auto w-full flex-1">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-600">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            Unova Solutions
          </div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-slate-900">
            Tailor-Made Solutions for <span className="bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">Every Real Estate Need</span>
          </h1>

          <p className="text-slate-500 text-sm leading-relaxed max-w-2xl mx-auto">
            Discover specialized modules, workflows, and solutions built specifically to solve real estate developers' business challenges and team roles.
          </p>
        </div>

        {/* SEARCH & FILTERS (Search Bar Top, Clean Filters Below) */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          
          {/* Top: Search bar */}
          <div className="relative w-full max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search by keywords, modules, or goals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-5 py-3 rounded-full text-xs bg-white border border-slate-200/90 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 shadow-sm font-medium transition-all"
            />
            <svg className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Bottom: Clean Filters without "By" prefix */}
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { id: 'all', label: 'All Solutions' },
              { id: 'industry', label: 'Industries' },
              { id: 'challenge', label: 'Challenges' },
              { id: 'role', label: 'Roles' },
              { id: 'module', label: 'Modules' },
              { id: 'usecase', label: 'Use Cases' },
              { id: 'goal', label: 'Goals' }
            ].map(f => (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
                  activeFilter === f.id
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900 shadow-sm'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

        </div>

        {/* SOLUTIONS GRID */}
        {filteredSolutions.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSolutions.map((sol, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between group hover:scale-[1.01]"
              >
                <div>
                  <Link href={`/solutions/${sol.slug}`} className="block group/link">
                    {sol.img && (
                      <div className="w-full h-36 rounded-xl overflow-hidden mb-4 relative bg-slate-100">
                        <img
                          src={sol.img}
                          alt={sol.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/link:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3 w-8 h-8 rounded-lg bg-white/95 text-indigo-600 flex items-center justify-center shadow-sm backdrop-blur-sm">
                          <Icon d={sol.icon} className="w-4 h-4" />
                        </div>
                      </div>
                    )}
                    <h3 className="text-sm font-extrabold text-slate-900 mb-2 leading-snug group-hover/link:text-indigo-600 transition-colors">{sol.title}</h3>
                  </Link>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4">{sol.desc}</p>
                </div>

                <div>
                  <ul className="space-y-2 border-t border-slate-100 pt-4 mb-4">
                    {sol.points.map((pt, pi) => (
                      <li key={pi} className="flex items-start gap-2.5 text-xs text-slate-600">
                        <CheckIcon cls="w-3.5 h-3.5 text-indigo-500 flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <Link href={`/solutions/${sol.slug}`} className="text-xs font-bold text-indigo-600 hover:text-indigo-500 flex items-center gap-1">
                      View Details & Demo
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white border border-slate-200/60 rounded-3xl max-w-2xl mx-auto shadow-sm">
            <span className="text-4xl mb-4 block">🔍</span>
            <h3 className="text-base font-bold text-slate-800 mb-1">No solutions found</h3>
            <p className="text-slate-500 text-xs">Try adjusting your search filters or queries.</p>
          </div>
        )}

        {/* CTA BOX */}
        <div className="mt-20 bg-indigo-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-950 via-indigo-900 to-indigo-950 opacity-90 pointer-events-none" />
          <div className="absolute top-[-50%] left-[-20%] w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[-50%] right-[-20%] w-[500px] h-[500px] bg-[#6DC042]/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Need a custom feature specifically for your workflow?</h2>
            <p className="text-indigo-200 text-sm leading-relaxed max-w-lg mx-auto">
              No two real estate companies are identical. Our engineers can design, build, and deploy custom modules built exactly for your business processes.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/demo" className="w-full sm:w-auto px-8 py-3.5 bg-white text-indigo-900 hover:bg-slate-100 font-bold rounded-full shadow-md transition-all text-sm text-center">
                Book a 1-to-1 Consultation
              </Link>
              <a href="https://wa.me/8801766774016" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-3.5 bg-indigo-800/80 hover:bg-indigo-800 text-white font-semibold rounded-full border border-indigo-700 transition-all text-sm flex items-center justify-center gap-2">
                💬 WhatsApp Us
              </a>
            </div>
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
