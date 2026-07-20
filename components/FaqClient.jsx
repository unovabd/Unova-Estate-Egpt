'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AskAI from './AskAI';
import Footer from './Footer';

const faqCategories = [
  { 
    id: 'general', 
    label: 'General & Setup', 
    desc: 'Basic concepts, free trial guidelines, and data migration walkthroughs.', 
    icon: '👋',
    bg: 'bg-indigo-50 text-indigo-600 border-indigo-100'
  },
  { 
    id: 'crm', 
    label: 'Sales & CRM', 
    desc: 'Lead management pipelines, WhatsApp APIs, and payment schedule tracking.', 
    icon: '📈',
    bg: 'bg-emerald-50 text-emerald-600 border-emerald-100'
  },
  { 
    id: 'construction', 
    label: 'Construction & BOQ', 
    desc: 'Daily site diaries, material requisitions, store ledger, and contractor billing.', 
    icon: '🏗️',
    bg: 'bg-blue-50 text-blue-600 border-blue-100'
  },
  { 
    id: 'pricing', 
    label: 'Pricing & Hosting', 
    desc: 'SaaS licensing plans, AWS cloud server uptimes, and on-premise dedicated setups.', 
    icon: '💳',
    bg: 'bg-amber-50 text-amber-600 border-amber-100'
  },
  { 
    id: 'security', 
    label: 'Security & Support', 
    desc: 'Bank-grade data encryption, automated daily backup policies, and dedicated help desk.', 
    icon: '🛡️',
    bg: 'bg-rose-50 text-rose-600 border-rose-100'
  }
];

const faqs = [
  // General
  {
    id: 'what-is-unova',
    category: 'general',
    question: 'What is Unova Estate and how does it work?',
    updated: 'Updated on Jan 12, 2026',
    summary: "Bangladesh's first AI-powered all-in-one ERP & CRM software built for real estate developers.",
    answerHtml: `
      <div class="space-y-6 text-xs md:text-sm text-slate-600 leading-relaxed">
        <p>Unova Estate is Bangladesh's first AI-powered all-in-one ERP & CRM software built exclusively for real estate developers, housing companies, and property builders. It helps developers manage their entire lifecycle—from land acquisition to sales pipelines, instalment collections, store inventories, and construction progress—within a single unified platform.</p>
        
        <h4 class="font-extrabold text-slate-800 text-sm md:text-base mt-4">Core Benefits:</h4>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Centralized Database:</strong> All office files, records, and client files are stored securely in one place.</li>
          <li><strong>Real-time Dashboards:</strong> Managing Directors, Sales Managers, and Executives get customized real-time insights based on their roles.</li>
          <li><strong>Field Accessibility:</strong> Site engineers and sales agents can easily input daily site logs or log client interactions directly from their mobile phones.</li>
        </ul>
      </div>
    `
  },
  {
    id: 'free-trial-details',
    category: 'general',
    question: 'Is there a free trial period available?',
    updated: 'Updated on Jan 15, 2026',
    summary: 'Yes, we offer a 14-day fully-featured trial portal with a product walkthrough.',
    answerHtml: `
      <div class="space-y-6 text-xs md:text-sm text-slate-600 leading-relaxed">
        <p>Yes! We offer a 14-day fully-featured trial period for every new company. During the trial, your team will have full access to all standard moudles. Our onboarding team will set up your portal and help your team get started.</p>
        
        <h4 class="font-extrabold text-slate-800 text-sm md:text-base mt-4">How to start your trial:</h4>
        <ol class="list-decimal pl-5 space-y-2">
          <li>Click the <strong>Book a Free Demo</strong> button on our homepage and submit the form.</li>
          <li>Our product specialist will call you to schedule a quick online walkthrough.</li>
          <li>Once we align on your required modules, your customized trial portal will be activated within 24 hours.</li>
        </ol>
      </div>
    `
  },
  {
    id: 'data-import-migration',
    category: 'general',
    question: 'Can we migrate our existing Excel data into the system?',
    updated: 'Updated on Jan 18, 2026',
    summary: 'Yes, easily import client databases, inventory, and payment ledgers via Excel templates.',
    answerHtml: `
      <div class="space-y-6 text-xs md:text-sm text-slate-600 leading-relaxed">
        <p>Yes, absolutely! We provide pre-formatted Excel import templates for all modules. You can easily upload your existing customer directory, property inventory, payment schedules, and outstanding collections with just a few clicks. Our dedicated data migration team will handle this process for you completely free of charge.</p>
        
        <div class="p-4 bg-indigo-50 border border-indigo-100 rounded-xl mt-4">
          <h5 class="font-bold text-indigo-950 mb-1">💡 Data Migration Guarantee:</h5>
          <p class="text-xs text-indigo-900 leading-relaxed">We prioritize data integrity. Our migration specialists use validation scripts to identify and resolve duplicates, missing fields, or incorrect formulas before push-to-production.</p>
        </div>
      </div>
    `
  },

  // CRM
  {
    id: 'lead-distribution-crm',
    category: 'crm',
    question: 'How does lead distribution and follow-up tracking work?',
    updated: 'Updated on Jan 20, 2026',
    summary: 'Automated lead routing from social channels and instant notifications for agents.',
    answerHtml: `
      <div class="space-y-6 text-xs md:text-sm text-slate-600 leading-relaxed">
        <p>Leads captured from Facebook Ads, web forms, or manual walk-ins flow directly into Unova CRM. You can configure custom lead-assignment routing rules (such as Round-Robin or region-based routing) to automatically distribute leads among sales agents. Executives receive instant mobile notifications and can log call summaries, meetings, and follow-ups on the go.</p>
        
        <h4 class="font-extrabold text-slate-800 text-sm md:text-base mt-4">Key CRM Features:</h4>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Instant Assignment:</strong> Leads are distributed within seconds of creation, reducing response times.</li>
          <li><strong>Follow-up Reminders:</strong> Automated reminders to call or visit clients, ensuring no lead is missed.</li>
          <li><strong>Visual Pipeline:</strong> Manage deals easily through drag-and-drop pipeline stages (e.g., Prospect, Site Visit, Booking).</li>
        </ul>
      </div>
    `
  },
  {
    id: 'whatsapp-meta-automation',
    category: 'crm',
    question: 'How does WhatsApp and Meta automation work?',
    updated: 'Updated on Jan 22, 2026',
    summary: 'Send booking confirmations and payment notifications via the Official WhatsApp API.',
    answerHtml: `
      <div class="space-y-6 text-xs md:text-sm text-slate-600 leading-relaxed">
        <p>We integrate the Official Meta WhatsApp Business API directly with your Unova Estate system. This allows the system to send automated alerts—such as booking confirmations, money receipts, and upcoming instalment reminders—directly to your customers' WhatsApp numbers from your company’s official business account.</p>
        
        <div class="p-4 bg-emerald-50 border border-emerald-100 rounded-xl mt-4">
          <h5 class="font-bold text-emerald-950 mb-1">🚀 Automated Receipts:</h5>
          <p class="text-xs text-emerald-900 leading-relaxed">No manual message typing is required. The moment an instalment is posted in your accounts, the customer receives an official payment receipt PDF on their WhatsApp.</p>
        </div>
      </div>
    `
  },
  {
    id: 'installment-pdc-tracking',
    category: 'crm',
    question: 'How do we track instalment collections and bounced checks?',
    updated: 'Updated on Jan 25, 2026',
    summary: 'Automated instalment schedule generation, PDC alerts, and bounced check penalties.',
    answerHtml: `
      <div class="space-y-6 text-xs md:text-sm text-slate-600 leading-relaxed">
        <p>When a booking file is created, the system auto-generates the complete payment instalment schedule. Automated WhatsApp and email alerts are sent to customers 5 days before their instalment due dates. Post-Dated Cheques (PDC) are tracked in the system with reminders for bank deposits. If a check bounces, the customer ledger is automatically updated with bounced status and penalty interests.</p>
        
        <h4 class="font-extrabold text-slate-800 text-sm md:text-base mt-4">Payment Alert Timeline:</h4>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>5 Days Prior:</strong> First automated instalment reminder on WhatsApp & email.</li>
          <li><strong>Due Date:</strong> Due notification with payment links.</li>
          <li><strong>Overdue:</strong> Automated notice showing overdue amount + penalty fee.</li>
        </ul>
      </div>
    `
  },

  // Construction
  {
    id: 'material-store-requisition',
    category: 'construction',
    question: 'How can we control material requisitions and store issues?',
    updated: 'Updated on Jan 28, 2026',
    summary: 'Control site expenditures against pre-defined BOQ budgets and item rate analysis.',
    answerHtml: `
      <div class="space-y-6 text-xs md:text-sm text-slate-600 leading-relaxed">
        <p>At the start of each project, the Bill of Quantities (BOQ) or budget estimate is uploaded into the system. When a site engineer creates a material requisition, the system auto-verifies it against the remaining BOQ budget. If a requisition exceeds the budget, the system locks the request and requires special manager approval. This prevents material wastage, unauthorized orders, and theft on-site.</p>
        
        <h4 class="font-extrabold text-slate-800 text-sm md:text-base mt-4">Material Requisition Flow:</h4>
        <ol class="list-decimal pl-5 space-y-2">
          <li>Site engineer submits a material requisition via the mobile app.</li>
          <li>System checks inventory balance and BOQ limits, notifying the project manager.</li>
          <li>Approved requisitions trigger a Store Issue or Purchase Requisition, updating store ledgers in real-time.</li>
        </ol>
      </div>
    `
  },
  {
    id: 'contractor-ra-bill-verification',
    category: 'construction',
    question: 'How are contractor running bills (RA Bills) processed?',
    updated: 'Updated on Jan 30, 2026',
    summary: 'Automated deductions for security deposits, advance recovery, and tax compliance.',
    answerHtml: `
      <div class="space-y-6 text-xs md:text-sm text-slate-600 leading-relaxed">
        <p>Contractors submit their Running Account (RA) bills through the contractor portal based on work progress. The engineering team verifies the measurements. The system then automatically calculates deductions like security deposits, advance recovery, and tax/VAT adjustments before routing the net payable amount to finance for final approval.</p>
        
        <h4 class="font-extrabold text-slate-800 text-sm md:text-base mt-4">Automated Deductions:</h4>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Security Deposit:</strong> Auto-deducts 5% to 10% from every running bill.</li>
          <li><strong>Advance Recovery:</strong> Automatically reconciles mobilization advance payments.</li>
          <li><strong>Tax & VAT compliance:</strong> Deducts tax at source (AIT) based on latest NBR rules.</li>
        </ul>
      </div>
    `
  },
  {
    id: 'project-site-progress-tracking',
    category: 'construction',
    question: 'How do we track daily project construction progress?',
    updated: 'Updated on Feb 02, 2026',
    summary: 'Mobile site diaries, real-time Gantt charts, and visual progress tracking.',
    answerHtml: `
      <div class="space-y-6 text-xs md:text-sm text-slate-600 leading-relaxed">
        <p>Site engineers can submit Daily Progress Reports (DPR) directly from their mobile phones. By uploading photographs and entering completed quantities (e.g., cubic feet of concrete cast), the system automatically updates project Gantt charts and progress percentage charts, giving the head office complete real-time visibility.</p>
        
        <div class="p-4 bg-blue-50 border border-blue-100 rounded-xl mt-4">
          <h5 class="font-bold text-blue-950 mb-1">📊 Real-Time Progress:</h5>
          <p class="text-xs text-blue-900 leading-relaxed">Track building progress visually on a column-by-column or slab-by-slab status map, ensuring delays are identified early and corrected.</p>
        </div>
      </div>
    `
  },

  // Pricing
  {
    id: 'software-pricing-plans',
    category: 'pricing',
    question: 'What is the software pricing model?',
    updated: 'Updated on Feb 05, 2026',
    summary: 'Flexible SaaS subscription and one-time licensing based on project volume.',
    answerHtml: `
      <div class="space-y-6 text-xs md:text-sm text-slate-600 leading-relaxed">
        <p>Unova Estate offers flexible pricing packages depending on your company's project volume, active units, and user count. We provide two primary licensing models:</p>
        
        <h4 class="font-extrabold text-slate-800 text-sm md:text-base mt-4">Licensing Models:</h4>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Cloud subscription (SaaS):</strong> An annual subscription model with cloud hosting and automatic updates included—ideal for developers wanting to start quickly.</li>
          <li><strong>On-Premise Lifetime License:</strong> A one-time software license fee with data hosted locally on your company's dedicated servers—preferred by large developer groups.</li>
        </ul>
      </div>
    `
  },
  {
    id: 'data-hosting-cloud-server',
    category: 'pricing',
    question: 'Where will our data be hosted?',
    updated: 'Updated on Feb 08, 2026',
    summary: 'Secure AWS and Google Cloud servers, with optional on-premise local setup.',
    answerHtml: `
      <div class="space-y-6 text-xs md:text-sm text-slate-600 leading-relaxed">
        <p>By default, our cloud subscription is hosted on secure, high-availability Amazon Web Services (AWS) and Google Cloud servers, ensuring 99.99% uptime. However, if your company policy demands local hosting, we can deploy the entire database on your own dedicated on-premise servers.</p>
        
        <div class="p-4 bg-amber-50 border border-amber-100 rounded-xl mt-4">
          <h5 class="font-bold text-amber-950 mb-1">💻 Cloud Redundancy:</h5>
          <p class="text-xs text-amber-900 leading-relaxed">Our cloud architecture utilizes local CDN edge caches in Dhaka, ensuring that pages load instantly from any internet connection in Bangladesh.</p>
        </div>
      </div>
    `
  },

  // Security
  {
    id: 'data-security-encryption',
    category: 'security',
    question: 'How secure is our customer and financial data?',
    updated: 'Updated on Feb 10, 2026',
    summary: 'Bank-grade encryption, two-factor authentication, and role-based permissions.',
    answerHtml: `
      <div class="space-y-6 text-xs md:text-sm text-slate-600 leading-relaxed">
        <p>Unova Estate utilizes bank-grade SSL data encryption, two-factor authentication (2FA), and strict role-based access permissions. This ensures that database entries are encrypted and sensitive financial data or client directories cannot be accessed or downloaded by unauthorized employees.</p>
        
        <h4 class="font-extrabold text-slate-800 text-sm md:text-base mt-4">Security Features:</h4>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Encrypted Columns:</strong> Critical fields like customer phone numbers and financial balances are stored in encrypted form.</li>
          <li><strong>IP Whitelisting:</strong> Access to the ERP can be restricted to official office IP addresses only.</li>
          <li><strong>Audit Trail:</strong> Every single record insertion, modification, or data export is logged with timestamp and user ID.</li>
        </ul>
      </div>
    `
  },
  {
    id: 'database-backup-policy',
    category: 'security',
    question: 'What is the data backup policy?',
    updated: 'Updated on Feb 12, 2026',
    summary: 'Automated daily database backups replicated across multiple geographical locations.',
    answerHtml: `
      <div class="space-y-6 text-xs md:text-sm text-slate-600 leading-relaxed">
        <p>We perform automated daily database backups. Backup files are encrypted and replicated across three geographically redundant cloud locations, ensuring that your data remains safe and recoverable even in the event of major hardware failures.</p>
        
        <div class="p-4 bg-rose-50 border border-rose-100 rounded-xl mt-4">
          <h5 class="font-bold text-rose-950 mb-1">🔐 Data Recovery Guarantee:</h5>
          <p class="text-xs text-rose-900 leading-relaxed">Our disaster recovery protocols allow us to restore your complete database within minutes in the event of an accidental delete or system error.</p>
        </div>
      </div>
    `
  },
  {
    id: 'customer-technical-support',
    category: 'security',
    question: 'Will we have a dedicated technical support team?',
    updated: 'Updated on Feb 14, 2026',
    summary: 'Dedicated customer success managers and instant WhatsApp support.',
    answerHtml: `
      <div class="space-y-6 text-xs md:text-sm text-slate-600 leading-relaxed">
        <p>Yes, absolutely! We assign a dedicated Customer Success Manager to your company. We also set up a dedicated WhatsApp Support group for your team, providing instant technical assistance and online screen-share sessions (via Zoom/Google Meet) from 9:00 AM to 8:00 PM.</p>
        
        <h4 class="font-extrabold text-slate-800 text-sm md:text-base mt-4">Support Channels:</h4>
        <ul class="list-disc pl-5 space-y-2">
          <li><strong>Fast Response:</strong> Guaranteed response within 15 minutes on WhatsApp.</li>
          <li><strong>Online Meetings:</strong> Quick screen-share troubleshooting for complex issues.</li>
          <li><strong>On-Site Training:</strong> On-site training sessions for your team during onboarding.</li>
        </ul>
      </div>
    `
  }
];

export default function FaqClient() {
  const [aiOpen, setAiOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // States for navigation stage
  // 'grid' (Stage 1), 'category' (Stage 2 with inline single-open accordion)
  const [stage, setStage] = useState('grid');
  const [activeCategoryId, setActiveCategoryId] = useState('general');
  const [expandedFaqId, setExpandedFaqId] = useState(null);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleFaqAccordion = (id) => {
    setExpandedFaqId((prevId) => (prevId === id ? null : id));
  };

  // Filtered faqs based on active category (Stage 2) and search query (Stage 1)
  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = stage === 'grid' || faq.category === activeCategoryId;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answerHtml.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const activeCategory = faqCategories.find((cat) => cat.id === activeCategoryId) || faqCategories[0];

  // Transition Helpers
  const selectCategory = (catId) => {
    setActiveCategoryId(catId);
    setStage('category');
    setSearchQuery('');
    setExpandedFaqId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectFaq = (faqId, catId) => {
    setActiveCategoryId(catId);
    setExpandedFaqId(faqId);
    setStage('category');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goHome = () => {
    setStage('grid');
    setSearchQuery('');
    setExpandedFaqId(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

      {/* MAIN CONTAINER */}
      <main className="relative z-10 pt-28 pb-24 px-5 max-w-7xl mx-auto w-full flex-grow">

        {/* ========================================== */}
        {/* STAGE 1: CATEGORY GRID (INITIAL STATE) */}
        {/* ========================================== */}
        {stage === 'grid' && (
          <div className="space-y-12">

            {/* Header titles */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-slate-900">
                Frequently Asked <span className="bg-gradient-to-r from-[#6DC042] to-[#5da538] bg-clip-text text-transparent">Questions</span>
              </h1>
              <p className="text-slate-500 text-xs md:text-sm max-w-lg mx-auto leading-relaxed">
                Choose a category or search below to find answers about Unova Estate.
              </p>
            </div>

            {/* Search input */}
            <div className="max-w-xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search questions (e.g., lead, inventory, pricing, cloud)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-white border border-slate-200 focus:outline-none focus:border-[#6DC042] focus:ring-1 focus:ring-[#6DC042] transition-all text-xs shadow-sm"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors text-[10px] font-bold">
                    CLEAR
                  </button>
                )}
              </div>
            </div>

            {/* Grid of categories */}
            {searchQuery ? (
              /* If searching, show matching questions list directly */
              <div className="max-w-3xl mx-auto space-y-3">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-2 mb-2">
                  Search Results ({filteredFaqs.length})
                </div>
                {filteredFaqs.length > 0 ? (
                  filteredFaqs.map((faq) => (
                    <button
                      key={faq.id}
                      onClick={() => selectFaq(faq.id, faq.category)}
                      className="w-full bg-white border border-slate-200 hover:border-[#6DC042] hover:shadow-sm p-4 rounded-xl text-left font-bold text-slate-800 text-xs md:text-sm flex items-center justify-between transition-all group"
                    >
                      <span className="leading-snug pr-4">{faq.question}</span>
                      <span className="text-[#6DC042] opacity-0 group-hover:opacity-100 transition-opacity text-[11px] font-bold flex items-center gap-1">
                        View Details
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </button>
                  ))
                ) : (
                  <div className="text-center py-12 bg-white border border-slate-200 rounded-2xl">
                    <span className="text-3xl block mb-2">🔍</span>
                    <p className="text-slate-400 text-xs">No questions found. Please try a different keyword.</p>
                  </div>
                )}
              </div>
            ) : (
              /* Standard Category Cards Grid */
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {faqCategories.map((cat) => (
                  <div
                    key={cat.id}
                    onClick={() => selectCategory(cat.id)}
                    className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#6DC042]/30 transition-all duration-300 flex flex-col items-center text-center cursor-pointer group hover:scale-[1.01]"
                  >
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center text-3xl border mb-5 transition-transform duration-300 group-hover:scale-110 ${cat.bg}`}>
                      {cat.icon}
                    </div>
                    <h3 className="text-sm md:text-base font-extrabold text-slate-900 mb-2">{cat.label}</h3>
                    <p className="text-slate-500 text-[11px] leading-relaxed mb-6">{cat.desc}</p>
                    <button className="text-[#6DC042] text-[11px] font-bold tracking-wider uppercase group-hover:underline flex items-center gap-1">
                      Explore Topics
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ========================================== */}
        {/* STAGES 2 & 3: TWO-COLUMN LAYOUT */}
        {/* ========================================== */}
        {stage !== 'grid' && (
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            
            {/* LEFT SIDEBAR NAVIGATION */}
            <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm">
              <div className="p-4 border-b border-slate-100 bg-slate-50 flex items-center justify-between">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Categories</span>
                <button onClick={goHome} className="text-xs text-indigo-600 hover:text-indigo-500 font-bold">
                  All FAQs
                </button>
              </div>
              
              <div className="divide-y divide-slate-100">
                {faqCategories.map((cat) => {
                  const isCatActive = activeCategoryId === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => selectCategory(cat.id)}
                      className={`w-full flex items-center justify-between px-5 py-4 text-xs font-bold text-left transition-colors ${
                        isCatActive 
                          ? 'bg-[#6DC042]/5 text-[#6DC042] font-black' 
                          : 'text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="text-lg">{cat.icon}</span>
                        <span>{cat.label}</span>
                      </span>
                      <span>
                        <svg className={`w-3.5 h-3.5 ${isCatActive ? 'text-[#6DC042]' : 'text-slate-300'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* RIGHT CONTENT WORKSPACE (INLINE ACCORDION) */}
            <div className="lg:col-span-8 space-y-6">
              
              <div className="bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-sm space-y-6">
                <div className="border-b border-slate-100 pb-5">
                  <h2 className="text-2xl font-black text-slate-900 mb-2">{activeCategory.label}</h2>
                  <p className="text-slate-500 text-xs leading-relaxed">{activeCategory.desc}</p>
                </div>
                
                <div className="space-y-4 pt-2">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest pl-1 mb-2">Questions</h4>
                  {filteredFaqs.map((faq) => {
                    const isOpen = expandedFaqId === faq.id;
                    return (
                      <div
                        key={faq.id}
                        className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
                          isOpen
                            ? 'border-[#6DC042] bg-[#6DC042]/[0.02] shadow-sm'
                            : 'border-slate-200/80 hover:border-slate-300 bg-white'
                        }`}
                      >
                        <button
                          onClick={() => toggleFaqAccordion(faq.id)}
                          className="w-full text-left py-4 px-5 flex items-center justify-between font-extrabold text-slate-900 text-xs md:text-sm transition-colors"
                        >
                          <span className="leading-snug pr-4">{faq.question}</span>
                          <span className={`w-6 h-6 rounded-full flex items-center justify-center bg-slate-100 flex-shrink-0 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#6DC042] text-white' : ''}`}>
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                            </svg>
                          </span>
                        </button>

                        {/* Collapsible Answer */}
                        {isOpen && (
                          <div className="px-5 pb-5 pt-1 border-t border-slate-100/80">
                            <div className="text-slate-400 text-[10px] mb-3">{faq.updated}</div>
                            <div
                              className="prose prose-slate max-w-none text-xs md:text-sm text-slate-600 leading-relaxed"
                              dangerouslySetInnerHTML={{ __html: faq.answerHtml }}
                            />
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* ASK AI & SUPPORT CALLOUT */}
        <div className="mt-20 bg-indigo-50/50 border border-indigo-100 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm">
          <div className="space-y-3 text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-[10px] font-bold text-indigo-700">
              💬 Instant Support
            </div>
            <h3 className="text-xl md:text-2xl font-black text-slate-900">Still have questions?</h3>
            <p className="text-slate-500 text-xs md:text-sm leading-relaxed max-w-xl">
              If you cannot find your answer here, ask our AI assistant or chat with our support agents directly.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            <button
              onClick={() => setAiOpen(true)}
              className="px-6 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all text-xs shadow-md flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 text-indigo-200" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M14 2C14 2 15.2 8.8 18.5 11.5C21.8 14.2 26 14 26 14C26 14 21.8 13.8 18.5 16.5C15.2 19.2 14 26 14 26C14 26 12.8 19.2 9.5 11.5C12.8 8.8 14 2 14 2Z"
                  fill="currentColor"
                />
              </svg>
              Ask Unova AI
            </button>
            <a
              href="https://wa.me/8801766774016"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 bg-[#6DC042] hover:bg-[#5da538] text-white font-bold rounded-xl transition-all text-xs shadow-md flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Agent
            </a>
          </div>
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
