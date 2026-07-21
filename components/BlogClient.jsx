'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from './Navbar';
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

      {/* SHARED TOP NAVBAR */}
      <Navbar activePage="blog" />

      {/* MAIN */}
      <main className="relative z-10 pt-32 pb-24 px-5 max-w-7xl mx-auto w-full flex-1">
        
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
                className="group bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-indigo-500/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Card Cover Image */}
                  <Link href={`/blog/${post.slug}`} className="block relative h-48 md:h-52 w-full overflow-hidden bg-slate-100">
                    <img
                      src={post.image || 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop'}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-white/90 backdrop-blur-md text-indigo-700 border border-slate-200 shadow-sm uppercase tracking-wider">
                        {post.category || 'Real Estate'}
                      </span>
                    </div>
                  </Link>

                  <div className="p-6 md:p-8">
                    <div className="flex gap-2 items-center mb-3 text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                      <span>{post.readTime || '5 min read'}</span>
                      <span>•</span>
                      <span>Published {post.date}</span>
                    </div>

                    <h2 className="text-xl font-black text-slate-900 mb-3 leading-snug group-hover:text-indigo-600 transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>
                    <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">{post.excerpt}</p>
                  </div>
                </div>

                <div className="px-6 md:px-8 pb-6 flex justify-between items-center border-t border-slate-100 pt-4 mt-auto">
                  <span className="text-[10px] font-semibold text-slate-400">By {post.author || 'Unova Team'}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-700 flex items-center gap-1 group/btn"
                  >
                    Read Article
                    <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
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
