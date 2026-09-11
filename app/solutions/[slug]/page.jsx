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
    alternates: {
      canonical: `/solutions/${slug}`,
    },
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
    .slice(0, 3);

  const baseUrl = 'https://estate.unova.app';
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Solutions', item: `${baseUrl}/solutions` },
      { '@type': 'ListItem', position: 3, name: data.title, item: `${baseUrl}/solutions/${slug}` },
    ],
  };
  const faqEntries = [1, 2, 3]
    .filter((n) => data[`faq${n}_q`] && data[`faq${n}_a`])
    .map((n) => ({
      '@type': 'Question',
      name: data[`faq${n}_q`],
      acceptedAnswer: { '@type': 'Answer', text: data[`faq${n}_a`] },
    }));
  const faqSchema = faqEntries.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqEntries,
  } : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <SolutionDetailClient
        solution={data}
        relatedSolutions={relatedSolutions}
      />
    </>
  );
}
