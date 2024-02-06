// courtesy of Kyle Nazario: https://kylenazario.com/blog/sveltekit-blog-sitemap

import { create } from 'xmlbuilder2';
import { getPosts } from '$lib/utils/sanity';
import { BLOG_URL } from '$lib/constants';

export const prerender = true;

async function getSitemapXml(): Promise<string> {
  const allPosts = await getPosts();
  const root = create({ version: '1.0', encoding: 'utf-8' }).ele('urlset', {
    xmlns: 'http://www.sitemaps.org/schemas/sitemap/0.9',
    'xmlns:xhtml': 'http://www.w3.org/1999/xhtml',
    'xmlns:mobile': 'http://www.google.com/schemas/sitemap-mobile/1.0',
    'xmlns:image': 'http://www.google.com/schemas/sitemap-image/1.1',
    'xmlns:news': 'http://www.google.com/schemas/sitemap-news/0.9',
    'xmlns:video': 'http://www.google.com/schemas/sitemap-video/1.1'
  });

  // add static pages
  root.ele('url').ele('loc').txt(`${BLOG_URL}/`).up().up();
  root.ele('url').ele('loc').txt(`${BLOG_URL}/blog`).up().up();

  for await (const post of allPosts) {
    const postUrl = `${BLOG_URL}/blog/${post.slug.current}`;
    root.ele('url').ele('loc').txt(postUrl).up().up();
  }

  return root.end();
}

export async function GET() {
  const headers = {
    'Cache-Control': 'max-age=0, s-maxage=3600',
    'Content-Type': 'application/xml'
  };

  return new Response(await getSitemapXml(), { headers });
}
