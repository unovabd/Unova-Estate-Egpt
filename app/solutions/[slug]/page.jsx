import { notFound } from 'next/navigation';
import { getSolutionData, getSortedSolutionsData } from '../../../lib/solutions';
import SolutionDetailClient from '../../../components/SolutionDetailClient';

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const data = await getSolutionData(slug);
  if (!data) {
    return {
      title: 'Solution Not Found - Unova Estate',
      description: 'The requested real estate solution could not be found.'
    };
  }

  return {
    title: `${data.title} - Real Estate Software Solutions | Unova Estate`,
    description: data.metaDescription,
    openGraph: {
      title: `${data.title} - Unova Estate`,
      description: data.metaDescription,
      images: [{ url: data.heroImage }]
    }
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const data = await getSolutionData(slug);
  if (!data) {
    notFound();
  }

  const allSolutions = getSortedSolutionsData();
  const relatedSolutions = allSolutions
    .filter(s => s.slug !== slug)
    .slice(0, 3); // Suggest 3 other solutions

  return (
    <SolutionDetailClient 
      solution={data} 
      relatedSolutions={relatedSolutions} 
    />
  );
}
