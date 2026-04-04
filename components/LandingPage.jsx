'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import DemoSection from './DemoSection';
import AskAI from './AskAI';

/* ─── Icon helpers ──────────────────────────────────────────── */
const Icon = ({ d, className = 'w-6 h-6' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d={d} />
  </svg>
);

const CheckIcon = ({ cls = 'w-5 h-5 text-indigo-400 flex-shrink-0' }) => (
  <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
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
    color: 'rose',
    icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
    title: 'HR & Payroll',
    desc: 'End-to-end HR: employee records, attendance, leave management, monthly payroll, provident fund, and full & final settlements — all automated.',
    points: ['Attendance with clock-in/out', 'Leave applications & approvals', 'Automated monthly payroll', 'Provident fund & loans'],
  },
  {
    color: 'violet',
    icon: 'M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z',
    title: 'Multi-Channel Marketing',
    desc: 'Run Email, SMS, and WhatsApp campaigns to your lead database. Build public enquiry forms, track opens and clicks, and automate follow-up sequences.',
    points: ['Email, SMS & WhatsApp campaigns', 'Public lead capture forms', 'Open & click tracking', 'Automated drip sequences'],
  },
  {
    color: 'cyan',
    icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
    title: 'Accounting & Finance',
    desc: 'Journal vouchers, chart of accounts, bank management, supplier purchases, expense tracking, and cashflow statements — fully integrated with your sales.',
    points: ['Double-entry journal vouchers', 'Chart of accounts', 'Supplier & purchase management', 'Expense approvals & cashflow'],
  },
];

const steps = [
  { n: '01', title: 'Capture the Lead', body: "A prospect fills in your public enquiry form, or your sales team creates a lead manually. It's instantly assigned, categorised, and logged." },
  { n: '02', title: 'Work the Pipeline', body: 'Log every call, meeting, and site visit. Attach the unit of interest. Send a WhatsApp follow-up in one click. The system tracks everything.' },
  { n: '03', title: 'Close the Deal', body: 'Convert the lead to a sales order. Attach the unit, set the payment schedule, get manager approval, and issue the invoice.' },
  { n: '04', title: 'Collect & Commission', body: 'Record payments as they arrive. Commissions are calculated automatically and flow into the next payroll run.' },
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

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.estate.unova.app';

export default function LandingPage() {
  const [openFaq, setOpenFaq]           = useState(null);
  const [activeModule, setActiveModule] = useState(0);
  const [billingYearly, setBillingYearly] = useState(false);
  const [demoFormType, setDemoFormType] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [aiOpen, setAiOpen]             = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const goToDemo = (type) => {
    setDemoFormType(type);
    setTimeout(() => scrollTo('demo'), 50);
  };

  return (
    <div className="min-h-screen bg-[#080810] text-white font-sans selection:bg-indigo-500/30 selection:text-white overflow-x-hidden">

      {/* Global ambient glow */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-20%] left-[10%] w-[700px] h-[700px] bg-indigo-700/10 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-violet-700/10 rounded-full blur-[120px]" />
      </div>

      {/* ════ NAVIGATION ════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#080810]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/25">
              <svg className="w-[18px] h-[18px] text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M3 9.75L12 3l9 6.75V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.75z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 21V12h6v9" />
              </svg>
            </div>
            <span className="text-lg font-extrabold tracking-tight">Unova<span className="text-indigo-400"> Estate</span></span>
          </div>

          <div className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-400">
            {['features', 'how-it-works', 'pricing'].map(id => (
              <button key={id} onClick={() => scrollTo(id)}
                className="hover:text-white transition-colors capitalize">
                {id === 'how-it-works' ? 'How It Works' : id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
            <button onClick={() => goToDemo(null)} className="hover:text-white transition-colors">Contact</button>
            <AskAI onOpenChange={setAiOpen} />
          </div>

          <div className="flex items-center gap-3">
            <Link href={`${APP_URL}/login`} className="text-sm font-medium text-gray-400 hover:text-white transition-colors hidden sm:block">
              Sign in
            </Link>
            <button onClick={() => goToDemo('demo')}
              className="text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-full transition-all shadow-[0_0_18px_rgba(99,102,241,0.35)] hover:shadow-[0_0_26px_rgba(99,102,241,0.55)]">
              Request a Demo
            </button>
          </div>
        </div>
      </nav>

      {/* ════ HERO ════ */}
      <section className="relative pt-36 pb-24 px-5 z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs font-semibold text-indigo-300 mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_6px_rgba(129,140,248,1)] animate-pulse" />
            Bangladesh&apos;s First AI-Powered Real Estate ERP
          </div>

          <h1 className="text-5xl md:text-[4.5rem] font-black tracking-tight leading-[1.05] mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400">
              Are you ready to increase<br />your real estate sales by 20%?
            </span>
          </h1>

          <div className="inline-flex items-center gap-4 mx-auto mb-8 px-6 py-4 rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.08] backdrop-blur-sm shadow-[0_0_30px_rgba(34,197,94,0.08)]">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0 text-xl shadow-[0_0_14px_rgba(34,197,94,0.25)]">
              🛡️
            </div>
            <div className="text-left">
              <p className="text-sm font-black text-emerald-300 leading-tight">Not happy with your results in 6 months?</p>
              <p className="text-xs text-emerald-500/80 mt-0.5 leading-snug">We&apos;ll refund every penny — no questions, no conditions.</p>
            </div>
          </div>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Our software increases sales by boosting employee performance, generating and managing leads, supporting smart decisions, and delighting customers.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button onClick={() => goToDemo('consultant')}
              className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full shadow-[0_0_24px_rgba(99,102,241,0.45)] hover:shadow-[0_0_36px_rgba(99,102,241,0.65)] transition-all text-center">
              Book a Free Consultant
            </button>
            <button onClick={() => goToDemo('demo')}
              className="w-full sm:w-auto px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2">
              Request a Demo
              <Icon d="M14 5l7 7m0 0l-7 7m7-7H3" className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* ════ FEATURES ════ */}
      <section id="features" className="relative z-10 py-24 px-5 border-t border-white/5 bg-[#0a0a14]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">Six modules. One login.</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">Everything in one platform.</h2>
            <p className="text-gray-400 max-w-xl mx-auto">No more switching between a CRM, an HR tool, a WhatsApp panel, and a spreadsheet. Unova Estate replaces all of them.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {modules.map((m, i) => (
              <button key={i} onClick={() => setActiveModule(i)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
                  activeModule === i
                    ? 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30 ring-1 ring-indigo-500/30'
                    : 'bg-white/5 text-gray-500 border-white/10 hover:border-white/20 hover:text-gray-300'
                }`}>
                {m.title}
              </button>
            ))}
          </div>

          {modules.map((m, i) => {
            if (i !== activeModule) return null;
            return (
              <div key={i} className="grid md:grid-cols-2 gap-8 bg-white/[0.03] border border-indigo-500/20 rounded-3xl p-8 md:p-12 ring-1 ring-indigo-500/30">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/15 text-indigo-400 flex items-center justify-center mb-6">
                    <Icon d={m.icon} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-4">{m.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-8">{m.desc}</p>
                  <Link href={`${APP_URL}/company-register`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white bg-gradient-to-r from-indigo-600 to-indigo-500 shadow-lg transition-all hover:opacity-90">
                    Get Started Free
                    <Icon d="M14 5l7 7m0 0l-7 7m7-7H3" className="w-4 h-4" />
                  </Link>
                </div>
                <div className="flex flex-col justify-center gap-4">
                  {m.points.map((pt, pi) => (
                    <div key={pi} className="flex items-center gap-4 p-4 rounded-xl bg-indigo-500/15 border border-white/5">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 text-indigo-400">
                        <CheckIcon cls="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-gray-200">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ════ HOW IT WORKS ════ */}
      <section id="how-it-works" className="relative z-10 py-24 px-5 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">The Complete Workflow of the Real Estate Business</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
              From enquiry to commission — in one system.
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">Unova Estate connects every stage of your property business so nothing falls through the gaps.</p>
          </div>

          <div className="relative">
            <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-violet-500/30 to-transparent hidden sm:block" />
            <div className="space-y-10">
              {steps.map((s, i) => (
                <div key={i} className={`relative flex gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                    <div className={`bg-white/[0.04] border border-white/10 rounded-2xl p-6 hover:border-indigo-500/30 transition-colors ${i % 2 !== 0 ? 'md:text-left' : ''}`}>
                      <span className="text-xs font-black text-indigo-400 tracking-widest">{s.n}</span>
                      <h3 className="text-lg font-black text-white mt-1 mb-2">{s.title}</h3>
                      <p className="text-sm text-gray-400 leading-relaxed">{s.body}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-indigo-600 border-2 border-[#080810] z-10 items-center justify-center text-xs font-black text-white shadow-[0_0_14px_rgba(99,102,241,0.6)]">
                    {i + 1}
                  </div>
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════ ROLES ════ */}
      <section className="relative z-10 py-24 px-5 border-t border-white/5 bg-[#0a0a14]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">Every team member sees only what they need.</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">Role-Based Access System</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Give each person access to exactly what they need. Nothing more, nothing less. Fully configured by admin.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { role: 'Managing Director', icon: '👔', gets: ['Real-time dashboard KPIs', 'Full pipeline visibility', 'Finance & payroll overview', 'Approval queue at a glance'] },
              { role: 'Sales Manager', icon: '📈', gets: ['Team lead assignments', 'Pipeline stage reports', 'Commission tracking', 'Campaign results'] },
              { role: 'Sales Executive', icon: '🤝', gets: ['Personal lead pipeline', 'Follow-up reminders', 'Property availability', 'Own commission history'] },
              { role: 'HR & Finance', icon: '🧾', gets: ['Attendance & leave approvals', 'One-click payroll processing', 'Expense approvals', 'PF & loan management'] },
            ].map((r, i) => (
              <div key={i} className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 hover:border-indigo-500/25 transition-colors">
                <div className="text-3xl mb-4">{r.icon}</div>
                <h3 className="text-base font-black text-white mb-4">{r.role}</h3>
                <ul className="space-y-2">
                  {r.gets.map((g, gi) => (
                    <li key={gi} className="flex items-start gap-2 text-xs text-gray-400">
                      <CheckIcon cls="w-3.5 h-3.5 text-indigo-400 flex-shrink-0 mt-0.5" />
                      {g}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ TESTIMONIALS ════ */}
      <section className="relative z-10 py-24 px-5 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">What our customers say</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">Real results, real businesses.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-white/[0.04] border border-white/10 rounded-2xl p-7 flex flex-col hover:border-indigo-500/25 transition-colors">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, si) => (
                    <svg key={si} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-gray-300 leading-relaxed flex-1 mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ PRICING ════ */}
      <section id="pricing" className="relative z-10 py-24 px-5 border-t border-white/5 bg-[#0a0a14]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">Pricing</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">6 Month Refund Guarantee</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Use Unova Estate for 6 months. If your business sees zero improvement — not happy with your results? We&apos;ll refund every penny — no questions, no conditions.</p>
          </div>

          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-semibold transition-colors ${!billingYearly ? 'text-white' : 'text-gray-500'}`}>Monthly</span>
            <button onClick={() => setBillingYearly(v => !v)}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${billingYearly ? 'bg-indigo-600' : 'bg-white/15'}`}>
              <span className={`absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300 ${billingYearly ? 'translate-x-7' : 'translate-x-0'}`} />
            </button>
            <span className={`text-sm font-semibold transition-colors ${billingYearly ? 'text-white' : 'text-gray-500'}`}>
              Yearly
              <span className="ml-2 text-[10px] font-black bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">Save 20%</span>
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: '1 – 10 Employees',  monthly: 2000, highlight: false, badge: null },
              { name: '10 – 20 Employees', monthly: 3000, highlight: true,  badge: 'Most Popular' },
              { name: '20 – 40 Employees', monthly: 4000, highlight: false, badge: null },
            ].map((pkg, i) => {
              const monthlyPrice = billingYearly ? Math.round(pkg.monthly * 0.8) : pkg.monthly;
              const yearlyTotal  = Math.round(pkg.monthly * 0.8 * 12);
              return (
                <div key={i} className={`relative rounded-3xl p-8 flex flex-col border transition-all ${
                  pkg.highlight
                    ? 'bg-gradient-to-b from-indigo-900/30 to-[#0a0a14] border-indigo-500/50 shadow-[0_0_50px_rgba(99,102,241,0.15)] ring-1 ring-indigo-500/40 scale-[1.03]'
                    : 'bg-white/[0.03] border-white/10 hover:border-white/20'
                }`}>
                  {pkg.badge && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 text-[10px] font-black rounded-full uppercase tracking-widest shadow-lg">
                      {pkg.badge}
                    </div>
                  )}
                  <div className="mb-7">
                    <h3 className="text-lg font-black text-white mb-1">{pkg.name}</h3>
                    <div className="mt-4 flex items-end gap-2">
                      <p className="text-4xl font-black text-white">৳ {monthlyPrice.toLocaleString()}</p>
                      <p className="text-xs text-gray-500 mb-1.5">/month</p>
                    </div>
                    {billingYearly && (
                      <p className="text-xs text-emerald-400 mt-1">৳ {yearlyTotal.toLocaleString()} billed yearly</p>
                    )}
                  </div>
                  <ul className="space-y-3 flex-1 mb-8">
                    {['CRM & Lead Pipeline', 'Property & Project Management', 'Sales Orders & Commissions', 'HR & Payroll', 'Multi-Channel Marketing', 'Accounting & Finance'].map((f, fi) => (
                      <li key={fi} className="flex items-start gap-3 text-sm text-gray-300">
                        <CheckIcon cls="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => goToDemo('demo')}
                    className={`w-full py-3.5 rounded-xl font-bold text-sm text-center transition-all ${
                      pkg.highlight
                        ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_20px_rgba(99,102,241,0.35)]'
                        : 'bg-white/[0.08] hover:bg-white/15 text-white border border-white/10'
                    }`}>
                    Request a Demo
                  </button>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <div className="inline-block mt-2 px-6 py-3 rounded-2xl border border-indigo-500/30 bg-indigo-500/5">
              <p className="text-sm">
                <span className="text-white font-bold">More than 40 employees?</span>{' '}
                <button onClick={() => goToDemo('demo')} className="text-indigo-400 hover:text-indigo-300 font-semibold transition-colors">
                  Contact us for a custom plan →
                </button>
              </p>
            </div>
            <p className="text-xs text-white mt-4">* One-time onboarding fee of ৳75,000 — includes initial setup, full configuration &amp; team training.</p>
          </div>
        </div>
      </section>

      {/* ════ FAQ ════ */}
      <section className="relative z-10 py-24 px-5 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-3">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">Common questions.</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white/[0.03] border border-white/8 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left">
                  <span className="text-sm font-bold text-white pr-4">{faq.q}</span>
                  <svg className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ FINAL CTA ════ */}
      <section className="relative z-10 py-24 px-5 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center relative">
          <div className="absolute inset-0 bg-indigo-600/10 blur-3xl rounded-full pointer-events-none" />
          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-4">Our Promise</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-6">
              We Don&apos;t Just Sell Software.<br />We Guarantee Results.
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-6 text-lg">
              Most software companies disappear after the sale. We stay. From onboarding to daily use, our team is with you every step of the way.
            </p>
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl border border-emerald-500/25 bg-emerald-500/[0.08] max-w-lg mx-auto mb-10">
              <span className="text-2xl flex-shrink-0">🛡️</span>
              <p className="text-sm text-gray-300 text-left leading-relaxed">
                Use it for 6 months — if you don&apos;t see real results, we&apos;ll refund every penny. <strong className="text-emerald-400">No questions. No conditions.</strong>
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={() => goToDemo('consultant')}
                className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full shadow-[0_0_24px_rgba(99,102,241,0.45)] hover:shadow-[0_0_36px_rgba(99,102,241,0.65)] transition-all text-center">
                Book a Free Consultant
              </button>
              <button onClick={() => goToDemo('demo')}
                className="w-full sm:w-auto px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2">
                Request a Demo
                <Icon d="M14 5l7 7m0 0l-7 7m7-7H3" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <DemoSection formType={demoFormType} />

      {/* ════ FOOTER ════ */}
      <footer className="relative z-10 border-t border-white/5 bg-[#050508] pt-16 pb-10 px-5 text-sm text-gray-500">
        <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M3 9.75L12 3l9 6.75V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.75z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M9 21V12h6v9" />
                </svg>
              </div>
              <span className="text-base font-extrabold text-white">Unova<span className="text-indigo-400"> Estate</span></span>
            </div>
            <p className="text-gray-500 leading-relaxed max-w-xs">The all-in-one business management platform built exclusively for property companies.</p>
            <a href="https://wa.me/8801711432284" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp: +880 1711 432 284
            </a>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">Product</h4>
            <ul className="space-y-2.5">
              <li><button onClick={() => scrollTo('features')} className="hover:text-white transition-colors">Features</button></li>
              <li><button onClick={() => scrollTo('how-it-works')} className="hover:text-white transition-colors">How It Works</button></li>
              <li><button onClick={() => scrollTo('pricing')} className="hover:text-white transition-colors">Pricing</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">Modules</h4>
            <ul className="space-y-2.5">
              {['CRM & Leads', 'Property Management', 'Sales & Commissions', 'HR & Payroll', 'Marketing', 'Accounting'].map(m => (
                <li key={m}><span className="cursor-default">{m}</span></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-xs uppercase tracking-widest">Company</h4>
            <ul className="space-y-2.5">
              <li><Link href={`${APP_URL}/login`} className="hover:text-white transition-colors">Sign In</Link></li>
              <li><Link href={`${APP_URL}/company-register`} className="hover:text-white transition-colors">Register Company</Link></li>
              <li>
                <a href="https://wa.me/8801711432284" target="_blank" rel="noopener noreferrer"
                  className="hover:text-white transition-colors">Contact Support</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© 2026 Unova Estate. All rights reserved.</p>
          <p>Powered by <span className="text-gray-500 font-semibold">Unova</span></p>
        </div>
      </footer>

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 right-8 z-50 w-11 h-11 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300 ${
          showScrollTop && !aiOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7" />
        </svg>
      </button>

    </div>
  );
}
