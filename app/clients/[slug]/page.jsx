import { notFound } from 'next/navigation';
import { getClientBySlug, CLIENT_CASE_STUDIES } from '../../../lib/clients';
import ClientDetailClient from '../../../components/ClientDetailClient';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const client = getClientBySlug(slug);
  if (!client) {
    return {
      title: 'Case Study Not Found - Unova Estate',
      description: 'The requested real estate client case study could not be found.'
    };
  }

  return {
    title: `${client.name} Case Study | Unova Real Estate ERP`,
    description: client.metaDescription || client.summary,
    alternates: {
      canonical: `/clients/${slug}`,
    },
    openGraph: {
      title: `${client.name} Case Study - Unova Estate`,
      description: client.summary,
      images: [{ url: client.logoImg || '/unova-real-estate-software-logo.png' }]
    }
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const client = getClientBySlug(slug);

  if (!client) {
    notFound();
  }

  const relatedClients = CLIENT_CASE_STUDIES
    .filter(c => c.slug !== slug)
    .slice(0, 3);

  return (
    <ClientDetailClient
      client={client}
      relatedClients={relatedClients}
    />
  );
}
