import ClientsHubClient from '../../components/ClientsHubClient';

export const metadata = {
  title: 'Client Success Stories — Unova Estate ERP',
  description: 'See how top real estate housing developers, land plot developers, and sales agencies in Egypt automate collections, lead management, and construction billing with Unova.',
  alternates: {
    canonical: '/clients',
  },
  openGraph: {
    title: 'Real Estate Developer Client Results | Unova Estate',
    description: 'Explore verified real-world results from leading real estate developers in Egypt.',
    images: [{ url: '/unova-real-estate-software-logo.png' }]
  }
};

export default function ClientsPage() {
  return <ClientsHubClient />;
}
