import ClientsHubClient from '../../components/ClientsHubClient';

export const metadata = {
  title: 'Top Real Estate & Land Developer Clients & Case Studies | Unova Estate ERP',
  description: 'See how top real estate housing developers, land plot developers, and sales agencies in Bangladesh automate collections, lead management, and construction billing with Unova.',
  alternates: {
    canonical: '/clients',
  },
  openGraph: {
    title: 'Top Real Estate Clients & Case Studies - Unova Estate ERP',
    description: 'Explore verified real-world results from leading real estate developers in Bangladesh.',
    images: [{ url: '/unova-real-estate-software-logo.png' }]
  }
};

export default function ClientsPage() {
  return <ClientsHubClient />;
}
