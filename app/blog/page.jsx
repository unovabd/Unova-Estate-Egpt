import { getSortedPostsData } from '@/lib/blog';
import BlogClient from '@/components/BlogClient';

export const metadata = {
  title: 'Blog & Insights — Unova Estate',
  description: 'Read the latest guides, articles, and insights about real estate marketing, ERP cost control, and sales automation.',
};

export default function BlogPage() {
  const posts = getSortedPostsData();
  return <BlogClient posts={posts} />;
}
