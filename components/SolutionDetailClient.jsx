'use client';

import { useState } from 'react';
import Link from 'next/link';
import AskAI from './AskAI';
import Footer from './Footer';

const Icon = ({ d, className = 'w-6 h-6' }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d={d} />
  </svg>
);

const CheckIcon = ({ cls = 'w-4 h-4 text-[#6DC042]' }) => (
  <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
  </svg>
);

export default function SolutionDetailClient({ solution, relatedSolutions }) {
  const [aiOpen, setAiOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  // Render the header segment based on layoutStyle (matching light-themed homepage style)
  const renderHero = () => {
    switch (solution.layoutStyle) {
      case 'modern-hero':
        return (
          <div className="relative overflow-hidden bg-slate-50/20 text-slate-900 pt-36 pb-20 px-5 border-b border-slate-200/50">
            {/* Dotted Grid Background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            {/* Soft background ambient glow circles */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#6DC042]/10 to-emerald-500/5 blur-[120px] rounded-full pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-bold text-indigo-600 backdrop-blur-sm shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                  Real Estate Enterprise Solution
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-slate-900">
                  {solution.title}
                </h1>
                <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
                  {solution.metaDescription}
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Link href="/demo" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-full transition-all text-xs shadow-md">
                    Book a Free Consultant
                  </Link>
                  <a href="https://wa.me/8801766774016" target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-full border border-slate-200 transition-all text-xs shadow-sm">
                    💬 WhatsApp Us
                  </a>
                </div>
              </div>
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white p-1 backdrop-blur-xl">
                  <img src={solution.heroImage} alt={solution.title} className="w-full h-80 object-cover rounded-2xl" />
                </div>
                {/* Stats badge */}
                <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-extrabold text-xl">
                    {solution.statsValue}
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{solution.statsLabel}</p>
                    <p className="text-xs font-black text-slate-800">Proven ROI Lift</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'split-feature':
        return (
          <div className="relative bg-slate-50/20 text-slate-900 pt-36 pb-24 px-5 border-b border-slate-200/50 overflow-hidden">
            {/* Dotted Grid Background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            {/* Soft background ambient glow circles */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#6DC042]/10 to-emerald-500/5 blur-[120px] rounded-full pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
              <div className="space-y-6">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6DC042]/10 border border-[#6DC042]/20 text-xs font-semibold text-[#6DC042] backdrop-blur-sm shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6DC042] animate-pulse" />
                  Specialized Industry Module
                </span>
                <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-slate-900">
                  {solution.title}
                </h1>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {solution.metaDescription}
                </p>
                
                {/* Visual horizontal metrics bar */}
                <div className="border-l-4 border-[#6DC042] pl-4 py-1.5 my-4">
                  <p className="text-2xl font-black text-slate-900">{solution.statsValue} Optimization</p>
                  <p className="text-xs text-slate-450">{solution.statsLabel}</p>
                </div>

                <div className="flex gap-4 pt-2">
                  <Link href="/demo" className="px-6 py-3 bg-[#6DC042] hover:bg-[#5da538] text-white font-bold rounded-full transition-all text-xs shadow-md">
                    Request Live Demo
                  </Link>
                </div>
              </div>
              <div className="relative z-10">
                <img src={solution.heroImage} alt={solution.title} className="w-full h-96 object-cover rounded-3xl shadow-lg border border-slate-200" />
              </div>
            </div>
          </div>
        );

      case 'dashboard-preview':
        return (
          <div className="relative bg-slate-50/20 text-slate-900 pt-36 pb-28 px-5 border-b border-slate-200/50 overflow-hidden">
            {/* Dotted Grid Background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            {/* Soft background ambient glow circles */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#6DC042]/10 to-emerald-500/5 blur-[120px] rounded-full pointer-events-none z-0" />

            <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-100 text-xs font-bold text-amber-600 backdrop-blur-sm shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                Dashboard & Automation
              </span>
              <h1 className="text-3xl md:text-5xl font-black tracking-tight leading-tight max-w-3xl mx-auto text-slate-900">
                {solution.title}
              </h1>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xl mx-auto">
                {solution.metaDescription}
              </p>
              
              {/* Dashboard mockup visual */}
              <div className="pt-8">
                <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white p-2 shadow-xl">
                  <div className="h-6 w-full bg-slate-50 flex items-center gap-1.5 px-4 border-b border-slate-200">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-[10px] text-slate-400 ml-4 font-mono font-semibold">unova-estate-dashboard.app</span>
                  </div>
                  <img src={solution.heroImage} alt={solution.title} className="w-full h-72 object-cover rounded-xl" />
                </div>
              </div>
            </div>
          </div>
        );

      case 'case-study':
        return (
          <div className="relative bg-slate-50/20 text-slate-900 pt-36 pb-20 px-5 border-b border-slate-200/50 overflow-hidden">
            {/* Dotted Grid Background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            {/* Soft background ambient glow circles */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#6DC042]/10 to-emerald-500/5 blur-[120px] rounded-full pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
              <div className="lg:col-span-5 space-y-6 order-2 lg:order-1 relative z-10">
                <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200">
                  <img src={solution.heroImage} alt={solution.title} className="w-full h-80 object-cover" />
                </div>
              </div>
              <div className="lg:col-span-7 space-y-6 order-1 lg:order-2">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-xs font-bold text-purple-600 backdrop-blur-sm shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                  Case Study & Metrics
                </span>
                <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-slate-900">
                  {solution.title}
                </h1>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {solution.metaDescription}
                </p>

                {/* Highlight metrics card */}
                <div className="grid grid-cols-2 gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <div>
                    <p className="text-3xl font-black text-indigo-600">{solution.statsValue}</p>
                    <p className="text-[10px] text-slate-450 font-bold uppercase tracking-wider">{solution.statsLabel}</p>
                  </div>
                  <div>
                    <p className="text-3xl font-black text-emerald-600">100%</p>
                    <p className="text-[10px] text-slate-450 font-bold uppercase tracking-wider">Cloud Data Security</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'step-workflow':
        return (
          <div className="relative bg-slate-50/20 text-slate-900 pt-36 pb-24 px-5 border-b border-slate-200/50 overflow-hidden">
            {/* Dotted Grid Background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-40 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            {/* Soft background ambient glow circles */}
            <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#6DC042]/10 to-emerald-500/5 blur-[120px] rounded-full pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-bold text-emerald-600 backdrop-blur-sm shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Workflow Optimization
                </span>
                <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-tight text-slate-900">
                  {solution.title}
                </h1>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {solution.metaDescription}
                </p>
                <div className="flex gap-4 pt-2">
                  <Link href="/demo" className="px-6 py-3 bg-[#6DC042] hover:bg-[#5da538] text-white font-bold rounded-full transition-all text-xs shadow-md">
                    Schedule Onboarding Tour
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5 relative z-10">
                <div className="relative rounded-3xl overflow-hidden shadow-lg border border-slate-200 bg-white p-2">
                  <img src={solution.heroImage} alt={solution.title} className="w-full h-80 object-cover rounded-2xl" />
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-600/10 selection:text-slate-900 overflow-x-hidden relative flex flex-col justify-between">
      
      {/* Schema LD Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Product',
            'name': solution.title,
            'image': solution.heroImage,
            'description': solution.metaDescription,
            'brand': {
              '@type': 'Brand',
              'name': 'Unova Estate'
            },
            'offers': {
              '@type': 'Offer',
              'price': 'Contact Sales',
              'priceCurrency': 'BDT'
            }
          })
        }}
      />

      {/* NAVIGATION */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/50 bg-white/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img src="/unova-real-estate-software-logo.png" alt="Unova Estate Real Estate CRM & ERP Software Logo" className="h-9 w-auto" loading="eager" />
          </Link>

          <div className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-600">
            <Link href="/#features" className="hover:text-slate-950 transition-colors">Features</Link>
            <Link href="/solutions" className="hover:text-slate-950 transition-colors">Solutions</Link>
            <Link href="/resources" className="hover:text-slate-950 transition-colors">Resources</Link>
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

      {/* HERO SECTION */}
      {renderHero()}

      {/* DETAILED CONTENT SECTION */}
      <main className="max-w-7xl mx-auto px-5 py-16 grid lg:grid-cols-12 gap-12 relative z-10 flex-grow">
        
        {/* Left Side: Article Body & Core Info */}
        <div className="lg:col-span-8 space-y-10 bg-white p-6 md:p-10 rounded-3xl border border-slate-200/85 shadow-sm">
          
          {/* Key Capabilities Grid */}
          <div className="space-y-6">
            <h2 className="text-xl font-black text-slate-900 tracking-tight">Key Capabilities & Outcomes</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { icon: solution.benefit1_icon, title: solution.benefit1_title, desc: solution.benefit1_desc },
                { icon: solution.benefit2_icon, title: solution.benefit2_title, desc: solution.benefit2_desc },
                { icon: solution.benefit3_icon, title: solution.benefit3_title, desc: solution.benefit3_desc }
              ].map((b, bi) => (
                <div key={bi} className="bg-slate-50/50 p-4 rounded-xl border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                  <span className="text-3xl block mb-2">{b.icon}</span>
                  <h3 className="text-xs font-bold text-slate-900 mb-1">{b.title}</h3>
                  <p className="text-slate-500 text-[11px] leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Parsed Markdown Content Body (Organized & Styled) */}
          <article className="prose prose-slate max-w-none text-slate-600 text-xs md:text-sm leading-relaxed space-y-6 border-t border-slate-200 pt-8">
            <div dangerouslySetInnerHTML={{ __html: solution.contentHtml }} />
          </article>

          {/* Technical Specs Checklist */}
          <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200/80 space-y-6">
            <h3 className="text-sm font-black text-slate-900">System Integration Specs</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                solution.feature1,
                solution.feature2,
                solution.feature3,
                solution.feature4
              ].map((f, fi) => (
                <div key={fi} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-slate-200/60 shadow-sm">
                  <CheckIcon cls="w-4 h-4 text-[#6DC042] flex-shrink-0" />
                  <span className="text-xs font-semibold text-slate-700">{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Dynamic Accordion FAQs */}
          <div className="space-y-6 border-t border-slate-200 pt-8">
            <h2 className="text-xl font-black text-slate-900 tracking-tight">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {[
                { q: solution.faq1_q, a: solution.faq1_a },
                { q: solution.faq2_q, a: solution.faq2_a },
                { q: solution.faq3_q, a: solution.faq3_a }
              ].map((faq, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                  <button
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full px-5 py-3.5 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-xs font-bold text-slate-800">{faq.q}</span>
                    <span className="text-slate-400 font-bold text-xs">{activeFaq === index ? '−' : '+'}</span>
                  </button>
                  {activeFaq === index && (
                    <div className="px-5 pb-3.5 text-xs text-slate-500 leading-relaxed border-t border-slate-100 pt-2.5">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right Side: Sidebar */}
        <aside className="lg:col-span-4 space-y-8 sticky top-24 self-start">
          
          {/* Quick Call to Action card */}
          <div className="bg-indigo-900 text-white p-6 rounded-3xl border border-indigo-950 shadow-lg space-y-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 to-indigo-900 opacity-90" />
            <div className="absolute top-[-50%] left-[-20%] w-[300px] h-[300px] bg-violet-600/10 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10 space-y-4">
              <span className="text-3xl block">🚀</span>
              <h3 className="text-base font-black leading-tight">Ready to see {solution.title} in action?</h3>
              <p className="text-indigo-200 text-xs leading-relaxed">
                Connect with our local solutions architects for a customized implementation walkthrough.
              </p>
              <div className="space-y-2 pt-2">
                <Link href="/demo" className="block w-full py-2.5 bg-white text-indigo-900 font-bold text-xs rounded-xl shadow-md hover:bg-slate-50 transition-all text-center">
                  Book a Free Demo
                </Link>
                <a href="https://wa.me/8801766774016" target="_blank" rel="noopener noreferrer" className="block w-full py-2.5 bg-indigo-800 text-white font-bold text-xs rounded-xl border border-indigo-700 hover:bg-indigo-800/80 transition-all text-center">
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Related Solutions list */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-xs font-bold text-slate-900 border-b border-slate-100 pb-2">Other Solutions</h3>
            <div className="space-y-4">
              {relatedSolutions.map((rel, ri) => (
                <div key={ri} className="group/item flex gap-3.5">
                  <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-slate-100">
                    <img src={rel.heroImage} alt={rel.title} className="w-full h-full object-cover transition-transform duration-300 group-hover/item:scale-105" />
                  </div>
                  <div>
                    <Link href={`/solutions/${rel.slug}`} className="text-xs font-bold text-slate-800 hover:text-indigo-600 transition-colors line-clamp-1">
                      {rel.title}
                    </Link>
                    <p className="text-[10px] text-slate-400 mt-0.5 line-clamp-2 leading-relaxed">{rel.metaDescription}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </aside>

      </main>

      <Footer />

      {/* Ask AI chat box */}
      <AskAI open={aiOpen} onOpenChange={setAiOpen} />

    </div>
  );
}