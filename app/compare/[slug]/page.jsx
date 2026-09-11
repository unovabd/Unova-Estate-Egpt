import { notFound } from 'next/navigation';
import { getCompareData, getSortedCompareData } from '../../../lib/compare';
import CompareDetailClient from '../../../components/CompareDetailClient';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await getCompareData(slug);
  if (!data) {
    return {
      title: 'Comparison Study Not Found - Unova Estate',
      description: 'The requested competitor comparison could not be found.'
    };
  }

  return {
    title: `${data.title} | Unova Estate`,
    description: data.metaDescription,
    openGraph: {
      title: data.title,
      description: data.metaDescription,
      images: [{ url: data.heroImage }]
    }
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const data = await getCompareData(slug);
  if (!data) {
    notFound();
  }

  const allCompares = getSortedCompareData();
  const relatedComparisons = allCompares
    .filter(c => c.slug !== slug)
    .slice(0, 3); // Suggest other comparisons

  const baseUrl = 'https://estate.unova.app';
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Compare', item: `${baseUrl}/compare` },
      { '@type': 'ListItem', position: 3, name: data.title, item: `${baseUrl}/compare/${slug}` },
    ],
  };
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.title,
    description: data.metaDescription,
    image: data.heroImage,
    author: { '@type': 'Organization', name: 'Unova Team', '@id': `${baseUrl}/#organization` },
    publisher: { '@id': `${baseUrl}/#organization` },
    mainEntityOfPage: `${baseUrl}/compare/${slug}`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <CompareDetailClient
        comparison={data}
        relatedComparisons={relatedComparisons}
      />
    </>
  );
}
