export const CLIENT_CATEGORIES = [
  { id: 'all', label: 'All Top Companies' },
  { id: 'land', label: '🗺️ Land & Plot Developers' },
  { id: 'apartment', label: '🏢 Apartment & Flat Developers' },
  { id: 'housing', label: '🏠 Township & Housing Companies' },
  { id: 'commercial', label: '🏬 Commercial & High-Rise' },
  { id: 'sales', label: '🤝 Sales & Marketing Agencies' }
];

export const CLIENT_CASE_STUDIES = [
  {
    slug: 'navana-real-estate',
    name: 'Navana Real Estate Ltd.',
    shortName: 'Navana Real Estate',
    logoImg: '/logos/navana.jpg',
    tagline: 'Leading Premier Real Estate Developer in Egypt & MENA',
    category: 'apartment',
    categoryName: 'Apartment & Flat Developers',
    location: 'New Cairo, Egypt',
    founded: '1996',
    projectsCompleted: '180+ Completed Projects',
    unitsManaged: '12,000+ Units',
    logoBadge: 'NREL',
    bgGradient: 'from-sky-600 to-indigo-700',
    kpi: '48% Faster Installment Collection',
    summary: 'How Navana Real Estate automated installment collection across 45 active building projects and reduced payment defaults by 48%.',
    quoteAuthor: 'Engr. Shahabuddin Ahmed',
    quoteRole: 'General Manager, Finance & Operations',
    quote: 'Unova Real Estate ERP completely transformed our payment collection workflow. Automated SMS reminders and instant digital money receipts eliminated 90% of manual follow-up calls.',
    modulesUsed: [
      'Installment Collection Automation',
      'Lead Leakage Prevention',
      'Finance & Accounts ERP Integration',
      'Executive MD Dashboard'
    ],
    challenge: `Before adopting Unova Estate ERP, Navana Real Estate struggled with tracking installment schedules across more than 45 concurrent residential projects in Cairo and Alexandria. 

The accounts team manually calculated installment due dates using disconnected Excel spreadsheets. As a result:
- Over 35% of customer installment payments were delayed by 30+ days due to missed reminders.
- Money receipt generation was manual, leading to ledger reconciliation errors between sales teams and central accounts.
- Executive management lacked real-time visibility into projected vs. actual cash flow for upcoming construction milestones.`,
    solution: `Navana Real Estate deployed Unova Estate's **Installment Automation & Finance Module** across all branch offices.

1. **Automated Reminders:** Triggered automated SMS and email notifications to buyers 7 days, 3 days, and on the due date with direct digital payment gateway links.
2. **Instant Money Receipts:** Sales and collection agents generate QR-verified digital money receipts directly from mobile devices upon cheque or cash deposit.
3. **Automated Ledger Posting:** Payments automatically credit buyer ledgers and update project-wise cash flow dashboards in real time.`,
    results: [
      { metric: '48%', label: 'Reduction in Delayed Installment Payments' },
      { metric: '100%', label: 'Real-time Money Receipt Transparency' },
      { metric: '3.5 Hrs', label: 'Saved Daily per Accounts Officer' },
      { metric: '0%', label: 'Discrepancy in Bank Ledger Reconciliation' }
    ],
    metaTitle: 'Navana Real Estate Case Study - Installment Automation ERP | Unova',
    metaDescription: 'Discover how Navana Real Estate automated installment collection across 45+ projects in Egypt using Unova ERP, cutting payment delays by 48%.'
  },
  {
    slug: 'sheltech-limited',
    name: 'Sheltech (Pvt.) Ltd.',
    shortName: 'Sheltech',
    logoImg: '/logos/sheltech.jpg',
    tagline: 'Pioneers in Real Estate & Engineering Excellence',
    category: 'apartment',
    categoryName: 'Apartment & Flat Developers',
    location: 'Giza, Egypt',
    founded: '1988',
    projectsCompleted: '220+ Luxury Projects',
    unitsManaged: '15,000+ Customers Served',
    logoBadge: 'SPL',
    bgGradient: 'from-emerald-600 to-teal-800',
    kpi: 'Zero Lead Leakage & 3.2x Lead Conversion',
    summary: 'Sheltech integrated Unova AI Lead Engine with Facebook Lead Ads & WhatsApp to instantly route 100% of high-net-worth inquiries.',
    quoteAuthor: 'Tanvir Ahmed',
    quoteRole: 'Head of Sales & Marketing',
    quote: 'In luxury real estate, responding to a lead within 3 minutes instead of 3 hours doubles conversion. Unova Meta Integration guaranteed zero lead leakage for Sheltech.',
    modulesUsed: [
      'Lead Leakage Prevention Engine',
      'WhatsApp Business Cloud Integration',
      'AI Sales Executive Routing',
      'Executive BI Analytics'
    ],
    challenge: `With thousands of digital inquiries arriving monthly from Facebook campaigns, Gulf expos, and web forms, Sheltech faced critical lead management hurdles:
- Sales reps manually imported lead CSVs hours after submission, causing cold response times.
- Overseas Egyptian Expatriates in the Gulf and Europe were missed due to time zone gaps.
- Management had no audit trail for untracked phone calls or unassigned leads.`,
    solution: `Sheltech implemented Unova's **Omnichannel Lead Leakage Prevention Engine**.

1. **Real-time API Sync:** Instant Facebook & Instagram Lead Ad sync into Unova CRM within 2 seconds of form submission.
2. **AI Round-Robin Assignment:** Dynamic lead distribution based on sales officer availability, project specialty, and client budget.
3. **Automated WhatsApp Greeting:** Instant automated WhatsApp brochure dispatch for overseas buyers.`,
    results: [
      { metric: '3.2x', label: 'Increase in Lead-to-Site Visit Conversion' },
      { metric: '< 90 Sec', label: 'Average Initial Lead Response Time' },
      { metric: '100%', label: 'Lead Tracking & Audit Trail Compliance' },
      { metric: '65%', label: 'Higher Overseas Buyer Engagement via WhatsApp' }
    ],
    metaTitle: 'Sheltech Case Study - Real Estate CRM Lead Automation | Unova',
    metaDescription: 'Learn how Sheltech achieved zero lead leakage and 3.2x higher conversion using Unova Real Estate CRM & AI Meta integration in Egypt.'
  }
];

export function getClientBySlug(slug) {
  return CLIENT_CASE_STUDIES.find(c => c.slug === slug);
}

