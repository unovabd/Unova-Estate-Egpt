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

  return <BlogPostClient post={post} />;
}
