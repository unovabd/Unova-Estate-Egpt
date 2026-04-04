import './globals.css';

export const metadata = {
  title: 'Unova Estate — AI-Powered Real Estate ERP for Bangladesh',
  description:
    "Bangladesh's first AI-powered real estate ERP. Manage leads, properties, sales orders, commissions, HR, payroll, and marketing — all in one platform. Increase your sales by 20%.",
  keywords:
    'real estate software bangladesh, property management software, CRM real estate, unova estate, ERP real estate, lead management, commission tracking',
  metadataBase: new URL('https://estate.unova.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Unova Estate — Real Estate ERP',
    description:
      "Bangladesh's first AI-powered real estate ERP. CRM, HR, payroll, commissions — one platform.",
    url: 'https://estate.unova.app',
    siteName: 'Unova Estate',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unova Estate — Real Estate ERP',
    description: "Bangladesh's first AI-powered real estate ERP.",
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
