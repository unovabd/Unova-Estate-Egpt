'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLanguage } from '@/context/LanguageContext';

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

export default function SolutionsClient() {
  const { t, isRtl } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const rawSolutions = [
    {
      categories: ['industry', 'module', 'usecase'],
      slug: 'erp-for-real-estate-developers',
      icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z',
      img: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80',
      title: isRtl ? 'برنامج أتمتة للمطورين العقاريين' : 'ERP for Real Estate Developers',
      desc: isRtl ? 'أتمتة شاملة للمطورين العقاريين. إدارة كامل المشاريع من الاستحواذ وحصص الشركاء إلى مراحل البناء وتسليم الوحدات.' : 'End-to-end automation tailored specifically for building developers. Manage projects from acquisition to sales handover.',
      points: isRtl 
        ? ['تتبع مخزون المشاريع والوحدات', 'حساب حصص ملاك الأراضي', 'ربط نسب الإنجاز للمشاريع', 'تحكم في الأسعار الديناميكية']
        : ['Project & Unit Inventory tracking', 'Landowner share calculation', 'Milestone progress mapping', 'Dynamic pricing control']
    },
    {
      categories: ['industry', 'module', 'usecase'],
      slug: 'erp-for-land-developers',
      icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
      img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=400&q=80',
      title: isRtl ? 'برنامج تطوير وإدارة الأراضي' : 'ERP for Land & Plot Developers',
      desc: isRtl ? 'إدارة شراء الأراضي وتراخيصها، وتقسيم المخططات وتوزيع القطع وتتبع الخرائط والمساحات.' : 'Manage raw land purchases, joint-ventures, mutation legalities, layout plan mapping, and plot distributions.',
      points: isRtl
        ? ['سجل قطط وتراخيص الأراضي', 'تخطيط وتقسيم المساحات', 'متابعة الوضع القانوني والتراخيص', 'تتبع خريطة الأرض']
        : ['Registry tracking', 'Plot layout visualization', 'Legal vetting activity logs', 'Land mutation workflow tracker']
    },
    {
      categories: ['challenge', 'usecase', 'goal'],
      slug: 'lead-leakage-prevention',
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
      img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80',
      title: isRtl ? 'حماية عملاء المبيعات من الضياع' : 'Lead Leakage Prevention',
      desc: isRtl ? 'استقبال فوري للعملاء من إعلانات فيسبوك، واتساب، وموقع الشركة وتوزيعهم آلياً على مسؤولي المبيعات.' : 'Capture all enquiries from Facebook leads, WhatsApp, website forms, and walk-ins instantly.',
      points: isRtl
        ? ['ربط إعلانات فيسبوك مباشرة', 'تتبع الاستفسارات متعددة القنوات', 'توزيع التناوب الآلي للعملاء', 'تنبيهات المتابعة المهملة']
        : ['Instant Facebook Lead Sync', 'Omnichannel enquiry capture', 'Automatic round-robin assignment', 'Unattended lead alert system']
    },
    {
      categories: ['challenge', 'module', 'usecase', 'goal'],
      slug: 'installment-collection-automation',
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      img: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=400&q=80',
      title: isRtl ? 'أتمتة وتحصيل الأقساط الشهرية' : 'Installment & Collection Automation',
      desc: isRtl ? 'إدارة جداول أقساط العملاء مع إرسال التنبيهات الآلية عبر SMS والواتساب، وإصدار الفواتير وسندات القبض.' : 'Manage customer payment schedules with automated SMS & Email reminders for upcoming installments.',
      points: isRtl
        ? ['جداول أقساط ودفوعات آلية', 'تنبيهات الأقساط واتساب وSMS', 'إصدار سندات وإيصالات القبض', 'حساب غرامات وتأخيرات السداد']
        : ['Automated payment schedules', 'SMS & Email installment reminders', 'Money receipt generation', 'Late payment fine calculators']
    },
    {
      categories: ['challenge', 'usecase', 'goal'],
      slug: 'sales-commission-tracking',
      icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 00-2-2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
      title: isRtl ? 'تتبع وحساب عمولات المبيعات' : 'Sales & Commission Tracking',
      desc: isRtl ? 'تحديد سياسات عمولات المبيعات للحجز والتعاقد والأقساط، وحساب مستحقات الوكلاء والمسوقين تلقائياً.' : 'Configure flexible commission policies for booking, signing, and installments.',
      points: isRtl
        ? ['تكوين سياسات شريحة العمولات', 'بوابة حسابات الوكلاء والمسوقين', 'جداول توزيع العمولات الآلية', 'ترحيل مباشر لمسير المرتبات']
        : ['Sales policy configuration', 'Agent & broker portal links', 'Auto-split commission tables', 'Flows directly into payroll']
    },
  ];

  const filteredSolutions = rawSolutions.filter(sol => {
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

      <Navbar activePage="solutions" />

      <main className="relative z-10 pt-36 pb-24 px-5 max-w-6xl mx-auto w-full flex-1">
        
        {/* HEADER SECTION */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-600">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            {isRtl ? 'حلول يونوفا العقارية' : 'Unova Solutions'}
          </div>

          <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-tight text-slate-900">
            {isRtl ? 'حلول مخصصة تناسب' : 'Tailor-Made Solutions for'}{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-indigo-500 bg-clip-text text-transparent">
              {isRtl ? 'كافة متطلبات الشركات العقارية' : 'Every Real Estate Need'}
            </span>
          </h1>

          <p className="text-slate-500 text-sm leading-relaxed max-w-2xl mx-auto">
            {isRtl
              ? 'استكشف الأنظمة والموديلات المخصصة المصممة لحل تحديات التطوير العقاري وأتمتة عمل الفرق.'
              : 'Discover specialized modules, workflows, and solutions built specifically to solve real estate developers\' business challenges.'}
          </p>
        </div>

        {/* SEARCH & FILTERS */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6">
          <div className="relative w-full max-w-md mx-auto">
            <input
              type="text"
              placeholder={isRtl ? 'ابحث بالكلمات المفتاحية أو اسم الموديول...' : 'Search by keywords, modules, or goals...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-5 py-3 rounded-full text-xs bg-white border border-slate-200/90 focus:outline-none focus:border-indigo-600 focus:ring-2 focus:ring-indigo-600/10 shadow-sm font-medium transition-all"
            />
            <svg className="absolute left-4 top-3.5 w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {[
              { id: 'all', label: isRtl ? 'كافة الحلول' : 'All Solutions' },
              { id: 'industry', label: isRtl ? 'القطاعات' : 'Industries' },
              { id: 'challenge', label: isRtl ? 'التحديات' : 'Challenges' },
              { id: 'role', label: isRtl ? 'الوظائف' : 'Roles' },
              { id: 'module', label: isRtl ? 'الموديولات' : 'Modules' },
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
                      {isRtl ? 'مشاهدة التفاصيل التجريبية' : 'View Details & Demo'}
                      <span className={isRtl ? 'rotate-180 inline-block' : ''}>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white border border-slate-200/60 rounded-3xl max-w-2xl mx-auto shadow-sm">
            <span className="text-4xl mb-4 block">🔍</span>
            <h3 className="text-base font-bold text-slate-800 mb-1">{isRtl ? 'لم يتم العثور على نتائج' : 'No solutions found'}</h3>
            <p className="text-slate-500 text-xs">{isRtl ? 'جرب البحث بكلمات مفتاحية أخرى.' : 'Try adjusting your search filters or queries.'}</p>
          </div>
        )}

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
