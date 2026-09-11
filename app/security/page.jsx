import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Security, Encryption & SLA — Enterprise Trust Center | Unova Estate',
  description: 'Learn about Unova Estate bank-grade AES-256 data encryption, 24-hour offsite backups, multi-AZ disaster recovery, 99.99% uptime SLA, and cloud security compliance.',
  alternates: {
    canonical: '/security',
  },
};

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-indigo-500 selection:text-white">
      <Navbar activePage="security" />

      <main className="relative z-10 pt-28 pb-24 px-5 max-w-7xl mx-auto w-full flex-1 space-y-12">
        {/* HERO HEADER */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-100">
            Enterprise Trust &amp; Security Center
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
            Bank-Grade Security &amp; 99.99% Uptime Guarantee
          </h1>
          <p className="text-base text-slate-600">
            Unova Estate safeguards sensitive buyer lead data, financial installment ledgers, and property transactions with enterprise-grade encryption, automated backups, and multi-zone disaster recovery.
          </p>
        </div>

        {/* LIVE SYSTEM STATUS BANNER */}
        <div className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <div>
              <h4 className="font-bold text-sm text-slate-900">Live Uptime Status: All Systems Operational</h4>
              <p className="text-xs text-slate-500">AWS Multi-AZ AWS Cloud Infrastructure • 99.99% Monthly SLA</p>
            </div>
          </div>
          <div className="text-xs font-bold text-slate-700 bg-slate-100 px-4 py-2 rounded-xl">
            Avg Uptime (Last 365 Days): <span className="text-emerald-600 font-black">99.99%</span>
          </div>
        </div>

        {/* 6 SECURITY PILLARS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1. Data Encryption */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-2xl font-bold">
              🔐
            </div>
            <h3 className="text-xl font-bold text-slate-900">Data Encryption (AES-256)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              All real estate buyer records and money receipts are encrypted in transit via TLS 1.3 (256-bit SSL) and encrypted at rest using AES-256 bank-grade algorithms.
            </p>
          </div>

          {/* 2. Backup Policy */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl font-bold">
              💾
            </div>
            <h3 className="text-xl font-bold text-slate-900">Automated Backup Policy</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Automated 24-hour offsite snapshot backups with 30-day point-in-time recovery guarantees. Your ledger data is replicated across redundant cloud storage nodes.
            </p>
          </div>

          {/* 3. Disaster Recovery */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl font-bold">
              🛡️
            </div>
            <h3 className="text-xl font-bold text-slate-900">Disaster Recovery (RTO &amp; RPO)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Multi-AZ AWS failover architecture ensuring a Recovery Time Objective (RTO) of under 15 minutes and zero-data-loss Recovery Point Objective (RPO).
            </p>
          </div>

          {/* 4. SLA Uptime Guarantee */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-2xl font-bold">
              ⚡
            </div>
            <h3 className="text-xl font-bold text-slate-900">99.99% Service SLA</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Contractually guaranteed 99.99% monthly operational uptime SLA for all developer cloud instances, supported by 24/7 dedicated help desk monitoring.
            </p>
          </div>

          {/* 5. Role-Based Security */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-2xl font-bold">
              👥
            </div>
            <h3 className="text-xl font-bold text-slate-900">Role-Based Access (RBAC)</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Granular permission controls for sales reps, accounts officers, site engineers, and executive directors to ensure strict data isolation and privacy.
            </p>
          </div>

          {/* 6. Financial Audit Trail */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center text-2xl font-bold">
              📊
            </div>
            <h3 className="text-xl font-bold text-slate-900">Immutable Audit Logs</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Full audit trail logging for every money receipt generation, discount approval, ledger override, and user login attempt for DSE compliance.
            </p>
          </div>
        </div>

        {/* SECURITY FAQ / TRUST BANNER */}
        <div className="bg-gradient-to-r from-slate-900 to-indigo-950 text-white rounded-3xl p-8 md:p-12 text-center space-y-6 shadow-xl">
          <h2 className="text-2xl md:text-3xl font-black">Need a Custom Security Compliance Audit for Your Enterprise?</h2>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Our engineering team conducts security audits and offers dedicated private cloud instances for large real estate conglomerates in Egypt.
          </p>
          <div className="pt-2">
            <Link
              href="/demo"
              className="inline-flex items-center justify-center px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-2xl shadow-lg transition-all text-sm"
            >
              Request Enterprise Security Compliance Deck
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
