'use client';

import { useState, useId } from 'react';
import Link from 'next/link';

export default function CompanyCategoryCalculator() {
  const [employee, setEmployee]   = useState(10);
  const [lead, setLead]           = useState(300);
  const [affiliate, setAffiliate] = useState(10);
  const [project, setProject]     = useState(2);
  const [unit, setUnit]           = useState(30);
  const [value, setValue]         = useState(15);

  const employeeId = useId();
  const leadId = useId();
  const affiliateId = useId();
  const projectId = useId();
  const unitId = useId();
  const valueId = useId();

  // Threshold Calculation Logic (Exact user formula)
  const baseEmployee  = 80;
  const baseLead      = 5000;
  const baseAffiliate = 500;
  const baseProject   = 20;
  const baseUnit      = 500;
  const baseValue     = 500;

  const empNum = Number(employee) || 0;
  const leadNum = Number(lead) || 0;
  const affNum = Number(affiliate) || 0;
  const projNum = Number(project) || 0;
  const unitNum = Number(unit) || 0;
  const valNum = Number(value) || 0;

  const pEmployee  = empNum <= 15 ? 1 : empNum <= 40 ? 2 : empNum <= baseEmployee ? 3 : (empNum / baseEmployee) * 4;
  const pLead      = leadNum <= 500 ? 1 : leadNum <= 2000 ? 2 : leadNum <= baseLead ? 3 : (leadNum / baseLead) * 4;
  const pAffiliate = affNum <= 50 ? 1 : affNum <= 200 ? 2 : affNum <= baseAffiliate ? 3 : (affNum / baseAffiliate) * 4;
  const pProject   = projNum <= 3 ? 1 : projNum <= 10 ? 2 : projNum <= baseProject ? 3 : (projNum / baseProject) * 4;
  const pUnit      = unitNum <= 50 ? 1 : unitNum <= 250 ? 2 : unitNum <= baseUnit ? 3 : (unitNum / baseUnit) * 4;
  const pValue     = valNum <= 30 ? 1 : valNum <= 150 ? 2 : valNum <= baseValue ? 3 : (valNum / baseValue) * 4;

  const totalPoints  = pEmployee + pLead + pAffiliate + pProject + pUnit + pValue;
  const averageScore = Number((totalPoints / 6).toFixed(2));

  let categoryName = 'Small';
  let categoryColor = 'emerald';
  let planTitle = 'Small Plan ($40 / mo)';
  let planBadgeBg = 'bg-emerald-50 text-emerald-700 border-emerald-200';
  let resultCardBg = 'from-emerald-50/60 to-emerald-100/30 border-emerald-200/80';

  if (averageScore >= 1.51 && averageScore <= 2.50) {
    categoryName = 'Medium';
    categoryColor = 'indigo';
    planTitle = 'Medium Plan ($75 / mo)';
    planBadgeBg = 'bg-indigo-50 text-indigo-700 border-indigo-200';
    resultCardBg = 'from-indigo-50/60 to-indigo-100/30 border-indigo-200/80';
  } else if (averageScore >= 2.51 && averageScore <= 3.50) {
    categoryName = 'Large';
    categoryColor = 'rose';
    planTitle = 'Large Plan ($100 / mo)';
    planBadgeBg = 'bg-rose-50 text-rose-700 border-rose-200';
    resultCardBg = 'from-rose-50/60 to-rose-100/30 border-rose-200/80';
  } else if (averageScore >= 3.51) {
    categoryName = 'Enterprise';
    categoryColor = 'purple';
    planTitle = 'Enterprise Plan (Custom Negotiation)';
    planBadgeBg = 'bg-purple-50 text-purple-700 border-purple-200';
    resultCardBg = 'from-purple-50/60 to-purple-100/30 border-purple-200/80';
  }

  return (
    <div className="w-full bg-white rounded-3xl p-6 md:p-10 border border-slate-200/90 shadow-xl space-y-8">
      {/* HEADER */}
      <div className="text-center space-y-2 max-w-xl mx-auto">
        <span className="inline-block px-3 py-1 rounded-full text-xs font-extrabold bg-indigo-50 text-indigo-700 border border-indigo-100 uppercase tracking-wider">
          Interactive Plan Estimator
        </span>
        <h3 className="text-2xl md:text-3xl font-black text-slate-900">
          Company Category Calculator
        </h3>
        <p className="text-xs text-slate-500">
          Input your business scale metrics below to discover your recommended Unova Estate plan.
        </p>
      </div>

      {/* INPUT FORM GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 1. Employee Count */}
        <div className="space-y-2 bg-slate-50/80 p-4 rounded-2xl border border-slate-100">
          <div className="flex justify-between items-center">
            <label htmlFor={employeeId} className="text-xs font-bold text-slate-800">1. Employee Count</label>
            <span className="text-[10px] font-semibold text-slate-400">Small: ≤15 | Med: 16-40 | Lrg: 41-80 | Ent: &gt;80</span>
          </div>
          <input
            id={employeeId}
            type="number"
            min="0"
            value={employee}
            onChange={(e) => setEmployee(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
          />
        </div>

        {/* 2. Monthly Customer Leads */}
        <div className="space-y-2 bg-slate-50/80 p-4 rounded-2xl border border-slate-100">
          <div className="flex justify-between items-center">
            <label htmlFor={leadId} className="text-xs font-bold text-slate-800">2. Monthly Customer Leads</label>
            <span className="text-[10px] font-semibold text-slate-400">Small: ≤500 | Med: 501-2K | Lrg: 2K-5K | Ent: &gt;5K</span>
          </div>
          <input
            id={leadId}
            type="number"
            min="0"
            value={lead}
            onChange={(e) => setLead(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
          />
        </div>

        {/* 3. Affiliate / Broker Network */}
        <div className="space-y-2 bg-slate-50/80 p-4 rounded-2xl border border-slate-100">
          <div className="flex justify-between items-center">
            <label htmlFor={affiliateId} className="text-xs font-bold text-slate-800">3. Affiliate / Broker Network</label>
            <span className="text-[10px] font-semibold text-slate-400">Small: ≤50 | Med: 51-200 | Lrg: 201-500 | Ent: &gt;500</span>
          </div>
          <input
            id={affiliateId}
            type="number"
            min="0"
            value={affiliate}
            onChange={(e) => setAffiliate(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
          />
        </div>

        {/* 4. Ongoing Projects */}
        <div className="space-y-2 bg-slate-50/80 p-4 rounded-2xl border border-slate-100">
          <div className="flex justify-between items-center">
            <label htmlFor={projectId} className="text-xs font-bold text-slate-800">4. Ongoing Projects</label>
            <span className="text-[10px] font-semibold text-slate-400">Small: ≤3 | Med: 4-10 | Lrg: 11-20 | Ent: &gt;20</span>
          </div>
          <input
            id={projectId}
            type="number"
            min="0"
            value={project}
            onChange={(e) => setProject(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
          />
        </div>

        {/* 5. Total Units / Apartments */}
        <div className="space-y-2 bg-slate-50/80 p-4 rounded-2xl border border-slate-100">
          <div className="flex justify-between items-center">
            <label htmlFor={unitId} className="text-xs font-bold text-slate-800">5. Total Units / Apartments</label>
            <span className="text-[10px] font-semibold text-slate-400">Small: ≤50 | Med: 51-250 | Lrg: 251-500 | Ent: &gt;500</span>
          </div>
          <input
            id={unitId}
            type="number"
            min="0"
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
          />
        </div>

        {/* 6. Total Project Value (in Crore BDT) */}
        <div className="space-y-2 bg-slate-50/80 p-4 rounded-2xl border border-slate-100">
          <div className="flex justify-between items-center">
            <label htmlFor={valueId} className="text-xs font-bold text-slate-800">6. Total Project Value (Crore BDT)</label>
            <span className="text-[10px] font-semibold text-slate-400">Small: ≤30Cr | Med: 31-150Cr | Lrg: 151-500Cr | Ent: &gt;500Cr</span>
          </div>
          <input
            id={valueId}
            type="number"
            min="0"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-bold text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-600 transition-all"
          />
        </div>
      </div>

      {/* DYNAMIC RESULT CARD */}
      <div className={`rounded-3xl p-6 md:p-8 bg-gradient-to-br ${resultCardBg} border transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-6`}>
        <div className="space-y-2 text-center md:text-left">
          <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Average Matrix Score: <strong className="text-slate-900 font-extrabold text-sm">{averageScore}</strong>
          </div>
          <div className="text-xl md:text-2xl font-black text-slate-900">
            Company Category: <span className="capitalize">{categoryName}</span>
          </div>
          <p className="text-xs text-slate-600 max-w-md">
            Based on your operational parameters, your organization matches our recommended <span className="font-bold">{categoryName} Tier</span> infrastructure package.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-3 shrink-0">
          <div className={`px-5 py-2.5 rounded-2xl text-xs font-extrabold uppercase tracking-wider border shadow-sm ${planBadgeBg}`}>
            {planTitle}
          </div>
          <Link
            href="/demo"
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl text-xs font-bold shadow-md hover:shadow-lg transition-all"
          >
            Get Started with {categoryName} Plan →
          </Link>
        </div>
      </div>
    </div>
  );
}
