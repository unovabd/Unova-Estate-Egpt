'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AskAI from './AskAI';
import Navbar from './Navbar';
import ContactSection from './ContactSection';
import Footer from './Footer';
import CompanyCategoryCalculator from './CompanyCategoryCalculator';

/* ─── Icon helpers ──────────────────────────────────────────── */
const Icon = ({ d, className = 'w-6 h-6' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d={d} />
  </svg>
);

const CheckIcon = ({ cls = 'w-5 h-5 text-indigo-600 flex-shrink-0' }) => (
  <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
  </svg>
);

const SparkleIcon = ({ className = '' }) => (
  <svg className={`text-[#6DC042] animate-pulse ${className}`} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0L14.6 9.4L24 12L14.6 14.6L12 24L9.4 14.6L0 12L9.4 9.4L12 0Z" />
  </svg>
);

/* ─── Data ──────────────────────────────────────────────────── */
const modules = [
  {
    color: 'indigo',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
    title: 'CRM & Lead Pipeline',
    desc: 'Capture every enquiry, assign it instantly, and track every follow-up from first contact to signed contract. Zero leads fall through the cracks.',
    points: ['Multi-step lead creation', 'Follow-up activity log', 'Lead category & source tracking', 'Auto-assign to sales agents'],
  },
  {
    color: 'amber',
    icon: 'M3 9.75L12 3l9 6.75V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.75zM9 21V12h6v9',
    title: 'Property & Project Management',
    desc: 'Organise all your projects, buildings, and units in one place. See live availability, link units to deals, and never double-sell a property.',
    points: ['Project & unit inventory', 'Real-time availability status', 'Layout types & floor plans', 'Linked to sales pipeline'],
  },
  {
    color: 'emerald',
    icon: 'M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z',
    title: 'Sales Orders & Commissions',
    desc: 'Create sales orders, schedule payment instalments, record collections, and auto-calculate commissions for every agent involved in a deal.',
    points: ['Sales order with payment schedules', 'Instalment tracking & reminders', 'Auto commission calculation', 'Approval workflow'],
  },
  {
    color: 'teal',
    icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
    title: 'Land & Feasibility',
    desc: 'Manage raw land acquisition pipelines, joint-venture landowner shares, CS/SA/RS/BRS records, legal mutation tracking, registry status, and GIS boundary mapping.',
    points: ['Mouza & Dag registry tracking', 'Landowner share division calculator', 'Mutation & Legal status checks', 'Land GIS map coordinates'],
  },
  {
    color: 'sky',
    icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
    title: 'BOQ & Cost Estimation',
    desc: 'Generate comprehensive bill of quantities (BOQ), run item rate analysis, estimate costs for material consumption, labor, and machinery, and compare budget vs actual.',
    points: ['Material consumption formulas', 'Tower & floor-wise cost estimation', 'Rate analysis item library', 'Budget vs actual cash requirements'],
  },
  {
    color: 'blue',
    icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    title: 'Procurement & Inventory',
    desc: 'Manage material requisitions, vendor quotation RFQs, comparative statements, goods receive notes (GRN), issues, and returns for stores (cement, rod, sand, brick, etc.).',
    points: ['Material requisitions & POs', 'Comparative statement charts', 'Store issue & return tracking', 'Warehouse & batch stocks'],
  },
  {
    color: 'violet',
    icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m21-12a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Contractor Management',
    desc: 'Register contractor profiles, issue construction work orders, process running bills (RA bills) with automated security deposit deductions, and track ledgers.',
    points: ['Contractor profiles & ledgers', 'Work order issuance workflows', 'RA Bill calculations & verification', 'Performance evaluation tracking'],
  },
  {
    color: 'pink',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
    title: 'Construction Progress',
    desc: 'Monitor building construction timeline. Track daily site diaries, weekly progress reports, tower/floor milestones, photos, and Gantt charts with Critical Path analysis.',
    points: ['Tower & floor progress tracking', 'Daily site diaries & photo logs', 'Gantt Chart & delay analysis', 'Engineering RFI & inspection checklists'],
  },
  {
    color: 'rose',
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    title: 'HR & Payroll',
    desc: 'End-to-end HR: employee records, attendance, leave management, monthly payroll, provident fund, and full & final settlements — all automated.',
    points: ['Attendance with clock-in/out', 'Leave applications & approvals', 'Automated monthly payroll', 'Provident fund & loans'],
  },
  {
    color: 'cyan',
    icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    title: 'Finance & Accounting',
    desc: 'Enterprise-grade double-entry accounting. Track project-wise financial statements, manage multi-level cost centers (Project/Tower/Floor/Flat), auto-reconcile bank statements, and run AI audit checks.',
    points: ['Project-wise Balance Sheet & P&L', 'Multi-level cost & profit centers', 'Auto Bank Reconciliation & PDC management', 'AI Wrong Entry & Anomaly Alerts'],
  },
  {
    color: 'indigo',
    icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    title: 'Role-Based Access',
    desc: 'Control who sees what. Managing Directors get full KPI dashboards, Sales Managers track team pipelines, Executives manage daily tasks, and HR/Finance run payroll.',
    points: [
      '👔 Managing Director: Full KPI dashboard',
      '📈 Sales Manager: Team assignments & reports',
      '🤝 Sales Executive: Personal leads & reminders',
      '🧾 HR & Finance: Payroll & expense approvals'
    ],
  },
];

const salesSteps = [
  { n: '01', title: 'Capture the Lead', body: "A prospect fills in your public enquiry form, or your sales team creates a lead manually. It's instantly assigned, categorised, and logged." },
  { n: '02', title: 'Work the Pipeline', body: 'Log every call, meeting, and site visit. Attach the unit of interest. Send a WhatsApp follow-up in one click. The system tracks everything.' },
  { n: '03', title: 'Close the Deal', body: 'Convert the lead to a sales order. Attach the unit, set the payment schedule, get manager approval, and issue the invoice.' },
  { n: '04', title: 'Collect & Commission', body: 'Record payments as they arrive. Commissions are calculated automatically and flow into the next payroll run.' },
];

const projectSteps = [
  { n: '01', title: 'Acquisition & Feasibility', body: 'Manage landowner joint-venture agreements, legal vetting, soil tests, and architectural approvals. Complete cost budgeting and feasibility checks.' },
  { n: '02', title: 'Procurement & Planning', body: 'Launch materials procurement workflow with purchase orders. Manage vendor ledgers and define task calendars on construction Gantt charts.' },
  { n: '03', title: 'Construction & Tasks', body: 'Track civil work milestones from piling to slab casting and final finishing. Log material consumption against budget and assign tasks to site engineers.' },
  { n: '04', title: 'Demarcation & Handover', body: 'Process final quality checklists and buyer walkthrough logs. Coordinate registration deed handovers and manage utility connectivity.' },
];

const testimonials = [
  { name: 'Sheebli Mozomder', role: 'Managing Director, Zoom Property', quote: "Before Unova Estate, our sales team was tracking 200+ leads in spreadsheets. We lost deals we didn't even know about. Now every lead is accounted for and our conversion rate has jumped significantly." },
  { name: 'Rajib Ahammed', role: 'Head of HR, Way Housing', quote: 'Processing payroll for 80 staff used to take 3 days every month. With Unova Estate it takes about 30 minutes. The provident fund tracking alone saved us from a compliance audit nightmare.' },
  { name: 'Amanullah Araf', role: 'Sales Manager, Mars Planning & Engineering', quote: 'The commission module changed everything. Before, agents argued about payments every month. Now the numbers come straight from confirmed deals — nobody can dispute it.' },
];

const faqs = [
  { q: 'Is Unova Estate built specifically for property companies?', a: "Yes. Every module — from the lead pipeline to unit management, payment schedules, and commission calculations — is designed around how real estate businesses actually work. It's not a generic CRM adapted for property; it's built for it from the ground up." },
  { q: 'Can different staff see only what\'s relevant to them?', a: 'Absolutely. The roles and permissions system lets you control exactly what each user sees and does. A sales executive sees only their own leads; an HR officer has no access to sales data; an accountant can view finance without touching HR. Fully configurable.' },
  { q: 'Does it handle multi-building or multi-project companies?', a: 'Yes. You can create unlimited projects, each with their own unit inventory, layout types, and pricing. Sales orders are linked to specific units so you always know what\'s sold, reserved, or available across your entire portfolio.' },
  { q: 'How are commissions calculated?', a: 'Commission rates are configured per salary structure or per sales policy. When a payment is recorded against a sales order, the system automatically calculates each involved agent\'s commission based on the configured rates — no manual spreadsheets required.' },
  { q: 'Can I run WhatsApp and SMS campaigns to my leads?', a: 'Yes. Connect your SMS provider and Meta WhatsApp Business API in the API Integrations settings. You can then send bulk campaigns, set up automated drip sequences, build public enquiry forms, and track open and click rates for every message sent.' },
  { q: 'How long does it take to set up?', a: 'Most companies are fully operational within a few days. The setup involves configuring your company details, creating lead categories, adding your team, importing your property projects, and connecting your communication providers. Your team can start using the system the same day.' },
  { q: 'Is data from one company visible to another?', a: 'Never. Each company is a completely isolated workspace. If you manage multiple companies or subsidiaries, each operates independently with its own data, users, and settings.' },
  { q: 'Can I track which marketing channel brought in a lead?', a: 'Yes. Every lead has a Source field (Website, Facebook, Referral, etc.). Create a separate lead capture form for each channel, and every submission is automatically tagged to that source. You can then filter and report on lead quality by source.' },
];

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app-estate-unova.vercel.app';

export default function LandingPage({ posts = [] }) {
  const router = useRouter();
  
  const featuredPosts = posts.slice(0, 5);
  const col1Posts = [featuredPosts[0], featuredPosts[3]].filter(Boolean);
  const centerPost = featuredPosts[2];
  const col2Posts = [featuredPosts[1], featuredPosts[4]].filter(Boolean);

  const formatDate = (dateStr) => {
    if (!dateStr) return '';
    const parts = dateStr.split('-');
    if (parts.length !== 3) return dateStr;
    const year = parts[0];
    const monthIndex = parseInt(parts[1], 10) - 1;
    const day = parseInt(parts[2], 10);

    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const month = months[monthIndex] || '';

    let suffix = 'th';
    if (day === 1 || day === 21 || day === 31) suffix = 'st';
    else if (day === 2 || day === 22) suffix = 'nd';
    else if (day === 3 || day === 23) suffix = 'rd';

    return `${month} ${day}${suffix}, ${year}`;
  };

  const [openFaq, setOpenFaq]           = useState(null);
  const [activeModule, setActiveModule] = useState(0);
  const [billingYearly, setBillingYearly] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrolled, setScrolled]           = useState(false);
  const [aiOpen, setAiOpen]             = useState(false);
  const [activeStep, setActiveStep]       = useState(0);
  const [activeWorkflowTab, setActiveWorkflowTab] = useState('sales');

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll);
    
    // Auto cycle timeline steps
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2500);

    return () => {
      window.removeEventListener('scroll', onScroll);
      clearInterval(interval);
    };
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const goToDemo = () => {
    router.push('/demo');
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Unova Estate",
    "operatingSystem": "All",
    "applicationCategory": "BusinessApplication",
    "image": "https://estate.unova.app/unova-real-estate-crm-sales-dashboard-mockup.png",
    "logo": "https://estate.unova.app/unova-real-estate-software-logo.png",
    "description": "Bangladesh's first AI-powered real estate ERP. Manage leads, properties, sales orders, commissions, HR, payroll, and marketing — all in one platform.",
    "screenshot": [
      "https://estate.unova.app/unova-real-estate-crm-sales-dashboard-mockup.png",
      "https://estate.unova.app/unova-estate-multi-device-responsive-dashboard.png",
      "https://estate.unova.app/unova-property-sales-funnel-analytics-dashboard.png"
    ],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "BDT"
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-[#6DC042]/20 selection:text-slate-900 overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Global ambient glow */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-20%] left-[10%] w-[700px] h-[700px] bg-indigo-600/[0.04] rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-violet-600/[0.04] rounded-full blur-[120px]" />
      </div>

      {/* ════ REUSABLE NAVIGATION ════ */}
      <Navbar activePage="home" />

      {/* ════ HERO ════ */}
      <section className="relative pt-22 md:pt-40 pb-24 px-5 z-10 overflow-hidden bg-slate-50/20">
        <style dangerouslySetInnerHTML={{__html: `
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          .btn-shimmer {
            background: linear-gradient(90deg, #6DC042 0%, #8ae060 25%, #6DC042 50%, #8ae060 75%, #6DC042 100%);
            background-size: 200% auto;
            animation: shimmer 4s infinite linear;
          }
          .btn-shimmer:hover {
            animation: shimmer 1.5s infinite linear;
          }
        `}} />

        {/* Dotted Grid Background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-45 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Soft background ambient glow circles */}
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#6DC042]/10 to-emerald-500/5 blur-[120px] rounded-full pointer-events-none z-0" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Badge with Sparkles */}
          <div className="relative inline-block mb-8">
            <SparkleIcon className="absolute -top-4 -left-6 w-5 h-5 opacity-70" />
            <SparkleIcon className="absolute -bottom-3 -right-6 w-4 h-4 opacity-60" />
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-bold text-indigo-600 backdrop-blur-sm shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              Bangladesh&apos;s First AI-Powered Real Estate ERP
            </div>
          </div>

          <h1 className="text-5xl md:text-[5rem] font-extrabold tracking-tight leading-[1.02] mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-950 to-slate-800">
              Are you ready to increase<br />your real estate sales by{" "}
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6DC042] via-[#5da538] to-[#6DC042]">
              20%?
            </span>
          </h1>

          <div className="inline-flex items-center gap-4 mx-auto mb-10 px-6 py-4 rounded-2xl border border-emerald-100 bg-emerald-50/80 backdrop-blur-sm shadow-sm max-w-md">
            <div className="w-10 h-10 rounded-xl bg-emerald-100/80 flex items-center justify-center flex-shrink-0 text-xl text-emerald-800 shadow-sm">
              🛡️
            </div>
            <div className="text-left">
              <p className="text-sm font-black text-emerald-800 leading-tight">Not happy with your results in 6 months?</p>
              <p className="text-xs text-emerald-600 mt-0.5 leading-snug">We&apos;ll refund every penny — no questions, no conditions.</p>
            </div>
          </div>

          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Our software increases sales by boosting employee performance, generating and managing leads, supporting smart decisions, and delighting customers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button onClick={() => goToDemo('consultant')}
              className="btn-shimmer w-full sm:w-auto px-8 py-4 text-white font-bold rounded-full shadow-[0_4px_20px_rgba(109,192,66,0.35)] hover:shadow-[0_6px_30px_rgba(109,192,66,0.55)] transition-all text-center hover:scale-105 active:scale-95 duration-200">
              Book a Free Consultation
            </button>
            <button onClick={() => goToDemo('demo')}
              className="w-full sm:w-auto px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-full border border-slate-200 hover:border-slate-300 transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95 duration-200">
              Request a Demo
              <Icon d="M14 5l7 7m0 0l-7 7m7-7H3" className="w-4 h-4" />
            </button>
          </div>



          {/* Main Dashboard Preview Mockup (macOS Style Frame) */}
          <div className="relative mx-auto max-w-5xl rounded-2xl border border-slate-200/80 bg-white shadow-[0_30px_70px_rgba(27,42,59,0.15)] overflow-hidden mt-8 transition-all duration-500 hover:scale-[1.01] hover:border-[#6DC042]/30 group">
            <div className="h-10 bg-slate-50 border-b border-slate-200/60 flex items-center px-4 gap-2 flex-shrink-0">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="flex-1 flex justify-center pr-12">
                <span className="text-[10px] text-slate-400 font-medium font-mono select-none">app.unovaestate.com/dashboard</span>
              </div>
            </div>
            
            <div className="relative bg-slate-50">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#6DC042]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <img src="/unova-real-estate-crm-sales-dashboard-mockup.png" alt="Unova Estate AI-Powered Real Estate ERP CRM Sales Dashboard Mockup" className="w-full object-cover" loading="eager" width="1024" height="576" />
            </div>
          </div>
        </div>
      </section>

      {/* ════ FEATURES ════ */}
      <section id="features" className="relative z-10 py-24 px-5 border-t border-slate-200/60 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-[#6DC042] mb-3">11 integrated modules. One login.</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">Everything in one platform.</h2>
            <p className="text-slate-500 max-w-xl mx-auto">No more switching between a CRM, a construction ERP, a land feasibility spreadsheet, and separate HR systems. Unova Estate replaces all of them.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {modules.map((m, i) => (
              <button key={i} onClick={() => setActiveModule(i)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
                  activeModule === i
                    ? 'bg-indigo-50 text-indigo-600 border-indigo-200 ring-1 ring-indigo-200'
                    : 'bg-slate-100 text-slate-500 border-slate-200 hover:border-slate-300 hover:text-slate-700'
                }`}>
                {m.title}
              </button>
            ))}
          </div>

          {modules.map((m, i) => {
            if (i !== activeModule) return null;
            return (
              <div key={i} className="grid md:grid-cols-2 gap-8 bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-md">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                    <Icon d={m.icon} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">{m.title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-8">{m.desc}</p>
                  <Link href={`${APP_URL}/company-register`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white bg-indigo-600 hover:bg-indigo-500 shadow-md transition-all">
                    Get Started Free
                    <Icon d="M14 5l7 7m0 0l-7 7m7-7H3" className="w-4 h-4" />
                  </Link>
                </div>
                <div className="flex flex-col justify-center gap-4">
                  {m.points.map((pt, pi) => (
                    <div key={pi} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0 text-indigo-600">
                        <CheckIcon cls="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-slate-700">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}

          {/* Mockup 1 — Multi Device Modules Grid */}
          <div className="mt-24 grid md:grid-cols-2 gap-12 items-center bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#6DC042] mb-3 block">Fully Responsive Modules</span>
              <h3 className="text-2xl md:text-4xl font-black text-slate-900 leading-tight mb-4">
                Access your real estate business from any device.
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Whether you are on your laptop in the office, your tablet in a client meeting, or your mobile phone in the field, Unova Estate keeps you connected. Log follow-ups, approve leaves, check unit inventory, and track collections on the go.
              </p>
              <button onClick={() => goToDemo('demo')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white bg-[#6DC042] hover:bg-[#5da538] shadow-md transition-all">
                Request a Demo
                <Icon d="M14 5l7 7m0 0l-7 7m7-7H3" className="w-4 h-4" />
              </button>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white p-1.5 transition-transform duration-300 hover:scale-[1.01]">
              <img src="/unova-estate-multi-device-responsive-dashboard.png" alt="Unova Estate Multi-Device Mobile, Tablet, and Desktop CRM Dashboard" className="w-full rounded-xl object-cover" loading="lazy" width="800" height="500" />
            </div>
          </div>

          {/* Mockup 3 — Funnel & Analytics Dashboard */}
          <div className="mt-16 bg-slate-50 border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white p-1.5 transition-transform duration-300 hover:scale-[1.01]">
                <img src="/unova-property-sales-funnel-analytics-dashboard.png" alt="Unova Estate CRM Sales Funnel and Analytics Dashboard Charts" className="w-full rounded-xl object-cover" loading="lazy" width="800" height="500" />
              </div>
              <div className="order-1 md:order-2">
                <span className="text-xs font-bold uppercase tracking-widest text-[#6DC042] mb-3 block">Data-Driven Insights</span>
                <h3 className="text-2xl md:text-4xl font-black text-slate-900 leading-tight mb-4">
                  Make smarter decisions with real-time analytics.
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  Track your sales funnel from initial leads down to finalized bookings. See agent performance, cost breakdowns, payment collection rates, and monthly commission payouts in clean, interactive charts.
                </p>
                <button onClick={() => goToDemo('demo')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white bg-[#6DC042] hover:bg-[#5da538] shadow-md transition-all">
                  Try it Live
                  <Icon d="M14 5l7 7m0 0l-7 7m7-7H3" className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ HOW IT WORKS ════ */}
      <section id="how-it-works" className="relative z-10 py-24 px-5 border-t border-slate-200/60 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#6DC042] mb-3">Interactive Lifecycles</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">
              From acquisition to commission
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              Unova Estate connects your entire development and sales lifecycle. Track construction milestones, budgets, bookings, and commissions in one unified platform.
            </p>
          </div>

          {/* Premium Segmented Tab Switcher */}
          <div className="flex justify-center mb-16">
            <div className="inline-flex p-1 bg-slate-200/50 rounded-full border border-slate-200/80 shadow-inner">
              <button
                onClick={() => { setActiveWorkflowTab('sales'); setActiveStep(0); }}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeWorkflowTab === 'sales'
                    ? 'bg-[#6DC042] text-white shadow-md'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                🏪 Sales Flow
              </button>
              <button
                onClick={() => { setActiveWorkflowTab('project'); setActiveStep(0); }}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeWorkflowTab === 'project'
                    ? 'bg-[#6DC042] text-white shadow-md'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                🏗️ Project Flow
              </button>
            </div>
          </div>

          <div className="relative">
            {/* Vertical connection line */}
            <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-slate-200 hidden sm:block" />
            {/* Sales Flow Container (Always in DOM for SEO, toggled via CSS classes) */}
            <div className={`space-y-6 transition-all duration-500 ${activeWorkflowTab === 'sales' ? 'block opacity-100' : 'hidden opacity-0 pointer-events-none'}`}>
              {salesSteps.map((s, i) => {
                const isActive = activeWorkflowTab === 'sales' && i === activeStep;
                return (
                  <div key={i} className={`relative flex gap-6 md:gap-0 transition-all duration-500 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} ${isActive ? '' : 'opacity-60'}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                      <div className={`bg-white border rounded-2xl p-5 shadow-sm transition-all duration-500 ${
                        isActive 
                          ? 'border-[#6DC042] shadow-[0_10px_30px_rgba(109,192,66,0.1)] scale-[1.03]' 
                          : 'border-slate-200/80'
                      } ${i % 2 !== 0 ? 'md:text-left' : ''}`}>
                        <span className={`text-xs font-black tracking-widest transition-colors duration-500 ${isActive ? 'text-[#6DC042]' : 'text-slate-400'}`}>{s.n}</span>
                        <h3 className="text-lg font-black text-slate-900 mt-1 mb-2">{s.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">{s.body}</p>
                      </div>
                    </div>
                    <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 items-center justify-center text-xs font-black transition-all duration-500 ${
                      isActive 
                        ? 'bg-[#6DC042] border-[#6DC042] scale-125 z-20 text-white shadow-[0_0_15px_rgba(109,192,66,0.5)] ring-4 ring-[#6DC042]/10' 
                        : 'bg-slate-200 border-slate-300 text-slate-500 z-10'
                    }`}>
                      {i + 1}
                    </div>
                    <div className="hidden md:block flex-1" />
                  </div>
                );
              })}
            </div>

            {/* Project Flow Container (Always in DOM for SEO, toggled via CSS classes) */}
            <div className={`space-y-6 transition-all duration-500 ${activeWorkflowTab === 'project' ? 'block opacity-100' : 'hidden opacity-0 pointer-events-none'}`}>
              {projectSteps.map((s, i) => {
                const isActive = activeWorkflowTab === 'project' && i === activeStep;
                return (
                  <div key={i} className={`relative flex gap-6 md:gap-0 transition-all duration-500 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} ${isActive ? '' : 'opacity-60'}`}>
                    <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                      <div className={`bg-white border rounded-2xl p-5 shadow-sm transition-all duration-500 ${
                        isActive 
                          ? 'border-[#6DC042] shadow-[0_10px_30px_rgba(109,192,66,0.1)] scale-[1.03]' 
                          : 'border-slate-200/80'
                      } ${i % 2 !== 0 ? 'md:text-left' : ''}`}>
                        <span className={`text-xs font-black tracking-widest transition-colors duration-500 ${isActive ? 'text-[#6DC042]' : 'text-slate-400'}`}>{s.n}</span>
                        <h3 className="text-lg font-black text-slate-900 mt-1 mb-2">{s.title}</h3>
                        <p className="text-sm text-slate-500 leading-relaxed">{s.body}</p>
                      </div>
                    </div>
                    <div className={`hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-2 items-center justify-center text-xs font-black transition-all duration-500 ${
                      isActive 
                        ? 'bg-[#6DC042] border-[#6DC042] scale-125 z-20 text-white shadow-[0_0_15px_rgba(109,192,66,0.5)] ring-4 ring-[#6DC042]/10' 
                        : 'bg-slate-200 border-slate-300 text-slate-500 z-10'
                    }`}>
                      {i + 1}
                    </div>
                    <div className="hidden md:block flex-1" />
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>


      {/* ════ TESTIMONIALS ════ */}
      <section id="clients" className="relative z-10 py-24 px-5 border-t border-slate-200/60 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3">What our customers say</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Real results, real businesses.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-7 flex flex-col shadow-sm hover:border-indigo-500/25 transition-colors">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, si) => (
                    <svg key={si} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="text-sm font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ COMPETITOR COMPARISON ════ */}
      <section className="relative z-10 py-24 px-5 border-t border-slate-200/60 bg-slate-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-xs font-black uppercase tracking-widest text-[#6DC042]">Comparison Study</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
              Why Real Estate Developers Switch to Unova
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-xs md:text-sm">
              Discover how Unova replaces slow manual registers and generic CRMs with automated property workflows.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                competitor: 'Zoho CRM',
                slug: 'unova-vs-zoho',
                img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
                desc: 'Zoho CRM is a general pipeline tool. It lacks automated installment charts, landowner flat split calculations, and local Bangladeshi check ledger configurations.',
                badge: 'vs Zoho CRM'
              },
              {
                competitor: 'Salesforce',
                slug: 'unova-vs-salesforce',
                img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80',
                desc: 'Salesforce requires massive customization times (6-12 months), expensive consultants, and offers no native site engineering progress reports out-of-the-box.',
                badge: 'vs Salesforce'
              },
              {
                competitor: 'HubSpot',
                slug: 'unova-vs-hubspot',
                img: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=400&q=80',
                desc: 'HubSpot is excellent for inbound marketing campaigns but cannot handle double-entry accounting cost-centers or site store inventory logs.',
                badge: 'vs HubSpot'
              },
              {
                competitor: 'Bitrix24',
                slug: 'unova-vs-bitrix24',
                img: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=400&q=80',
                desc: 'Bitrix24 has complex, cluttered dashboard menus and lacks post-dated cheque vaults, automatic due warnings, and local SMS gateway integration.',
                badge: 'vs Bitrix24'
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between group hover:scale-[1.01]"
              >
                <div>
                  <Link href={`/compare/${item.slug}`} className="block group/link">
                    <div className="w-full h-32 rounded-xl overflow-hidden mb-4 relative bg-slate-100 border border-slate-200/50">
                      <img
                        src={item.img}
                        alt={`Unova vs ${item.competitor}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover/link:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-2 left-2 px-2 py-0.5 bg-white/95 text-indigo-600 text-[9px] font-black uppercase tracking-wider rounded shadow-sm backdrop-blur-sm">
                        {item.badge}
                      </div>
                    </div>
                    <h3 className="text-sm font-extrabold text-slate-900 mb-2 group-hover/link:text-indigo-600 transition-colors">
                      Unova vs {item.competitor}
                    </h3>
                  </Link>
                  <p className="text-slate-500 text-[11px] leading-relaxed mb-5">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100">
                  <Link 
                    href={`/compare/${item.slug}`} 
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-500 flex items-center gap-1 group-hover:gap-1.5 transition-all"
                  >
                    Read Comparison Study
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/compare" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-full transition-all shadow-md hover:shadow-lg"
            >
              See All Comparisons
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ════ PRICING ════ */}
      <section id="pricing" className="relative z-10 py-24 px-5 border-t border-slate-200/60 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3">Pricing</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">6 Month Refund Guarantee</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Use Unova Estate for 6 months. If your business sees zero improvement — not happy with your results? We&apos;ll refund every penny — no questions, no conditions.</p>
          </div>

          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-semibold transition-colors ${!billingYearly ? 'text-slate-900' : 'text-slate-400'}`}>Monthly</span>
            <button onClick={() => setBillingYearly(v => !v)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${billingYearly ? 'bg-indigo-600' : 'bg-slate-200'}`}>
              <span className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300 ${billingYearly ? 'translate-x-7' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm font-semibold transition-colors ${billingYearly ? 'text-slate-900' : 'text-slate-400'}`}>
              Yearly
              <span className="ml-2 text-[10px] font-black bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full">Save 10%</span>
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Small',  monthly: 40, highlight: false, badge: null },
              { name: 'Medium', monthly: 75, highlight: true,  badge: 'Most Popular' },
              { name: 'Large',  monthly: 100, highlight: false, badge: null },
            ].map((pkg, i) => {
              const monthlyPrice = billingYearly ? Math.round(pkg.monthly * 0.9) : pkg.monthly;
              const yearlyTotal  = Math.round(pkg.monthly * 0.9 * 12);
              return (
                <div key={i} className={`relative rounded-3xl p-8 flex flex-col border transition-all ${
                  pkg.highlight
                    ? 'bg-slate-50/50 border-2 border-indigo-600/60 shadow-md scale-[1.03]'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-sm'
                }`}>
                  {pkg.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 text-[10px] font-black rounded-full uppercase tracking-widest shadow-lg">
                      {pkg.badge}
                    </div>
                  )}
                  <div className="mb-7">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-600 block mb-1">Company Size</span>
                    <h3 className="text-2xl font-black text-slate-900 mb-1">{pkg.name}</h3>
                    <div className="mt-4 flex items-end gap-2">
                      <p className="text-4xl font-black text-slate-900">$ {monthlyPrice.toLocaleString()}</p>
                      <p className="text-xs text-slate-500 mb-1.5">/month</p>
                    </div>
                    {billingYearly && (
                      <p className="text-xs text-emerald-600 mt-1">$ {yearlyTotal.toLocaleString()} billed yearly</p>
                    )}
                  </div>
                  <ul className="space-y-3 flex-1 mb-8">
                    {['CRM & Lead Pipeline', 'Property & Project Management', 'Sales Orders & Commissions', 'HR & Payroll', 'Multi-Channel Marketing', 'Accounting & Finance'].map((f, fi) => (
                      <li key={fi} className="flex items-start gap-3 text-sm text-slate-600">
                        <CheckIcon cls="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => goToDemo('demo')}
                    className={`w-full py-3.5 rounded-xl font-bold text-sm text-center transition-all ${
                      pkg.highlight
                        ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_4px_14px_rgba(99,102,241,0.3)]'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200'
                    }`}>
                    Request a Demo
                  </button>
                </div>
              );
            })}
          </div>

          {/* ULTRA-PREMIUM PRICING FOOTER CARDS */}
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Card 1: Enterprise & Custom Modular Solutions */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 text-white p-8 border border-slate-800 shadow-xl flex flex-col justify-between space-y-6">
              <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="space-y-3 relative z-10">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                    Enterprise &amp; Custom Modules
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-white">
                  Need Dedicated Enterprise Setup or Custom Modules?
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Choose private cloud instances, custom database pipelines, or pick specific ERP modules to fit your exact budget and team scale.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-slate-800 relative z-10">
                <span className="text-[11px] text-slate-400 font-medium">* One-time onboarding fee includes full setup &amp; training</span>
                <button
                  onClick={() => goToDemo('demo')}
                  className="px-5 py-2.5 bg-white text-slate-950 hover:bg-slate-100 rounded-xl text-xs font-bold shadow-lg transition-all whitespace-nowrap shrink-0"
                >
                  Contact Enterprise Sales →
                </button>
              </div>
            </div>

            {/* Card 2: Interactive Plan Calculator */}
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-50/80 via-white to-indigo-100/50 p-8 border border-indigo-200/80 shadow-lg flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-indigo-600 text-white shadow-sm">
                    Interactive Calculator 🧮
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-black text-slate-900">
                  Unsure Which Plan Fits Your Business Scale?
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Input your employee count, monthly leads, and project volume to calculate your exact matrix score and recommended tier.
                </p>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-indigo-100">
                <span className="text-[11px] font-bold text-slate-500">Instant Automated Scoring</span>
                <Link
                  href="/calculator"
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold shadow-md hover:shadow-indigo-500/25 transition-all whitespace-nowrap shrink-0"
                >
                  Open Plan Calculator →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════ FAQ ════ */}
      <section className="relative z-10 py-24 px-5 border-t border-slate-200/60 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">Common questions.</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left">
                  <span className="text-sm font-bold text-slate-800 pr-4">{faq.q}</span>
                  <svg className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-slate-500 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ BLOG SECTION ════ */}
      <section className="relative z-10 py-24 px-5 border-t border-slate-200/60 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-600">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              ✨ Unova Blog
            </div>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900">
              Simple Guides to Grow Your Business
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto leading-relaxed">
              Read our easy guides to learn how to save construction costs, get more property buyers, and make your daily work easier.
            </p>
          </div>

          {/* Bento Grid Layout */}
          {featuredPosts.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-stretch">
              {/* Column 1: Left stacked posts */}
              <div className="flex flex-col justify-between gap-8 lg:col-span-1">
                {col1Posts.map((post) => (
                  <div key={post.slug} className="group flex flex-col gap-4">
                    <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                      <img 
                        src={post.image || "https://images.unsplash.com/photo-1560518883-ce09059eeffa"} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[10px] font-bold text-slate-800 flex items-center gap-1.5 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
                        {post.category}
                      </span>
                    </Link>
                    <div className="space-y-1.5 px-1">
                      <span className="text-xs text-slate-400 font-medium block">{formatDate(post.date)}</span>
                      <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug line-clamp-2">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Column 2: Center Featured post (tall) */}
              <div className="flex flex-col h-full justify-center lg:col-span-2">
                {centerPost && (
                  <div className="group flex flex-col justify-between h-full border border-slate-200/50 bg-white rounded-3xl p-4 shadow-sm hover:shadow-md transition-all duration-300">
                    <div className="flex flex-col gap-5 h-full">
                      <Link href={`/blog/${centerPost.slug}`} className="relative block aspect-[16/10] w-full rounded-2xl overflow-hidden">
                        <img 
                          src={centerPost.image || "https://images.unsplash.com/photo-1504307651254-35680f356dfd"} 
                          alt={centerPost.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                        />
                        <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[10px] font-bold text-slate-800 flex items-center gap-1.5 shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse"></span>
                          {centerPost.category}
                        </span>
                      </Link>
                      <div className="space-y-3 px-2 flex-grow flex flex-col justify-between">
                        <div className="space-y-2">
                          <span className="text-xs text-slate-400 font-medium block">{formatDate(centerPost.date)}</span>
                          <h3 className="text-base md:text-lg font-black text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug line-clamp-2">
                            <Link href={`/blog/${centerPost.slug}`}>{centerPost.title}</Link>
                          </h3>
                          <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">
                            {centerPost.excerpt}
                          </p>
                        </div>
                        <div className="pt-4 border-t border-slate-100 flex justify-between items-center text-xs font-bold text-indigo-600">
                          <span>Read Article</span>
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Column 3: Right stacked posts */}
              <div className="flex flex-col justify-between gap-8 lg:col-span-1">
                {col2Posts.map((post) => (
                  <div key={post.slug} className="group flex flex-col gap-4">
                    <Link href={`/blog/${post.slug}`} className="relative block aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                      <img 
                        src={post.image || "https://images.unsplash.com/photo-1554469384-e58fac16e23a"} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[10px] font-bold text-slate-800 flex items-center gap-1.5 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
                        {post.category}
                      </span>
                    </Link>
                    <div className="space-y-1.5 px-1">
                      <span className="text-xs text-slate-400 font-medium block">{formatDate(post.date)}</span>
                      <h3 className="text-sm font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug line-clamp-2">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-3xl border border-slate-200/60 max-w-md mx-auto shadow-sm">
              <span className="text-4xl mb-4 block">📝</span>
              <p className="text-slate-500 text-xs font-semibold">No blog articles published yet.</p>
            </div>
          )}

          {/* Footer Link */}
          <div className="text-center mt-16">
            <Link href="/blog" className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-indigo-600 transition-all group">
              View All Insights 
              <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ════ FINAL CTA ════ */}

      <section className="relative z-10 py-24 px-5 border-t border-slate-200/60 bg-white">
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-indigo-600/[0.02] blur-3xl rounded-full pointer-events-none" />
          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-4">Our Promise</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mb-6">
              We Don&apos;t Just Sell Software.<br />We Guarantee Results.
            </h2>
            <p className="text-slate-500 max-w-lg mx-auto mb-6 text-lg">
              Most software companies disappear after the sale. We stay. From onboarding to daily use, our team is with you every step of the way.
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl border border-emerald-100 bg-emerald-50 max-w-lg mx-auto mb-10 shadow-sm">
              <span className="text-2xl flex-shrink-0">🛡️</span>
              <p className="text-sm text-emerald-800 text-left leading-relaxed">
                Use it for 6 months — if you don&apos;t see real results, we&apos;ll refund every penny. <strong className="text-emerald-600">No questions. No conditions.</strong>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => goToDemo('consultant')}
                className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full shadow-[0_4px_14px_rgba(99,102,241,0.25)] hover:shadow-[0_6px_20px_rgba(99,102,241,0.45)] transition-all text-center">
                Book a Free Consultant
              </button>
              <button onClick={() => goToDemo('demo')}
                className="w-full sm:w-auto px-8 py-3.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-full border border-slate-200 hover:border-slate-300 transition-all flex items-center justify-center gap-2">
                Request a Demo
                <Icon d="M14 5l7 7m0 0l-7 7m7-7H3" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />

      {/* ════ FOOTER ════ */}
      <Footer />

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center shadow-[0_4px_14px_rgba(99,102,241,0.4)] transition-all duration-300 ${
          showScrollTop && !aiOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7" />
        </svg>
      </button>

    </div>
  );
}
