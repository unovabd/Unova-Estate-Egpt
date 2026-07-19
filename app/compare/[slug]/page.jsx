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

  return (
    <CompareDetailClient 
      comparison={data} 
      relatedComparisons={relatedComparisons} 
    />
  );
}
