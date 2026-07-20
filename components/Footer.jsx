'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-slate-200 bg-slate-100/50 pt-16 pb-10 px-5 text-sm text-slate-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
        
        {/* Branding & Profile (Spans 4 columns) */}
        <div className="lg:col-span-4 space-y-4">
          <Link href="/" className="flex items-center">
            <img src="/unova-real-estate-software-logo.png" alt="Unova Estate Real Estate CRM & ERP Software Logo" className="h-9 w-auto" />
          </Link>
          <p className="text-slate-500 leading-relaxed max-w-sm text-xs">
            Bangladesh's premier AI-powered ERP & CRM system built exclusively for property builders, land developers, and real estate sales agencies.
          </p>
          
          {/* Domain Badges for Light Background */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            <span className="text-[9px] uppercase font-bold tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-100 px-2.5 py-0.5 rounded-md flex items-center gap-1 shadow-sm">
              🗺️ Land Developers
            </span>
            <span className="text-[9px] uppercase font-bold tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-0.5 rounded-md flex items-center gap-1 shadow-sm">
              🏢 Apartment / Flat Developers
            </span>
            <span className="text-[9px] uppercase font-bold tracking-wider bg-blue-50 text-blue-700 border border-blue-100 px-2.5 py-0.5 rounded-md flex items-center gap-1 shadow-sm">
              🏠 Housing Companies
            </span>
            <span className="text-[9px] uppercase font-bold tracking-wider bg-purple-50 text-purple-700 border border-purple-100 px-2.5 py-0.5 rounded-md flex items-center gap-1 shadow-sm">
              📈 Real Estate Marketing Companies
            </span>
            <span className="text-[9px] uppercase font-bold tracking-wider bg-rose-50 text-rose-700 border border-rose-100 px-2.5 py-0.5 rounded-md flex items-center gap-1 shadow-sm">
              🏗️ Construction Companies
            </span>
            <span className="text-[9px] uppercase font-bold tracking-wider bg-sky-50 text-sky-700 border border-sky-100 px-2.5 py-0.5 rounded-md flex items-center gap-1 shadow-sm">
              🤝 Real Estate Sales Teams
            </span>
          </div>

          <div className="pt-2">
            <a href="https://wa.me/8801766774016" target="_blank" rel="noopener noreferrer" 
               className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-600 hover:text-emerald-500 transition-colors">
              <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Support: +880 1766-774016
            </a>
          </div>
        </div>

        {/* Right side 3 columns */}
        <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* SOLUTIONS */}
          <div className="space-y-4">
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider">SOLUTIONS</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/solutions/erp-for-real-estate-developers" className="hover:text-slate-950 transition-colors">ERP for Developers</Link></li>
              <li><Link href="/solutions/erp-for-land-developers" className="hover:text-slate-950 transition-colors">Land Joint-Venture</Link></li>
              <li><Link href="/solutions/lead-leakage-prevention" className="hover:text-slate-950 transition-colors">Lead Leakage Prevention</Link></li>
              <li><Link href="/solutions/installment-automation-solution" className="hover:text-slate-950 transition-colors">Installment Automation</Link></li>
            </ul>
          </div>

          {/* RESOURCES & DOWNLOADS */}
          <div className="space-y-4">
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider">RESOURCES & DOWNLOADS</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/blog" className="hover:text-slate-950 transition-colors">Blog & Insights</Link></li>
              <li><Link href="/docs" className="hover:text-slate-950 transition-colors">User Documentation</Link></li>
              <li><Link href="/resources/downloads" className="hover:text-slate-950 transition-colors font-bold text-indigo-600">Downloads (Leaflet & Profile)</Link></li>
              <li><Link href="/compare" className="hover:text-slate-950 transition-colors">Comparison Studies</Link></li>
              <li><Link href="/faq" className="hover:text-slate-950 transition-colors">Frequently Asked Questions (FAQ)</Link></li>
            </ul>
          </div>

          {/* COMPANY & TRUST */}
          <div className="space-y-4">
            <h4 className="text-slate-900 font-bold text-xs uppercase tracking-wider">COMPANY & TRUST</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/#features" className="hover:text-slate-950 transition-colors">Why Unova</Link></li>
              <li><Link href="/demo" className="hover:text-slate-950 transition-colors">Book a Free Demo</Link></li>
              <li><Link href="/#contact" className="hover:text-slate-950 transition-colors">Contact Support</Link></li>
              <li><Link href="https://rems.unova.bd/login" className="hover:text-slate-950 transition-colors">Sign In</Link></li>
            </ul>
          </div>

        </div>

      </div>

      {/* Copyright & Social bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <p>© {new Date().getFullYear()} Unova Estate — Built for Property Developers. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/unovarem" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">Facebook</a>
          <a href="https://www.youtube.com/@UnovaSoftware" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">YouTube</a>
          <a href="https://www.linkedin.com/company/theunova/" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors">LinkedIn</a>
          <a href="https://wa.me/8801766774016" target="_blank" rel="noopener noreferrer" className="hover:text-slate-600 transition-colors text-emerald-600 font-bold">Get Support</a>
        </div>
      </div>
    </footer>
  );
}
