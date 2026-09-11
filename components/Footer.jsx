'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t, isRtl } = useLanguage();

  return (
    <footer className="relative z-10 border-t border-slate-200 bg-slate-100/50 pt-16 pb-10 px-5 text-sm text-slate-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        
        {/* Branding & Profile */}
        <div className="lg:col-span-4 space-y-4">
          <Link href="/" className="flex items-center">
            <img src="/unova-real-estate-software-logo.png" alt="Unova Estate Logo" className="h-9 w-auto" />
          </Link>
          <p className="text-slate-500 leading-relaxed max-w-sm text-xs">
            {t('footer.about')}
          </p>
          
          {/* Domain Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            <span className="text-[9px] uppercase font-bold tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-100 px-2.5 py-0.5 rounded-md flex items-center gap-1 shadow-sm">
              🗺️ {isRtl ? 'تطوير الأراضي' : 'Land Developers'}
            </span>
            <span className="text-[9px] uppercase font-bold tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-0.5 rounded-md flex items-center gap-1 shadow-sm">
              🏢 {isRtl ? 'المشاريع السكنية والتجارية' : 'Apartment / Flat Developers'}
            </span>
            <span className="text-[9px] uppercase font-bold tracking-wider bg-blue-50 text-blue-700 border border-blue-100 px-2.5 py-0.5 rounded-md flex items-center gap-1 shadow-sm">
              🏠 {isRtl ? 'شركات التطوير العقاري' : 'Housing Companies'}
            </span>
            <span className="text-[9px] uppercase font-bold tracking-wider bg-purple-50 text-purple-700 border border-purple-100 px-2.5 py-0.5 rounded-md flex items-center gap-1 shadow-sm">
              📈 {isRtl ? 'شركات التسويق العقاري' : 'Real Estate Marketing'}
            </span>
            <span className="text-[9px] uppercase font-bold tracking-wider bg-rose-50 text-rose-700 border border-rose-100 px-2.5 py-0.5 rounded-md flex items-center gap-1 shadow-sm">
              🏗️ {isRtl ? 'شركات المقاولات والبناء' : 'Construction Companies'}
            </span>
          </div>

          <div className="pt-2">
            <a href="https://wa.me/201000000000" target="_blank" rel="noopener noreferrer" 
               className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-500 transition-colors">
              <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Support (Egypt & MENA)
            </a>
          </div>
        </div>

        {/* Right side columns */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 1. SOLUTIONS */}
          <div className="space-y-4">
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider">{t('footer.solutions')}</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/solutions" className="hover:text-slate-950 transition-colors">{isRtl ? 'إدارة التطوير العقاري' : 'ERP for Flat Developers'}</Link></li>
              <li><Link href="/solutions" className="hover:text-slate-950 transition-colors">{isRtl ? 'حاسبة الأراضي والمساحات' : 'Land Plot & Dag ERP'}</Link></li>
              <li><Link href="/solutions" className="hover:text-slate-950 transition-colors">{isRtl ? 'حماية العملاء من الضياع' : 'Lead Leakage Prevention'}</Link></li>
              <li><Link href="/solutions" className="hover:text-slate-950 transition-colors">{isRtl ? 'أتمتة وتحصيل الأقساط' : 'Installment Automation'}</Link></li>
            </ul>
          </div>

          {/* 2. RESOURCES */}
          <div className="space-y-4">
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider">{t('footer.resources')}</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/calculator" className="hover:text-slate-950 transition-colors">{isRtl ? 'حاسبة الخطة والمستويات' : 'Plan Calculator'}</Link></li>
              <li><Link href="/docs" className="hover:text-slate-950 transition-colors">{isRtl ? 'دليل الاستخدام' : 'User Documentation'}</Link></li>
              <li><Link href="/faq" className="hover:text-slate-950 transition-colors">{isRtl ? 'الأسئلة الشائعة' : 'FAQ'}</Link></li>
              <li><Link href="/blog" className="hover:text-slate-950 transition-colors">{isRtl ? 'المقالات والتحليلات' : 'Blog & Insights'}</Link></li>
            </ul>
          </div>

          {/* 3. COMPANY & LEGAL */}
          <div className="space-y-4">
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider">{t('footer.contactUs')}</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/about" className="hover:text-slate-950 transition-colors">{isRtl ? 'عن يونوفا' : 'About Unova'}</Link></li>
              <li><Link href="/security" className="hover:text-slate-950 transition-colors">{isRtl ? 'الأمان والخصوصية' : 'Security Policy'}</Link></li>
              <li><Link href="/terms" className="hover:text-slate-950 transition-colors">{isRtl ? 'الشروط والأحكام' : 'Terms & Conditions'}</Link></li>
              <li><Link href="/#contact" className="hover:text-slate-950 transition-colors">{isRtl ? 'الدعم الفني' : 'Contact Support'}</Link></li>
              <li><a href="https://rems.unova.eg/login" className="hover:text-slate-950 font-semibold text-slate-900 transition-colors">{t('nav.signin')} →</a></li>
            </ul>
          </div>

        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <p>© {new Date().getFullYear()} {t('footer.rights')} • {t('footer.egyptOffice')}</p>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/unovarem" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Facebook</a>
          <a href="https://www.youtube.com/@UnovaSoftware" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">YouTube</a>
          <a href="https://www.linkedin.com/company/theunova/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
