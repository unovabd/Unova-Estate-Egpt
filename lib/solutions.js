import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

const solutionsDirectory = path.join(process.cwd(), 'content/solutions');

export function getSortedSolutionsData() {
  if (!fs.existsSync(solutionsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(solutionsDirectory);
  const allSolutionsData = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(solutionsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        slug,
        ...matterResult.data,
      };
    });

  return allSolutionsData;
}

export async function getSolutionData(slug) {
  const fullPath = path.join(solutionsDirectory, `${slug}.md`);
  
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
