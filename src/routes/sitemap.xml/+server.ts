import { getPosts } from '#lib/posts.js';
import { absoluteUrl } from '#lib/seo.js';

export const prerender = true;

const staticPaths = ['/', '/work', '/projects', '/blog'] as const;

function xmlEscape(value: string): string {
	return value
		.replaceAll('&', '&amp;')
		.replaceAll('<', '&lt;')
		.replaceAll('>', '&gt;')
		.replaceAll('"', '&quot;')
		.replaceAll("'", '&apos;');
}

export function GET() {
	const urls = [
		...staticPaths.map((path) => ({
			loc: absoluteUrl(path),
			changefreq: path === '/' ? 'weekly' : 'monthly',
			priority: path === '/' ? '1.0' : '0.8'
		})),
		...getPosts().map((post) => ({
			loc: absoluteUrl(`/blog/${post.slug}`),
			changefreq: 'yearly',
			priority: '0.6',
			lastmod: post.date.slice(0, 10)
		}))
	];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
	.map((url) => {
		const lastmod =
			'lastmod' in url && url.lastmod ? `\n    <lastmod>${url.lastmod}</lastmod>` : '';
		return `  <url>
    <loc>${xmlEscape(url.loc)}</loc>${lastmod}
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`;
	})
	.join('\n')}
</urlset>`;

	return new Response(body, {
		headers: {
			'Content-Type': 'application/xml; charset=utf-8',
			'Cache-Control': 'public, max-age=3600'
		}
	});
}
