'use client';

import { useState } from 'react';
import Link from 'next/link';
import DocsAskAI from './DocsAskAI';

// ─────────────────────────────────────────────────────────────
//  Helpers
// ─────────────────────────────────────────────────────────────
const screenshot = (label) => `
<div class="screenshot-placeholder">
  <div style="font-size:2rem;margin-bottom:0.4rem;">📸</div>
  <p style="font-size:0.8rem;font-weight:700;color:#475569;margin:0;">Screenshot Required</p>
  <p style="font-size:0.75rem;color:#94a3b8;margin:0.25rem 0 0;">${label}</p>
</div>`;

const note  = (text) => `<div class="note-box"><p style="margin:0;font-size:0.875rem;color:#1d4ed8;">ℹ️ <strong>Note:</strong> ${text}</p></div>`;
const tip   = (text) => `<div class="tip-box"><p style="margin:0;font-size:0.875rem;color:#15803d;">✅ <strong>Tip:</strong> ${text}</p></div>`;
const warn  = (text) => `<div class="warn-box"><p style="margin:0;font-size:0.875rem;color:#b45309;">⚠️ <strong>Important:</strong> ${text}</p></div>`;

const step = (n, title, body) => `
<div class="step-row">
  <span class="step-badge">${n}</span>
  <div style="flex:1">
    <p style="font-weight:600;color:#111827;margin:0 0 0.35rem;">${title}</p>
    <p style="margin:0;color:#4b5563;font-size:0.875rem;line-height:1.65;">${body}</p>
  </div>
</div>`;

// ─────────────────────────────────────────────────────────────
//  Sidebar groups
// ─────────────────────────────────────────────────────────────
const sidebarGroups = [
  {
    title: 'Dashboard',
    items: [
      { id: 'dashboard', label: 'Dashboard Overview' },
    ]
  },
  {
    title: 'CRM',
    items: [
      { id: 'leads',         label: 'Leads' },
      { id: 'contacts',      label: 'Contacts' },
      { id: 'organizations', label: 'Organizations' },
      { id: 'customers',     label: 'Customers' },
    ]
  },
  {
    title: 'Sales',
    items: [
      { id: 'sales', label: 'Sales Orders & Commissions' },
    ]
  },
  {
    title: 'Property',
    items: [
      { id: 'projects',      label: 'Projects' },
      { id: 'units',         label: 'Units' },
      { id: 'layout-types',  label: 'Layout Types' },
      { id: 'services',      label: 'Services' },
    ]
  },
  {
    title: 'HR & Payroll',
    items: [
      { id: 'employees',    label: 'Employees' },
      { id: 'attendance',   label: 'Attendance' },
      { id: 'leaves',       label: 'Leave Management' },
      { id: 'payroll',      label: 'Payroll' },
      { id: 'pf',           label: 'Provident Fund' },
      { id: 'loans',        label: 'Loans' },
      { id: 'resignations', label: 'Resignation & F&F' },
    ]
  },
  {
    title: 'Procurement',
    items: [
      { id: 'materials',     label: 'Materials' },
      { id: 'suppliers',     label: 'Suppliers' },
      { id: 'purchases',     label: 'Purchases' },
      { id: 'expenses',      label: 'Expenses' },
      { id: 'requisitions',  label: 'Requisitions' },
    ]
  },
  {
    title: 'Accounting',
    items: [
      { id: 'journal-vouchers',  label: 'Journal Vouchers' },
      { id: 'cashflow',          label: 'Banks & Cashflow' },
      { id: 'chart-of-accounts', label: 'Chart of Accounts' },
    ]
  },
  {
    title: 'Marketing',
    items: [
      { id: 'campaigns',          label: 'Campaigns' },
      { id: 'templates',          label: 'Templates' },
      { id: 'lead-forms',         label: 'Lead Forms' },
      { id: 'auto-communication', label: 'Auto Communication' },
    ]
  },
  {
    title: 'Reports',
    items: [
      { id: 'reports', label: 'Reports' },
    ]
  },
  {
    title: 'Configuration',
    items: [
      { id: 'roles',             label: 'Roles & Permissions' },
      { id: 'configuration',     label: 'General Settings' },
      { id: 'hr-settings',       label: 'HR Settings' },
      { id: 'api-integrations',  label: 'API Integrations' },
    ]
  },
];

// ─────────────────────────────────────────────────────────────
//  Docs content
// ─────────────────────────────────────────────────────────────
const docsData = {

  // ─── DASHBOARD ──────────────────────────────────────────────
  'dashboard': {
    title: 'Dashboard Overview',
    content: `
<h1>Dashboard</h1>
<p>The Dashboard is the first screen you see after logging in. It gives you an instant snapshot of business performance without needing to navigate anywhere.</p>

${screenshot('Full dashboard view – showing stat cards, tasks panel, charts, and birthday section')}

<h2>Dashboard Sections</h2>

<h3>📊 Stat Cards</h3>
<p>At the top of the dashboard, a row of cards shows your key performance indicators (KPIs) for the selected period:</p>
<ul>
  <li>Total leads and new leads</li>
  <li>Sales figures and revenue</li>
  <li>Conversion rates</li>
  <li>Follow-up activity counts</li>
</ul>

${screenshot('Stat cards row – four metric boxes showing leads, sales, revenue, and conversions')}

<h3>🔔 Needs Approval</h3>
<p>This section lists items that are waiting for your action — such as sales orders, leave applications, or purchase requisitions that require approval. Click any item to open it directly.</p>

${screenshot('"Needs Approval" section listing pending items with their status badges')}

<h3>📋 My Tasks</h3>
<p>A personal to-do list on the right side of the dashboard. Tasks assigned to you appear here. You can mark them complete or navigate to the related record.</p>

${screenshot('"My Tasks" panel showing task titles with checkboxes and due dates')}

<h3>📈 Charts</h3>
<p>Visual charts below the stat cards show trends over time — for example, monthly sales volume or lead conversion rates. Use these to spot patterns and make data-driven decisions.</p>

${screenshot('Dashboard chart – bar/line chart showing monthly sales or lead trend')}

<h3>🎂 Birthdays & Anniversaries</h3>
<p>The bottom-left panel shows upcoming employee birthdays and work anniversaries this month, so you never miss an opportunity to celebrate your team.</p>

${screenshot('Birthday & Anniversary panel showing employee names, dates, and profile photos')}

<h2>Filtering the Dashboard</h2>
<p>Use the filter bar at the top of the dashboard to change:</p>
<ul>
  <li><strong>Scope</strong> — view your personal data or your entire team's data.</li>
  <li><strong>Period</strong> — switch between daily, weekly, monthly, or custom date ranges.</li>
</ul>
<p>All stat cards and charts update instantly when you change the filter.</p>

${screenshot('Dashboard filter bar showing the scope dropdown (Personal/Team) and period selector')}
`
  },

  // ─── LEADS ──────────────────────────────────────────────────
  'leads': {
    title: 'Leads',
    content: `
<h1>Leads</h1>
<p>Leads are potential customers who have expressed interest in a property or service. The Leads module is the heart of Unova Estate's CRM — everything from first contact to signed deal is tracked here.</p>

<p>Navigate to <strong>CRM → Leads</strong> from the sidebar.</p>

${screenshot('Lead list page – table showing lead name, category, assigned agent, status, and last activity date')}

<h2>Creating a Lead</h2>
<p>Click the <strong>+ New Lead</strong> button in the top-right corner of the Leads page. The creation form is split into three steps.</p>

<h3>Step 1 — Basic Information</h3>
<p>Enter the lead's core details:</p>
<ul>
  <li><strong>Lead Name</strong> — the name or reference for this lead (e.g., the client's name or a company name).</li>
  <li><strong>Category</strong> — the pipeline stage this lead starts in (e.g., New Enquiry, Follow-up, Negotiation). Categories are configured in <strong>Configuration → Lead Category</strong>.</li>
  <li><strong>Source</strong> — where the lead came from (e.g., Website, Referral, Campaign). Sources are managed in <strong>Configuration → Lead Source</strong>.</li>
  <li><strong>Assigned To</strong> — the sales team member responsible for this lead.</li>
  <li><strong>Expected Close Date</strong> — your target date for converting this lead.</li>
</ul>

${screenshot('Create Lead – Step 1 form showing lead name, category, source, and assigned-to fields')}

<h3>Step 2 — Contact Persons</h3>
<p>Add one or more contact people for this lead. For each contact, you can enter their name, phone number, email, designation, and notes. You can add as many contacts as needed.</p>

${screenshot('Create Lead – Step 2 showing the "Add Contact" form with name, phone, and email fields')}

<h3>Step 3 — Products / Properties</h3>
<p>Link one or more properties or products to this lead. You can set the quantity, unit price, and any negotiated discount. The system calculates the total value automatically.</p>

${screenshot('Create Lead – Step 3 showing the product/property selection with price and discount fields')}

<p>Click <strong>Save Lead</strong> to finish. The lead will appear in the lead list immediately.</p>

<h2>Viewing a Lead's Details</h2>
<p>Click on any lead in the list to open its detail page. Here you will find tabs for:</p>

<table>
  <tr><th>Tab</th><th>What it shows</th></tr>
  <tr><td>Overview</td><td>Lead summary, assigned agent, category, source, and notes.</td></tr>
  <tr><td>Follow-ups</td><td>All logged follow-up activities with dates, outcomes, and notes.</td></tr>
  <tr><td>Products</td><td>Properties or products attached to this lead with pricing details.</td></tr>
  <tr><td>Timeline</td><td>Full activity history — who did what and when.</td></tr>
</table>

${screenshot('Lead details page – showing the tabbed interface with Overview, Follow-ups, and Products tabs')}

<h2>Logging a Follow-Up</h2>
${step(1, 'Open the Lead', 'Click on the lead name in the list to open its detail page.')}
${step(2, 'Go to Follow-ups Tab', 'Click the <strong>Follow-ups</strong> tab.')}
${step(3, 'Add a Follow-up', 'Click <strong>+ Add Follow-up</strong>, select the activity type (call, meeting, email, etc.), set the date and time, write your notes, and save.')}

${screenshot('Follow-ups tab – form to log a new follow-up showing type, date, and notes fields')}

<h2>Assigning a Lead</h2>
<p>To reassign a lead to a different team member, open the lead details, click the <strong>Assign</strong> button (or the agent name), select a new team member, and confirm. The new assignee will be responsible for all future follow-ups on that lead.</p>

<h2>Converting a Lead to a Sale</h2>
<p>When a lead is ready to convert, open the lead detail page and click <strong>Convert to Sale</strong>. This creates a new Sales Order pre-filled with the lead's information. See the <strong>Sales</strong> section for the next steps.</p>

${tip('Use the <strong>Filter</strong> and <strong>Search</strong> options at the top of the lead list to quickly find leads by category, source, assigned agent, or date range.')}
`
  },

  // ─── CONTACTS ───────────────────────────────────────────────
  'contacts': {
    title: 'Contacts',
    content: `
<h1>Contacts</h1>
<p>Contacts are individual people stored in your CRM database. They can be linked to leads, customers, or organizations.</p>

<p>Navigate to <strong>CRM → Contacts</strong> from the sidebar.</p>

${screenshot('Contact list page – showing a table with contact names, phone numbers, emails, and linked leads')}

<h2>Adding a Contact</h2>
${step(1, 'Click "+ New Contact"', 'Press the <strong>+ New Contact</strong> button in the top-right corner.')}
${step(2, 'Fill in the Details', 'Enter the contact\'s name, phone number, email, designation, and any relevant address or notes.')}
${step(3, 'Link to a Lead or Organization', 'Optionally, associate this contact with an existing lead or organization.')}
${step(4, 'Save', 'Click <strong>Save</strong> to add the contact to your database.')}

${screenshot('New contact form – showing name, phone, email, designation, and address fields')}

<h2>Editing or Deleting a Contact</h2>
<p>In the contact list, click the <strong>Edit</strong> icon (pencil) next to a contact to update their information, or the <strong>Delete</strong> icon (trash) to remove them. Deleted contacts are soft-deleted and can be restored if needed.</p>

${note('Contacts linked to active leads cannot be deleted until the association is removed first.')}

<h2>Searching Contacts</h2>
<p>Use the search bar at the top of the list to find a contact by name, email, or phone number instantly.</p>
`
  },

  // ─── ORGANIZATIONS ──────────────────────────────────────────
  'organizations': {
    title: 'Organizations',
    content: `
<h1>Organizations</h1>
<p>Organizations represent companies or groups that your leads and contacts belong to. Tracking organizations helps you manage B2B relationships effectively.</p>

<p>Navigate to <strong>CRM → Organizations</strong> from the sidebar.</p>

${screenshot('Organization list page – showing company name, industry, number of contacts, and total lead value')}

<h2>Adding an Organization</h2>
${step(1, 'Click "+ New Organization"', 'Click the <strong>+ New Organization</strong> button.')}
${step(2, 'Enter Organization Details', 'Fill in the company name, industry, website, phone, email, and address.')}
${step(3, 'Save', 'Click <strong>Save</strong>. The organization now appears in the list and can be linked to contacts and leads.')}

${screenshot('New organization form showing company name, industry, website, and address fields')}

<h2>Linking Contacts to an Organization</h2>
<p>When creating or editing a contact, select the organization from the <strong>Organization</strong> dropdown. All contacts belonging to the same organization will be visible on that organization's detail page.</p>
`
  },

  // ─── CUSTOMERS ──────────────────────────────────────────────
  'customers': {
    title: 'Customers',
    content: `
<h1>Customers</h1>
<p>Customers are leads that have been converted into active buyers — they have at least one confirmed sales order. Unova Estate automatically creates a customer record when a lead is converted to a sale.</p>

<p>Navigate to <strong>Customer</strong> from the main sidebar.</p>

${screenshot('Customer list page – table showing customer name, contact info, total purchases, and last sale date')}

<h2>Customer Profile</h2>
<p>Click any customer name to open their full profile. The profile shows:</p>
<ul>
  <li><strong>Personal Details</strong> — name, contact info, and addresses.</li>
  <li><strong>Purchase History</strong> — all sales orders linked to this customer.</li>
  <li><strong>Payment Summary</strong> — total amount paid and outstanding balance.</li>
  <li><strong>Notes & Documents</strong> — any files or notes associated with this customer.</li>
</ul>

${screenshot('Customer profile page showing personal info, purchase history, and payment summary tabs')}

${tip('You can add notes or upload documents directly from the customer profile for easy reference during follow-up calls.')}
`
  },

  // ─── SALES ──────────────────────────────────────────────────
  'sales': {
    title: 'Sales Orders & Commissions',
    content: `
<h1>Sales Orders & Commissions</h1>
<p>The Sales module records all confirmed transactions — from order creation through payment collection and commission payouts.</p>

<p>Navigate to <strong>Sales</strong> from the main sidebar.</p>

${screenshot('Sales list page – table showing sales order number, customer name, total amount, payment status, and date')}

<h2>Creating a Sales Order</h2>
${step(1, 'Click "+ New Sale"', 'Press the <strong>+ New Sale</strong> button in the top-right corner, or convert directly from a lead (see Leads section).')}
${step(2, 'Select the Customer', 'Choose an existing customer or create a new one on the spot.')}
${step(3, 'Add Products / Properties', 'Select the property or product being sold. Set the quantity, unit price, and discount. The total is calculated automatically.')}
${step(4, 'Assign Sales Team Members', 'Add the salesperson(s) involved in closing this deal. Their commission will be calculated based on the commission structure set in HR settings.')}
${step(5, 'Set Payment Schedule', 'Define when payments are due — a lump sum, installments, or a custom schedule.')}
${step(6, 'Save & Submit for Approval', 'Click <strong>Save</strong>. The order may require manager approval before it is fully confirmed, depending on your configuration.')}

${screenshot('New sales order form – showing customer, products, assigned agents, and payment schedule fields')}

<h2>Recording a Payment</h2>
${step(1, 'Open the Sales Order', 'Click on the order in the sales list to open its detail page.')}
${step(2, 'Go to the Payments Tab', 'Click the <strong>Payments</strong> tab.')}
${step(3, 'Add a Payment', 'Click <strong>+ Record Payment</strong>, enter the amount received, payment date, and payment method, then save.')}

${screenshot('Sales details – Payments tab showing payment schedule and "Record Payment" button')}

<h2>Sales Order Details Tabs</h2>
<table>
  <tr><th>Tab</th><th>Description</th></tr>
  <tr><td>Overview</td><td>Order summary, customer info, status, and assigned agents.</td></tr>
  <tr><td>Products</td><td>Line items with quantities, prices, and discounts.</td></tr>
  <tr><td>Payments</td><td>Payment schedule and recorded payment history.</td></tr>
  <tr><td>Commission</td><td>Commission breakdown for each sales team member.</td></tr>
</table>

<h2>Commissions</h2>
<p>Commissions are automatically calculated for each salesperson involved in a deal based on the commission rate configured in their salary structure. You can view the breakdown in the <strong>Commission</strong> tab of any sales order.</p>

${screenshot('Commission tab – showing each salesperson\'s name, role, commission percentage, and calculated commission amount')}

${note('Commissions are calculated once a payment is recorded. The final commission amount is based on the total amount collected, not the order total.')}

<h2>Sales Approval Workflow</h2>
<p>If your company has approval rules enabled, new sales orders will appear in the <strong>Needs Approval</strong> section on the Dashboard. A manager can approve or reject the order from there, or directly from the sales order detail page.</p>
`
  },

  // ─── PROJECTS ───────────────────────────────────────────────
  'projects': {
    title: 'Projects',
    content: `
<h1>Projects</h1>
<p>Projects represent real estate developments — apartment buildings, housing schemes, commercial complexes, or any other property development. Each project contains multiple units.</p>

<p>Navigate to <strong>Project</strong> from the main sidebar.</p>

${screenshot('Projects list page – showing project cards or table with project name, location, total units, and status')}

<h2>Creating a Project</h2>
${step(1, 'Click "+ New Project"', 'Press the <strong>+ New Project</strong> button.')}
${step(2, 'Enter Project Details', 'Fill in the project name, location, type (residential, commercial, mixed-use), description, and any relevant images.')}
${step(3, 'Save', 'Click <strong>Save</strong>. You can now add units to this project.')}

${screenshot('New project form – showing project name, type, location, and description fields')}

<h2>Project Details Page</h2>
<p>Click on a project to open its detail page, which shows all the units within it. From here you can:</p>
<ul>
  <li>View the full list of units and their availability status.</li>
  <li>Add new units to the project.</li>
  <li>See sales linked to units within this project.</li>
</ul>

${screenshot('Project details page – showing the list of units with availability status (Available, Sold, Reserved)')}

<h2>Property Types</h2>
<p>Property Types categorise your projects (e.g., Residential, Commercial, Industrial). Manage them in <strong>Configuration → Property Type</strong>.</p>
`
  },

  // ─── UNITS ──────────────────────────────────────────────────
  'units': {
    title: 'Units',
    content: `
<h1>Units</h1>
<p>Units are the individual sellable items within a project — for example, Flat 4A on the 4th floor of a building, or Plot 12 in a housing scheme.</p>

<p>Navigate to <strong>Unit</strong> from the sidebar, or view units within a project on the Project Details page.</p>

${screenshot('Unit list page – showing unit number, project name, floor, size, price, and availability status')}

<h2>Adding a Unit</h2>
${step(1, 'Open the Project', 'Go to Project and open the relevant project.')}
${step(2, 'Click "+ Add Unit"', 'Click the <strong>+ Add Unit</strong> button on the project details page.')}
${step(3, 'Fill in Unit Details', 'Enter the unit number/name, floor, size, layout type, asking price, and any special features.')}
${step(4, 'Save', 'Click <strong>Save</strong>. The unit is now available for selection when creating a sales order or lead.')}

${screenshot('New unit form – showing unit number, floor, size (sqft), layout type, and asking price fields')}

<h2>Unit Availability</h2>
<p>Each unit has one of the following statuses:</p>
<ul>
  <li><span class="tag tag-green">Available</span> — ready to be sold or reserved.</li>
  <li><span class="tag tag-orange">Reserved</span> — held for a potential buyer (linked to an active lead).</li>
  <li><span class="tag tag-gray">Sold</span> — a confirmed sales order has been created for this unit.</li>
</ul>
<p>The status updates automatically when a lead or sale is linked to the unit.</p>
`
  },

  // ─── LAYOUT TYPES ───────────────────────────────────────────
  'layout-types': {
    title: 'Layout Types',
    content: `
<h1>Layout Types</h1>
<p>Layout Types describe the floor plan or configuration of a unit — for example, "2 Bedroom 1 Bath", "Studio", or "3BHK". This helps buyers quickly understand what they are looking at.</p>

<p>Navigate to <strong>Project → Layout Type</strong> from the sidebar.</p>

${screenshot('Layout Types list – table showing layout name, description, and number of units using it')}

<h2>Adding a Layout Type</h2>
${step(1, 'Click "+ New Layout Type"', 'Press the <strong>+ New Layout Type</strong> button.')}
${step(2, 'Enter the Name and Description', 'Give it a clear name (e.g., "3BHK Corner Unit") and an optional description.')}
${step(3, 'Save', 'Click <strong>Save</strong>. This layout type is now selectable when creating or editing units.')}

${note('Layout Types are reusable across all projects, so you only need to define each type once.')}
`
  },

  // ─── SERVICES ───────────────────────────────────────────────
  'services': {
    title: 'Services',
    content: `
<h1>Services</h1>
<p>In addition to physical properties, your company may offer services — such as interior design, legal consultation, or property management. The Services module lets you catalogue these offerings.</p>

<p>Navigate to <strong>Service</strong> → <strong>Services</strong>, <strong>Service Categories</strong>, or <strong>Service Sub-Categories</strong> from the sidebar.</p>

${screenshot('Services list – showing service name, category, sub-category, and price')}

<h2>Setting Up Service Categories</h2>
<p>Before adding services, create the categories they belong to (e.g., "Finishing & Interiors", "Legal Services").</p>
${step(1, 'Go to Service → Service Category', 'Navigate to <strong>Service → Service Category</strong>.')}
${step(2, 'Click "+ New Category"', 'Enter a category name and save.')}

<h2>Adding a Service</h2>
${step(1, 'Go to Service → Services', 'Navigate to the main Services list.')}
${step(2, 'Click "+ New Service"', 'Fill in the service name, category, sub-category, description, and pricing.')}
${step(3, 'Save', 'The service is now available to attach to leads and sales orders.')}

${screenshot('New service form – showing name, category, sub-category, description, and price fields')}
`
  },

  // ─── EMPLOYEES ──────────────────────────────────────────────
  'employees': {
    title: 'Employees',
    content: `
<h1>Employees</h1>
<p>The Employee module stores your team's records — personal details, designation history, contracts, documents, salary structures, and more.</p>

<p>Navigate to <strong>Employees</strong> from the main sidebar.</p>

${screenshot('Employee list page – showing employee ID, name, designation, department, and status badges')}

<h2>Adding an Employee</h2>
${step(1, 'Click "+ New Employee"', 'Press the <strong>+ New Employee</strong> button.')}
${step(2, 'Personal Information', 'Enter the employee\'s full name, date of birth, national ID, address, and emergency contacts.')}
${step(3, 'Employment Details', 'Set the joining date, department, designation, branch, and employment type (full-time, part-time, contract).')}
${step(4, 'Salary Structure', 'Assign a salary policy and define the salary components (basic pay, allowances, deductions).')}
${step(5, 'Upload Documents', 'Attach scanned copies of contracts, ID documents, or certificates.')}
${step(6, 'Save', 'Click <strong>Save Employee</strong>. A unique Employee ID is generated automatically (e.g., EMP-000042).')}

${screenshot('New employee form – showing name, designation, department, joining date, and salary structure fields')}

<h2>Employee Profile</h2>
<p>Click on an employee's name to open their full profile. Tabs include:</p>
<table>
  <tr><th>Tab</th><th>What you can do</th></tr>
  <tr><td>Overview</td><td>View and edit personal and employment details.</td></tr>
  <tr><td>Attendance</td><td>See daily attendance records and check-in/check-out times.</td></tr>
  <tr><td>Leave</td><td>View leave balance and leave application history.</td></tr>
  <tr><td>Payroll</td><td>See monthly payslips and payment history.</td></tr>
  <tr><td>Documents</td><td>Upload and manage employee documents.</td></tr>
  <tr><td>Designation History</td><td>Track promotions and role changes over time.</td></tr>
</table>

${screenshot('Employee profile page – showing the tabbed interface with Overview, Attendance, Leave, and Payroll tabs')}

<h2>Affiliates</h2>
<p>Affiliates are external partners or agents who bring in leads or sales. Manage them under <strong>Employees → Affiliates</strong>. Affiliate performance and commission are tracked separately.</p>

${tip('Use the <strong>Designation History</strong> tab to log promotions without losing the record of previous roles.')}
`
  },

  // ─── ATTENDANCE ─────────────────────────────────────────────
  'attendance': {
    title: 'Attendance',
    content: `
<h1>Attendance</h1>
<p>Track when employees check in and out each day. Attendance data feeds directly into payroll calculations.</p>

<p>Navigate to <strong>HR → Attendance</strong> from the sidebar.</p>

${screenshot('Attendance page – showing a monthly grid or table with each employee\'s daily check-in and check-out times')}

<h2>How Employees Check In</h2>
<p>Employees can check in directly from the application using the <strong>Clock In</strong> button, typically visible at the top of their screen or on the Dashboard. The system records the current timestamp automatically.</p>

${screenshot('Clock-in button – showing the prominent "Clock In" button on the employee\'s screen, with current time displayed')}

<h2>Viewing Attendance Records</h2>
<p>On the Attendance page, you can:</p>
<ul>
  <li>View attendance for all employees or filter by individual employee.</li>
  <li>Switch between <strong>daily</strong> and <strong>monthly</strong> views.</li>
  <li>See check-in time, check-out time, total hours worked, and status (Present, Late, Absent, Half-day).</li>
</ul>

${screenshot('Attendance monthly view – showing a calendar grid with attendance status for each day per employee')}

<h2>Manual Attendance Entry</h2>
<p>If an employee forgets to clock in, an HR manager can add a manual entry:</p>
${step(1, 'Find the Employee', 'Filter or search for the employee on the Attendance page.')}
${step(2, 'Click the date cell', 'Click on the day that needs updating.')}
${step(3, 'Enter Times', 'Input the check-in and check-out times manually and save.')}

${note('Manual entries are flagged visually so they are distinguishable from system-recorded entries.')}

<h2>Attendance Policies</h2>
<p>Work shift timings, late-arrival thresholds, and overtime rules are configured in <strong>Configuration → HR Settings → Attendance & Work Shifts</strong>. See the <strong>HR Settings</strong> section for details.</p>
`
  },

  // ─── LEAVES ─────────────────────────────────────────────────
  'leaves': {
    title: 'Leave Management',
    content: `
<h1>Leave Management</h1>
<p>Manage employee leave requests, balances, and approvals all in one place.</p>

<p>Navigate to <strong>HR → Leaves</strong> from the sidebar.</p>

${screenshot('Leave management page – showing the list of leave applications with applicant name, leave type, dates, and status badges')}

<h2>Applying for Leave</h2>
<p>Employees can apply for leave from their profile or from the HR → Leaves page:</p>
${step(1, 'Click "+ Apply for Leave"', 'Press the <strong>+ Apply for Leave</strong> button.')}
${step(2, 'Select Leave Type', 'Choose the type of leave (Annual, Sick, Casual, Unpaid, etc.). Available types depend on the company\'s leave policy.')}
${step(3, 'Select Dates', 'Pick the start and end dates of the leave period.')}
${step(4, 'Add a Reason', 'Write a brief reason for the leave (optional but recommended).')}
${step(5, 'Submit', 'Click <strong>Submit Application</strong>. The application goes to the approver\'s queue.')}

${screenshot('Leave application form – showing leave type dropdown, date range picker, and reason text field')}

<h2>Approving or Rejecting a Leave</h2>
<p>Managers see pending leave applications in:</p>
<ul>
  <li>The <strong>Needs Approval</strong> section on the Dashboard, or</li>
  <li>The <strong>HR → Leaves</strong> page, filtered by "Pending" status.</li>
</ul>
<p>Click on an application and choose <strong>Approve</strong> or <strong>Reject</strong>. You can add a note when rejecting.</p>

${screenshot('Leave approval modal – showing the application details with Approve and Reject buttons and a note field')}

<h2>Leave Balances</h2>
<p>Each employee has a leave balance for each leave type. Balances are shown in the employee's profile under the <strong>Leave</strong> tab. HR managers can also view and adjust balances from the Leaves page.</p>

${screenshot('Leave balance view – showing a table with each leave type, total entitlement, days used, and remaining balance')}

<h2>Leave Policies</h2>
<p>Configure leave types, entitlements, and accrual rules in <strong>Configuration → HR Settings → Leave Settings</strong>. See the HR Settings section for details.</p>
`
  },

  // ─── PAYROLL ────────────────────────────────────────────────
  'payroll': {
    title: 'Payroll',
    content: `
<h1>Payroll</h1>
<p>Process monthly payroll, generate payslips, and track payment status for all employees.</p>

<p>Navigate to <strong>HR → Payroll</strong> from the sidebar.</p>

${screenshot('Payroll page – showing the list of payroll runs by month, with status (Draft, Processed, Paid) and total payroll amount')}

<h2>Processing Monthly Payroll</h2>
${step(1, 'Click "+ Generate Payroll"', 'Select the month and year for which payroll should be generated.')}
${step(2, 'Review the Calculations', 'The system calculates each employee\'s gross pay, allowances, deductions (PF, loans, absences), and net pay based on their assigned salary structure and attendance for the month.')}
${step(3, 'Adjust if Needed', 'You can manually adjust individual entries before finalising — for example, to add a bonus or correct an error.')}
${step(4, 'Finalise and Mark as Paid', 'Once reviewed, click <strong>Finalise Payroll</strong>. After payments are made, mark each entry as <strong>Paid</strong> to keep records accurate.')}

${screenshot('Payroll detail view – showing each employee\'s name, gross pay, deductions, and net pay in a summary table')}

<h2>Viewing a Payslip</h2>
<p>Click on any employee row within a payroll run to see their detailed payslip, showing every salary component, deduction, and the final net amount.</p>

${screenshot('Individual payslip view – showing employee name, salary components (basic, allowances), deductions (PF, loans), and net pay')}

<h2>Salary Structures</h2>
<p>Salary structures define what an employee earns and what is deducted. These are set up in <strong>Configuration → HR Settings → Salary Policies</strong>. Each employee is assigned one salary structure, which can be updated when they get a promotion or increment.</p>

${note('Payroll for any month cannot be processed before attendance records for that month are finalised.')}
`
  },

  // ─── PROVIDENT FUND ─────────────────────────────────────────
  'pf': {
    title: 'Provident Fund',
    content: `
<h1>Provident Fund (PF)</h1>
<p>The PF module tracks employee and employer contributions to the provident fund, maintains individual ledgers, and records PF payments.</p>

<p>Navigate to <strong>HR → Provident Fund</strong> from the sidebar.</p>

${screenshot('PF page – showing the PF summary with total employee contributions, employer contributions, and last payment date')}

<h2>PF Ledger</h2>
<p>Each employee has a PF ledger that shows:</p>
<ul>
  <li>Monthly employee contribution (deducted from salary).</li>
  <li>Monthly employer contribution (added by the company).</li>
  <li>Running balance and total accumulated fund.</li>
</ul>
<p>Access the ledger from the <strong>Ledger</strong> tab on the PF page or from <strong>HR → Provident Fund → Ledger</strong>.</p>

${screenshot('PF Ledger – table showing month, employee contribution, employer contribution, and cumulative balance for one employee')}

<h2>Recording a PF Payment</h2>
<p>When the company deposits PF contributions to the government fund:</p>
${step(1, 'Go to the PF Payments Tab', 'Click the <strong>PF Payments</strong> tab on the PF page.')}
${step(2, 'Click "+ Record Payment"', 'Enter the payment amount, date, and reference number.')}
${step(3, 'Save', 'The payment is recorded and balances are updated.')}

<h2>PF Settings</h2>
<p>PF contribution rates (percentage of basic salary for both employee and employer) are configured in <strong>Configuration → HR Settings → PF Settings</strong>.</p>
`
  },

  // ─── LOANS ──────────────────────────────────────────────────
  'loans': {
    title: 'Loans',
    content: `
<h1>Employee Loans</h1>
<p>Issue loans to employees and track repayment directly through payroll deductions.</p>

<p>Navigate to <strong>HR → Loans</strong> from the sidebar.</p>

${screenshot('Loans list – showing employee name, loan amount, remaining balance, monthly deduction, and status')}

<h2>Issuing a Loan</h2>
${step(1, 'Click "+ New Loan"', 'Press the <strong>+ New Loan</strong> button.')}
${step(2, 'Select Employee', 'Choose the employee receiving the loan.')}
${step(3, 'Enter Loan Details', 'Set the total loan amount, issue date, and monthly repayment amount. The system calculates how many months until the loan is fully repaid.')}
${step(4, 'Save', 'Click <strong>Save</strong>. The monthly repayment will be automatically deducted in future payroll runs.')}

${screenshot('New loan form – showing employee selection, loan amount, start date, and monthly deduction amount fields')}

<h2>Loan Repayment Tracking</h2>
<p>The loan list shows the current outstanding balance for each employee. When payroll is processed, loan repayments are automatically deducted and the balance is updated.</p>

${note('Multiple active loans per employee are supported. Each loan is tracked separately.')}
`
  },

  // ─── RESIGNATIONS ───────────────────────────────────────────
  'resignations': {
    title: 'Resignation & F&F',
    content: `
<h1>Resignation & Full & Final Settlement</h1>
<p>When an employee leaves the company, the Resignation & F&F module handles the offboarding process — from resignation recording to final payment calculation.</p>

<p>Navigate to <strong>HR → Resignations</strong> from the sidebar.</p>

${screenshot('Resignations list – showing employee name, resignation date, last working day, settlement status, and actions')}

<h2>Recording a Resignation</h2>
${step(1, 'Click "+ New Resignation"', 'Press the <strong>+ New Resignation</strong> button.')}
${step(2, 'Select the Employee', 'Choose the employee who is resigning.')}
${step(3, 'Enter Dates', 'Set the resignation date and the last working day.')}
${step(4, 'Save', 'Click <strong>Save</strong>. The employee\'s status is updated to "Resigned" on their last working day.')}

<h2>Full & Final Settlement (F&F)</h2>
<p>The F&F settlement calculates everything the employee is owed (or owes) on departure:</p>
<ul>
  <li>Remaining salary for the last partial month.</li>
  <li>Encashment of unused leave (if your policy allows).</li>
  <li>Outstanding loan deductions.</li>
  <li>PF balance payable.</li>
  <li>Any other adjustments.</li>
</ul>
<p>Open the resignation record and click <strong>Calculate F&F</strong> to generate the settlement summary. Once reviewed, mark it as paid to complete the offboarding.</p>

${screenshot('F&F settlement summary – showing salary dues, leave encashment, loan deductions, PF payout, and final net payable amount')}
`
  },

  // ─── MATERIALS ──────────────────────────────────────────────
  'materials': {
    title: 'Materials',
    content: `
<h1>Materials</h1>
<p>The Materials module manages the inventory of raw materials and supplies used in your projects — tracking stock levels, categories, and usage.</p>

<p>Navigate to <strong>Material</strong> from the main sidebar.</p>

${screenshot('Materials page – showing tabs for material list, categories, and current stock levels')}

<h2>Setting Up Material Categories</h2>
<p>Organise materials into categories (e.g., Cement & Concrete, Electrical, Plumbing) for easy management. Categories are managed from the Materials page under the <strong>Categories</strong> tab.</p>

<h2>Adding a Material</h2>
${step(1, 'Go to the Materials Tab', 'Click the <strong>Materials</strong> tab on the Materials setup page.')}
${step(2, 'Click "+ New Material"', 'Press the button to add a new material.')}
${step(3, 'Fill in Details', 'Enter the material name, category, unit of measurement, and opening stock quantity.')}
${step(4, 'Save', 'Click <strong>Save</strong>.')}

${screenshot('New material form – showing name, category, unit of measurement, and opening stock fields')}

<h2>Viewing Stock</h2>
<p>The <strong>Stock</strong> tab shows the current quantity of each material in your warehouse, updated automatically when purchases are received and materials are issued.</p>

<h2>Material Issues</h2>
<p>When materials are used in a project, record a material issue to deduct from stock. Navigate to <strong>Material Issue</strong> in the sidebar, click <strong>+ New Issue</strong>, select the project and materials, and save.</p>

${screenshot('Material Issue form – showing project selection and a list of materials with quantities to issue')}
`
  },

  // ─── SUPPLIERS ──────────────────────────────────────────────
  'suppliers': {
    title: 'Suppliers',
    content: `
<h1>Suppliers</h1>
<p>Maintain a database of your suppliers (vendors) and track your financial relationship with each one.</p>

<p>Navigate to <strong>Supplier</strong> from the main sidebar.</p>

${screenshot('Supplier list page – showing supplier name, contact person, phone, total purchases, and outstanding balance')}

<h2>Adding a Supplier</h2>
${step(1, 'Click "+ New Supplier"', 'Press the <strong>+ New Supplier</strong> button.')}
${step(2, 'Enter Supplier Details', 'Fill in the supplier\'s company name, contact person, phone, email, address, and any applicable tax or business registration number.')}
${step(3, 'Save', 'Click <strong>Save</strong>.')}

${screenshot('New supplier form – showing company name, contact person, phone, email, and address fields')}

<h2>Supplier Statement</h2>
<p>Click on a supplier's name to view their statement — a full history of all purchases made from them, payments recorded, and the current outstanding balance.</p>

${screenshot('Supplier statement page – showing a chronological list of transactions with purchase amounts, payments, and running balance')}
`
  },

  // ─── PURCHASES ──────────────────────────────────────────────
  'purchases': {
    title: 'Purchases',
    content: `
<h1>Purchases</h1>
<p>Record and track all purchase orders made from your suppliers, including purchase returns.</p>

<p>Navigate to <strong>Purchase</strong> from the main sidebar.</p>

${screenshot('Purchase list page – showing purchase order number, supplier name, date, total amount, and payment status')}

<h2>Creating a Purchase Order</h2>
${step(1, 'Click "+ New Purchase"', 'Press the <strong>+ New Purchase</strong> button.')}
${step(2, 'Select Supplier', 'Choose the supplier from your supplier database.')}
${step(3, 'Add Items', 'Select the materials or products being purchased, enter quantities and unit prices.')}
${step(4, 'Set Payment Terms', 'Specify the payment due date and any advance payment made.')}
${step(5, 'Save', 'Click <strong>Save</strong>.')}

${screenshot('New purchase order form – showing supplier selection, item list with quantities and prices, and payment terms')}

<h2>Purchase Returns</h2>
<p>If you need to return goods to a supplier, navigate to <strong>Purchase → Purchase Returns</strong>, click <strong>+ New Return</strong>, reference the original purchase order, and specify the items and quantities being returned.</p>

<h2>Requisitions</h2>
<p>Before creating a purchase order, a team member can submit a <strong>Requisition</strong> — a request to purchase specific materials. Go to <strong>Purchase → Requisitions</strong> to view and approve pending requisitions, then convert them into purchase orders.</p>

${screenshot('Requisition list – showing pending purchase requests with requester name, items needed, and urgency level')}
`
  },

  // ─── EXPENSES ───────────────────────────────────────────────
  'expenses': {
    title: 'Expenses',
    content: `
<h1>Expenses</h1>
<p>Track all project and office expenses to maintain accurate financial records.</p>

<p>Navigate to <strong>Expense</strong> from the main sidebar.</p>

${screenshot('Expense list page – showing expense title, category, amount, date, submitted by, and approval status')}

<h2>Recording an Expense</h2>
${step(1, 'Click "+ New Expense"', 'Press the <strong>+ New Expense</strong> button.')}
${step(2, 'Fill in Details', 'Enter the expense title, category (project expense, office expense, etc.), amount, date, and a brief description. Attach a receipt if available.')}
${step(3, 'Submit for Approval', 'Click <strong>Submit</strong>. The expense will appear in the approver\'s queue.')}

${screenshot('New expense form – showing title, category, amount, date, description, and file upload fields')}

<h2>Expense Approval</h2>
<p>Managers can approve or reject submitted expenses from the <strong>Needs Approval</strong> section on the Dashboard or directly from the Expense list filtered by "Pending" status.</p>

${note('Approved expenses are automatically recorded in the accounting system as journal entries.')}
`
  },

  // ─── REQUISITIONS ───────────────────────────────────────────
  'requisitions': {
    title: 'Requisitions',
    content: `
<h1>Requisitions</h1>
<p>Requisitions are internal purchase requests — a team member requests materials or goods before a formal purchase order is raised.</p>

<p>Navigate to <strong>Purchase → Requisitions</strong> from the sidebar.</p>

${screenshot('Requisition list – showing requisition ID, requester, requested items, date, and status (Pending/Approved/Rejected)')}

<h2>Submitting a Requisition</h2>
${step(1, 'Click "+ New Requisition"', 'Press the button to create a new request.')}
${step(2, 'Add Items', 'Select each material needed, specify the quantity and urgency.')}
${step(3, 'Add Notes', 'Write any context the approver needs to know.')}
${step(4, 'Submit', 'Click <strong>Submit</strong>. The requisition enters the approval queue.')}

<h2>Approving a Requisition & Converting to PO</h2>
<p>Managers approve the requisition from the Dashboard or Requisitions list. Once approved, click <strong>Convert to Purchase Order</strong> to automatically create a purchase order from the requisition details.</p>

${screenshot('Requisition detail page – showing item list with quantities, requester notes, and the "Approve" and "Convert to PO" buttons')}
`
  },

  // ─── JOURNAL VOUCHERS ───────────────────────────────────────
  'journal-vouchers': {
    title: 'Journal Vouchers',
    content: `
<h1>Journal Vouchers</h1>
<p>Journal vouchers are the core accounting entries that record every financial transaction in a double-entry bookkeeping system.</p>

<p>Navigate to <strong>Journal Vouchers</strong> from the main sidebar.</p>

${screenshot('Journal voucher list – showing voucher number, date, description, total debit/credit amount, and status (Draft/Posted)')}

<h2>Creating a Journal Voucher</h2>
${step(1, 'Click "+ New Voucher"', 'Press the <strong>+ New Voucher</strong> button.')}
${step(2, 'Set the Date and Reference', 'Enter the transaction date and an optional reference number.')}
${step(3, 'Add Journal Lines', 'For each line, select the account (from your chart of accounts), enter either a debit or credit amount, and add a description. Every voucher must balance — total debits must equal total credits.')}
${step(4, 'Save as Draft or Post', 'Save as <strong>Draft</strong> to review later, or <strong>Post</strong> to record it permanently in the books.')}

${screenshot('New journal voucher form – showing debit/credit line entries with account selector and amount fields; total balance indicator at the bottom')}

${warn('Posted journal vouchers cannot be edited. If you make a mistake, create a reversing entry.')}

<h2>Searching Vouchers</h2>
<p>Use the search and date filter at the top of the voucher list to find specific transactions by date range, account, or reference number.</p>
`
  },

  // ─── CASHFLOW ───────────────────────────────────────────────
  'cashflow': {
    title: 'Banks & Cashflow',
    content: `
<h1>Banks & Cashflow</h1>
<p>Manage your company's bank accounts and view the cashflow statement from a single screen.</p>

<p>Navigate to <strong>Configuration → Bank</strong> to manage bank accounts, and <strong>Accounts → Cashflow</strong> to view the cashflow summary.</p>

<h2>Setting Up a Bank Account</h2>
${step(1, 'Go to Configuration → Bank', 'Navigate to <strong>Configuration → Bank</strong>.')}
${step(2, 'Click "+ New Bank"', 'Enter the bank name, account number, branch name, and opening balance.')}
${step(3, 'Save', 'The bank account is now available as an account option in journal vouchers and payment records.')}

${screenshot('Bank setup page – showing a list of bank accounts with name, account number, and current balance')}

<h2>Cashflow Statement</h2>
<p>The Cashflow page shows a summary of money flowing in and out of your business over a selected period, broken down by account. Use the date range filter to view any period.</p>

${screenshot('Cashflow page – showing inflows, outflows, and net cashflow by account and category with a date range filter at the top')}

<h2>Chart of Accounts</h2>
<p>The Chart of Accounts is the master list of all financial accounts used in your journal entries. Navigate to <strong>Configuration → Chart of Accounts</strong> to view and manage it. Accounts are organised hierarchically (Assets, Liabilities, Income, Expenses, Equity).</p>

${screenshot('Chart of accounts page – showing a tree structure of account groups and individual accounts with their codes')}
`
  },

  // ─── CHART OF ACCOUNTS ──────────────────────────────────────
  'chart-of-accounts': {
    title: 'Chart of Accounts',
    content: `
<h1>Chart of Accounts</h1>
<p>The Chart of Accounts (COA) is the backbone of your accounting system — a structured list of every account used to record financial transactions.</p>

<p>Navigate to <strong>Configuration → Chart of Accounts</strong>.</p>

${screenshot('Chart of accounts – showing a hierarchical tree with account groups (Assets, Liabilities, Income, Expenses) and individual accounts under each')}

<h2>Account Structure</h2>
<p>Accounts are organised into five main groups:</p>
<table>
  <tr><th>Group</th><th>Examples</th></tr>
  <tr><td>Assets</td><td>Cash, Bank, Receivables, Property</td></tr>
  <tr><td>Liabilities</td><td>Payables, Loans Payable, PF Payable</td></tr>
  <tr><td>Income</td><td>Sales Revenue, Commission Income</td></tr>
  <tr><td>Expenses</td><td>Salaries, Office Expenses, Material Cost</td></tr>
  <tr><td>Equity</td><td>Owner's Capital, Retained Earnings</td></tr>
</table>

<h2>Adding an Account</h2>
${step(1, 'Click "+ New Account"', 'Press the add button on the Chart of Accounts page.')}
${step(2, 'Select Parent Account', 'Choose the parent group this account belongs to (e.g., place "Office Supplies" under "Expenses").')}
${step(3, 'Enter Account Name and Code', 'Give it a unique code and a descriptive name.')}
${step(4, 'Save', 'Click Save. The account is now available for use in journal vouchers.')}

${warn('Do not delete accounts that have existing journal entries — this will break your accounting records. Instead, mark unused accounts as inactive.')}
`
  },

  // ─── CAMPAIGNS ──────────────────────────────────────────────
  'campaigns': {
    title: 'Campaigns',
    content: `
<h1>Marketing Campaigns</h1>
<p>Send targeted Email, SMS, or WhatsApp campaigns to your leads and contacts directly from Unova Estate.</p>

<p>Navigate to <strong>Marketing → Campaigns</strong> from the sidebar.</p>

${screenshot('Campaign list page – showing campaign name, channel (Email/SMS/WhatsApp), audience count, sent date, and open/click rates')}

<h2>Creating a Campaign</h2>
${step(1, 'Click "+ New Campaign"', 'Press the <strong>+ New Campaign</strong> button.')}
${step(2, 'Name Your Campaign', 'Give the campaign a descriptive internal name (e.g., "April Launch – Email Blast").')}
${step(3, 'Choose the Channel', 'Select <strong>Email</strong>, <strong>SMS</strong>, or <strong>WhatsApp</strong> as the delivery channel.')}
${step(4, 'Select or Write the Message', 'Choose an existing template or compose the message directly. For emails, you can use the rich-text editor.')}
${step(5, 'Select the Audience', 'Choose which leads or contacts to send to — filter by lead category, source, or other criteria.')}
${step(6, 'Schedule or Send Now', 'Set a future date and time to schedule the campaign, or click <strong>Send Now</strong> to dispatch immediately.')}

${screenshot('New campaign form – showing channel selector, message editor, audience filter, and schedule/send options')}

<h2>Tracking Campaign Performance</h2>
<p>After a campaign is sent, click on it in the list to see:</p>
<ul>
  <li><strong>Delivered</strong> — how many messages were successfully delivered.</li>
  <li><strong>Opened</strong> — how many recipients opened the email (email only).</li>
  <li><strong>Clicked</strong> — how many recipients clicked a link in the message.</li>
</ul>

${screenshot('Campaign analytics view – showing delivered, opened, clicked counts and a percentage rate for each metric')}

${tip('Use the open and click rates to measure engagement. Low open rates may mean your subject line needs improvement; low click rates suggest the message content needs work.')}
`
  },

  // ─── TEMPLATES ──────────────────────────────────────────────
  'templates': {
    title: 'Templates',
    content: `
<h1>Marketing Templates</h1>
<p>Templates are reusable messages for Email, SMS, and WhatsApp. Create them once and use them across multiple campaigns.</p>

<p>Navigate to <strong>Marketing → Templates</strong> from the sidebar.</p>

${screenshot('Templates page – showing tabs for Email, SMS, and WhatsApp templates with a list of template names and previews')}

<h2>Creating a Template</h2>
${step(1, 'Select the Channel Tab', 'Click the <strong>Email</strong>, <strong>SMS</strong>, or <strong>WhatsApp</strong> tab.')}
${step(2, 'Click "+ New Template"', 'Press the add button.')}
${step(3, 'Write Your Message', 'For email templates, use the rich-text editor to format text, add images, and insert links. For SMS and WhatsApp, write plain text.')}
${step(4, 'Use Merge Tags', 'Insert personalisation placeholders such as <code>{{name}}</code> or <code>{{property_name}}</code> to auto-fill recipient details when the message is sent.')}
${step(5, 'Save', 'Click <strong>Save Template</strong>.')}

${screenshot('Email template editor – showing the rich-text editor with formatting toolbar, merge tag selector, and template preview')}

<h2>Using a Template in a Campaign</h2>
<p>When creating a campaign, select <strong>Use Template</strong> and pick from your saved templates. The message will be pre-filled and you can further customise it before sending.</p>
`
  },

  // ─── LEAD FORMS ─────────────────────────────────────────────
  'lead-forms': {
    title: 'Lead Forms',
    content: `
<h1>Lead Forms</h1>
<p>Lead Forms are public web forms that capture enquiry details from potential clients. Share the form link on your website, social media, or in campaign messages — submissions automatically create leads in Unova Estate.</p>

<p>Navigate to <strong>Marketing → Lead Forms</strong> from the sidebar.</p>

${screenshot('Lead forms list – showing form name, URL slug, number of submissions, and status (Active/Inactive)')}

<h2>Creating a Lead Form</h2>
${step(1, 'Click "+ New Form"', 'Press the <strong>+ New Form</strong> button.')}
${step(2, 'Name the Form', 'Give it an internal name and a URL-friendly slug (e.g., <code>april-promo</code>).')}
${step(3, 'Add Fields', 'Drag and drop or add form fields: name, phone, email, message, and any custom fields relevant to your enquiry.')}
${step(4, 'Set Default Values', 'Choose which lead category and source new submissions should be assigned to automatically.')}
${step(5, 'Publish', 'Click <strong>Publish</strong>. Your form is now live at <code>/form/april-promo</code>.')}

${screenshot('Lead form builder – showing the drag-and-drop field editor with field types on the left and form preview on the right')}

<h2>Sharing the Form</h2>
<p>Copy the public URL from the form detail page and share it anywhere. Every submission creates a new lead in your CRM, pre-tagged with the source and category you set.</p>

${tip('Create a different form for each marketing channel (website, Facebook, billboard) to track exactly where your leads are coming from.')}
`
  },

  // ─── AUTO COMMUNICATION ─────────────────────────────────────
  'auto-communication': {
    title: 'Auto Communication',
    content: `
<h1>Auto Communication</h1>
<p>Auto Communication lets you set up automated message sequences — for example, send a welcome SMS when a new lead is created, then follow up with an email three days later.</p>

<p>Navigate to <strong>Configuration → Auto Communication</strong> from the sidebar.</p>

${screenshot('Auto communication page – showing a list of configured rules with trigger event, channel, delay, and status (Active/Inactive)')}

<h2>How It Works</h2>
<p>You define a <strong>trigger</strong> (e.g., "New lead created in category X") and a <strong>sequence of messages</strong> with time delays between each one. When the trigger occurs, the system sends the messages automatically at the scheduled times.</p>

<h2>Creating an Auto Communication Rule</h2>
${step(1, 'Click "+ New Rule"', 'Press the <strong>+ New Rule</strong> button.')}
${step(2, 'Select the Lead Category', 'Choose which lead category this rule applies to (e.g., "New Enquiry").')}
${step(3, 'Add Sequence Steps', 'For each step: choose the channel (Email/SMS/WhatsApp), select a template, and set the delay after the previous step (e.g., "Send immediately", "After 1 day", "After 3 days").')}
${step(4, 'Activate', 'Toggle the rule to <strong>Active</strong> and save.')}

${screenshot('Auto communication rule editor – showing the lead category selector and a timeline of sequence steps with channel, template, and delay settings')}

${note('Make sure the relevant Email, SMS, or WhatsApp provider is configured in <strong>Configuration → API Integrations</strong> before activating auto communication rules.')}
`
  },

  // ─── REPORTS ────────────────────────────────────────────────
  'reports': {
    title: 'Reports',
    content: `
<h1>Reports</h1>
<p>Unova Estate provides built-in reports to help you analyse business performance and make informed decisions.</p>

<p>Navigate to <strong>Report</strong> from the main sidebar.</p>

${screenshot('Reports section – showing the available report types as cards or list items')}

<h2>Pipeline Activity Report</h2>
<p>The Pipeline Activity Report (also called Follow-up Activity) shows all lead follow-up activities within a selected date range. Use it to monitor how active your sales team is and which leads have been neglected.</p>

${step(1, 'Go to Report → Pipeline Activity', 'Navigate to <strong>Report → Pipeline Activity</strong>.')}
${step(2, 'Set Date Range', 'Choose the start and end dates for the report.')}
${step(3, 'Filter Options', 'Optionally filter by team member or lead category.')}
${step(4, 'View or Export', 'Review the results on screen or export to a spreadsheet for further analysis.')}

${screenshot('Pipeline Activity report – showing a table of follow-up activities with lead name, assigned agent, activity type, date, and notes')}

<h2>Payroll Reports</h2>
<p>Monthly payroll summaries can be accessed from the <strong>HR → Payroll</strong> section. Each payroll run can be exported as a spreadsheet for your records.</p>

<h2>PF Ledger Report</h2>
<p>A detailed PF ledger for all employees is available from <strong>HR → Provident Fund → Reports</strong> tab. Filter by employee or date range to generate the report.</p>

${screenshot('PF ledger report – showing each employee\'s monthly contributions and year-to-date totals in a printable table format')}

${tip('Export reports to Excel for custom analysis, sharing with auditors, or record-keeping purposes.')}
`
  },

  // ─── ROLES & PERMISSIONS ────────────────────────────────────
  'roles': {
    title: 'Roles & Permissions',
    content: `
<h1>Roles & Permissions</h1>
<p>Control exactly what each user can see and do in Unova Estate using Roles. A Role is a named set of permissions that you assign to one or more users.</p>

<p>Navigate to <strong>Configuration → Roles</strong> from the sidebar.</p>

${screenshot('Roles list page – showing role names (Admin, Sales Manager, HR Officer, etc.) and the number of users assigned to each')}

<h2>Default Roles</h2>
<p>The system comes with a built-in <strong>Admin</strong> role that has full access. You can create additional custom roles for different job functions:</p>
<ul>
  <li><strong>Sales Manager</strong> — can view all leads and sales; cannot change HR or accounting settings.</li>
  <li><strong>Sales Executive</strong> — can only view and manage their own leads.</li>
  <li><strong>HR Officer</strong> — access to HR, attendance, payroll; no access to sales or accounting.</li>
  <li><strong>Accountant</strong> — access to journal vouchers, cashflow, and accounts only.</li>
</ul>

<h2>Creating a Custom Role</h2>
${step(1, 'Click "+ New Role"', 'Press the <strong>+ New Role</strong> button.')}
${step(2, 'Name the Role', 'Give it a clear name that reflects the job function (e.g., "Project Manager").')}
${step(3, 'Set Permissions', 'A list of permissions is shown, grouped by module (CRM, HR, Sales, Accounting, etc.). Toggle each permission on or off as appropriate for this role.')}
${step(4, 'Save', 'Click <strong>Save Role</strong>.')}

${screenshot('Role permissions editor – showing a grid of modules with toggles for view, create, edit, and delete permissions per module')}

<h2>Assigning a Role to a User</h2>
<p>Roles are assigned when an employee user account is created or can be changed from the employee's profile. Go to the employee's profile → <strong>Security</strong> or <strong>Access</strong> tab → select their role → save.</p>

${warn('Only admins can create or edit roles. Be careful when modifying the Admin role — removing permissions from the Admin role may lock you out of features.')}

<h2>Permission Types</h2>
<table>
  <tr><th>Permission</th><th>What it allows</th></tr>
  <tr><td>view_all</td><td>See all records (e.g., all leads across all agents).</td></tr>
  <tr><td>view_own</td><td>See only records assigned to themselves.</td></tr>
  <tr><td>create</td><td>Add new records.</td></tr>
  <tr><td>edit</td><td>Update existing records.</td></tr>
  <tr><td>delete</td><td>Remove records.</td></tr>
</table>
`
  },

  // ─── CONFIGURATION ──────────────────────────────────────────
  'configuration': {
    title: 'General Settings',
    content: `
<h1>General Settings & Configuration</h1>
<p>The Configuration section is where administrators set up the building blocks that the rest of the system depends on — company info, lead categories, locations, VAT, media, and more.</p>

<p>Navigate to <strong>Configuration</strong> from the main sidebar.</p>

<h2>Company Information</h2>
<p>Go to <strong>Configuration → Company Info</strong> to update your company's name, logo, address, tax information, and contact details. This information appears on generated documents like invoices and payslips.</p>

${screenshot('Company Info settings page – showing company name, logo upload, address, and tax registration number fields')}

<h2>Lead Categories</h2>
<p>Lead Categories define the stages in your sales pipeline (e.g., New Enquiry → Site Visit → Negotiation → Won → Lost). Set them up in <strong>Configuration → Lead Category</strong>. Each category can have its own colour code for easy visual identification in the lead list.</p>

${screenshot('Lead Category setup – showing a list of pipeline stages with names, colours, and drag-to-reorder handles')}

<h2>Lead Sources</h2>
<p>Configure where leads come from in <strong>Configuration → Lead Source</strong> (e.g., Website, Facebook, Referral, Billboard). This data populates the Source field when creating leads and appears in reports.</p>

<h2>Challenges / Objections</h2>
<p>Go to <strong>Configuration → Challenge</strong> to build a library of common sales objections and talking points. Sales team members can reference these during follow-up calls to handle objections effectively.</p>

<h2>Measurement Units</h2>
<p>Define units of measurement used for materials and properties (e.g., Square Feet, Square Meter, Kilogram, Ton) in <strong>Configuration → Measurement Unit</strong>.</p>

<h2>Property Configuration</h2>
<p>Manage property-related settings:</p>
<ul>
  <li><strong>Property Type</strong> — Residential, Commercial, Industrial, etc.</li>
  <li><strong>Property Unit</strong> — apartment, plot, office, shop, etc.</li>
</ul>

<h2>VAT Settings</h2>
<p>Configure your company's VAT/tax rate in <strong>Configuration → VAT Setting</strong>. This rate is applied automatically to relevant sales and purchase calculations.</p>

<h2>Hierarchy (Designations)</h2>
<p>Manage designations (job titles) and the reporting hierarchy in <strong>Configuration → Hierarchy</strong>. This defines your company's organisational structure and is used in HR workflows.</p>

<h2>Location Configuration</h2>
<p>Set up your geographical coverage areas in <strong>Configuration → Location</strong>. The system supports a multi-level hierarchy: Division → District → Upazila → Union → Village. These locations are used when assigning lead areas and employee addresses.</p>

${screenshot('Location configuration page – showing a tree of geographical divisions and sub-levels')}

<h2>Media / File Management</h2>
<p>All uploaded files — employee documents, property images, attachments — are managed in <strong>Configuration → Media</strong>. You can organise files into folders and control access.</p>

<h2>Payment Reasons</h2>
<p>Define the categories of payments made and received (e.g., "Down Payment", "Installment", "Refund") in <strong>Configuration → Payment Reason</strong>. These labels appear in payment records for clear bookkeeping.</p>
`
  },

  // ─── HR SETTINGS ────────────────────────────────────────────
  'hr-settings': {
    title: 'HR Settings',
    content: `
<h1>HR Settings</h1>
<p>HR Settings is where you configure the rules that govern HR operations — work shifts, leave policies, salary structures, PF rates, and more. These settings affect all employees.</p>

<p>Navigate to <strong>Configuration → HR Settings</strong> from the sidebar.</p>

${screenshot('HR Settings page – showing a tabbed interface with sections for Attendance, Leave, Salary, PF, Overtime, and Grades')}

<h2>Work Shifts</h2>
<p>Define your company's work shifts in the <strong>Work Shifts</strong> tab. For each shift, set:</p>
<ul>
  <li>Shift name (e.g., "Day Shift", "Morning Shift").</li>
  <li>Start and end time.</li>
  <li>Working days of the week.</li>
  <li>Grace period for late arrival.</li>
</ul>
<p>Employees are assigned a work shift, which determines their expected attendance times.</p>

${screenshot('Work shift settings – showing a form with shift name, start time, end time, working days checkboxes, and grace period field')}

<h2>Leave Settings</h2>
<p>In the <strong>Leave</strong> tab, configure:</p>
<ul>
  <li><strong>Leave Types</strong> — Annual, Sick, Casual, Maternity, Unpaid, etc.</li>
  <li><strong>Leave Policies</strong> — how many days each type allows per year, whether unused days carry over, and accrual rules.</li>
</ul>

${screenshot('Leave settings – showing leave type list with entitlement days, carryover toggle, and policy assignment')}

<h2>Salary Components</h2>
<p>In the <strong>Salary Components</strong> tab, define the building blocks of a salary:</p>
<ul>
  <li><strong>Earnings</strong> — Basic Pay, House Rent Allowance, Medical Allowance, etc.</li>
  <li><strong>Deductions</strong> — Provident Fund, Tax, Loan Repayment, etc.</li>
</ul>

<h2>Salary Policies</h2>
<p>A Salary Policy bundles salary components into a named package (e.g., "Executive Package", "Field Staff Policy"). In the <strong>Salary Policies</strong> tab, create policies and assign component amounts or percentages. These policies are then assigned to individual employees.</p>

${screenshot('Salary policy editor – showing a policy name and a list of earnings and deduction components with fixed or percentage-based amounts')}

<h2>Provident Fund (PF) Settings</h2>
<p>In the <strong>PF Settings</strong> tab, set the employee and employer PF contribution rates as a percentage of basic salary. These rates are applied automatically during payroll processing.</p>

<h2>Overtime Policy</h2>
<p>Configure how overtime hours are calculated and compensated in the <strong>Overtime</strong> tab — for example, 1.5× the hourly rate for weekday overtime, 2× for holidays.</p>

<h2>Grades</h2>
<p>Employee grades (e.g., Grade A, Grade B) can be configured in the <strong>Grades</strong> tab. Grades can be linked to salary ranges and benefits.</p>

<h2>Holiday Calendar</h2>
<p>Navigate to <strong>Configuration → Holiday Calendar</strong> to add public holidays and company-specific holidays. These days are excluded from attendance calculations and leave deductions.</p>

${screenshot('Holiday calendar – showing a list of public and company holidays with dates and names for the current year')}
`
  },

  // ─── API INTEGRATIONS ───────────────────────────────────────
  'api-integrations': {
    title: 'API Integrations',
    content: `
<h1>API Integrations</h1>
<p>Connect Unova Estate to third-party communication providers so you can send SMS, emails, and WhatsApp messages directly from the platform.</p>

<p>Navigate to <strong>Configuration → API Integrations</strong> from the sidebar.</p>

${screenshot('API Integrations page – showing sections for Email Provider, SMS Provider, and WhatsApp Provider with configuration status indicators')}

<h2>Email Provider</h2>
<p>Configure your SMTP server details to enable email sending (campaigns, notifications, password reset emails):</p>
<ul>
  <li><strong>Host</strong> — your SMTP server address (e.g., <code>smtp.gmail.com</code>).</li>
  <li><strong>Port</strong> — typically 587 (TLS) or 465 (SSL).</li>
  <li><strong>Username</strong> — your email account login.</li>
  <li><strong>Password</strong> — your email account password or app-specific password.</li>
  <li><strong>From Name & From Email</strong> — the sender name and address recipients will see.</li>
</ul>

${screenshot('Email provider settings form – showing SMTP host, port, username, password, from name, and from email fields with a "Test Connection" button')}

<h2>SMS Provider</h2>
<p>Enter your SMS gateway API credentials to enable SMS campaigns and notifications. The exact fields depend on your SMS provider — typically an API key and sender ID are required.</p>

<h2>WhatsApp Provider</h2>
<p>Connect to the Meta WhatsApp Business API by entering your WhatsApp Business Account ID, Phone Number ID, and API Token. A webhook URL is provided for you to configure in your Meta developer settings.</p>

${screenshot('WhatsApp provider settings – showing API token, Phone Number ID, and the system-generated webhook URL to copy into Meta settings')}

${tip('Always use the <strong>Test Connection</strong> or <strong>Send Test Message</strong> button after saving to verify that your provider is correctly configured before running a campaign.')}

${warn('Keep your API keys private. Never share them or commit them to version control.')}
`
  },

};

// ─────────────────────────────────────────────────────────────
//  Component
// ─────────────────────────────────────────────────────────────
export default function DocsClient() {
  const [currentDocId, setCurrentDocId] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen]   = useState(false);

  const currentDoc = docsData[currentDocId] || docsData['dashboard'];

  const handleNavClick = (id) => {
    setCurrentDocId(id);
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed md:static top-0 left-0 h-full w-72 bg-white border-r border-gray-100 z-50
        flex flex-col transition-transform duration-300
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        {/* Logo */}
        <div className="flex items-center gap-3 px-5 h-16 border-b border-gray-100 flex-shrink-0">
          <Link href="/" className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center flex-shrink-0">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M3 9.75L12 3l9 6.75V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.75z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M9 21V12h6v9" />
            </svg>
          </Link>
          <div>
            <p className="text-sm font-bold text-gray-800 leading-tight">Unova Estate</p>
            <p className="text-xs text-gray-400">Documentation</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-5">
          {sidebarGroups.map((group, gIdx) => (
            <div key={gIdx}>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-2 mb-1.5">
                {group.title}
              </p>
              <div className="space-y-0.5">
                {group.items.map((item) => {
                  const isActive = currentDocId === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150
                        ${isActive
                          ? 'bg-indigo-50 text-indigo-700 font-semibold'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Footer */}
        <div className="px-4 py-3 border-t border-gray-100 flex-shrink-0">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs text-gray-500 hover:text-indigo-600 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Site
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex flex-col flex-1 min-w-0 h-screen overflow-hidden">

        {/* Top bar */}
        <header className="bg-white border-b border-gray-100 h-16 flex items-center px-5 gap-4 flex-shrink-0 z-30">
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-500 hover:bg-gray-100"
            onClick={() => setSidebarOpen(true)}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <span className="text-sm font-semibold text-gray-700 truncate">
            {currentDoc?.title || 'Documentation'}
          </span>

          <Link
            href="/"
            className="ml-auto flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M3 9.75L12 3l9 6.75V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.75z" />
            </svg>
            Home
          </Link>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-6 md:p-10">
          <div className="max-w-3xl mx-auto">
            <div
              className="doc-content"
              dangerouslySetInnerHTML={{ __html: currentDoc?.content || '' }}
            />
          </div>
        </main>
      </div>

      <DocsAskAI />

      {/* Global styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .doc-content h1 { font-size: 1.6rem; font-weight: 800; color: #111827; margin-bottom: 0.4rem; }
        .doc-content h2 { font-size: 1.15rem; font-weight: 700; color: #1f2937; margin-top: 2rem; margin-bottom: 0.6rem; border-bottom: 1px solid #f3f4f6; padding-bottom: 0.4rem; }
        .doc-content h3 { font-size: 1rem; font-weight: 600; color: #374151; margin-top: 1.4rem; margin-bottom: 0.4rem; }
        .doc-content p  { color: #4b5563; line-height: 1.75; margin-bottom: 0.9rem; font-size: 0.9rem; }
        .doc-content ul, .doc-content ol { padding-left: 1.4rem; margin-bottom: 1rem; }
        .doc-content li { color: #4b5563; line-height: 1.8; font-size: 0.9rem; }
        .doc-content ul li { list-style-type: disc; }
        .doc-content ol li { list-style-type: decimal; }
        .doc-content code:not(pre code) { background: #f3f4f6; padding: 0.1rem 0.35rem; border-radius: 0.3rem; font-size: 0.82em; color: #dc2626; font-family: monospace; }
        .doc-content pre  { background: #1e293b; color: #e2e8f0; padding: 1rem 1.25rem; border-radius: 0.75rem; overflow-x: auto; font-size: 0.82rem; margin-bottom: 1rem; font-family: monospace; line-height: 1.6; }
        .doc-content a    { color: #4f46e5; text-decoration: underline; }
        .doc-content table { width: 100%; border-collapse: collapse; margin-bottom: 1rem; font-size: 0.875rem; }
        .doc-content th   { background: #f9fafb; text-align: left; padding: 0.6rem 0.9rem; font-weight: 600; color: #374151; border: 1px solid #e5e7eb; }
        .doc-content td   { padding: 0.6rem 0.9rem; border: 1px solid #e5e7eb; color: #4b5563; vertical-align: top; }
        .doc-content .screenshot-placeholder { background: #f8fafc; border: 2px dashed #cbd5e1; border-radius: 0.75rem; padding: 2rem 1.5rem; text-align: center; margin: 1.25rem 0; }
        .doc-content .note-box   { background: #eff6ff; border-left: 4px solid #3b82f6; border-radius: 0 0.5rem 0.5rem 0; padding: 0.9rem 1.1rem; margin: 1rem 0; }
        .doc-content .tip-box    { background: #f0fdf4; border-left: 4px solid #22c55e; border-radius: 0 0.5rem 0.5rem 0; padding: 0.9rem 1.1rem; margin: 1rem 0; }
        .doc-content .warn-box   { background: #fffbeb; border-left: 4px solid #f59e0b; border-radius: 0 0.5rem 0.5rem 0; padding: 0.9rem 1.1rem; margin: 1rem 0; }
        .doc-content .step-badge { display: inline-flex; align-items: center; justify-content: center; width: 1.75rem; height: 1.75rem; border-radius: 9999px; background: #4f46e5; color: white; font-size: 0.75rem; font-weight: 700; margin-right: 0.5rem; flex-shrink: 0; }
        .doc-content .step-row   { display: flex; align-items: flex-start; gap: 0.75rem; margin-bottom: 1.2rem; }
        .doc-content .card       { background: white; border: 1px solid #e5e7eb; border-radius: 0.75rem; padding: 1.25rem; margin-bottom: 1rem; }
        .doc-content .tag        { display: inline-block; padding: 0.15rem 0.55rem; border-radius: 9999px; font-size: 0.72rem; font-weight: 600; }
        .doc-content .tag-green  { background: #dcfce7; color: #16a34a; }
        .doc-content .tag-blue   { background: #dbeafe; color: #1d4ed8; }
        .doc-content .tag-orange { background: #ffedd5; color: #ea580c; }
        .doc-content .tag-gray   { background: #f3f4f6; color: #6b7280; }
      ` }} />
    </div>
  );
}
