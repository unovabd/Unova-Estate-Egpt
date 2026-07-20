'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import DocsAskAI from './DocsAskAI';

const NAV = [
  {
    group: 'Getting Started',
    items: [
      { id: 'introduction',   label: 'Introduction' },
      { id: 'setup',          label: 'Initial Setup' },
      { id: 'roles',          label: 'Roles & Permissions' },
    ],
  },
  {
    group: 'CRM',
    items: [
      { id: 'leads',          label: 'Leads' },
      { id: 'followups',      label: 'Follow-ups' },
      { id: 'contacts',       label: 'Contacts & Organizations' },
      { id: 'customers',      label: 'Customers' },
      { id: 'affiliates',     label: 'Affiliates' },
    ],
  },
  {
    group: 'Sales',
    items: [
      { id: 'sales-orders',   label: 'Sales Orders' },
      { id: 'commissions',    label: 'Commissions' },
    ],
  },
  {
    group: 'Property',
    items: [
      { id: 'property',       label: 'Projects & Units' },
    ],
  },
  {
    group: 'Land Management',
    items: [
      { id: 'land',           label: 'Land & Feasibility' },
    ],
  },
  {
    group: 'Construction & BOQ',
    items: [
      { id: 'boq',            label: 'BOQ & Cost Estimation' },
      { id: 'procurement',    label: 'Procurement & Inventory' },
      { id: 'contractors',    label: 'Contractor Management' },
      { id: 'progress',       label: 'Construction Progress' },
      { id: 'engineering',    label: 'Engineering & QA' },
    ],
  },
  {
    group: 'HR & Payroll',
    items: [
      { id: 'employees',      label: 'Employees' },
      { id: 'attendance',     label: 'Attendance' },
      { id: 'leave',          label: 'Leave Management' },
      { id: 'payroll',        label: 'Payroll' },
      { id: 'pf',             label: 'Provident Fund' },
      { id: 'loans',          label: 'Loans' },
      { id: 'bonuses',        label: 'Bonuses' },
      { id: 'resignation',    label: 'Resignation & F&F' },
      { id: 'assets',         label: 'Assets' },
    ],
  },
  {
    group: 'Finance',
    items: [
      { id: 'expenses',       label: 'Expenses' },
      { id: 'requisitions',   label: 'Purchase Requisitions' },
      { id: 'suppliers',      label: 'Suppliers & Purchases' },
      { id: 'accounting',     label: 'Accounting & Journals' },
      { id: 'banks',          label: 'Banks & Accounts' },
    ],
  },
  {
    group: 'Marketing',
    items: [
      { id: 'campaigns',      label: 'Campaigns' },
      { id: 'templates',      label: 'Templates' },
      { id: 'lead-forms',     label: 'Lead Forms' },
      { id: 'auto-comm',      label: 'Auto Communication' },
    ],
  },
  {
    group: 'Portals & Apps',
    items: [
      { id: 'portals',        label: 'Portals & Mobile Apps' },
    ],
  },
  {
    group: 'AI & Analytics',
    items: [
      { id: 'ai-analytics',   label: 'AI Predictions & KPIs' },
    ],
  },
  {
    group: 'Configuration',
    items: [
      { id: 'config-general', label: 'General Settings' },
      { id: 'config-hr',      label: 'HR Settings' },
      { id: 'config-bd',      label: 'Bangladesh Features' },
      { id: 'integrations',   label: 'API Integrations' },
      { id: 'file-manager',   label: 'File Manager' },
    ],
  },
  {
    group: 'Support',
    items: [
      { id: 'reports',        label: 'Reports' },
      { id: 'faq',            label: 'FAQ' },
      { id: 'contact',        label: 'Contact Support' },
    ],
  },
];

const S = {
  h3: 'text-slate-900 font-black text-[0.95rem] mt-6 mb-2',
  p:  'text-slate-600 text-sm leading-relaxed mb-3',
  ul: 'list-disc pl-5 text-slate-600 text-sm leading-relaxed mb-3 space-y-1',
  info: 'mt-3 mb-1 px-4 py-3 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs leading-relaxed',
  warn: 'mt-3 mb-1 px-4 py-3 rounded-xl bg-amber-50 border border-amber-100 text-amber-800 text-xs leading-relaxed',
};

const Table = ({ heads, rows }) => (
  <div className="overflow-x-auto mb-4">
    <table className="w-full text-xs border-collapse">
      <thead>
        <tr>{heads.map(h => <th key={h} className="text-left px-3 py-2 bg-slate-100 text-slate-700 font-bold border-b border-slate-200">{h}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className="border-b border-slate-100">
            {r.map((c, j) => <td key={j} className="px-3 py-2 text-slate-600 align-top">{c}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const SECTIONS = {
  introduction: {
    title: 'Introduction',
    content: (
      <div>
        <p className={S.p}>Unova Estate is Bangladesh&apos;s first AI-powered real estate ERP — one platform that manages your entire property business from first lead to final settlement.</p>
        <p className={S.p}>Instead of juggling a separate CRM, HR tool, WhatsApp panel, accounting software, and spreadsheets, Unova Estate brings everything into one login with fully connected modules.</p>
        <h3 className={S.h3}>Modules included</h3>
        <ul className={S.ul}>
          <li><strong className="text-slate-900 font-bold">CRM & Leads</strong> — capture, assign, and track every enquiry through the pipeline</li>
          <li><strong className="text-slate-900 font-bold">Property & Projects</strong> — live unit inventory across all projects</li>
          <li><strong className="text-slate-900 font-bold">Sales Orders & Commissions</strong> — booking to payment, commission calculated separately</li>
          <li><strong className="text-slate-900 font-bold">HR & Payroll</strong> — attendance, leave, salary, PF, loans, bonuses, assets</li>
          <li><strong className="text-slate-900 font-bold">Multi-Channel Marketing</strong> — Email, SMS, WhatsApp campaigns & lead forms</li>
          <li><strong className="text-slate-900 font-bold">Accounting & Finance</strong> — double-entry journals, expenses, suppliers, cashflow</li>
        </ul>
        <p className={S.info}>💡 All modules are connected — a confirmed customer payment automatically triggers commission recalculation, and payroll auto-deducts loan repayments and PF.</p>
      </div>
    ),
  },

  setup: {
    title: 'Initial Setup',
    content: (
      <div>
        <p className={S.p}>Most companies are fully operational within a few days. Complete these steps in order after your account is activated.</p>
        <h3 className={S.h3}>Step 1 — Company Profile</h3>
        <p className={S.p}>Configuration → Company Info → fill in company name, logo, address, tax ID → Save. This appears on invoices and reports.</p>
        <h3 className={S.h3}>Step 2 — Branches, Departments, Sections</h3>
        <p className={S.p}>Configuration → HR Settings → add Branches (office locations), Departments (Sales, HR, Finance), and Sections (sub-teams within departments).</p>
        <h3 className={S.h3}>Step 3 — Designations</h3>
        <p className={S.p}>Configuration → Designations → add job titles (Managing Director, Sales Manager, Sales Executive, HR Officer, Accountant, etc.).</p>
        <h3 className={S.h3}>Step 4 — Grades & HR Policies</h3>
        <p className={S.p}>Configuration → HR Settings → Grades. Each grade links an Attendance Policy (shift, late tolerance), Leave Policy (leave types & entitlements), PF Policy, and Overtime Policy. Set these up before adding employees.</p>
        <h3 className={S.h3}>Step 5 — Salary Structures</h3>
        <p className={S.p}>Configuration → HR Settings → Salary Components (Basic, House Allowance, Transport, etc.) → then Salary Policies (named packages). Assign a salary policy to each employee.</p>
        <h3 className={S.h3}>Step 6 — Add Your Team</h3>
        <p className={S.p}>Employees → &quot;+ New Employee&quot; → fill personal info, employment details, assign grade and salary structure → Save. Then assign roles via Configuration → Roles.</p>
        <h3 className={S.h3}>Step 7 — Lead Categories & Sources</h3>
        <p className={S.p}>Configuration → Lead Category (pipeline stage names) and Lead Source (Facebook, Website, Referral, Billboard, etc.).</p>
        <h3 className={S.h3}>Step 8 — Property Projects</h3>
        <p className={S.p}>Project → &quot;+ New Project&quot; → add buildings → add units with size, layout type, and price.</p>
        <h3 className={S.h3}>Step 9 — Chart of Accounts & Banks</h3>
        <p className={S.p}>Configuration → Chart of Accounts (review defaults) → Configuration → Banks → add your company bank accounts with opening balances.</p>
        <h3 className={S.h3}>Step 10 — Connect Communication Channels</h3>
        <p className={S.p}>Configuration → API Integrations → connect Email (SMTP), SMS gateway, and WhatsApp Business API before running marketing campaigns.</p>
        <p className={S.warn}>⚠️ Complete Steps 4 & 5 before adding employees. Payroll calculation depends on grades and salary structures being configured first.</p>
      </div>
    ),
  },

  roles: {
    title: 'Roles & Permissions',
    content: (
      <div>
        <p className={S.p}>Every user is assigned a Role. The role determines which modules they can access and whether they see all company data or only their own.</p>
        <h3 className={S.h3}>Create a Role</h3>
        <p className={S.p}>Configuration → Roles → &quot;+ New Role&quot; → give it a name → toggle each permission on/off → Save.</p>
        <h3 className={S.h3}>Assign to Employee</h3>
        <p className={S.p}>Employee profile → Access / Role tab → select the role → Save. Takes effect on next login.</p>
        <h3 className={S.h3}>Permission Types</h3>
        <Table
          heads={['Permission Key', 'What it controls']}
          rows={[
            ['dashboard.view', 'Access to the dashboard'],
            ['sales.view_all / view_own', 'See all sales or only assigned ones'],
            ['sales.create / edit / approve', 'Create, edit, or approve sales orders'],
            ['hr.attendance_view / create / edit', 'View, manually create, or edit attendance'],
            ['hr.leave_approve', 'Approve or reject leave applications'],
            ['hr.payroll_manage', 'Generate and finalise payroll runs'],
            ['hr.loan_approve', 'Approve employee loan requests'],
            ['employee.view_all / view_own', 'See all employees or only own profile'],
            ['employee.edit / change_designation', 'Edit employee records or change designation'],
            ['property.view / create / edit', 'Manage projects and units'],
            ['configuration.role_manage', 'Create and edit roles'],
          ]}
        />
        <p className={S.info}>💡 A Sales Executive with only <em>sales.view_own</em> will only see leads and sales assigned to them. A Sales Manager with <em>sales.view_all</em> sees the entire team.</p>
      </div>
    ),
  },

  leads: {
    title: 'Leads',
    content: (
      <div>
        <p className={S.p}>Every enquiry — from a form submission, a phone call, or a walk-in — becomes a Lead in the CRM pipeline.</p>
        <h3 className={S.h3}>Create a Lead</h3>
        <p className={S.p}>CRM → Leads → &quot;+ New Lead&quot;:</p>
        <ul className={S.ul}>
          <li><strong className="text-slate-900 font-bold">Step 1:</strong> Lead category, source, assigned agent, expected close date</li>
          <li><strong className="text-slate-900 font-bold">Step 2:</strong> Add contact persons (name, phone, email) — mark one as Decision Maker</li>
          <li><strong className="text-slate-900 font-bold">Step 3:</strong> Link property/unit or service of interest → Save</li>
        </ul>
        <h3 className={S.h3}>Lead Statuses</h3>
        <Table
          heads={['Status', 'Meaning']}
          rows={[
            ['Active', 'In the pipeline, being worked on'],
            ['Won', 'Converted to a confirmed sales order'],
            ['Lost', 'Prospect dropped out — add a reason'],
            ['Junk', 'Invalid or duplicate enquiry'],
          ]}
        />
        <h3 className={S.h3}>Reassign a Lead</h3>
        <p className={S.p}>Open lead → Assign section → select new agent → Save. Manager can bulk-reassign from the leads list.</p>
        <h3 className={S.h3}>Convert to Sale</h3>
        <p className={S.p}>Open lead → click &quot;Convert to Sale&quot; → this creates a Sales Order linked to the lead. Lead status changes to Won automatically.</p>
        <h3 className={S.h3}>Filter & Search</h3>
        <p className={S.p}>Use the filter bar to filter by: category, source, assigned agent, status, date range. Search by lead ID, contact name, or phone number.</p>
      </div>
    ),
  },

  followups: {
    title: 'Follow-ups',
    content: (
      <div>
        <p className={S.p}>Follow-ups are activity logs on a lead — every call, meeting, site visit, and message is recorded here.</p>
        <h3 className={S.h3}>Add a Follow-up</h3>
        <p className={S.p}>Open lead → Follow-ups tab → &quot;+ Add Follow-up&quot; → choose type (Call / Meeting / Email / Site Visit / WhatsApp) → set scheduled date → add notes → Save.</p>
        <h3 className={S.h3}>Follow-up Types</h3>
        <Table
          heads={['Type', 'Use case']}
          rows={[
            ['Call', 'Phone conversation with prospect'],
            ['Meeting', 'In-person or video meeting'],
            ['Email', 'Email sent to prospect'],
            ['Site Visit', 'Prospect visited the property'],
            ['WhatsApp', 'WhatsApp message or chat'],
          ]}
        />
        <h3 className={S.h3}>Overdue & Upcoming</h3>
        <p className={S.p}>Follow-ups past their scheduled date appear as overdue and are highlighted. The dashboard &quot;My Tasks&quot; panel shows upcoming follow-ups for the logged-in agent.</p>
        <p className={S.info}>💡 Managers can see all team follow-up activity from CRM → Leads → select lead → Follow-ups tab.</p>
      </div>
    ),
  },

  contacts: {
    title: 'Contacts & Organizations',
    content: (
      <div>
        <h3 className={S.h3}>Contacts</h3>
        <p className={S.p}>CRM → Contacts → &quot;+ New Contact&quot; → name, phone, email, designation → optionally link to an Organization → Save. Contacts can be linked to multiple leads. A contact profile shows all associated leads and follow-up history.</p>
        <h3 className={S.h3}>Organizations</h3>
        <p className={S.p}>CRM → Organizations → &quot;+ New Organization&quot; → company name, industry, website, address → Save. Organizations group multiple contacts from the same company. Link a contact to an organization via the Organization dropdown when creating or editing the contact.</p>
        <p className={S.info}>💡 When creating a lead, contacts are added in Step 2. These contacts are stored globally and can be reused across multiple leads.</p>
      </div>
    ),
  },

  customers: {
    title: 'Customers',
    content: (
      <div>
        <p className={S.p}>Customers are auto-created when a lead is converted to a Sales Order. You can also create a customer manually without a lead.</p>
        <h3 className={S.h3}>Customer Profile</h3>
        <p className={S.p}>Customer → click customer → profile shows: personal details, linked contacts, full purchase history, payment summary, outstanding balance, uploaded documents, and notes.</p>
        <h3 className={S.h3}>Create Manually</h3>
        <p className={S.p}>Customer → &quot;+ New Customer&quot; → fill personal info → link contact persons → Save. Then create a Sales Order and select this customer.</p>
      </div>
    ),
  },

  affiliates: {
    title: 'Affiliates',
    content: (
      <div>
        <p className={S.p}>Affiliates are external referral partners — freelance agents or brokers who bring in leads and earn commission on conversions.</p>
        <h3 className={S.h3}>Add an Affiliate</h3>
        <p className={S.p}>Affiliate → &quot;+ New Affiliate&quot; → name, phone, email → assign a reporting manager → Save. Each affiliate gets a unique referral code (same as their Affiliate ID).</p>
        <h3 className={S.h3}>Affiliate Login</h3>
        <p className={S.p}>Affiliates have their own login to the system. They can see only their own referred leads and commission history — no access to other data.</p>
        <h3 className={S.h3}>Tracking Referrals</h3>
        <p className={S.p}>When creating a lead, set the source to the affiliate&apos;s referral code. This links the lead to the affiliate and tracks their conversion performance.</p>
      </div>
    ),
  },

  'sales-orders': {
    title: 'Sales Orders',
    content: (
      <div>
        <p className={S.p}>A Sales Order is created when a lead converts into a confirmed booking. It tracks the full payment schedule and collection.</p>
        <h3 className={S.h3}>Create a Sales Order</h3>
        <ul className={S.ul}>
          <li>Sales → &quot;+ New Sale&quot; (or convert from a lead)</li>
          <li>Select customer</li>
          <li>Add products/properties with quantity, price, and discount</li>
          <li>Assign salesperson(s) — set commission type (percentage or fixed) and value per person</li>
          <li>Set payment schedule — lump sum or multiple instalments with due dates</li>
          <li>Save → Submit for Approval</li>
        </ul>
        <h3 className={S.h3}>Approval Workflow</h3>
        <p className={S.p}>New sales orders require manager approval (permission: sales.approve). They appear in Dashboard → Needs Approval. Once approved, status changes to Active.</p>
        <h3 className={S.h3}>Record Customer Payment</h3>
        <p className={S.p}>Open sales order → Payments tab → &quot;+ Record Payment&quot; → enter amount, date, payment method, select bank/account → Save. Each payment updates paid total, outstanding balance, and triggers commission recalculation.</p>
        <h3 className={S.h3}>Payment Schedule Tracking</h3>
        <p className={S.p}>Each instalment shows due date, amount, and status (Paid / Due / Overdue). Overdue instalments are highlighted. The system tracks outstanding balance automatically.</p>
        <h3 className={S.h3}>Sales Order Statuses</h3>
        <Table
          heads={['Status', 'Meaning']}
          rows={[
            ['Pending', 'Submitted, awaiting manager approval'],
            ['Active', 'Approved, payments being collected'],
            ['Completed', 'All payments received'],
            ['Cancelled', 'Order cancelled'],
          ]}
        />
      </div>
    ),
  },

  commissions: {
    title: 'Commissions',
    content: (
      <div>
        <p className={S.p}>Commission is calculated automatically per salesperson when a customer payment is recorded. It is completely <strong className="text-slate-900 font-bold">separate from payroll</strong> — commission is paid directly from a bank account, not through the monthly salary run.</p>
        <h3 className={S.h3}>How Commission is Calculated</h3>
        <p className={S.p}>Each salesperson assigned to a sale has:</p>
        <ul className={S.ul}>
          <li><strong className="text-slate-900 font-bold">commission_value</strong> — total commission amount (or rate) for the deal</li>
          <li><strong className="text-slate-900 font-bold">payment_threshold_pct</strong> — minimum % of sale price the customer must pay before any commission is unlocked (e.g. 20%)</li>
          <li><strong className="text-slate-900 font-bold">commission_unlock_pct</strong> — if customer paid between threshold and this %, only unlock_pct worth of commission is payable (e.g. 50%)</li>
          <li>Above unlock_pct: commission scales proportionally with actual % paid</li>
        </ul>
        <h3 className={S.h3}>Pay Commission to Agent</h3>
        <ul className={S.ul}>
          <li>Open the sales order</li>
          <li>Find the agent&apos;s commission row in the Commissions section</li>
          <li>Click &quot;+ Record Commission Payment&quot;</li>
          <li>Enter amount (cannot exceed Remaining Payable = payable_commission − paid_commission)</li>
          <li>Select the bank/account to pay from</li>
          <li>Add notes → Save</li>
        </ul>
        <h3 className={S.h3}>Commission Summary per Agent</h3>
        <Table
          heads={['Field', 'Meaning']}
          rows={[
            ['Total Commission', 'Full commission if 100% of sale price is paid'],
            ['Payable Commission', 'Commission earned so far based on payments received'],
            ['Paid Commission', 'Amount already disbursed to the agent'],
            ['Remaining to Pay', 'Payable minus Paid — what can be paid now'],
          ]}
        />
        <p className={S.warn}>⚠️ Commission payment is NOT part of payroll. Do not try to process commission through the payroll module — it has its own separate payment flow on the sales order.</p>
        <h3 className={S.h3}>View Agent Commission History</h3>
        <p className={S.p}>Employee profile → Commissions tab shows all commission payments received by that employee across all sales orders.</p>
      </div>
    ),
  },

  property: {
    title: 'Projects & Units',
    content: (
      <div>
        <h3 className={S.h3}>Create a Project</h3>
        <p className={S.p}>Project → &quot;+ New Project&quot; → name, location, type, description → Save. A project can have multiple buildings and hundreds of units.</p>
        <h3 className={S.h3}>Add Units</h3>
        <p className={S.p}>Open project → Units tab → &quot;+ Add Unit&quot; → unit number, floor, size (sqft), layout type, asking price → Save.</p>
        <h3 className={S.h3}>Unit Statuses</h3>
        <Table
          heads={['Status', 'Meaning']}
          rows={[
            ['Available', 'Ready to be offered to prospects'],
            ['Reserved', 'Linked to an active lead — on hold'],
            ['Sold', 'Linked to a confirmed sales order — locked, cannot be sold again'],
          ]}
        />
        <p className={S.p}>Status changes automatically: linking a unit to a lead sets it to Reserved; converting the lead to a sale sets it to Sold.</p>
        <h3 className={S.h3}>Layout Types</h3>
        <p className={S.p}>Layout Types → &quot;+ New Layout Type&quot; → name (e.g. &quot;3 Bed&quot;, &quot;4 Bed Duplex&quot;), description → Save. Reused across all projects as unit type labels.</p>
        <p className={S.warn}>⚠️ Once a unit is Sold, it cannot be linked to another lead or sale. To correct a mistake, contact Admin to reverse the sales order first.</p>
      </div>
    ),
  },

  land: {
    title: 'Land & Feasibility Management',
    content: (
      <div>
        <p className={S.p}>Land acquisition is the foundation of any building developer. Unova Estate provides tools to log, evaluate, and acquire properties.</p>
        <h3 className={S.h3}>Mouza & Dag Registry</h3>
        <p className={S.p}>Land → Land Bank → &quot;+ Add Land Plot&quot; → enter Mouza Name, J.L. Number, Dag Number (CS/SA/RS/BRS), Khatian Number, and Land Area (in Katha/Bigha). Assign legal vetting status to track property clearance.</p>
        <h3 className={S.h3}>Joint-Venture Share Calculator</h3>
        <p className={S.p}>Calculate partition ratios between the Landowner and Developer (e.g., 40/60 share). Store landowner profiles, contact details, and their designated flat/parking allocation directly in the system.</p>
        <h3 className={S.h3}>Mutation & Legal Registration</h3>
        <p className={S.p}>Track mutation files, registration deeds, and Power of Attorney (PoA) status. Set up verification checklists to ensure no disputable land enters construction phase.</p>
        <Table
          heads={['Record Type', 'Required Verification Details']}
          rows={[
            ['CS / SA / RS / BRS', 'Verify ownership chain (Via Baya Deed)'],
            ['Mutation Khatian', 'Ensure Namjari is complete with Dakhila tax receipt'],
            ['Power of Attorney', 'Verify registration at the sub-registry office'],
          ]}
        />
        <p className={S.info}>💡 Switch to GIS Map View under Land Module to see plot boundaries, coordinates, and survey status overlaid on Google Maps.</p>
      </div>
    ),
  },

  boq: {
    title: 'BOQ & Cost Estimation',
    content: (
      <div>
        <p className={S.p}>Bill of Quantities (BOQ) forms the core of construction cost control. Manage rates, items, and templates inside Unova.</p>
        <h3 className={S.h3}>BOQ Templates & Item Library</h3>
        <p className={S.p}>Set up standard Item Libraries for Civil works (excavation, piling, RCC) and Finishing works (tiles, electrical, paint). Link material and labor codes to automate cost compilation.</p>
        <h3 className={S.h3}>Cost Estimation & Rate Analysis</h3>
        <p className={S.p}>Analyze market rates for materials (cement, rod, sand) and labor. Generate project-wise, tower-wise, or floor-wise cost estimates. Track budgeted vs. actual costs in real-time.</p>
        <Table
          heads={['Cost Type', 'How it is calculated']}
          rows={[
            ['Material Cost', 'Quantity requested x current vendor rate'],
            ['Labor Cost', 'Man-days or sqft rate analysis for contractors'],
            ['Equipment Cost', 'Machinery rental rate x days of usage'],
          ]}
        />
        <p className={S.warn}>⚠️ Variation Orders (changes in design or material specification) must go through multi-stage approval before updating the actual project budget.</p>
      </div>
    ),
  },

  procurement: {
    title: 'Procurement & Inventory Control',
    content: (
      <div>
        <p className={S.p}>Seamless supply chain from Material Requisition to warehouse inventory tracking.</p>
        <h3 className={S.h3}>Requisition & RFQ Workflow</h3>
        <p className={S.p}>Site engineers submit Material Requisitions. Procurement department floats RFQs to approved vendors. Receive quotations and auto-generate Comparative Statements side-by-side.</p>
        <h3 className={S.h3}>Goods Receive Note (GRN) & Store Ledger</h3>
        <p className={S.p}>Upon delivery, site storekeepers check materials and issue a Goods Receive Note (GRN). Real-time inventory tracking logs batches, issue to contractor, store transfers, and returns.</p>
        <ul className={S.ul}>
          <li><strong className="text-slate-900 font-bold">Cement & Sand:</strong> Track bags/cft issued daily with wastage limits</li>
          <li><strong className="text-slate-900 font-bold">Steel Rods:</strong> Track weight in tons and wastage ratios</li>
          <li><strong className="text-slate-900 font-bold">Bricks & Tiles:</strong> Monitor breakage percentages and store stock levels</li>
        </ul>
        <p className={S.info}>💡 Store alerts notify the procurement officer automatically when warehouse stock levels fall below the minimum reorder threshold.</p>
      </div>
    ),
  },

  contractors: {
    title: 'Contractor Management',
    content: (
      <div>
        <p className={S.p}>Manage subcontractors, work orders, and billing certifications.</p>
        <h3 className={S.h3}>Contractor Profiles & Work Orders</h3>
        <p className={S.p}>Register contractor profiles, track licenses, trade experience, and ledgers. Issue Work Orders specifying unit rates (e.g. RCC per cft or plastering per sqft).</p>
        <h3 className={S.h3}>Running Bills & Certification (RA Bills)</h3>
        <p className={S.p}>Process Running Account (RA) bills. Site engineers verify work completed in the Measurement Book (MB). The system automatically deducts security money, retention money, and advances before certifying the final payable amount.</p>
        <Table
          heads={['Deduction Type', 'Standard Percentage', 'Description']}
          rows={[
            ['Security Money', '5% - 10%', 'Held until defects liability period ends'],
            ['Advance Recovery', 'Variable', 'Pro-rata recovery of mobilization advance'],
            ['TDS / VAT', 'As per NBR', 'Tax withheld at source for local contractors'],
          ]}
        />
      </div>
    ),
  },

  progress: {
    title: 'Construction Progress Tracking',
    content: (
      <div>
        <p className={S.p}>Monitor on-site execution against timelines, budgets, and work plans.</p>
        <h3 className={S.h3}>Tower & Floor Progress Tracker</h3>
        <p className={S.p}>Log progress at the tower, floor, or individual unit level. Site engineers submit Daily Progress Reports (DPR) with photos directly from their mobile phones.</p>
        <h3 className={S.h3}>Gantt Charts & Critical Path</h3>
        <p className={S.p}>Track milestones (piling, casting, brickwork, finishing). Generate Gantt charts showing actual progress vs planned timelines. Perform delay analysis and critical path calculations.</p>
        <p className={S.info}>💡 Visual dashboards display percentage completion of each structure using dynamic colors (e.g. green for on-schedule, red for delayed).</p>
      </div>
    ),
  },

  engineering: {
    title: 'Engineering & Quality Assurance',
    content: (
      <div>
        <p className={S.p}>Ensure building quality and manage construction documents.</p>
        <h3 className={S.h3}>RFI (Request for Information) & Drawings</h3>
        <p className={S.p}>Site teams submit RFIs to head office architects or structural consultants. Store structural, plumbing, and electrical drawing revisions. Version control ensures site engineers always work with the latest approved design.</p>
        <h3 className={S.h3}>Quality Inspections & Snag Lists</h3>
        <p className={S.p}>Perform concrete cylinder test logs and sand FM checking. Issue Site Instructions or Quality Non-Conformance alerts. Log snag lists during final handover prep and assign them to subcontractors for rectification.</p>
      </div>
    ),
  },

  portals: {
    title: 'Portals & Mobile Apps',
    content: (
      <div>
        <p className={S.p}>Portals and mobile apps keep buyers informed and management in control.</p>
        <h3 className={S.h3}>Customer Self-Service Portal</h3>
        <p className={S.p}>Buyers login to view their payment plans, download official money receipts, read their provisional agreements, and track construction progress photos of their specific flat.</p>
        <h3 className={S.h3}>Owner & Executive Dashboards</h3>
        <p className={S.p}>Real-time dashboard for Managing Directors showing key metrics: sales pipeline velocity, monthly collections, cash flow forecast, project ROI, and subcontractor payouts.</p>
      </div>
    ),
  },

  'ai-analytics': {
    title: 'AI Predictions & KPIs',
    content: (
      <div>
        <p className={S.p}>Leverage predictive modeling to reduce costs and avoid construction delays.</p>
        <h3 className={S.h3}>AI Collection & Sales Predictions</h3>
        <p className={S.p}>Predict next month&apos;s collections based on historical payment patterns and lead warmth scores. Identify which buyers are likely to default on upcoming installments.</p>
        <h3 className={S.h3}>AI Cost Overrun & Delay Alerts</h3>
        <p className={S.p}>Analyze material price trends and site log delays to alert management if a project is forecasted to exceed its budget or completion deadline.</p>
      </div>
    ),
  },

  'config-bd': {
    title: 'Bangladesh Features & Compliance',
    content: (
      <div>
        <p className={S.p}>Localizations tailored for Bangladesh real estate rules and regulatory bodies.</p>
        <h3 className={S.h3}>RAJUK Plan & Utility Tracking</h3>
        <p className={S.p}>Track RAJUK approval stages, plan version numbers, and NOCs from civil aviation and fire department. Monitor gas connection pipelines, WASA water connections, and DESCO/DPDC substation installation files.</p>
        <h3 className={S.h3}>VAT, Tax & Bank Loan Coordination</h3>
        <p className={S.p}>Calculate registration VAT and property withholding taxes according to National Board of Revenue (NBR) rules. Log home buyer bank loan files for tripartite agreement tracking.</p>
      </div>
    ),
  },

  employees: {
    title: 'Employees',
    content: (
      <div>
        <h3 className={S.h3}>Add an Employee</h3>
        <p className={S.p}>Employees → &quot;+ New Employee&quot;:</p>
        <ul className={S.ul}>
          <li><strong className="text-slate-900 font-bold">Personal:</strong> name, phone, email, NID, gender, religion, blood group, date of birth, photo</li>
          <li><strong className="text-slate-900 font-bold">Employment:</strong> joining date, department, section, designation, branch, grade, reporting manager</li>
          <li><strong className="text-slate-900 font-bold">Salary:</strong> assign a Salary Structure (the grade must have a salary policy linked)</li>
          <li><strong className="text-slate-900 font-bold">Documents:</strong> upload NID copy, photo, contract → Save</li>
        </ul>
        <h3 className={S.h3}>Employee Profile Tabs</h3>
        <Table
          heads={['Tab', 'What it shows']}
          rows={[
            ['Overview', 'Personal info, employment details, current designation'],
            ['Attendance', 'Monthly attendance grid with clock-in/out times'],
            ['Leave Balance', 'Remaining leave days per leave type for current year'],
            ['Payroll History', 'All payroll runs with payslip breakdown'],
            ['Commission History', 'All commission payments received across sales orders'],
            ['Documents', 'Uploaded files (NID, contract, photo)'],
            ['Designation History', 'All past designations with start/end dates'],
            ['Salary History', 'All salary structure changes over time'],
            ['Assigned Assets', 'Current company assets assigned to this employee'],
            ['Employment History', 'Reporting manager history, branch transfers'],
          ]}
        />
        <h3 className={S.h3}>Update Designation</h3>
        <p className={S.p}>Employee profile → Actions → Change Designation (requires employee.change_designation permission) → select new designation, effective date → Save. Old designation is recorded in history.</p>
        <h3 className={S.h3}>Change Password</h3>
        <p className={S.p}>Employee profile → Actions → Reset Password → a reset link is sent to their registered email.</p>
      </div>
    ),
  },

  attendance: {
    title: 'Attendance',
    content: (
      <div>
        <h3 className={S.h3}>Clock In / Clock Out</h3>
        <p className={S.p}>Employees click &quot;Clock In&quot; from their dashboard when they arrive and &quot;Clock Out&quot; when they leave. The system records exact times and calculates work minutes.</p>
        <h3 className={S.h3}>Late Detection</h3>
        <p className={S.p}>If an employee clocks in after the shift start time + late tolerance minutes (configured in Attendance Policy), the record is marked as Late.</p>
        <h3 className={S.h3}>Attendance on Weekends / Holidays</h3>
        <p className={S.p}>If an employee clocks in on a day marked as Weekend or Holiday, the attendance is recorded as Extra Work (is_extra_work = true). These days can be used to apply for Compensatory Leave (Comp-off).</p>
        <h3 className={S.h3}>Manual Entry</h3>
        <p className={S.p}>HR → Attendance → Daily View → click any cell → enter clock-in and clock-out time manually → Save. Requires <em>hr.attendance_create</em> permission.</p>
        <h3 className={S.h3}>Monthly View</h3>
        <p className={S.p}>HR → Attendance → Monthly → shows a grid per employee. Status for each day: Present, Absent, Late, Leave, Weekend, Holiday, Extra Work.</p>
        <h3 className={S.h3}>Work Shifts</h3>
        <p className={S.p}>Configuration → HR Settings → Work Shifts → define shift name, start time, end time, working days (Mon–Fri etc.), late tolerance minutes. Assigned to employees via their Grade&apos;s Attendance Policy.</p>
      </div>
    ),
  },

  leave: {
    title: 'Leave Management',
    content: (
      <div>
        <h3 className={S.h3}>Apply for Leave</h3>
        <p className={S.p}>HR → Leaves → &quot;+ Apply for Leave&quot; (or employee applies from their own dashboard) → select leave type → start date, end date → add reason → Submit. The system checks leave balance — if insufficient, submission is blocked.</p>
        <h3 className={S.h3}>Apply on Behalf</h3>
        <p className={S.p}>Admin / HR managers can apply for leave on behalf of any employee: HR → Leaves → &quot;+ Apply&quot; → select employee → fill details → Submit. It is auto-approved if the submitter has leave approval permission.</p>
        <h3 className={S.h3}>Approve or Reject</h3>
        <p className={S.p}>HR → Leaves → filter by &quot;Pending&quot; → open application → Approve or Reject (add a note if rejecting). Requires <em>hr.leave_approve</em> permission. Approved applications immediately deduct from the employee&apos;s leave balance.</p>
        <h3 className={S.h3}>Compensatory Leave (Comp-off)</h3>
        <p className={S.p}>If an employee worked on a weekend or holiday (Extra Work attendance), they can apply for comp-off:</p>
        <ul className={S.ul}>
          <li>HR → Leaves → &quot;+ Apply&quot; → request_type = Comp-off → select dates</li>
          <li>System picks eligible extra-work attendance days → Submit</li>
          <li>Manager approves → comp-off balance is credited to the employee</li>
          <li>Employee can then use those comp-off days as regular leave</li>
        </ul>
        <h3 className={S.h3}>Leave Balance</h3>
        <p className={S.p}>Each employee&apos;s leave balance per leave type for the current year is shown on their profile → Leave Balance tab, or at HR → Leaves → Balance section.</p>
        <h3 className={S.h3}>Configure Leave Types & Policies</h3>
        <p className={S.p}>Configuration → HR Settings → Leave Types (name each type: Casual, Sick, Annual etc.) → Leave Policies (assign day entitlements per leave type per grade) → link policy to grade.</p>
      </div>
    ),
  },

  payroll: {
    title: 'Payroll',
    content: (
      <div>
        <p className={S.p}>Payroll is processed once per month per company. The system calculates each employee&apos;s net pay automatically.</p>
        <h3 className={S.h3}>Generate Payroll</h3>
        <ul className={S.ul}>
          <li>HR → Payroll → &quot;+ Generate Payroll&quot; → select month and year</li>
          <li>System calculates for all active employees: gross pay (from salary structure components), deductions (absent days, late penalties, loan repayments, PF employee share), net payable</li>
          <li>Draft payrolls can be regenerated — existing drafts for the same month are deleted and recalculated</li>
          <li>Review the payroll sheet — check each employee&apos;s breakdown</li>
          <li>Click &quot;Finalise Payroll&quot; → status changes to Processed (locked)</li>
          <li>Mark as Paid when salaries are disbursed → status changes to Paid</li>
        </ul>
        <h3 className={S.h3}>What is auto-calculated</h3>
        <Table
          heads={['Component', 'Source']}
          rows={[
            ['Basic salary', 'From salary structure — prorated for absent days'],
            ['Allowances', 'House, transport, medical etc. from salary structure'],
            ['PF deduction', 'Employee PF % from PF Policy (linked via Grade)'],
            ['Loan repayment', 'Monthly installment from active loans'],
            ['Late deductions', 'Based on late deduction policy configuration'],
            ['Absent deductions', 'Daily rate × absent days'],
          ]}
        />
        <h3 className={S.h3}>View Payslip</h3>
        <p className={S.p}>HR → Payroll → open a payroll run → click any employee row → full payslip breakdown is shown. Payslip can be exported.</p>
        <h3 className={S.h3}>Correct a Finalised Payroll</h3>
        <p className={S.p}>Finalised (Processed or Paid) payrolls are locked and cannot be edited. To correct: contact Admin → reverse the accounting journal entry → delete the payroll run → regenerate.</p>
        <p className={S.warn}>⚠️ Commission is NOT included in payroll. Commission is paid separately through the Sales Order → Commission Payment flow.</p>
        <h3 className={S.h3}>Salary Structure</h3>
        <p className={S.p}>Configuration → HR Settings → Salary Components (define earnings and deduction items) → Salary Policies (combine components into packages) → assign policy to employee. Change an employee&apos;s salary: Employee profile → Actions → Update Salary Structure → select new structure, effective date → Save (recorded in salary history).</p>
      </div>
    ),
  },

  pf: {
    title: 'Provident Fund (PF)',
    content: (
      <div>
        <p className={S.p}>Provident Fund contributions are auto-deducted from each employee&apos;s payroll every month based on their PF Policy.</p>
        <h3 className={S.h3}>PF Ledger</h3>
        <p className={S.p}>HR → Provident Fund → shows per employee: month, employee contribution amount, employer contribution amount, total contribution, and running accumulated balance.</p>
        <h3 className={S.h3}>Record PF Fund Payment</h3>
        <p className={S.p}>When you actually transfer the accumulated PF to an external provident fund account: HR → Provident Fund → PF Payments tab → &quot;+ Record PF Payment&quot; → amount, date, reference number → Save.</p>
        <h3 className={S.h3}>PF Reports</h3>
        <p className={S.p}>HR → Provident Fund → Reports tab → filter by date range → export to Excel for compliance purposes.</p>
        <h3 className={S.h3}>Configure PF Policy</h3>
        <p className={S.p}>Configuration → HR Settings → PF Policy → set employee contribution % and employer contribution % → link policy to grades. Employees on grades without a PF policy are not included in PF deductions.</p>
      </div>
    ),
  },

  loans: {
    title: 'Loans',
    content: (
      <div>
        <h3 className={S.h3}>Employee Self-Apply</h3>
        <p className={S.p}>Employee goes to My Loans (from their own dashboard) → &quot;+ Apply for Loan&quot; → enter amount, monthly installment, reason → Submit. Goes to Pending status until approved.</p>
        <h3 className={S.h3}>Admin Issue Loan</h3>
        <p className={S.p}>HR → Loans → &quot;+ New Loan&quot; → select employee → amount, monthly installment, disbursement bank account → Save. Admin-created loans are auto-approved and set to Active immediately.</p>
        <h3 className={S.h3}>Approve Pending Loan</h3>
        <p className={S.p}>HR → Loans → filter by Pending → open loan → Approve (requires hr.loan_approve permission) → select bank account to disburse from → Save → status becomes Active.</p>
        <h3 className={S.h3}>Repayment</h3>
        <p className={S.p}>Monthly installments are auto-deducted from the employee&apos;s payroll — no manual entry needed. The outstanding balance reduces each month. Once fully repaid, status changes to Paid automatically.</p>
        <Table
          heads={['Status', 'Meaning']}
          rows={[
            ['Pending', 'Applied, awaiting approval'],
            ['Active', 'Approved, repayments in progress'],
            ['Paid', 'Fully repaid'],
            ['Cancelled', 'Rejected or cancelled'],
          ]}
        />
      </div>
    ),
  },

  bonuses: {
    title: 'Bonuses',
    content: (
      <div>
        <p className={S.p}>Bonuses are generated from a Bonus Policy and added to that month&apos;s payroll for eligible employees.</p>
        <h3 className={S.h3}>Create a Bonus Policy</h3>
        <p className={S.p}>Configuration → HR Settings → Bonus Policies → &quot;+ New Policy&quot; → title, type (Fixed amount or Percentage of basic/gross), value → set eligibility filters (department, section, designation, gender, minimum service period in months) → Save.</p>
        <h3 className={S.h3}>Generate Bonuses</h3>
        <p className={S.p}>HR → Bonuses → &quot;+ Generate Bonus&quot; → select the policy → select month (YYYY-MM format, e.g. 2026-04) → system identifies eligible employees and calculates each person&apos;s bonus → review the list → Confirm. Bonuses are added to that month&apos;s payroll run.</p>
        <p className={S.info}>💡 Common use case: Eid bonus — create a policy for all active employees, type = percentage, value = 100% of basic, generate for the Eid month.</p>
      </div>
    ),
  },

  resignation: {
    title: 'Resignation & Full & Final',
    content: (
      <div>
        <h3 className={S.h3}>Record a Resignation</h3>
        <p className={S.p}>HR → Resignations → &quot;+ New Resignation&quot; → select employee → notice date, expected last working day, reason → Save (status: Pending).</p>
        <h3 className={S.h3}>Approve Resignation</h3>
        <p className={S.p}>Open resignation → Approve → status changes to Approved.</p>
        <h3 className={S.h3}>Calculate Full & Final (F&amp;F)</h3>
        <p className={S.p}>Open approved resignation → &quot;Calculate F&amp;F&quot; → system calculates:</p>
        <ul className={S.ul}>
          <li>Remaining salary for the current month (prorated to last working day)</li>
          <li>Leave encashment (unused leave days × daily rate)</li>
          <li>Loan deductions (outstanding loan balance)</li>
          <li>PF balance (total accumulated provident fund)</li>
          <li>Net payable amount shown</li>
        </ul>
        <p className={S.p}>Review → mark as Settled when payment is made. Employee account is then deactivated.</p>
        <p className={S.warn}>⚠️ Ensure all pending payrolls for this employee are finalised before calculating F&amp;F to get accurate remaining salary.</p>
      </div>
    ),
  },

  assets: {
    title: 'Assets',
    content: (
      <div>
        <p className={S.p}>Track company assets (laptops, vehicles, phones, furniture) and which employee each is assigned to.</p>
        <h3 className={S.h3}>Add an Asset</h3>
        <p className={S.p}>HR → Assets → &quot;+ New Asset&quot; → name, code (unique), type, purchase date, price → Save. Initial status: Available.</p>
        <h3 className={S.h3}>Assign to Employee</h3>
        <p className={S.p}>Open asset → Allocate → select employee, allocation date, notes → Save. Status changes to Assigned. Employee profile → Assigned Assets tab shows their current assets.</p>
        <h3 className={S.h3}>Return Asset</h3>
        <p className={S.p}>Open asset allocation → Mark as Returned → status goes back to Available and is ready to assign to someone else.</p>
        <h3 className={S.h3}>Asset Types</h3>
        <p className={S.p}>Use the type field freely (e.g. Laptop, Mobile Phone, Vehicle, Furniture, Equipment). Filter the asset list by type or status.</p>
      </div>
    ),
  },

  expenses: {
    title: 'Expenses',
    content: (
      <div>
        <p className={S.p}>Record all business expenses — office costs, utilities, project costs, miscellaneous — linked directly to the chart of accounts.</p>
        <h3 className={S.h3}>Create an Expense</h3>
        <ul className={S.ul}>
          <li>Expense → &quot;+ New Expense&quot;</li>
          <li>Select date</li>
          <li>Add expense items: each item needs an account (from chart of accounts), amount, optional project link, and note</li>
          <li>Optionally link to a supplier</li>
          <li>Attach voucher file (receipt/invoice) → Save</li>
        </ul>
        <h3 className={S.h3}>Record Expense Payment</h3>
        <p className={S.p}>Open expense → Payments tab → &quot;+ Record Payment&quot; → amount, select bank account to pay from → Save. Partial payments are tracked — due amount updates automatically.</p>
        <h3 className={S.h3}>Project-linked Expenses</h3>
        <p className={S.p}>Each expense item can be linked to a specific project. This lets you report total costs per project across all expense categories.</p>
        <p className={S.info}>💡 Expenses flow into the accounting module automatically — no need to create a manual journal voucher for recorded expenses.</p>
      </div>
    ),
  },

  requisitions: {
    title: 'Purchase Requisitions',
    content: (
      <div>
        <p className={S.p}>Requisitions are internal purchase requests — a team member requests materials or supplies, a manager approves, and it can be converted to a purchase order.</p>
        <h3 className={S.h3}>Submit a Requisition</h3>
        <p className={S.p}>Requisition → &quot;+ New Requisition&quot; → title, project, priority (Low / Medium / High / Urgent), date → add items (material name, quantity, estimated amount, account) → Save (status: Pending). A unique requisition number (REQ-YYYY-XXXX) is auto-generated.</p>
        <h3 className={S.h3}>Approve & Convert</h3>
        <p className={S.p}>Open requisition → Approve → optionally convert to Purchase Order directly from the approved requisition.</p>
        <h3 className={S.h3}>Filter Requisitions</h3>
        <p className={S.p}>Filter by status (Pending / Approved / Rejected), priority, project, or date range.</p>
      </div>
    ),
  },

  suppliers: {
    title: 'Suppliers & Purchases',
    content: (
      <div>
        <h3 className={S.h3}>Add a Supplier</h3>
        <p className={S.p}>Supplier → &quot;+ New Supplier&quot; → company name, contact person, phone, email, address → Save.</p>
        <h3 className={S.h3}>Create a Purchase</h3>
        <ul className={S.ul}>
          <li>Purchase → &quot;+ New Purchase&quot;</li>
          <li>Select supplier</li>
          <li>Add items: material, quantity, unit price, linked account (from chart of accounts)</li>
          <li>Set payment terms → Save</li>
        </ul>
        <h3 className={S.h3}>Record Purchase Payment</h3>
        <p className={S.p}>Open purchase → Payments tab → &quot;+ Record Payment&quot; → amount, select bank account → Save. Outstanding balance updates automatically.</p>
        <h3 className={S.h3}>Purchase Returns</h3>
        <p className={S.p}>Purchase → Returns → &quot;+ New Return&quot; → link to original purchase → select items and quantities being returned → Save. Stock and accounting are updated accordingly.</p>
        <h3 className={S.h3}>Warehouses</h3>
        <p className={S.p}>Warehouse → &quot;+ New Warehouse&quot; → name, location → Save. Warehouses track where materials are stored. Material stock can be assigned to specific warehouses.</p>
      </div>
    ),
  },

  accounting: {
    title: 'Accounting & Journals',
    content: (
      <div>
        <p className={S.p}>Unova Estate features a full double-entry accounting engine specifically optimized for real estate developers, supporting multi-level cost allocation, project-wise financial statements, and automated banking workflows.</p>

        <h3 className={S.h3}>1. Multi-Level Cost & Profit Centers</h3>
        <p className={S.p}>Structure your accounts to track expenses down to the exact asset level. Post vouchers to five nested cost center tiers: <strong>Company → Project → Tower → Floor → Flat</strong>. This allows you to measure the exact profitability of any individual unit or structural block.</p>
        <p className={S.p}>Group operations into distinct Profit Centers: <em>Residential Sales, Commercial Sales, Land Development, Rental Properties, and Construction Services</em> to run independent business unit reports.</p>

        <h3 className={S.h3}>2. Project-wise Financial Statements</h3>
        <p className={S.p}>Generate complete financial statements filtered by project in one click. Under Accounting → Reports, view project-specific:</p>
        <ul className={S.ul}>
          <li><strong>Balance Sheet:</strong> Project assets (construction materials, land bank value) and liabilities</li>
          <li><strong>Income Statement (P&L):</strong> Actual unit sales revenue minus project-specific costs</li>
          <li><strong>Cash Flow:</strong> Inflow from buyers minus payouts to suppliers and contractors</li>
          <li><strong>Trial Balance:</strong> Consolidated ledger check per project</li>
        </ul>

        <h3 className={S.h3}>3. Budget Control & Live Variance Dashboard</h3>
        <p className={S.p}>Define budgets for every project department: Land, Construction, Marketing, HR, Admin, Legal, and Utilities. If a purchase order or voucher exceeds the allocated budget limit, the system blocks the transaction and sends an instant alert to the CFO.</p>
        <p className={S.p}>Monitor project health on the <strong>Live Variance Dashboard</strong> (e.g. Budget: 50Cr, Spent: 44Cr, Variance: 6Cr) with forecasted cash flow analysis for 30-day, 90-day, and 1-year windows.</p>

        <h3 className={S.h3}>4. Project Cost Auto-Allocation</h3>
        <p className={S.p}>Automatically distribute head office administrative expenses (e.g. corporate office rent, utility bills, management salaries, marketing campaigns) across active projects using dynamic allocation rules (such as ratio of project size or sales volume).</p>

        <h3 className={S.h3}>5. Auto Bank Reconciliation & Cheques</h3>
        <p className={S.p}>Upload monthly bank statements from major local banks (City Bank, BRAC Bank, Dutch-Bangla Bank, EBL, UCB) to automatically match bank ledger transactions with posted vouchers.</p>
        <p className={S.p}>Track post-dated cheques (PDC), receipt clearances, returns, and payment reminders under Cheque Register.</p>

        <h3 className={S.h3}>6. VAT, Tax & AIT Compliance (NBR)</h3>
        <p className={S.p}>Generate monthly NBR VAT Return files, track Advance Income Tax (AIT), Tax Deducted at Source (TDS), and print automated tax certificates for contractors and suppliers.</p>

        <h3 className={S.h3}>7. Multi-Stage Voucher Approval Workflow</h3>
        <p className={S.p}>Ensure internal control compliance. Every transaction follows a custom approval path before posting to the ledger:</p>
        <p className={S.p} className="text-center font-bold text-slate-800 text-xs">Account Officer (Prepare) → Account Manager (Verify) → CFO (Approve) → Managing Director (Sign-off)</p>

        <h3 className={S.h3}>8. AI-Powered Accounting Audit Alerts</h3>
        <p className={S.p}>Our built-in AI assistant runs automated background checks on your ledger books to detect anomalies:</p>
        <ul className={S.ul}>
          <li><strong>Wrong Entry Detection:</strong> Alerts if a transaction is posted to an unusual ledger account based on historic patterns</li>
          <li><strong>Duplicate Payment Prevention:</strong> Flags matching voucher amounts or vendor bills</li>
          <li><strong>Expense Anomaly & Fraud Alerts:</strong> Warns when expenses exceed normal deviation limits</li>
        </ul>
        <p className={S.info}>💡 Audit Trail logs every ledger change, storing the exact Timestamp, User ID, Old Value, and New Value for compliance audits.</p>
      </div>
    ),
  },

  banks: {
    title: 'Banks & Accounts',
    content: (
      <div>
        <p className={S.p}>Bank accounts are used throughout the system for recording where money comes from and goes to — sales payments, commission payments, expense payments, payroll disbursements, PF payments, purchase payments.</p>
        <h3 className={S.h3}>Add a Bank Account</h3>
        <p className={S.p}>Configuration → Banks → &quot;+ New Bank&quot; → bank name, account number, opening balance → Save.</p>
        <h3 className={S.h3}>Chart of Accounts vs Banks</h3>
        <p className={S.p}>Bank accounts in Configuration → Banks are the physical bank accounts your company holds. They are linked to corresponding Asset accounts in the Chart of Accounts. When you record a payment using a bank account, the corresponding accounting entry is created automatically.</p>
        <p className={S.info}>💡 Always add all your company bank accounts before starting to record any payments — otherwise you won&apos;t be able to select the correct account.</p>
      </div>
    ),
  },

  campaigns: {
    title: 'Campaigns',
    content: (
      <div>
        <p className={S.p}>Send bulk Email, SMS, or WhatsApp messages to your lead database directly from Unova Estate.</p>
        <h3 className={S.h3}>Create a Campaign</h3>
        <ul className={S.ul}>
          <li>Marketing → Campaigns → &quot;+ New Campaign&quot;</li>
          <li>Name and description</li>
          <li>Select channel: Email / SMS / WhatsApp</li>
          <li>Compose message or select a saved template</li>
          <li>Select audience: filter leads by category, source, status, date range</li>
          <li>Optionally assign to a Lead Source (all leads from campaign are auto-tagged)</li>
          <li>Schedule: send now or pick a future date/time → Save &amp; Send</li>
        </ul>
        <h3 className={S.h3}>Campaign Analytics</h3>
        <p className={S.p}>Campaign dashboard shows per campaign: total leads reached, sales generated from this campaign, sent count, open count (Email only), click count (Email only), delivery status (SMS/WhatsApp).</p>
        <p className={S.warn}>⚠️ Email, SMS, and WhatsApp channels must be configured at Configuration → API Integrations before campaigns can be sent.</p>
      </div>
    ),
  },

  templates: {
    title: 'Templates',
    content: (
      <div>
        <p className={S.p}>Templates save reusable message content for Email, SMS, and WhatsApp campaigns and auto-communication rules.</p>
        <h3 className={S.h3}>Create a Template</h3>
        <p className={S.p}>Marketing → Templates → select tab (Email / SMS / WhatsApp) → &quot;+ New Template&quot; → name → write content → use merge tags to personalise → Save.</p>
        <h3 className={S.h3}>Merge Tags</h3>
        <Table
          heads={['Tag', 'Replaced with']}
          rows={[
            ['{{name}}', "Lead contact's full name"],
            ['{{phone}}', "Lead contact's phone number"],
            ['{{company}}', "Lead's linked organization name"],
            ['{{agent}}', 'Name of the assigned sales agent'],
          ]}
        />
        <p className={S.info}>💡 For WhatsApp, message templates must be pre-approved by Meta before they can be used for outbound campaigns. Session replies (within 24h) can use any text.</p>
      </div>
    ),
  },

  'lead-forms': {
    title: 'Lead Forms',
    content: (
      <div>
        <p className={S.p}>Public web forms that auto-create leads in the CRM when submitted. Share on your website, Facebook ads, or WhatsApp.</p>
        <h3 className={S.h3}>Create a Form</h3>
        <ul className={S.ul}>
          <li>Marketing → Lead Forms → &quot;+ New Form&quot;</li>
          <li>Name and slug (URL path, e.g. &quot;apartment-enquiry&quot;)</li>
          <li>Add fields: Name, Phone, Email, Message — mark required fields</li>
          <li>Set default lead category and source (all submissions tagged automatically)</li>
          <li>Publish → copy the public URL</li>
        </ul>
        <h3 className={S.h3}>How submissions work</h3>
        <p className={S.p}>When someone submits the form, a lead is automatically created in CRM with: the submitted contact details, the configured category and source, and status = New. No manual entry needed.</p>
        <p className={S.info}>💡 Create a separate form for each campaign channel (Facebook, Website, Billboard) with a different source. This tracks which channel generates the best leads.</p>
      </div>
    ),
  },

  'auto-comm': {
    title: 'Auto Communication',
    content: (
      <div>
        <p className={S.p}>Automated message sequences triggered by lead events — set up once, runs automatically.</p>
        <h3 className={S.h3}>Create a Rule</h3>
        <ul className={S.ul}>
          <li>Configuration → Auto Communication → &quot;+ New Rule&quot;</li>
          <li>Select trigger (e.g. lead created in a specific category)</li>
          <li>Add sequence steps: Step 1 (channel: SMS/Email/WhatsApp, template, delay in hours/days after trigger), Step 2, Step 3...</li>
          <li>Activate the rule</li>
        </ul>
        <h3 className={S.h3}>Example Sequence</h3>
        <Table
          heads={['Step', 'Trigger delay', 'Channel', 'Message']}
          rows={[
            ['1', 'Immediately', 'SMS', 'Thank you for your enquiry, {{name}}! We will contact you shortly.'],
            ['2', '2 hours', 'WhatsApp', 'Hi {{name}}, our agent will call you today. — {{agent}}'],
            ['3', '3 days', 'Email', 'Still interested in our property? Book a site visit...'],
          ]}
        />
        <h3 className={S.h3}>Tracking</h3>
        <p className={S.p}>Marketing → Automations → click any rule → see delivery status, open rates, and click rates per step per lead.</p>
      </div>
    ),
  },

  'config-general': {
    title: 'General Settings',
    content: (
      <div>
        <Table
          heads={['Setting', 'Where', 'What to configure']}
          rows={[
            ['Company Info', 'Configuration → Company Info', 'Name, logo, address, tax ID — appears on invoices'],
            ['Lead Categories', 'Configuration → Lead Category', 'Pipeline stage names (New, Contacted, Site Visit, etc.)'],
            ['Lead Sources', 'Configuration → Lead Source', 'Where leads come from (Facebook, Website, Referral, etc.)'],
            ['VAT Settings', 'Configuration → VAT Setting', 'VAT percentage and application rules for invoices'],
            ['Designations', 'Configuration → Designations', 'Job titles used in employee records'],
            ['Property Types', 'Configuration → Property Types', 'Apartment, Commercial, Land, etc.'],
            ['Measurement Units', 'Configuration → Measurement Units', 'sqft, sqm, katha, bigha, etc.'],
            ['Holiday Calendar', 'Configuration → Holiday Calendar', 'Add public holidays with date range — auto-marks attendance as Holiday'],
            ['Locations', 'Configuration → Location', 'Division → District → Upazila → Union hierarchy for Bangladesh'],
            ['Challenges', 'Configuration → Challenges', 'Tracking reasons why leads were lost'],
          ]}
        />
      </div>
    ),
  },

  'config-hr': {
    title: 'HR Settings',
    content: (
      <div>
        <p className={S.p}>All HR configuration is at Configuration → HR Settings.</p>
        <Table
          heads={['Setting', 'What to configure']}
          rows={[
            ['Work Shifts', 'Shift name, start/end time, working days, late tolerance minutes'],
            ['Leave Types', 'Leave names: Casual Leave, Sick Leave, Annual Leave, etc.'],
            ['Leave Policies', 'Assign leave types with annual day entitlements per grade'],
            ['Salary Components', 'Earnings (Basic, House Allowance, Transport, Medical) and Deductions'],
            ['Salary Policies', 'Named packages combining salary components — assigned to employees'],
            ['Grades', 'Link a grade to Attendance Policy, Leave Policy, PF Policy, Overtime Policy'],
            ['PF Policy', 'Employee contribution % and employer contribution % per grade'],
            ['Overtime Policy', 'Multiplier for overtime hours (e.g. 1.5× or 2× hourly rate)'],
            ['Bonus Policies', 'Bonus templates (fixed or % of basic/gross) with eligibility rules'],
            ['Late Deduction', 'Rules for deducting from salary for late arrivals'],
          ]}
        />
        <p className={S.warn}>⚠️ Grades are the central hub — each grade links all HR policies together. Employees must be assigned a grade for payroll, leave, PF, and attendance policies to apply correctly.</p>
      </div>
    ),
  },

  integrations: {
    title: 'API Integrations',
    content: (
      <div>
        <p className={S.p}>Configuration → API Integrations. These must be configured before using the respective marketing and notification features.</p>
        <h3 className={S.h3}>Email (SMTP)</h3>
        <Table
          heads={['Field', 'Description']}
          rows={[
            ['SMTP Host', 'e.g. smtp.gmail.com or smtp.resend.com'],
            ['Port', '587 (TLS) or 465 (SSL)'],
            ['Username', 'Your SMTP login email'],
            ['Password', 'SMTP password or app password'],
            ['From Name', 'Sender name shown in email (e.g. Unova Estate)'],
            ['From Email', 'Sender address (e.g. noreply@unovaestate.com)'],
          ]}
        />
        <h3 className={S.h3}>SMS Gateway</h3>
        <Table
          heads={['Field', 'Description']}
          rows={[
            ['API URL', 'Your SMS provider REST API endpoint'],
            ['API Key', 'Authentication key from your provider'],
            ['Sender ID', 'Pre-approved sender name (e.g. UNOVA)'],
          ]}
        />
        <h3 className={S.h3}>WhatsApp (Meta Business API)</h3>
        <Table
          heads={['Field', 'Description']}
          rows={[
            ['Meta App ID', 'From Meta Developer Console'],
            ['WhatsApp Business Account ID', 'From Meta Business Manager'],
            ['Phone Number ID', 'The approved WhatsApp phone number ID'],
            ['Access Token', 'Long-lived token from Meta'],
          ]}
        />
        <p className={S.warn}>⚠️ For WhatsApp, outbound campaign messages must use Meta-approved message templates. Free-form replies within a 24-hour window can use any text.</p>
      </div>
    ),
  },

  'file-manager': {
    title: 'File Manager',
    content: (
      <div>
        <p className={S.p}>The File Manager stores documents and media that can be attached to records across the system.</p>
        <h3 className={S.h3}>Using Files</h3>
        <ul className={S.ul}>
          <li>Files → create folders for organisation → Upload → select file → Save</li>
          <li>Files can be attached to: employee documents, expense vouchers, lead notes, property floor plans</li>
          <li>Download any file from the file list</li>
          <li>Delete files that are no longer needed</li>
        </ul>
        <p className={S.info}>💡 Use folders to organise by type: Employee Documents, Property Floor Plans, Expense Receipts, Lead Attachments.</p>
      </div>
    ),
  },

  reports: {
    title: 'Reports',
    content: (
      <div>
        <p className={S.p}>Navigate: Report from the sidebar. All reports can be filtered and exported to Excel/CSV.</p>
        <Table
          heads={['Report', 'Filters available']}
          rows={[
            ['Pipeline Activity', 'Date range, agent, lead category, source'],
            ['Sales Report', 'Date range, status, agent'],
            ['Commission Report', 'Agent, sale, date range'],
            ['Payroll Report', 'Month/year — per run, exportable'],
            ['PF Ledger Report', 'Employee, date range — export for compliance'],
            ['Expense Report', 'Supplier, project, date range'],
            ['Purchase Report', 'Supplier, date range'],
            ['Cashflow Statement', 'Date range'],
          ]}
        />
        <p className={S.info}>💡 For payroll and PF reports, go to HR → Payroll or HR → Provident Fund directly — each run has its own export button.</p>
      </div>
    ),
  },

  faq: {
    title: 'FAQ',
    content: (
      <div className="space-y-3">
        {[
          { q: 'Can I import existing leads from a spreadsheet?', a: 'Yes. CRM → Leads → Import → upload a CSV file. Download the template first to ensure correct column format.' },
          { q: 'Commission কীভাবে pay করব?', a: 'Commission payroll এর সাথে যায় না। Sales order খুলুন → agent এর commission row → "+ Record Commission Payment" → amount দিন → bank account select করুন → Save।' },
          { q: 'Payroll finalize করার পর ভুল পেলে কী করব?', a: 'Finalized payroll edit করা যায় না। Admin কে বলুন accounting journal entry reverse করতে, তারপর payroll run delete করে পুনরায় generate করতে হবে।' },
          { q: 'একটা sale এ multiple agent commission পাবে?', a: 'হ্যাঁ। Sales order create করার সময় multiple agent assign করা যায়, প্রত্যেকের আলাদা commission type ও value দিন।' },
          { q: 'Unit sold দেখাচ্ছে কিন্তু sale cancel করতে চাই?', a: 'Admin কে বলুন sales order cancel করতে। Order cancel হলে unit status আবার Available হয়ে যাবে।' },
          { q: 'Employee নিজে leave apply করতে পারে?', a: 'হ্যাঁ। Employee তাদের নিজের dashboard থেকে leave apply করতে পারে। Leave type select করে date দিয়ে submit করলে manager এর কাছে approval এর জন্য যাবে।' },
          { q: 'Comp-off কীভাবে কাজ করে?', a: 'কোনো employee weekend বা holiday তে কাজ করলে সেটা Extra Work হিসেবে record হয়। সেই দিনগুলো দিয়ে comp-off apply করা যায়। HR → Leaves → Apply → request type = Comp-off → date select করুন।' },
          { q: 'Can I export reports to Excel?', a: 'Yes. Every report page has an Export button. Payroll runs and PF ledger can also be exported from HR → Payroll and HR → Provident Fund respectively.' },
          { q: 'WhatsApp campaign কাজ করছে না?', a: 'Configuration → API Integrations → WhatsApp check করুন। Meta App ID, Business Account ID, Phone Number ID, এবং Access Token সব correct কিনা verify করুন। Outbound messages Meta-approved template ছাড়া পাঠানো যাবে না।' },
          { q: 'নতুন employee add করলে payroll এ আসছে না?', a: 'Employee এর Grade এবং Salary Structure assign করা আছে কিনা দেখুন। Grade ছাড়া বা salary structure ছাড়া employee payroll generate এ include হবে না।' },
        ].map((item, i) => (
          <div key={i} className="px-4 py-3.5 bg-white border border-slate-200 rounded-xl shadow-sm">
            <p className="text-sm font-bold text-slate-800 mb-1">{item.q}</p>
            <p className="text-xs text-slate-500 leading-relaxed">{item.a}</p>
          </div>
        ))}
      </div>
    ),
  },

  contact: {
    title: 'Contact Support',
    content: (
      <div>
        <p className="text-sm text-slate-500 mb-5">Our support team is available Sunday – Thursday, 9 am – 6 pm (Bangladesh Standard Time).</p>
        <div className="grid sm:grid-cols-2 gap-3">
          {[
            { icon: '💬', label: 'WhatsApp', value: '+880 1766-774016', href: 'https://wa.me/8801766774016', desc: 'Fastest response — usually within minutes' },
            { icon: '📧', label: 'Email Support', value: 'support@unovaestate.com', href: 'mailto:support@unovaestate.com', desc: 'For detailed technical queries' },
            { icon: '📞', label: 'Phone', value: '+880 1766-774016', href: 'tel:+8801766774016', desc: 'Available during office hours' },
            { icon: '📍', label: 'Office', value: 'Flat: B-5, House: 12, Road: 02, Block: J, Baridhara, Vatara, Dhaka-1212', href: null, desc: 'By appointment only' },
          ].map((c, i) => (
            <div key={i} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-lg">{c.icon}</span>
                <p className="text-xs font-bold text-slate-800">{c.label}</p>
              </div>
              {c.href ? (
                <a href={c.href} target={c.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                  className="text-sm text-indigo-600 hover:text-indigo-500 transition-colors font-medium">{c.value}</a>
              ) : (
                <p className="text-sm text-slate-600">{c.value}</p>
              )}
              <p className="text-xs text-gray-500 mt-1">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
};

export default function DocsClient() {
  const [active, setActive]           = useState('introduction');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [expandedGroups, setExpandedGroups] = useState(() => {
    // Find parent group of initial active item
    const initialActive = 'introduction';
    const defaultExpanded = {};
    NAV.forEach(group => {
      if (group.items.some(item => item.id === initialActive)) {
        defaultExpanded[group.group] = true;
      }
    });
    return defaultExpanded;
  });

  useEffect(() => {
    const parentGroup = NAV.find(g => g.items.some(i => i.id === active));
    if (parentGroup) {
      setExpandedGroups(prev => ({
        ...prev,
        [parentGroup.group]: true
      }));
    }
  }, [active]);

  const section = SECTIONS[active];
  const allItems = NAV.flatMap(g => g.items);
  const idx  = allItems.findIndex(i => i.id === active);
  const prev = allItems[idx - 1];
  const next = allItems[idx + 1];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">

      {/* Top bar */}
      <header className="fixed top-0 left-0 right-0 z-50 h-14 border-b border-slate-200 bg-white flex items-center px-5 gap-4">
        <Link href="/" className="flex items-center mr-4 flex-shrink-0">
          <img src="/unova-real-estate-software-logo.png" alt="Unova Estate Real Estate CRM & ERP Software Logo" className="h-8 w-auto" loading="eager" />
        </Link>
        <div className="h-4 w-px bg-slate-200 hidden sm:block" />
        <span className="text-xs text-slate-500 hidden sm:block">Documentation</span>
        <div className="flex-1" />
        <button onClick={() => setSidebarOpen(v => !v)} className="md:hidden p-2 text-slate-500 hover:text-slate-900 transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <Link href="/" className="text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors hidden sm:block">← Back to site</Link>
      </header>

      <div className="flex pt-14">

        {/* Sidebar */}
        <aside className={`fixed md:sticky top-14 left-0 z-40 h-[calc(100vh-3.5rem)] w-72 md:w-80 flex-shrink-0 bg-slate-50 md:bg-transparent border-r border-slate-200 overflow-y-auto custom-scrollbar-thin transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
          <nav className="p-4 space-y-3.5">
            {NAV.map(group => (
              <div key={group.group} className="space-y-1">
                <button
                  onClick={() => {
                    setExpandedGroups(prev => {
                      const isExpanded = !!prev[group.group];
                      return isExpanded ? {} : { [group.group]: true };
                    });
                  }}
                  className="w-full flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-slate-700 transition-colors py-1 text-left"
                >
                  <span>{group.group}</span>
                  <svg
                    className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                      expandedGroups[group.group] ? 'rotate-90' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                
                <div
                  className={`pl-1 transition-all duration-300 overflow-hidden ${
                    expandedGroups[group.group] ? 'max-h-[500px] opacity-100 mt-1 mb-3.5' : 'max-h-0 opacity-0 pointer-events-none'
                  }`}
                >
                  <ul className="space-y-0.5 border-l border-slate-200/80 pl-2">
                    {group.items.map(item => (
                      <li key={item.id}>
                        <button
                          onClick={() => { setActive(item.id); setSidebarOpen(false); }}
                          className={`w-full text-left px-3 py-1.5 text-xs md:text-sm transition-all ${
                            active === item.id
                              ? 'text-indigo-600 font-black pl-3 border-l-2 border-indigo-600 -ml-[1px]'
                              : 'text-slate-600 hover:text-slate-950 font-medium hover:pl-2'
                          }`}
                        >
                          {item.label}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </nav>
        </aside>

        {/* Mobile overlay */}
        {sidebarOpen && <div className="fixed inset-0 z-30 bg-slate-900/20 md:hidden" onClick={() => setSidebarOpen(false)} />}

        {/* Content */}
        <main className="flex-1 min-w-0 px-6 md:px-12 py-10 max-w-3xl">
          {section && (
            <>
              <h1 className="text-2xl font-black text-slate-900 mb-6 pb-5 border-b border-slate-200">{section.title}</h1>
              {section.content}
            </>
          )}

          {/* Prev / Next */}
          <div className="mt-14 pt-6 border-t border-slate-200 flex justify-between gap-4">
            <div>
              {prev && (
                <button onClick={() => setActive(prev.id)} className="flex flex-col items-start gap-0.5 group text-left">
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest">Previous</span>
                  <span className="text-sm text-slate-500 group-hover:text-indigo-600 transition-colors">← {prev.label}</span>
                </button>
              )}
            </div>
            <div>
              {next && (
                <button onClick={() => setActive(next.id)} className="flex flex-col items-end gap-0.5 group text-right">
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest">Next</span>
                  <span className="text-sm text-slate-500 group-hover:text-indigo-600 transition-colors">{next.label} →</span>
                </button>
              )}
            </div>
          </div>
        </main>
      </div>

      <DocsAskAI />
    </div>
  );
}
