import { CLIENT_CASE_STUDIES } from "../lib/clients";
import { getSortedSolutionsData } from "../lib/solutions";
import { getSortedPostsData } from "../lib/blog";
import { getSortedCompareData } from "../lib/compare";

export default async function sitemap() {
  const baseUrl = "https://unovasoftware.com";

  // Core static pages
  const staticPages = [
    "/",
    // '/ar', // uncomment when the /ar route exists
    '/about',
    '/contact',
    '/demo',
    '/solutions',
    '/clients',
    '/compare',
    '/faq',
    '/docs',
    '/blog',
    '/calculator',
    '/resources',
    '/resources/downloads',
    '/resources/glossary',
    '/resources/roi-calculator',
    '/security',
    '/terms',
    '/privacy',
    '/cookies',
    '/refund',
    // '/real-estate-erp-software', // uncomment when the landing page is live (A8)
  ].map((route) => ({
    url: route === "/" ? `${baseUrl}/` : `${baseUrl}${route}`,
    changeFrequency: route === "/" ? "daily" : "weekly",
    priority: route === "/" ? 1.0 : 0.8,
  }));

  // Dynamic Solution routes
  const solutions = getSortedSolutionsData();
  const solutionUrls = solutions.map((s) => ({
    url: `${baseUrl}/solutions/${s.slug}`,
    ...(s.date && { lastModified: s.date }),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Dynamic Client Case Study routes
  const clientUrls = CLIENT_CASE_STUDIES.map((c) => ({
    url: `${baseUrl}/clients/${c.slug}`,
    ...(c.date && { lastModified: c.date }),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Dynamic Blog post routes
  const posts = getSortedPostsData();
  const postUrls = posts.map((p) => ({
    url: `${baseUrl}/blog/${p.slug}`,
    ...(p.date && { lastModified: p.date }),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Dynamic Compare routes
  const compares = getSortedCompareData();
  const compareUrls = compares.map((c) => ({
    url: `${baseUrl}/compare/${c.slug}`,
    ...(c.date && { lastModified: c.date }),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticPages,
    ...solutionUrls,
    ...clientUrls,
    ...postUrls,
    ...compareUrls,
  ];
}
