'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import AskAI from './AskAI';
import Navbar from './Navbar';
import ContactSection from './ContactSection';
import Footer from './Footer';
import CompanyCategoryCalculator from './CompanyCategoryCalculator';
import { useLanguage } from '@/context/LanguageContext';

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

const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app-estate-unova.vercel.app';

export default function LandingPage({ posts = [] }) {
  const router = useRouter();
  const { t, isRtl } = useLanguage();
  
  const [openFaq, setOpenFaq] = useState(null);
  const [activeModule, setActiveModule] = useState(0);
  const [billingYearly, setBillingYearly] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [activeWorkflowTab, setActiveWorkflowTab] = useState('sales');

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 400);
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll);
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 2500);

    return () => {
      window.removeEventListener('scroll', onScroll);
      clearInterval(interval);
    };
  }, []);

  const goToDemo = () => {
    router.push('/demo');
  };

  const modulesData = [
    {
      color: 'indigo',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z',
      title: t('modules.crmTitle'),
      desc: t('modules.crmDesc'),
      points: [t('modules.crmPoint1'), t('modules.crmPoint2'), t('modules.crmPoint3'), t('modules.crmPoint4')],
    },
    {
      color: 'amber',
      icon: 'M3 9.75L12 3l9 6.75V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.75zM9 21V12h6v9',
      title: t('modules.propTitle'),
      desc: t('modules.propDesc'),
      points: [t('modules.propPoint1'), t('modules.propPoint2'), t('modules.propPoint3'), t('modules.propPoint4')],
    },
    {
      color: 'emerald',
      icon: 'M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z',
      title: t('modules.salesTitle'),
      desc: t('modules.salesDesc'),
      points: [t('modules.salesPoint1'), t('modules.salesPoint2'), t('modules.salesPoint3'), t('modules.salesPoint4')],
    },
    {
      color: 'teal',
      icon: 'M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7',
      title: t('modules.landTitle'),
      desc: t('modules.landDesc'),
      points: [t('modules.landPoint1'), t('modules.landPoint2'), t('modules.landPoint3'), t('modules.landPoint4')],
    },
    {
      color: 'sky',
      icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z',
      title: t('modules.boqTitle'),
      desc: t('modules.boqDesc'),
      points: [t('modules.boqPoint1'), t('modules.boqPoint2'), t('modules.boqPoint3'), t('modules.boqPoint4')],
    },
    {
      color: 'blue',
      icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
      title: t('modules.procTitle'),
      desc: t('modules.procDesc'),
      points: [t('modules.procPoint1'), t('modules.procPoint2'), t('modules.procPoint3'), t('modules.procPoint4')],
    },
    {
      color: 'violet',
      icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2m21-12a9 9 0 11-18 0 9 9 0 0118 0z',
      title: t('modules.contTitle'),
      desc: t('modules.contDesc'),
      points: [t('modules.contPoint1'), t('modules.contPoint2'), t('modules.contPoint3'), t('modules.contPoint4')],
    },
    {
      color: 'pink',
      icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      title: t('modules.progTitle'),
      desc: t('modules.progDesc'),
      points: [t('modules.progPoint1'), t('modules.progPoint2'), t('modules.progPoint3'), t('modules.progPoint4')],
    },
    {
      color: 'rose',
      icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z',
      title: t('modules.hrTitle'),
      desc: t('modules.hrDesc'),
      points: [t('modules.hrPoint1'), t('modules.hrPoint2'), t('modules.hrPoint3'), t('modules.hrPoint4')],
    },
    {
      color: 'cyan',
      icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
      title: t('modules.finTitle'),
      desc: t('modules.finDesc'),
      points: [t('modules.finPoint1'), t('modules.finPoint2'), t('modules.finPoint3'), t('modules.finPoint4')],
    },
    {
      color: 'indigo',
      icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
      title: t('modules.roleTitle'),
      desc: t('modules.roleDesc'),
      points: [t('modules.rolePoint1'), t('modules.rolePoint2'), t('modules.rolePoint3'), t('modules.rolePoint4')],
    },
  ];

  const salesSteps = [
    { n: '01', title: t('workflows.salesStep1Title'), body: t('workflows.salesStep1Body') },
    { n: '02', title: t('workflows.salesStep2Title'), body: t('workflows.salesStep2Body') },
    { n: '03', title: t('workflows.salesStep3Title'), body: t('workflows.salesStep3Body') },
    { n: '04', title: t('workflows.salesStep4Title'), body: t('workflows.salesStep4Body') },
  ];

  const projectSteps = [
    { n: '01', title: t('workflows.projStep1Title'), body: t('workflows.projStep1Body') },
    { n: '02', title: t('workflows.projStep2Title'), body: t('workflows.projStep2Body') },
    { n: '03', title: t('workflows.projStep3Title'), body: t('workflows.projStep3Body') },
    { n: '04', title: t('workflows.projStep4Title'), body: t('workflows.projStep4Body') },
  ];

  const testimonialsList = [
    { name: t('testimonials.author1'), role: t('testimonials.role1'), quote: t('testimonials.quote1') },
    { name: t('testimonials.author2'), role: t('testimonials.role2'), quote: t('testimonials.quote2') },
    { name: t('testimonials.author3'), role: t('testimonials.role3'), quote: t('testimonials.quote3') },
  ];

  const faqsList = [
    {
      q: isRtl ? 'هل نظام يونوفا إستيت مصمم خصيصاً للشركات العقارية؟' : 'Is Unova Estate built specifically for property companies?',
      a: isRtl ? 'نعم تماماً. كافة الوحدات من تتبع العملاء وإدارة الوحدات وجدول الأقساط والعمولات صممت خصيصاً لتناسب طبيعة عمل شركات العقارات في مصر والشرق الأوسط.' : 'Yes. Every module — from lead pipeline to unit inventory, payment schedules, and commission calculations — is built specifically for real estate developers.',
    },
    {
      q: isRtl ? 'هل يمنح النظام صلاحيات مخصصة لكل موظف؟' : 'Can different staff see only what is relevant to them?',
      a: isRtl ? 'بالتأكيد. يمكنك التحكم الكامل في صلاحيات كل موظف بحيث يرى مسؤول المبيعات عملاءه فقط، وتدير الحسابات المبيعات بدون الوصول لبيانات الـ HR.' : 'Absolutely. The roles and permissions system lets you control exactly what each user sees and does based on their department.',
    },
    {
      q: isRtl ? 'هل يدعم النظام أتمتة الواتساب والرسائل؟' : 'Can I run WhatsApp and SMS campaigns to my leads?',
      a: isRtl ? 'نعم. يوفر النظام ربطاً مباشراً مع Meta WhatsApp Business API لإرسال رسائل التذكير التلقائية بالأقساط وإشعارات المبيعات.' : 'Yes. Connect your SMS provider and Meta WhatsApp Business API to send automated installment reminders and lead follow-ups.',
    },
    {
      q: isRtl ? 'كم من الوقت يستغرق تشغيل النظام بالكامل؟' : 'How long does it take to set up?',
      a: isRtl ? 'تستطيع معظم الشركات العمل على النظام خلال 48 ساعة فقط، مع تقديم التدريب الكامل لفريق العمل مجاناً.' : 'Most companies are fully operational within a few days with complete onboarding provided by our local team.',
    },
  ];

  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-[#6DC042]/20 selection:text-slate-900 overflow-x-hidden">

      {/* Global ambient glow */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute top-[-20%] left-[10%] w-[700px] h-[700px] bg-indigo-600/[0.04] rounded-full blur-[120px]" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-violet-600/[0.04] rounded-full blur-[120px]" />
      </div>

      {/* ════ REUSABLE NAVIGATION ════ */}
      <Navbar activePage="home" />

      {/* ════ HERO ════ */}
      <section className="relative pt-[115px] md:pt-40 pb-24 px-5 z-10 overflow-hidden bg-slate-50/20">
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
        `}} />

        {/* Dotted Grid Background */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-45 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-[#6DC042]/10 to-emerald-500/5 blur-[120px] rounded-full pointer-events-none z-0" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* Badge */}
          <div className="relative inline-block mb-8">
            <SparkleIcon className="absolute -top-4 -left-6 w-5 h-5 opacity-70" />
            <SparkleIcon className="absolute -bottom-3 -right-6 w-4 h-4 opacity-60" />
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-bold text-indigo-600 backdrop-blur-sm shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              {t('hero.badge')}
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-[4.5rem] font-extrabold tracking-tight leading-[1.1] mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-slate-950 to-slate-800">
              {t('hero.title1')}{' '}
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#6DC042] via-[#5da538] to-[#6DC042]">
              {t('hero.titleHighlight')}
            </span>
            <br />
            <span className="text-slate-900 text-3xl sm:text-4xl md:text-5xl font-bold mt-2 block">
              {t('hero.title2')}
            </span>
          </h1>

          <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed font-medium">
            {t('hero.subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button onClick={goToDemo}
              className="btn-shimmer w-full sm:w-auto px-8 py-4 text-white font-bold rounded-full shadow-[0_4px_20px_rgba(109,192,66,0.35)] hover:shadow-[0_6px_30px_rgba(109,192,66,0.55)] transition-all text-center hover:scale-105 active:scale-95 duration-200">
              {t('hero.ctaPrimary')}
            </button>
            <button onClick={() => document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-full border border-slate-200 hover:border-slate-300 transition-all flex items-center justify-center gap-2 hover:scale-105 active:scale-95 duration-200">
              {t('hero.ctaSecondary')}
              <Icon d="M14 5l7 7m0 0l-7 7m7-7H3" className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <p className="text-xs text-slate-400 font-medium mb-12">
            ✨ {t('hero.metaTrusted')}
          </p>

          {/* Main Dashboard Preview Mockup */}
          <div className="relative mx-auto max-w-5xl rounded-2xl border border-slate-200/80 bg-white shadow-[0_30px_70px_rgba(27,42,59,0.15)] overflow-hidden transition-all duration-500 hover:scale-[1.01] hover:border-[#6DC042]/30 group">
            <div className="h-10 bg-slate-50 border-b border-slate-200/60 flex items-center px-4 gap-2 flex-shrink-0">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <div className="flex-1 flex justify-center pr-12">
                <span className="text-[10px] text-slate-400 font-medium font-mono select-none">app.unovaestate.com/dashboard</span>
              </div>
            </div>
            
            <div className="relative bg-slate-50">
              <img src="/unova-real-estate-crm-sales-dashboard-mockup.png" alt="Unova Estate AI-Powered Real Estate ERP CRM Sales Dashboard" className="w-full object-cover" loading="eager" width="1024" height="576" />
            </div>
          </div>
        </div>
      </section>

      {/* ════ STATS SECTION ════ */}
      <section className="py-16 bg-white border-y border-slate-200/60">
        <div className="max-w-6xl mx-auto px-5 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl md:text-4xl font-black text-indigo-600">50+</p>
            <p className="text-xs font-semibold text-slate-500 mt-1">{t('stats.developers')}</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-black text-emerald-600">$1.2B+</p>
            <p className="text-xs font-semibold text-slate-500 mt-1">{t('stats.sales')}</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-black text-indigo-600">99.8%</p>
            <p className="text-xs font-semibold text-slate-500 mt-1">{t('stats.onTime')}</p>
          </div>
          <div>
            <p className="text-3xl md:text-4xl font-black text-violet-600">4.9/5</p>
            <p className="text-xs font-semibold text-slate-500 mt-1">{t('stats.satisfaction')}</p>
          </div>
        </div>
      </section>

      {/* ════ FEATURES & MODULES ════ */}
      <section id="features" className="relative z-10 py-24 px-5 border-t border-slate-200/60 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-[#6DC042] mb-3">{t('modules.badge')}</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">{t('modules.title')}</h2>
            <p className="text-slate-500 max-w-xl mx-auto">{t('modules.subtitle')}</p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {modulesData.map((m, i) => (
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

          {modulesData.map((m, i) => {
            if (i !== activeModule) return null;
            return (
              <div key={i} className="grid md:grid-cols-2 gap-8 bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-md">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                    <Icon d={m.icon} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">{m.title}</h3>
                  <p className="text-slate-500 leading-relaxed mb-8">{m.desc}</p>
                  <button onClick={goToDemo}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-sm text-white bg-indigo-600 hover:bg-indigo-500 shadow-md transition-all">
                    {t('nav.requestDemo')}
                    <Icon d="M14 5l7 7m0 0l-7 7m7-7H3" className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                  </button>
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
        </div>
      </section>

      {/* ════ HOW IT WORKS ════ */}
      <section id="how-it-works" className="relative z-10 py-24 px-5 border-t border-slate-200/60 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#6DC042] mb-3">Interactive Lifecycles</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">
              {isRtl ? 'رحلة مبيعات وتنفيذ المشاريع' : 'From acquisition to commission'}
            </h2>
          </div>

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
                🏪 {t('workflows.salesTab')}
              </button>
              <button
                onClick={() => { setActiveWorkflowTab('project'); setActiveStep(0); }}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold transition-all duration-300 ${
                  activeWorkflowTab === 'project'
                    ? 'bg-[#6DC042] text-white shadow-md'
                    : 'text-slate-500 hover:text-slate-800'
                }`}
              >
                🏗️ {t('workflows.projectTab')}
              </button>
            </div>
          </div>

          <div className="relative">
            <div className={`space-y-6 transition-all duration-500 ${activeWorkflowTab === 'sales' ? 'block' : 'hidden'}`}>
              {salesSteps.map((s, i) => (
                <div key={i} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
                  <span className="text-xs font-black text-[#6DC042]">{s.n}</span>
                  <h3 className="text-lg font-black text-slate-900 mt-1 mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>

            <div className={`space-y-6 transition-all duration-500 ${activeWorkflowTab === 'project' ? 'block' : 'hidden'}`}>
              {projectSteps.map((s, i) => (
                <div key={i} className="bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm">
                  <span className="text-xs font-black text-[#6DC042]">{s.n}</span>
                  <h3 className="text-lg font-black text-slate-900 mt-1 mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════ ROI CALCULATOR ════ */}
      <section id="calculator" className="relative z-10 py-24 px-5 border-t border-slate-200/60 bg-white">
        <div className="max-w-5xl mx-auto">
          <CompanyCategoryCalculator />
        </div>
      </section>

      {/* ════ TESTIMONIALS ════ */}
      <section id="clients" className="relative z-10 py-24 px-5 border-t border-slate-200/60 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-3">{t('testimonials.badge')}</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">{t('testimonials.title')}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonialsList.map((tm, i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-2xl p-7 flex flex-col shadow-sm hover:border-indigo-500/25 transition-colors">
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, si) => (
                    <svg key={si} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-slate-600 leading-relaxed flex-1 mb-6">&ldquo;{tm.quote}&rdquo;</p>
                <div>
                  <p className="text-sm font-bold text-slate-900">{tm.name}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{tm.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ FAQ ════ */}
      <section className="relative z-10 py-24 px-5 border-t border-slate-200/60 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-3">{t('faq.title')}</h2>
            <p className="text-slate-500 text-sm">{t('faq.subtitle')}</p>
          </div>

          <div className="space-y-4">
            {faqsList.map((f, i) => (
              <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden transition-colors bg-slate-50">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-4 font-bold text-sm text-slate-900 flex items-center justify-between gap-4"
                >
                  <span>{f.q}</span>
                  <span className="text-indigo-600 text-lg">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-xs text-slate-500 leading-relaxed border-t border-slate-200/50 pt-3">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════ CONTACT SECTION ════ */}
      <ContactSection />

      {/* ════ FOOTER ════ */}
      <Footer />
    </div>
  );
}
