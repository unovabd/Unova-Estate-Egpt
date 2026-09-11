'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function BlogPostClient({ post }) {
  const { t, isRtl } = useLanguage();
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

      <Navbar activePage="blog" />

      {/* MAIN */}
      <main className="relative z-10 pt-36 pb-24 px-5 max-w-3xl mx-auto w-full flex-1">
        
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 hover:text-indigo-600 transition-colors mb-8"
        >
          <span className={isRtl ? 'rotate-180 inline-block' : ''}>←</span>
          <span>{isRtl ? 'العودة للمدونة' : 'Back to Blog'}</span>
        </Link>

        {/* Post Header */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
            {post.category && (
              <span className="px-3 py-1 bg-indigo-50 border border-indigo-100 text-indigo-600 font-bold rounded-full">
                {post.category}
              </span>
            )}
            {post.date && <span>{post.date}</span>}
            {post.readTime && <span>• {post.readTime}</span>}
          </div>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 leading-tight">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
              {post.excerpt}
            </p>
          )}
        </div>

        {/* Featured Image */}
        {post.image && (
          <div className="rounded-3xl overflow-hidden mb-10 border border-slate-200 shadow-sm bg-slate-100">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto max-h-[420px] object-cover"
            />
          </div>
        )}

        {/* Post Content */}
        <article className="prose-custom max-w-none text-slate-700 bg-white p-6 md:p-10 rounded-3xl border border-slate-200/80 shadow-sm">
          <div dangerouslySetInnerHTML={{ __html: post.contentHtml }} />
        </article>

        {/* Bottom CTA */}
        <div className="mt-12 bg-indigo-900 text-white rounded-3xl p-8 text-center space-y-4 shadow-lg">
          <h2 className="text-2xl font-black">{isRtl ? 'جاهز لزيادة أرباح وأداء شركتك العقارية؟' : 'Ready to streamline your real estate company?'}</h2>
          <p className="text-indigo-200 text-xs max-w-md mx-auto">
            {isRtl ? 'احجز عرضاً توضيحياً مباشراً مع خبراء المنتجات لدينا.' : 'Schedule a live demo to see how Unova Estate automates property sales, leads, and payroll.'}
          </p>
          <Link
            href="/demo"
            className="inline-block px-6 py-3 bg-white text-indigo-900 font-bold text-xs rounded-full shadow-md hover:bg-slate-100 transition-all"
          >
            {t('nav.requestDemo')}
          </Link>
        </div>
      </main>

      <Footer />

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 ${isRtl ? 'left-8' : 'right-8'} z-50 w-11 h-11 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white flex items-center justify-center shadow-lg transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 15l7-7 7 7" />
        </svg>
      </button>

    </div>
  );
}
