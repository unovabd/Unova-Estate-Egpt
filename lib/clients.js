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
    tagline: 'Leading Premier Real Estate Developer in Bangladesh',
    category: 'apartment',
    categoryName: 'Apartment & Flat Developers',
    location: 'Gulshan-1, Dhaka',
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
    challenge: `Before adopting Unova Estate ERP, Navana Real Estate struggled with tracking installment schedules across more than 45 concurrent residential projects in Dhaka and Chattogram. 

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
    metaDescription: 'Discover how Navana Real Estate automated installment collection across 45+ projects in Bangladesh using Unova ERP, cutting payment delays by 48%.'
  },
  {
    slug: 'sheltech-limited',
    name: 'Sheltech (Pvt.) Ltd.',
    shortName: 'Sheltech',
    logoImg: '/logos/sheltech.jpg',
    tagline: 'Pioneers in Real Estate & Engineering Excellence',
    category: 'apartment',
    categoryName: 'Apartment & Flat Developers',
    location: 'West Panthapath, Dhaka',
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
    challenge: `With thousands of digital inquiries arriving monthly from Facebook campaigns, NRB expos, and web forms, Sheltech faced critical lead management hurdles:
- Sales reps manually imported lead CSVs hours after submission, causing cold response times.
- NRB (Non-Resident Bangladeshi) prospects in North America and Europe were missed due to time zone gaps.
- Management had no audit trail for untracked phone calls or unassigned leads.`,
    solution: `Sheltech implemented Unova's **Omnichannel Lead Leakage Prevention Engine**.

1. **Real-time API Sync:** Instant Facebook & Instagram Lead Ad sync into Unova CRM within 2 seconds of form submission.
2. **AI Round-Robin Assignment:** Dynamic lead distribution based on sales officer availability, project specialty, and client budget.
3. **Automated WhatsApp Greeting:** Instant automated WhatsApp brochure dispatch for overseas buyers.`,
    results: [
      { metric: '3.2x', label: 'Increase in Lead-to-Site Visit Conversion' },
      { metric: '< 90 Sec', label: 'Average Initial Lead Response Time' },
      { metric: '100%', label: 'Lead Tracking & Audit Trail Compliance' },
      { metric: '65%', label: 'Higher NRB Buyer Engagement via WhatsApp' }
    ],
    metaTitle: 'Sheltech Case Study - Real Estate CRM Lead Automation | Unova',
    metaDescription: 'Learn how Sheltech achieved zero lead leakage and 3.2x higher conversion using Unova Real Estate CRM & AI Meta integration in Bangladesh.'
  },
  {
    slug: 'concord-real-estate',
    name: 'Concord Real Estate & Building Products',
    shortName: 'Concord Group',
    logoImg: '/logos/concord.jpg',
    tagline: 'Bangladesh Largest Real Estate & Construction Conglomerate',
    category: 'commercial',
    categoryName: 'Commercial & High-Rise',
    location: 'Khawaja Palace, Mohakhali, Dhaka',
    founded: '1973',
    projectsCompleted: '1,200+ Landmark Projects',
    unitsManaged: 'Mega Township & High-Rise Infrastructure',
    logoBadge: 'CRE',
    bgGradient: 'from-amber-600 to-rose-700',
    kpi: 'Construction Cost Optimization & Billing Sync',
    summary: 'Concord digitized material procurement, contractor milestone billing, and unit handovers across mega commercial projects with Unova.',
    quoteAuthor: 'Mahbubur Rahman',
    quoteRole: 'Director, Engineering & Project Delivery',
    quote: 'Managing multi-story commercial towers requires live site tracking. Unova ERP synchronized site engineering progress with contractor payments flawlessly.',
    modulesUsed: [
      'Construction Milestone Billing ERP',
      'Rebar & Cement Inventory Tracker',
      'Sub-Contractor Audit Manager',
      'Unit Handover & Inspection App'
    ],
    challenge: `Concord manages complex high-rise commercial towers and satellite townships requiring precise material allocation:
- Disconnect between site engineers estimating concrete/steel requisitions and central procurement.
- Sub-contractor milestone bills took weeks to verify manually against structural progress.
- Delays in customer unit handover punch-listing caused extended holding costs.`,
    solution: `Concord onboarded Unova's **Construction ERP & Milestone Management System**.

1. **Mobile Site Inspection App:** Site supervisors upload geotagged structural progress photos directly triggering milestone billing gates.
2. **Material Requisition Matching:** Auto-match purchase orders with site store delivery receipts to stop material theft and wastage.
3. **Digital Handover Punch List:** Buyers complete digital snagging lists on tablets during final flat inspection.`,
    results: [
      { metric: '14%', label: 'Reduction in Material Wastage Costs' },
      { metric: '12 Days', label: 'Faster Sub-Contractor Bill Processing' },
      { metric: '99.2%', label: 'On-Time Customer Handover Satisfaction' },
      { metric: 'Real-Time', label: 'Multi-Project Executive Cost Visibility' }
    ],
    metaTitle: 'Concord Real Estate Case Study - Construction ERP | Unova',
    metaDescription: 'See how Concord Group streamlined high-rise construction billing and reduced site material wastage by 14% using Unova Real Estate Construction ERP.'
  },
  {
    slug: 'assure-group',
    name: 'Assure Group',
    shortName: 'Assure Development',
    logoImg: '/logos/assure.svg',
    tagline: 'Modern Architecture & Eco-Friendly Living',
    category: 'apartment',
    categoryName: 'Apartment & Flat Developers',
    location: 'Gulshan-2, Dhaka',
    founded: '2007',
    projectsCompleted: '95+ Completed Complexes',
    unitsManaged: '4,200+ Premium Flats',
    logoBadge: 'AG',
    bgGradient: 'from-purple-600 to-indigo-800',
    kpi: 'Joint-Venture Landowner Share Transparency',
    summary: 'Assure Group eliminated landowner disputes by implementing Unova Joint-Venture Distribution & Customer Portal.',
    quoteAuthor: 'Md. Sheikh Shafi',
    quoteRole: 'Head of Joint-Venture Legal & Sales',
    quote: 'Landowner trust is key in Dhaka real estate. Unova automated ratio splits (e.g. 50-50 or 60-40) and gave landowners a dedicated portal to view their assigned units.',
    modulesUsed: [
      'Joint-Venture Landowner Share Manager',
      'Landowner Transparency Portal',
      'Unit Reservation & Swap Lock',
      'Automated Sale Deed Generator'
    ],
    challenge: `Assure Group specializes in joint-venture land developments in prime Dhaka zones:
- Manual tracking of landowner flat allocations led to unit reservation conflicts between sales teams and landowner shares.
- Landowners requested frequent manual updates on construction progress, customer booking status, and deed execution.
- Complex ratio adjustments (e.g., parking space allocations vs. residential floor area) caused legal paperwork delays.`,
    solution: `Assure Group deployed **Unova Joint-Venture Distribution Suite**.

1. **Automated Unit Matrix:** System locks assigned landowner units upon joint-venture agreement sign-off.
2. **Landowner Self-Service Portal:** Landowners log into a mobile-friendly view to monitor building milestones, assigned parking slots, and sale progress.
3. **Automated Legal Deed Generation:** One-click generation of power-of-attorney and deed documents.`,
    results: [
      { metric: '0 Conflicts', label: 'Unit Reservation & Allocation Disputes' },
      { metric: '100%', label: 'Landowner Satisfaction & Legal Accuracy' },
      { metric: '85%', label: 'Fewer Routine Landowner Inquiry Calls' },
      { metric: '3x', label: 'Faster Joint-Venture Sign-off Velocity' }
    ],
    metaTitle: 'Assure Group Case Study - Joint-Venture Land Management ERP | Unova',
    metaDescription: 'Discover how Assure Group automated joint-venture landowner share management and eliminated allocation conflicts using Unova Estate ERP.'
  },
  {
    slug: 'amin-mohammad-lands',
    name: 'Amin Mohammad Lands Development Ltd.',
    shortName: 'Amin Mohammad Group',
    logoImg: '/logos/amin_mohammad.svg',
    tagline: 'Leader in Mega Land Townships & Plot Projects',
    category: 'land',
    categoryName: 'Land & Plot Developers',
    location: 'Dhanmondi, Dhaka',
    founded: '1993',
    projectsCompleted: '35+ Mega Model Towns',
    unitsManaged: '45,000+ Land Plots',
    logoBadge: 'AMGD',
    bgGradient: 'from-emerald-700 to-green-900',
    kpi: 'CS/SA/RS Dag Registry & Plot Mapping Automation',
    summary: 'Amin Mohammad Group digitized 45,000+ plots across multi-sector model towns with Unova Land Registry ERP.',
    quoteAuthor: 'Syed Mohammad Ali',
    quoteRole: 'Chief Operating Officer, Land Division',
    quote: 'Plot land development requires tracking Dag, Khatian, and Mouza numbers seamlessly. Unova gives us complete digital map control from master land acquisition to customer deed.',
    modulesUsed: [
      'Land Acquisition & Dag Registry ERP',
      'Interactive Plot Layout Map Engine',
      'Mutation & Registry Legal Workflow',
      'Long-Term Installment Schedule Engine'
    ],
    challenge: `Managing thousands of plots across mega townships (e.g. Ashulia, Purbachal, Savar) presented severe land data bottlenecks:
- Land record documents (CS, SA, RS, BRS Khatian) were stored in paper archives prone to misplacement.
- Multiple buyers inquiring about the same plot block caused inventory overlap.
- Long installment plans (up to 120 months) created tracking nightmare in legacy software.`,
    solution: `Amin Mohammad Group adopted **Unova Land Developer ERP**.

1. **Digital Dag & Khatian Database:** Mapped all master land acquisitions with CS/SA/RS/BRS Dag search capabilities.
2. **Interactive Visual Layouts:** Real-time color-coded plot maps (Available, Booked, Reserved, Registered) for sales centers.
3. **Flexible 10-Year Schedule Engine:** Dynamic installment calculation supporting down payments, balloon payments, and registry fees.`,
    results: [
      { metric: '45,000+', label: 'Plots Digitized & Mapped in Central Cloud' },
      { metric: '100%', label: 'Prevention of Double Plot Reservations' },
      { metric: '75%', label: 'Faster Dag Legal Vetting Search' },
      { metric: '99.8%', label: 'Accuracy in 120-Month Installment Billing' }
    ],
    metaTitle: 'Amin Mohammad Group Case Study - Land Plot ERP | Unova',
    metaDescription: 'Read how Amin Mohammad Group digitized 45,000+ land plots and automated Dag/Khatian legal tracking using Unova Land Developer ERP.'
  },
  {
    slug: 'eastern-housing-limited',
    name: 'Eastern Housing Limited',
    shortName: 'Eastern Housing',
    logoImg: '/logos/eastern_housing.svg',
    tagline: 'The First Publicly Listed Real Estate Developer in Bangladesh',
    category: 'housing',
    categoryName: 'Township & Housing Companies',
    location: 'Segunbagicha, Dhaka',
    founded: '1964',
    projectsCompleted: '300+ Housing & Commercial Projects',
    unitsManaged: '50,000+ Land & Housing Units',
    logoBadge: 'EHL',
    bgGradient: 'from-blue-700 to-indigo-900',
    kpi: 'Public Accounting Compliance & Customer Self-Service',
    summary: 'Eastern Housing integrated financial reporting compliance and automated customer portal for 50,000+ land and flat owners.',
    quoteAuthor: 'Kazi Mohammad Towhid',
    quoteRole: 'CFO & Company Secretary',
    quote: 'As a public listed company on DSE & CSE, audit accuracy is mandatory. Unova provided enterprise-level financial governance and customer self-service billing.',
    modulesUsed: [
      'Enterprise Audit & Financial Compliance ERP',
      'Customer Web & Mobile Self-Service Portal',
      'Automated Ledger & Bank Gateway Reconciliation',
      'Executive Board Reporting BI'
    ],
    challenge: `As Bangladesh's oldest publicly traded real estate entity, Eastern Housing required rigorous compliance:
- Auditing thousands of historic land installment ledgers took months of manual paper review.
- Customers experienced long queues at corporate offices to pay installments or request updated account statements.
- Financial reports required extensive manual aggregation for stock exchange disclosures.`,
    solution: `Eastern Housing implemented **Unova Financial Compliance & Customer Self-Service Suite**.

1. **Customer Self-Service Portal:** Flat and plot buyers download account ledgers, payment schedules, and pay via bKash, Nagad, or credit cards anytime.
2. **DSE/CSE Audit Trail:** Full audit logs on every voucher creation, discount approval, and ledger entry.
3. **Automated BI Reports:** One-click generation of profit & loss, project-wise gross margin, and accounts receivable aging analysis.`,
    results: [
      { metric: '50,000+', label: 'Buyers Onboarded to Customer Portal' },
      { metric: '80%', label: 'Reduction in Office Counter Queue Times' },
      { metric: '100%', label: 'Regulatory DSE Financial Audit Compliance' },
      { metric: 'Instant', label: 'Executive Board Financial Reporting' }
    ],
    metaTitle: 'Eastern Housing Case Study - Enterprise Real Estate ERP | Unova',
    metaDescription: 'Discover how Eastern Housing Limited (EHL) automated accounting compliance and customer self-service portal using Unova Real Estate ERP.'
  },
  {
    slug: 'rupayan-group',
    name: 'Rupayan Housing Estate Ltd.',
    shortName: 'Rupayan Group',
    logoImg: '/logos/rupayan.svg',
    tagline: 'Pioneers of Mega City & Condominium Culture in Bangladesh',
    category: 'housing',
    categoryName: 'Township & Housing Companies',
    location: 'Rupayan Center, Mohakhali, Dhaka',
    founded: '1989',
    projectsCompleted: '150+ Gated Communities & Towers',
    unitsManaged: '20,000+ Families Living in Rupayan Cities',
    logoBadge: 'RHEL',
    bgGradient: 'from-red-600 to-rose-900',
    kpi: 'Gated Township Facilities & Customer Handover Automation',
    summary: 'Rupayan Group automated multi-city customer onboarding, maintenance fee collection, and handover protocols with Unova.',
    quoteAuthor: 'Md. Al-Amin',
    quoteRole: 'CEO, Rupayan Housing Estate',
    quote: 'Rupayan City Uttara is a premium township. Unova gave us unified management from flat sales, handover execution, to post-possession township maintenance collection.',
    modulesUsed: [
      'Township & Condominium Management ERP',
      'Customer Handover & Defect Inspection Module',
      'Automated Maintenance Fee Collector',
      'Omnichannel Sales Call Center Suite'
    ],
    challenge: `Managing mega township projects like Rupayan City Uttara involves complex post-sale processes:
- Manual tracking of possession handovers, utility connection clearances, and registration deeds.
- Monthly maintenance fee collections across thousands of apartment residents were disorganized.
- High volume of customer support requests for maintenance during the warranty period.`,
    solution: `Rupayan Group implemented **Unova Township & Property Management Suite**.

1. **Digital Handover Workflow:** Automated checklist for building completion certificate, utility NOC, and deed sign-off.
2. **Automated Maintenance Billing:** Recurring monthly bill generation with automated SMS & digital payment options for residents.
3. **Ticketing & Maintenance Portal:** Residents log service requests directly via mobile app to facilities team.`,
    results: [
      { metric: '94%', label: 'On-Time Monthly Maintenance Fee Collection' },
      { metric: '50%', label: 'Faster Handover Protocol Execution' },
      { metric: '4.8 / 5', label: 'Customer Resident Satisfaction Score' },
      { metric: 'Centralized', label: 'Township Asset & Facilities Management' }
    ],
    metaTitle: 'Rupayan Group Case Study - Township & Real Estate ERP | Unova',
    metaDescription: 'See how Rupayan Group streamlined township customer handovers and automated maintenance collections using Unova Property Management ERP.'
  },
  {
    slug: 'bti-building-technology',
    name: 'building technology & ideas ltd. (bti)',
    shortName: 'bti',
    logoImg: '/logos/bti.svg',
    tagline: 'In Pursuit of Excellence in Real Estate Engineering',
    category: 'apartment',
    categoryName: 'Apartment & Flat Developers',
    location: 'Gulshan-1, Dhaka',
    founded: '1984',
    projectsCompleted: '350+ Signature Complexes',
    unitsManaged: '18,000+ Happy Homeowners',
    logoBadge: 'BTI',
    bgGradient: 'from-cyan-600 to-blue-800',
    kpi: 'AI Sales Assistant & WhatsApp Customer Engagement',
    summary: 'bti empowered sales executives with Unova AI Sales Assistant to deliver instant 24/7 personalized brochure and pricing options.',
    quoteAuthor: 'F R Khan',
    quoteRole: 'Managing Director',
    quote: 'bti has always championed technology. Unova AI sales assistant enables our buyers to explore floor plans, EMI calculators, and site visit schedules instantly on WhatsApp.',
    modulesUsed: [
      'AI Sales Assistant & Chatbot Engine',
      'WhatsApp Business API Suite',
      'Dynamic Price & Floor Plan Viewer',
      'Automated Lead Scoring System'
    ],
    challenge: `High prospective buyer expectations for instant luxury property information:
- High volume of after-hours inquiry calls from working professionals and overseas NRBs.
- Sales officers spent hours sending PDF floor plans and custom payment schedules via email manually.
- Difficulty identifying high-intent buyers from casual web visitors.`,
    solution: `bti adopted **Unova AI Sales Assistant & WhatsApp Suite**.

1. **AI Property Assistant:** Automated AI agent engages prospects on WhatsApp 24/7, answering queries about location, pricing, and availability.
2. **Dynamic Price Calculator:** AI generates instant customized installment schedules based on buyer down payment budget.
3. **Intent Lead Scoring:** High-scoring leads are immediately transferred to senior sales managers with chat transcript context.`,
    results: [
      { metric: '24/7', label: 'Instant Lead Engagement on WhatsApp' },
      { metric: '40%', label: 'Higher Qualification of Hot Sales Leads' },
      { metric: '60%', label: 'Reduction in Manual Follow-up Admin Work' },
      { metric: '2.8x', label: 'Faster Site Visit Booking Velocity' }
    ],
    metaTitle: 'bti Case Study - AI Real Estate CRM & WhatsApp Automation | Unova',
    metaDescription: 'Learn how building technology & ideas ltd. (bti) boosted site visit bookings by 2.8x with Unova AI Sales Assistant & WhatsApp integration.'
  },
  {
    slug: 'asset-developments',
    name: 'Asset Developments & Holdings Ltd.',
    shortName: 'Asset Developments',
    logoImg: '/logos/asset.svg',
    tagline: 'Crafting Premium Architectural Handovers in Dhaka',
    category: 'apartment',
    categoryName: 'Apartment & Flat Developers',
    location: 'Gulshan-2, Dhaka',
    founded: '1998',
    projectsCompleted: '110+ Luxury Towers',
    unitsManaged: '5,600+ Premium Flats',
    logoBadge: 'ADHL',
    bgGradient: 'from-sky-600 to-blue-800',
    kpi: '38% Faster Unit Handovers & Snagging Sync',
    summary: 'Asset Developments digitized building inspection checklists and reduced flat handover delays by 38% using Unova.',
    quoteAuthor: 'Salim Akhtar Khan',
    quoteRole: 'CEO & Managing Director',
    quote: 'Customer handover is where brand reputation is cemented. Unova digital snagging checklist made customer inspections 100% transparent and error-free.',
    modulesUsed: [
      'Unit Handover & Inspection App',
      'Construction Milestone Billing ERP',
      'Customer Web Self-Service Portal',
      'Finance & Accounts ERP'
    ],
    challenge: `Asset Developments manages high-end residential towers in Gulshan, Banani, and Baridhara:
- Paper snagging lists during buyer inspections led to miscommunication with site contractors.
- Delays in resolving minor customer defects extended holding costs for unsold parking and utility connections.`,
    solution: `Asset Developments onboarded **Unova Digital Handover & Quality Assurance Suite**.

1. **Mobile Inspection App:** Buyers and engineers mark defects directly on tablet blueprints with photos.
2. **Auto Contractor Task Dispatch:** Defect tasks route instantly to relevant sub-contractors with resolution deadline tracking.`,
    results: [
      { metric: '38%', label: 'Faster Handover Protocol Resolution' },
      { metric: '100%', label: 'Digital Snagging Photo Verification' },
      { metric: '4.9 / 5', label: 'Customer Satisfaction at Flat Handover' },
      { metric: '0 Days', label: 'Contractor Task Route Delays' }
    ],
    metaTitle: 'Asset Developments Case Study - Flat Handover ERP | Unova',
    metaDescription: 'Discover how Asset Developments streamlined flat handovers and quality inspections using Unova Real Estate ERP.'
  },
  {
    slug: 'sanmar-properties',
    name: 'Sanmar Properties Ltd.',
    shortName: 'Sanmar Properties',
    logoImg: '/logos/sanmar.svg',
    tagline: 'Leading Luxury Developer in Chattogram',
    category: 'apartment',
    categoryName: 'Apartment & Flat Developers',
    location: 'Agrabad, Chattogram',
    founded: '1999',
    projectsCompleted: '85+ Iconic Complexes',
    unitsManaged: '4,800+ Premium Units',
    logoBadge: 'SPL',
    bgGradient: 'from-amber-600 to-yellow-800',
    kpi: '52% Reduction in Sales Commission Disputes',
    summary: 'Sanmar Properties automated multi-tier agent commissions and sales executive quotas in Chattogram with Unova.',
    quoteAuthor: 'Mustafa Jamil',
    quoteRole: 'Head of Sales & Commercial',
    quote: 'In Chattogram real estate, managing broker and agent commissions accurately is essential. Unova automated policy splits with zero errors.',
    modulesUsed: [
      'Sales Commission & Agent Portal',
      'Lead Leakage Prevention Engine',
      'Installment Collection Automation',
      'Executive BI Analytics'
    ],
    challenge: `Sanmar Properties manages premier commercial towers and luxury apartments in Chattogram:
- Manual commission calculations for external real estate brokers resulted in payment delays and broker dissatisfaction.
- Sales executives spent excessive time calculating deal splits instead of closing new buyers.`,
    solution: `Sanmar Properties deployed **Unova Sales Commission & Broker Management Suite**.

1. **Automated Multi-Tier Split Engine:** System calculates sales executive, branch manager, and external broker commissions upon booking sign-off.
2. **Broker Portal:** External real estate brokers log in to view client booking status and commission release schedules.`,
    results: [
      { metric: '52%', label: 'Reduction in Commission Calculation Disputes' },
      { metric: '100%', label: 'Broker Payout Release Accuracy' },
      { metric: '2.5x', label: 'Higher Broker Referral Volume in CTG' },
      { metric: 'Instant', label: 'Commission Flow into Monthly Payroll' }
    ],
    metaTitle: 'Sanmar Properties Case Study - Real Estate Sales CRM | Unova',
    metaDescription: 'Learn how Sanmar Properties automated sales commission tracking and broker portals in Chattogram using Unova CRM.'
  },
  {
    slug: 'suvastu-development',
    name: 'Suvastu Development Ltd.',
    shortName: 'Suvastu Space',
    logoImg: '/logos/suvastu.svg',
    tagline: 'Innovative Living Spaces & Modern Commercial Hubs',
    category: 'commercial',
    categoryName: 'Commercial & High-Rise',
    location: 'Badda, Dhaka',
    founded: '1995',
    projectsCompleted: '130+ Commercial & Residential Projects',
    unitsManaged: '8,000+ Units Handed Over',
    logoBadge: 'SDL',
    bgGradient: 'from-emerald-600 to-green-900',
    kpi: '100% Real-Time Material Procurement Tracking',
    summary: 'Suvastu Development integrated central store inventory with site material requisitions across 25 concurrent high-rise projects.',
    quoteAuthor: 'Nazmul Haque',
    quoteRole: 'Director, Operations',
    quote: 'Unova Material Inventory Module stopped store leakage. We can match purchase orders directly against site store receipts in seconds.',
    modulesUsed: [
      'Rebar & Cement Inventory Tracker',
      'Construction Milestone Billing ERP',
      'Sub-Contractor Audit Manager',
      'Finance & Accounts ERP'
    ],
    challenge: `Managing raw construction material (rebar, cement, bricks, tiles) across multi-story projects:
- Discrepancies between material dispatched from central stores and site store receipts.
- Over-ordering of raw materials caused cash flow strain during foundation phases.`,
    solution: `Suvastu Development deployed **Unova Construction Inventory & Material Management Suite**.

1. **Digital Store Receipt Gate:** Site storekeepers log material arrival on mobile tablets matching central purchase orders.
2. **Requisition Threshold Alerts:** Automated warnings when site engineers request material exceeding structural design estimates.`,
    results: [
      { metric: '100%', label: 'Material Dispatch vs Receipt Match Accuracy' },
      { metric: '16%', label: 'Reduction in Excess Material Holding Costs' },
      { metric: '0%', label: 'Unrecorded Construction Site Deliveries' },
      { metric: 'Real-Time', label: 'Multi-Site Store Inventory Visibility' }
    ],
    metaTitle: 'Suvastu Development Case Study - Construction ERP | Unova',
    metaDescription: 'See how Suvastu Development optimized raw construction material procurement across 25+ projects with Unova ERP.'
  },
  {
    slug: 'bay-developments',
    name: 'Bay Developments Ltd.',
    shortName: 'Bay Developments',
    logoImg: '/logos/bay.svg',
    tagline: 'Ultra-Luxury Architecture & Sustainable Eco Towers',
    category: 'apartment',
    categoryName: 'Apartment & Flat Developers',
    location: 'Gulshan-1, Dhaka',
    founded: '1997',
    projectsCompleted: '60+ Ultra-Luxury Landmarks',
    unitsManaged: '2,500+ HNW Homeowners',
    logoBadge: 'BDL',
    bgGradient: 'from-blue-700 to-sky-900',
    kpi: '65% Higher NRB Buyer Engagement via WhatsApp',
    summary: 'Bay Developments connected Unova WhatsApp API to deliver high-net-worth NRB buyers instant 3D floor plan tours and custom pricing schedules.',
    quoteAuthor: 'Zainab Rahman',
    quoteRole: 'Head of Brand & Luxury Sales',
    quote: 'Our clients expect white-glove service. Unova WhatsApp integration allowed us to deliver instant floor plans and financial schedules to overseas buyers seamlessly.',
    modulesUsed: [
      'WhatsApp Business API Suite',
      'AI Sales Assistant Integration',
      'Lead Leakage Prevention Engine',
      'Executive BI Analytics'
    ],
    challenge: `Bay Developments targets high-net-worth (HNW) buyers and overseas Non-Resident Bangladeshis (NRBs):
- Overseas NRB prospects in the UK, USA, and Canada faced delay in receiving floor plans and customization options.
- Email brochures often went unread, resulting in lost luxury sales opportunities.`,
    solution: `Bay Developments deployed **Unova WhatsApp Cloud API & AI Luxury Sales Suite**.

1. **Instant WhatsApp Portfolio Dispatch:** Automated instant sending of high-res 3D floor plans and luxury video walk-throughs upon inquiry.
2. **Personalized Financial Calculator:** AI sends tailored payment plans based on overseas buyer down payment preferences.`,
    results: [
      { metric: '65%', label: 'Increase in Overseas NRB Buyer Engagement' },
      { metric: '3.4x', label: 'Faster WhatsApp Portfolio Views' },
      { metric: '< 2 Mins', label: 'Average Time to Deliver Custom Price Quote' },
      { metric: '98%', label: 'Buyer Satisfaction with Digital Communication' }
    ],
    metaTitle: 'Bay Developments Case Study - Luxury Real Estate CRM | Unova',
    metaDescription: 'Read how Bay Developments boosted NRB buyer engagement by 65% with Unova WhatsApp API and AI Sales Assistant.'
  },
  {
    slug: 'epic-properties',
    name: 'Epic Properties Ltd.',
    shortName: 'Epic Properties',
    logoImg: '/logos/epic.svg',
    tagline: 'Premier Real Estate Developer in Chattogram',
    category: 'housing',
    categoryName: 'Township & Housing Companies',
    location: 'GEC Circle, Chattogram',
    founded: '2003',
    projectsCompleted: '75+ Residential & Commercial Projects',
    unitsManaged: '4,000+ Units in CTG',
    logoBadge: 'EPL',
    bgGradient: 'from-red-600 to-rose-800',
    kpi: '42% Faster Installment Recovery in CTG Region',
    summary: 'Epic Properties automated monthly installment reminders and regional bKash/Nagad digital receipts across Chattogram projects with Unova.',
    quoteAuthor: 'Engr. Anwar Hossain',
    quoteRole: 'Managing Director',
    quote: 'Unova gave us absolute control over collection schedules in Chattogram. Digital money receipts via SMS reduced buyer payment delays significantly.',
    modulesUsed: [
      'Installment Collection Automation',
      'Customer Web & Mobile Portal',
      'Finance & Accounts ERP',
      'Sales Commission Tracking'
    ],
    challenge: `Managing collections across multiple residential projects in Chattogram:
- Buyers frequently missed installment due dates due to lack of timely localized SMS reminders.
- Money receipts issued manually at branch offices took days to update central accounts in Dhaka/CTG.`,
    solution: `Epic Properties implemented **Unova Installment Automation & MFS Gateway Integration**.

1. **Automated SMS & Payment Links:** Automated SMS reminders with integrated bKash, Nagad, and bank gateway links.
2. **Instant QR Money Receipt:** Digital money receipt generated instantly upon payment confirmation.`,
    results: [
      { metric: '42%', label: 'Faster Installment Recovery Rate' },
      { metric: '100%', label: 'MFS & Bank Gateway Digital Reconciliation' },
      { metric: '90%', label: 'Reduction in Paper Money Receipt Printing' },
      { metric: 'Real-Time', label: 'Branch-wise Collection Visibility' }
    ],
    metaTitle: 'Epic Properties CTG Case Study - Real Estate ERP | Unova',
    metaDescription: 'Discover how Epic Properties automated installment collections and digital receipts in Chattogram using Unova ERP.'
  },
  {
    slug: 'rangs-properties',
    name: 'Rangs Properties Ltd.',
    shortName: 'Rangs Properties',
    logoImg: '/logos/rangs.svg',
    tagline: 'Architectural Masterpieces & Contemporary Urban Living',
    category: 'commercial',
    categoryName: 'Commercial & High-Rise',
    location: 'Tejgaon I/A, Dhaka',
    founded: '1996',
    projectsCompleted: '90+ Modern Towers',
    unitsManaged: '4,500+ Commercial & Living Units',
    logoBadge: 'RPL',
    bgGradient: 'from-indigo-600 to-purple-800',
    kpi: 'Zero Unassigned Leads & 4x Sales Executive Efficiency',
    summary: 'Rangs Properties implemented Unova AI Lead Routing to auto-assign 100% of commercial & residential inquiries in real time.',
    quoteAuthor: 'Mashid Rahman',
    quoteRole: 'Chief Executive Officer',
    quote: 'Rangs Properties is synonymous with innovation. Unova AI Lead Routing ensures every prospective buyer gets immediate expert executive contact.',
    modulesUsed: [
      'Lead Leakage Prevention Engine',
      'AI Sales Executive Routing',
      'Executive BI Analytics',
      'WhatsApp Business API Suite'
    ],
    challenge: `High volume of premium lead inquiries for Tejgaon commercial hubs and Gulshan residential towers:
- Manual lead distribution caused delays during peak marketing campaign launches.
- Executives lacked visibility into past lead interaction histories during initial calls.`,
    solution: `Rangs Properties onboarded **Unova AI Round-Robin Lead Engine**.

1. **Instant AI Routing:** Leads from Facebook, LinkedIn, Google, and website forms are dynamically assigned to executive mobile apps in < 3 seconds.
2. **Complete Interaction History:** Executives view lead budget, inquiry source, and past chat logs before placing follow-up calls.`,
    results: [
      { metric: '0 Leads', label: 'Unassigned or Leaked Sales Inquiries' },
      { metric: '4x', label: 'Increase in Executive Follow-up Capacity' },
      { metric: '< 60 Sec', label: 'Lead Assignment to Mobile App Notification' },
      { metric: '100%', label: 'Executive Call Audit Compliance' }
    ],
    metaTitle: 'Rangs Properties Case Study - Commercial Real Estate CRM | Unova',
    metaDescription: 'Learn how Rangs Properties achieved zero lead leakage and 4x sales efficiency using Unova Real Estate CRM & AI Lead Engine.'
  },
  {
    slug: 'jamuna-builders',
    name: 'Jamuna Builders Ltd.',
    shortName: 'Jamuna Builders',
    logoImg: '/logos/jamuna.svg',
    tagline: 'Pioneers of Mega Housing Cities & Commercial Megastructures',
    category: 'housing',
    categoryName: 'Township & Housing Companies',
    location: 'Jamuna Future Park, Dhaka',
    founded: '1992',
    projectsCompleted: '120+ Commercial & Housing Mega Projects',
    unitsManaged: '25,000+ Land & Apartment Units',
    logoBadge: 'JBL',
    bgGradient: 'from-red-700 to-amber-800',
    kpi: 'Unified Multi-Township Financial & Sales Governance',
    summary: 'Jamuna Builders integrated sales order management, plot inventory mapping, and bank reconciliation across mega township projects with Unova.',
    quoteAuthor: 'Md. Shamim Islam',
    quoteRole: 'Director, Real Estate Division',
    quote: 'Unova ERP gave us central visibility over mega land & building projects. Bank reconciliations and installment tracking are now automated.',
    modulesUsed: [
      'Enterprise Audit & Financial Compliance ERP',
      'Land Acquisition & Dag Registry ERP',
      'Installment Collection Automation',
      'Executive MD Dashboard'
    ],
    challenge: `Managing mega township projects with thousands of buyers across land and commercial sectors:
- Manual tracking of long-term installment payment plans across disconnected project offices.
- Financial reporting required days of paper ledger consolidation.`,
    solution: `Jamuna Builders implemented **Unova Enterprise Real Estate ERP**.

1. **Centralized Financial Ledger:** Automated integration of branch office payments into central accounts.
2. **Live Plot & Flat Inventory Grid:** Real-time visibility into available, booked, and registered units across all model towns.`,
    results: [
      { metric: '100%', label: 'Central Financial Ledger Sync' },
      { metric: '45%', label: 'Faster Quarterly Financial Close' },
      { metric: '25,000+', label: 'Buyer Units Managed in Unified Cloud' },
      { metric: 'Zero', label: 'Double Booking Conflicts Across Branch Offices' }
    ],
    metaTitle: 'Jamuna Builders Case Study - Enterprise Real Estate ERP | Unova',
    metaDescription: 'Discover how Jamuna Builders automated multi-township land & building financial management using Unova ERP.'
  },
  {
    slug: 'bashundhara-housing',
    name: 'East West Property Development Ltd. (Bashundhara Housing)',
    shortName: 'Bashundhara Housing',
    logoImg: '/logos/bashundhara.svg',
    tagline: 'The Largest Private Land & Housing Developer in Bangladesh',
    category: 'land',
    categoryName: 'Land & Plot Developers',
    location: 'Bashundhara R/A, Dhaka',
    founded: '1987',
    projectsCompleted: '40+ Mega Model Towns',
    unitsManaged: '75,000+ Land Plots & Residential Units',
    logoBadge: 'EWPDL',
    bgGradient: 'from-green-700 to-emerald-900',
    kpi: '75,000+ Plot Inventory & Dag Registry Digitalization',
    summary: 'Bashundhara Housing digitized plot layout mapping and long-term installment schedules across mega residential areas with Unova.',
    quoteAuthor: 'Engr. Touhidul Islam',
    quoteRole: 'Senior Executive Director',
    quote: 'Managing Bashundhara Residential Area requires precision. Unova plot layout engine and CS/SA/RS Dag tracking gave us complete digital master plan control.',
    modulesUsed: [
      'Land Acquisition & Dag Registry ERP',
      'Interactive Plot Layout Map Engine',
      'Customer Web & Mobile Portal',
      'Installment Collection Automation'
    ],
    challenge: `Managing Bangladesh's largest private residential township:
- Paper records of Mouza, Dag, and Khatian numbers across thousands of land blocks.
- Long queue times for plot buyers checking deed registration status and payment ledgers.`,
    solution: `Bashundhara Housing deployed **Unova Mega Land Developer Suite**.

1. **Digital Master Layout Map:** Interactive color-coded visual map of plot blocks, roads, and amenity allocations.
2. **Online Buyer Ledger Portal:** Buyers access account ledgers and download official payment receipts anytime online.`,
    results: [
      { metric: '75,000+', label: 'Land Plots Digitized in Central Cloud' },
      { metric: '82%', label: 'Reduction in Office Counter Visit Times' },
      { metric: '100%', label: 'Dag & Khatian Legal Search Accuracy' },
      { metric: 'Instant', label: 'Executive Plot Booking Status Tracking' }
    ],
    metaTitle: 'Bashundhara Housing Case Study - Mega Land Developer ERP | Unova',
    metaDescription: 'Read how Bashundhara Housing digitized 75,000+ land plots and automated Dag registry tracking using Unova Land Developer ERP.'
  },
  {
    slug: 'anwar-landmark',
    name: 'Anwar Landmark Ltd.',
    shortName: 'Anwar Landmark',
    logoImg: '/logos/anwar.svg',
    tagline: 'Pioneers in Eco-Friendly Architectural Landmarks',
    category: 'apartment',
    categoryName: 'Apartment & Flat Developers',
    location: 'Dhanmondi, Dhaka',
    founded: '2001',
    projectsCompleted: '100+ Green Certified Buildings',
    unitsManaged: '6,200+ Sustainable Homes',
    logoBadge: 'ALL',
    bgGradient: 'from-amber-600 to-yellow-800',
    kpi: '100% On-Time Project Construction Milestone Audits',
    summary: 'Anwar Landmark synchronized structural engineering milestones with contractor billing gates using Unova Construction ERP.',
    quoteAuthor: 'Hossain Mehmood',
    quoteRole: 'Managing Director',
    quote: 'Building green certified towers requires strict quality audits. Unova Construction ERP linked site progress directly to supplier & sub-contractor billing.',
    modulesUsed: [
      'Construction Milestone Billing ERP',
      'Rebar & Cement Inventory Tracker',
      'Sub-Contractor Audit Manager',
      'Unit Handover & Inspection App'
    ],
    challenge: `Maintaining strict green building standards across multiple luxury residential projects:
- Manual auditing of contractor RA (Running Account) bills took 10+ days per site.
- Over-ordering of steel and cement caused store space congestion.`,
    solution: `Anwar Landmark deployed **Unova Construction ERP & Site Audit Suite**.

1. **Geotagged Site Milestones:** Site supervisors upload progress photos triggering automated bill approval gates.
2. **Material Inventory Sync:** Auto-match purchase orders with site store delivery receipts.`,
    results: [
      { metric: '100%', label: 'On-Time Milestone Audit Compliance' },
      { metric: '10 Days -> 2 Days', label: 'Faster Contractor RA Bill Audit' },
      { metric: '15%', label: 'Reduction in Site Material Holding Costs' },
      { metric: 'Zero', label: 'Unverified Sub-Contractor Payment Discrepancies' }
    ],
    metaTitle: 'Anwar Landmark Case Study - Construction ERP | Unova',
    metaDescription: 'Discover how Anwar Landmark automated construction milestone auditing and contractor payments using Unova ERP.'
  },
  {
    slug: 'sel-structural-engineers',
    name: 'The Structural Engineers Ltd. (SEL)',
    shortName: 'SEL Real Estate',
    logoImg: '/logos/sel.svg',
    tagline: 'A Symbol of Trust, Quality & Engineering Ethics',
    category: 'apartment',
    categoryName: 'Apartment & Flat Developers',
    location: 'West Panthapath, Dhaka',
    founded: '1983',
    projectsCompleted: '210+ Completed Complexes',
    unitsManaged: '11,000+ Happy Families',
    logoBadge: 'SEL',
    bgGradient: 'from-blue-700 to-indigo-900',
    kpi: '99.5% Customer Satisfaction & Zero Hidden Cost Guarantee',
    summary: 'SEL automated customer installment schedules and transparent account statements for 11,000+ homeowners with Unova.',
    quoteAuthor: 'Engr. Md. Abdul Awal',
    quoteRole: 'Managing Director',
    quote: 'SEL was founded on ethics and zero hidden costs. Unova provided total transparency to our buyers through clear digital account statements.',
    modulesUsed: [
      'Customer Web & Mobile Self-Service Portal',
      'Installment Collection Automation',
      'Finance & Accounts ERP',
      'Unit Handover & Inspection App'
    ],
    challenge: `Managing customer accounts for over 200 residential complexes:
- High volume of customer phone inquiries regarding upcoming installment schedules and interest-free payment terms.
- Manual issuance of account ledgers during flat deed registrations.`,
    solution: `SEL onboarded **Unova Customer Self-Service & Installment Transparency Portal**.

1. **Self-Service Buyer Account Portal:** Buyers log in anytime to view transparent payment schedules, total paid amount, and upcoming due dates.
2. **Instant QR Receipts:** Automated SMS receipt issued upon payment deposit.`,
    results: [
      { metric: '99.5%', label: 'Verified Customer Satisfaction Rate' },
      { metric: '11,000+', label: 'Homeowner Ledgers Digitized' },
      { metric: '75%', label: 'Fewer Routine Counter Inquiry Calls' },
      { metric: '100%', label: 'Transparent Account Statement Accuracy' }
    ],
    metaTitle: 'SEL Real Estate Case Study - Customer Portal ERP | Unova',
    metaDescription: 'Learn how The Structural Engineers Ltd. (SEL) automated customer installment transparency and self-service portals using Unova ERP.'
  },
  {
    slug: 'tropical-homes',
    name: 'Tropical Homes Limited',
    shortName: 'Tropical Homes',
    logoImg: '/logos/tropical.svg',
    tagline: 'Modern Architectural Living in Dhaka',
    category: 'apartment',
    categoryName: 'Apartment & Flat Developers',
    location: 'Dhanmondi, Dhaka',
    founded: '1996',
    projectsCompleted: '95+ Signature Residences',
    unitsManaged: '5,000+ Units Handed Over',
    logoBadge: 'THL',
    bgGradient: 'from-emerald-600 to-green-900',
    kpi: '3.5x Faster Sales Lead Follow-up & Zero Lead Leakage',
    summary: 'Tropical Homes integrated Unova Lead Leakage Prevention Engine with Facebook Lead Ads to achieve 3.5x faster sales response.',
    quoteAuthor: 'Md. Moklesur Rahman',
    quoteRole: 'Head of Sales & Marketing',
    quote: 'Speed is everything in digital lead management. Unova routes Facebook leads to our sales reps within seconds.',
    modulesUsed: [
      'Lead Leakage Prevention Engine',
      'AI Sales Executive Routing',
      'WhatsApp Business API Suite',
      'Executive BI Analytics'
    ],
    challenge: `Digital inquiries from Facebook and Google campaigns were lost or delayed during peak launch campaigns:
- Sales reps manually imported leads hours after submission.
- Unassigned leads lacked audit trails for management review.`,
    solution: `Tropical Homes deployed **Unova Omnichannel Lead Engine**.

1. **Instant API Lead Sync:** Leads from Facebook Lead Ads enter Unova CRM in < 2 seconds.
2. **Auto Round-Robin Distribution:** Leads are dynamically assigned to available sales officers with mobile push notifications.`,
    results: [
      { metric: '3.5x', label: 'Faster Sales Lead Follow-up Speed' },
      { metric: '0 Leads', label: 'Unassigned or Missed Inquiries' },
      { metric: '< 90 Sec', label: 'Average First Executive Response Time' },
      { metric: '42%', label: 'Higher Site Visit Booking Rate' }
    ],
    metaTitle: 'Tropical Homes Case Study - Real Estate CRM | Unova',
    metaDescription: 'See how Tropical Homes achieved 3.5x faster lead follow-up and zero lead leakage with Unova Real Estate CRM.'
  },
  {
    slug: 'domestic-developers',
    name: 'Domestic Developers Ltd.',
    shortName: 'Domestic Developers',
    logoImg: '/logos/domestic.svg',
    tagline: 'Quality Real Estate Development & Housing Solutions',
    category: 'apartment',
    categoryName: 'Apartment & Flat Developers',
    location: 'Utara, Dhaka',
    founded: '2004',
    projectsCompleted: '65+ Residential Projects',
    unitsManaged: '3,200+ Apartment Units',
    logoBadge: 'DDL',
    bgGradient: 'from-teal-600 to-emerald-800',
    kpi: '44% Reduction in Customer Account Ledger Reconciliation Time',
    summary: 'Domestic Developers automated buyer installment billing and bank voucher reconciliation with Unova Finance Module.',
    quoteAuthor: 'Engr. Kazi Robiul Islam',
    quoteRole: 'Managing Director',
    quote: 'Automating customer installment ledgers eliminated all counter disputes during flat registration. Unova ERP is indispensable for developers.',
    modulesUsed: [
      'Installment Collection Automation',
      'Finance & Accounts ERP',
      'Customer Web Self-Service Portal',
      'Executive BI Analytics'
    ],
    challenge: `Managing installment collections across residential complexes in Uttara and Mirpur:
- Manual paper receipt reconciliation between accounts officers and bank statements.
- Delays in generating final payment clearance certificates during deed registration.`,
    solution: `Domestic Developers deployed **Unova Installment & Accounts Automation Suite**.

1. **Automated Bank Reconciliation:** Customer bank transfers credit buyer account ledgers automatically.
2. **Digital Clearance Certificate:** One-click digital payment clearance generation upon full installment completion.`,
    results: [
      { metric: '44%', label: 'Faster Customer Ledger Reconciliation' },
      { metric: '100%', label: 'Digital Payment Clearance Accuracy' },
      { metric: '80%', label: 'Reduction in Registration Paperwork Delays' },
      { metric: 'Real-Time', label: 'Executive Cash Flow & Collection Visibility' }
    ],
    metaTitle: 'Domestic Developers Case Study - Real Estate ERP | Unova',
    metaDescription: 'Learn how Domestic Developers automated installment billing and buyer account reconciliations using Unova ERP.'
  }
];

export function getAllClientSlugs() {
  return CLIENT_CASE_STUDIES.map(c => c.slug);
}

export function getClientBySlug(slug) {
  return CLIENT_CASE_STUDIES.find(c => c.slug === slug) || null;
}

export function getFilteredClients(category = 'all', searchQuery = '') {
  return CLIENT_CASE_STUDIES.filter(c => {
    const matchesCategory = category === 'all' || c.category === category;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      c.name.toLowerCase().includes(q) || 
      c.tagline.toLowerCase().includes(q) ||
      c.summary.toLowerCase().includes(q) ||
      c.location.toLowerCase().includes(q) ||
      c.modulesUsed.some(m => m.toLowerCase().includes(q));
    return matchesCategory && matchesSearch;
  });
}
