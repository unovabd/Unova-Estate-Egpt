import { getPostData, getSortedPostsData } from '@/lib/blog';
import BlogPostClient from '@/components/BlogPostClient';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostData(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found — Unova Estate',
    };
  }

  return {
    title: `${post.title} — Unova Estate`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = await getPostData(slug);

  if (!post) {
    notFound();
  }

  const baseUrl = 'https://estate.unova.app';
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: post.author || 'Unova Team', '@id': `${baseUrl}/#organization` },
    publisher: { '@id': `${baseUrl}/#organization` },
    mainEntityOfPage: `${baseUrl}/blog/${slug}`,
  };
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
      { '@type': 'ListItem', position: 3, name: post.title, item: `${baseUrl}/blog/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <BlogPostClient post={post} />
    </>
  );
}
