import LandingPage from '@/components/LandingPage';
import { getSortedPostsData } from '@/lib/blog';

export default function Home() {
  const posts = getSortedPostsData();
  return <LandingPage posts={posts} />;
}
