'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AskAI from './AskAI';
import Footer from './Footer';

export default function BlogPostClient({ post }) {
  const [aiOpen, setAiOpen]             = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#6DC042]/20 selection:text-slate-900 overflow-x-hidden relative flex flex-col justify-between">
      
      {/* Ambient glow */}
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

      {/* MAIN */}
      <main className="relative z-10 pt-32 pb-24 px-5 max-w-3xl mx-auto w-full flex-1">
        
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors mb-8"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        {/* POST HEADER */}
        <div className="space-y-4 mb-10 pb-8 border-b border-slate-200">
          <div className="flex items-center gap-2 text-[10px] font-bold text-indigo-600 uppercase tracking-wide">
            <span>{post.category}</span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-400 font-medium">{post.readTime}</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-slate-900">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 pt-2 text-xs text-slate-400 font-medium">
            <span>By {post.author}</span>
            <span>•</span>
            <span>Published on {post.date}</span>
          </div>
        </div>

        {/* POST CONTENT */}
        <article className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm md:text-base space-y-6">
          <style dangerouslySetInnerHTML={{__html: `
            article h1, article h2, article h3 {
              color: #0f172a;
              font-weight: 900;
              letter-spacing: -0.025em;
              margin-top: 1.75em;
              margin-bottom: 0.5em;
            }
            article h1 { font-size: 2.25em; }
            article h2 { font-size: 1.5em; }
            article h3 { font-size: 1.25em; }
            article p { margin-bottom: 1.25em; }
            article ul { list-style-type: disc; padding-left: 1.5em; margin-bottom: 1.25em; }
            article li { margin-bottom: 0.5em; }
            article hr { border: 0; border-top: 1px solid #e2e8f0; margin: 2em 0; }
            article blockquote {
              border-left: 4px solid #4f46e5;
              padding-left: 1em;
              font-style: italic;
              color: #4f46e5;
              margin: 1.5em 0;
            }
            article a { color: #4f46e5; text-decoration: underline; font-weight: 600; }
            article a:hover { color: #3730a3; }
          `}} />
          <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </article>

        {/* CTA BOX */}
        <div className="mt-16 bg-indigo-900 rounded-3xl p-8 md:p-10 text-center text-white relative overflow-hidden shadow-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-950 via-indigo-900 to-indigo-950 opacity-90 pointer-events-none" />
          
          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <h2 className="text-2xl md:text-3xl font-black tracking-tight">Streamline Your Property Business</h2>
            <p className="text-indigo-200 text-xs leading-relaxed max-w-md mx-auto">
              Ready to automate lead assignment, installment invoicing, store requisition approvals, and payroll?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/demo" className="w-full sm:w-auto px-6 py-3 bg-white text-indigo-900 hover:bg-slate-100 font-bold rounded-xl shadow-md transition-all text-xs text-center">
                Book a Demo
              </Link>
              <a href="https://wa.me/8801766774016" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-6 py-3 bg-indigo-800/80 hover:bg-indigo-800 text-white font-semibold rounded-xl border border-indigo-700 transition-all text-xs flex items-center justify-center gap-2">
                💬 Contact Sales
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
