import { CLIENT_CASE_STUDIES } from '../lib/clients';
import { getSortedSolutionsData } from '../lib/solutions';
import { getSortedPostsData } from '../lib/blog';
import { getSortedCompareData } from '../lib/compare';

export default async function sitemap() {
  const baseUrl = 'https://estate.unova.app';

  // Core static pages
  const staticPages = [
    '',
    '/solutions',
    '/clients',
    '/compare',
    '/faq',
    '/docs',
    '/blog',
    '/demo',
    '/resources/downloads'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic Solution routes
  const solutions = getSortedSolutionsData();
  const solutionUrls = solutions.map((s) => ({
    url: `${baseUrl}/solutions/${s.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Dynamic Client Case Study routes
  const clientUrls = CLIENT_CASE_STUDIES.map((c) => ({
    url: `${baseUrl}/clients/${c.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Dynamic Blog post routes
  const posts = getSortedPostsData();
  const postUrls = posts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    lastModified: p.date || new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  // Dynamic Compare routes
  const compares = getSortedCompareData();
  const compareUrls = compares.map((c) => ({
    url: `${baseUrl}/compare/${c.slug}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...solutionUrls, ...clientUrls, ...postUrls, ...compareUrls];
}
