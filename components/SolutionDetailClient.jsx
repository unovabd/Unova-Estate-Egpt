'use client';

import { useState, useEffect } from 'react';
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
  const [activeSectionId, setActiveSectionId] = useState('');

  // Helper to create consistent slugs for TOC linking
  const createSlug = (str) => {
    if (!str) return '';
    return str
      .replace(/<[^>]+>/g, '')
      .replace(/&amp;/g, 'and')
      .replace(/&/g, 'and')
      .replace(/&[a-z0-9#]+;/gi, '')
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');
  };

  // Extract H2 headings dynamically for the TOC ("Jump to section :")
  const tocSections = [
    { id: 'capabilities-section', title: 'Key Capabilities' },
    { id: 'benchmarks-section', title: 'System Benchmarks' }
  ];

  const h2Matches = solution.contentHtml.match(/<h2[^>]*>(.*?)<\/h2>/g) || [];
  h2Matches.forEach((h2Tag) => {
    let title = h2Tag.replace(/<[^>]+>/g, '').trim();
    title = title
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");

    // Skip trailing CTA headings like "Schedule a Personalized..."
    if (title.toLowerCase().includes('schedule') || title.toLowerCase().includes('walkthrough') || title.toLowerCase().includes('demo')) {
      return;
    }

    const slug = createSlug(title);
    tocSections.push({ id: `section-${slug}`, title });
  });

  tocSections.push({ id: 'specs-section', title: 'System Specs' });
  tocSections.push({ id: 'faq-section', title: 'Frequently Asked Questions' });

  // Inject IDs into <h2> tags in the markdown HTML
  const processedContentHtml = solution.contentHtml.replace(/<h2([^>]*)>(.*?)<\/h2>/g, (match, attrs, text) => {
    const cleanText = text.replace(/<[^>]+>/g, '').trim();
    const slug = createSlug(cleanText);
    return `<h2 id="section-${slug}" ${attrs}>${text}</h2>`;
  });

  // Scroll handler for Jump to Section links
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90; // Offset for sticky navbar
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSectionId(id);
    }
  };

  // ScrollSpy to update active section link on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      for (let i = tocSections.length - 1; i >= 0; i--) {
        const sec = tocSections[i];
        const el = document.getElementById(sec.id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSectionId(sec.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tocSections]);

  // Render hero header segment (consistent modern-hero design for all solution pages)
  const renderHero = () => {
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
              <img src={solution.heroImage || 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80'} alt={solution.title} className="w-full h-80 object-cover rounded-2xl" />
            </div>
            {/* Stats badge */}
            <div className="absolute -bottom-6 -left-6 bg-white text-slate-900 p-5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-extrabold text-xl">
                {solution.statsValue || '45%'}
              </div>
              <div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{solution.statsLabel || 'Efficiency Increase'}</p>
                <p className="text-xs font-black text-slate-800">Proven ROI Lift</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-600/10 selection:text-slate-900 overflow-x-hidden relative flex flex-col justify-between">
      
      {/* Schema LD Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              'name': solution.title,
              'image': solution.heroImage,
              'description': solution.metaDescription,
              'applicationCategory': 'BusinessApplication',
              'operatingSystem': 'Web, Cloud, Windows, iOS, Android',
              'brand': {
                '@type': 'Brand',
                'name': 'Unova Estate'
              },
              'offers': {
                '@type': 'Offer',
                'price': 'Contact Sales',
                'priceCurrency': 'BDT'
              }
            },
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              'mainEntity': [
                {
                  '@type': 'Question',
                  'name': solution.faq1_q,
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': solution.faq1_a
                  }
                },
                {
                  '@type': 'Question',
                  'name': solution.faq2_q,
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': solution.faq2_a
                  }
                },
                {
                  '@type': 'Question',
                  'name': solution.faq3_q,
                  'acceptedAnswer': {
                    '@type': 'Answer',
                    'text': solution.faq3_a
                  }
                }
              ]
            },
            {
              '@context': 'https://schema.org',
              '@type': 'BreadcrumbList',
              'itemListElement': [
                {
                  '@type': 'ListItem',
                  'position': 1,
                  'name': 'Home',
                  'item': 'https://unova.bd/'
                },
                {
                  '@type': 'ListItem',
                  'position': 2,
                  'name': 'Solutions',
                  'item': 'https://unova.bd/solutions'
                },
                {
                  '@type': 'ListItem',
                  'position': 3,
                  'name': solution.title,
                  'item': `https://unova.bd/solutions/${solution.slug}`
                }
              ]
            }
          ])
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
            <Link href="/docs" className="hover:text-slate-950 transition-colors">Docs</Link>
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

      {/* HERO SECTION */}
      {renderHero()}

      {/* DETAILED CONTENT SECTION */}
      <main className="max-w-7xl mx-auto px-5 py-12 relative z-10 flex-grow w-full">
        

        <div className="grid lg:grid-cols-12 gap-12">
        
        {/* Left Side: Article Body & Core Info */}
        <div className="lg:col-span-8 space-y-10 bg-white p-6 md:p-10 rounded-3xl border border-slate-200/85 shadow-sm">
          
          {/* Key Capabilities Grid */}
          <div id="capabilities-section" className="space-y-6 scroll-mt-24">
            <h2 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#6DC042]" />
              Key Capabilities & Outcomes
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              {[
                { icon: solution.benefit1_icon, title: solution.benefit1_title, desc: solution.benefit1_desc },
                { icon: solution.benefit2_icon, title: solution.benefit2_title, desc: solution.benefit2_desc },
                { icon: solution.benefit3_icon, title: solution.benefit3_title, desc: solution.benefit3_desc }
              ].map((b, bi) => (
                <div key={bi} className="bg-slate-50/50 p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#6DC042]/30 transition-all group">
                  <span className="text-3xl block mb-3 group-hover:scale-110 transition-transform">{b.icon}</span>
                  <h3 className="text-xs font-bold text-slate-900 mb-1.5">{b.title}</h3>
                  <p className="text-slate-500 text-[11px] leading-relaxed">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Performance & Impact Metrics Chart Card */}
          <div id="benchmarks-section" className="bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 text-white p-6 md:p-8 rounded-3xl shadow-lg border border-slate-800 space-y-6 scroll-mt-24">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
              <div>
                <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block mb-1">Performance Benchmarks</span>
                <h3 className="text-lg md:text-xl font-extrabold text-white">System Efficiency Gains</h3>
              </div>
              <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-bold rounded-full w-fit">
                Verified Metrics
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-2">
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-300">Instalment Collection Speed</span>
                  <span className="text-[#6DC042]">91% On-Time</span>
                </div>
                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-[#6DC042] h-full rounded-full w-[91%]" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-300">Material Wastage Reduction</span>
                  <span className="text-indigo-400">75% Saved</span>
                </div>
                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-indigo-500 h-full rounded-full w-[75%]" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-300">Financial Closing Duration</span>
                  <span className="text-amber-400">90% Faster</span>
                </div>
                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-amber-400 h-full rounded-full w-[90%]" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-slate-300">Double Booking Prevention</span>
                  <span className="text-rose-400">100% Guaranteed</span>
                </div>
                <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-rose-500 h-full rounded-full w-[100%]" />
                </div>
              </div>
            </div>
          </div>

          {/* Parsed Markdown Content Body (Prose Custom) */}
          <article className="prose-custom max-w-none text-slate-600 border-t border-slate-200 pt-8">
            <div dangerouslySetInnerHTML={{ __html: processedContentHtml }} />
          </article>

          {/* Spotlight Quote Banner */}
          <div className="bg-gradient-to-r from-emerald-50/80 via-slate-50 to-indigo-50/50 border-l-4 border-[#6DC042] p-6 md:p-8 rounded-r-3xl shadow-sm space-y-4">
            <span className="text-3xl block text-[#6DC042]">“</span>
            <p className="text-slate-800 font-extrabold text-sm md:text-base italic leading-relaxed">
              Unova Estate transformed how our sales, engineering, and accounts teams communicate. We reduced double bookings to zero and accelerated monthly collections within 60 days of deployment.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-black flex items-center justify-center text-sm shadow-sm">
                UE
              </div>
              <div>
                <p className="text-xs font-black text-slate-900">Head of Real Estate Operations</p>
                <p className="text-[10px] text-slate-500">Leading Housing Developer Group, Dhaka</p>
              </div>
            </div>
          </div>

          {/* Technical Specs Checklist */}
          <div id="specs-section" className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-200/80 space-y-6 scroll-mt-24">
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
          <div id="faq-section" className="space-y-6 border-t border-slate-200 pt-8 scroll-mt-24">
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
        <aside className="lg:col-span-4 space-y-6 h-fit self-start">
          
          {/* 1. Quick Call to Action card (Top) */}
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

          {/* 2. Jump To Section Widget (Bottom & Sticky under Navbar) */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 sticky top-24 z-30">
            <h3 className="text-sm font-extrabold text-slate-900 tracking-tight border-b border-slate-100 pb-3 flex items-center justify-between">
              <span>Jump to section :</span>
              <span className="text-[10px] font-bold text-[#6DC042] bg-[#6DC042]/10 px-2 py-0.5 rounded-full">
                Index
              </span>
            </h3>

            <div className="space-y-2 pt-1">
              {tocSections.map((sec, idx) => {
                const isActive = activeSectionId === sec.id;
                return (
                  <button
                    key={idx}
                    onClick={() => scrollToSection(sec.id)}
                    className={`block w-full text-left text-xs transition-all leading-relaxed ${
                      isActive
                        ? 'text-[#6DC042] font-black pl-2 border-l-2 border-[#6DC042]'
                        : 'text-slate-600 hover:text-[#6DC042] font-medium hover:pl-1'
                    }`}
                  >
                    {sec.title}
                  </button>
                );
              })}
            </div>
          </div>

        </aside>

        </div>
      </main>

      {/* OTHER SOLUTIONS SECTION AT THE BOTTOM */}
      {relatedSolutions && relatedSolutions.length > 0 && (
        <section className="bg-slate-100/70 border-t border-slate-200/80 py-16 px-5 relative z-10">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold text-[#6DC042] uppercase tracking-widest block mb-1">Explore Platform</span>
                <h2 className="text-2xl md:text-3xl font-black text-slate-900">Other Real Estate Solutions</h2>
              </div>
              <Link href="/solutions" className="text-xs font-bold text-indigo-600 hover:text-indigo-500 flex items-center gap-1 transition-colors">
                View All Solutions →
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {relatedSolutions.map((rel, ri) => (
                <div key={ri} className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#6DC042]/40 transition-all duration-300 flex flex-col justify-between group">
                  <div className="relative h-44 overflow-hidden bg-slate-100">
                    <img src={rel.heroImage} alt={rel.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-slate-800 text-[10px] font-bold px-2.5 py-1 rounded-full border border-slate-200">
                      {rel.statsValue || 'Enterprise'}
                    </span>
                  </div>

                  <div className="p-6 space-y-3 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm md:text-base font-extrabold text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors line-clamp-1">
                        {rel.title}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                        {rel.metaDescription}
                      </p>
                    </div>
                    
                    <div className="pt-4 border-t border-slate-100">
                      <Link href={`/solutions/${rel.slug}`} className="text-[#6DC042] text-xs font-bold flex items-center gap-1 group-hover:underline">
                        Explore Solution
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />

      {/* Ask AI chat box */}
      <AskAI open={aiOpen} onOpenChange={setAiOpen} />

    </div>
  );
}