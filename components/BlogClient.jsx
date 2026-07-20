'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AskAI from './AskAI';
import Footer from './Footer';

export default function BlogClient({ posts }) {
  const [aiOpen, setAiOpen]             = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [searchQuery, setSearchQuery]     = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'guides', label: 'Guides & How-Tos' },
    { id: 'statistics', label: 'Statistics & Trends' },
    { id: 'best-practices', label: 'Best Practices' },
    { id: 'glossary', label: 'Real Estate Glossary' },
    { id: 'product-news', label: 'Product News' }
  ];

  const filteredPosts = posts.filter(post => {
    const pCat = (post.category || '').toLowerCase();
    const matchesCategory = activeCategory === 'all' || 
      (activeCategory === 'guides' && (pCat.includes('guide') || pCat.includes('how'))) ||
      (activeCategory === 'statistics' && (pCat.includes('stat') || pCat.includes('trend') || pCat.includes('market') || pCat.includes('report'))) ||
      (activeCategory === 'best-practices' && (pCat.includes('practice') || pCat.includes('cost') || pCat.includes('sales') || pCat.includes('automation'))) ||
      (activeCategory === 'glossary' && (pCat.includes('glossary') || pCat.includes('term') || pCat.includes('dictionary'))) ||
      (activeCategory === 'product-news' && (pCat.includes('product') || pCat.includes('news') || pCat.includes('update') || pCat.includes('launch')));

    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            <Link href="/blog" className="hover:text-slate-950 transition-colors">Blog</Link>
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

      {/* MAIN */}
      <main className="relative z-10 pt-32 pb-24 px-5 max-w-5xl mx-auto w-full flex-1">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-600">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            Unova Blog & Insights
          </div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-slate-900">
            Real Estate CRM & ERP <span className="bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">Insights</span>
          </h1>

          <p className="text-slate-500 text-sm leading-relaxed max-w-xl mx-auto">
            Discover guides, market statistics, best practices, real estate glossary, and product news from leading builders.
          </p>
        </div>

        {/* SEARCH & CATEGORY FILTERS */}
        <div className="max-w-4xl mx-auto mb-16 space-y-6">
          {/* Search Bar */}
          <div className="relative w-full max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search articles by keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full text-xs bg-white border border-slate-200/90 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/10 shadow-sm font-medium transition-all"
            />
            <svg className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(c => (
              <button
                key={c.id}
                onClick={() => setActiveCategory(c.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all border ${
                  activeCategory === c.id
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-md'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:text-slate-900 shadow-sm'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* BLOG GRID */}
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {filteredPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200/80 rounded-3xl p-8 shadow-sm hover:shadow-md hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between hover:scale-[1.01]"
              >
                <div>
                  <div className="flex gap-2 items-center mb-4 text-[10px] font-bold text-indigo-600 uppercase tracking-wide">
                    <span>{post.category}</span>
                    <span className="text-slate-300">•</span>
                    <span className="text-slate-400 font-medium">{post.readTime}</span>
                  </div>

                  <h2 className="text-xl font-extrabold text-slate-900 mb-3 leading-snug hover:text-indigo-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="text-slate-500 text-xs leading-relaxed mb-6">{post.excerpt}</p>
                </div>

                <div className="flex justify-between items-center border-t border-slate-100 pt-6 mt-4">
                  <span className="text-[10px] text-slate-400">Published on {post.date}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-500 flex items-center gap-1"
                  >
                    Read Post
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white border border-slate-200/60 rounded-3xl max-w-md mx-auto shadow-sm">
            <span className="text-4xl mb-4 block">🔍</span>
            <h3 className="text-base font-bold text-slate-800 mb-1">No articles found</h3>
            <p className="text-slate-500 text-xs">Try searching for different keywords or categories.</p>
          </div>
        )}

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
