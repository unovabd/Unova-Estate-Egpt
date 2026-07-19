import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const compareDirectory = path.join(process.cwd(), 'content/compare');

export function getSortedCompareData() {
  if (!fs.existsSync(compareDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(compareDirectory);
  const allCompareData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(compareDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        slug,
        ...matterResult.data,
      };
    });

  return allCompareData;
}

export async function getCompareData(slug) {
  const fullPath = path.join(compareDirectory, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }
  
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  
  const processedContent = marked(matterResult.content);

  return {
    slug,
    contentHtml: processedContent,
    ...matterResult.data,
  };
}
