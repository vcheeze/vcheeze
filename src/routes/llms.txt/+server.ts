import { profile } from '#lib/content/profile.js';
import { getPosts } from '#lib/posts.js';
import { absoluteUrl, site } from '#lib/seo.js';

export const prerender = true;

export function GET() {
	const posts = getPosts();
	const socialLinks = profile.socials
		.filter((social) => social.id !== 'email')
		.map((social) => `- [${social.handle}](${social.href})`)
		.join('\n');

	const postLinks = posts
		.map(
			(post) =>
				`- [${post.title}](${absoluteUrl(`/blog/${post.slug}`)}): ${post.description}`
		)
		.join('\n');

	const body = `# ${site.name}

> Personal site of ${profile.name} (${site.name}). ${profile.thesis}

${profile.name} is a hands-on software engineer and technical lead based in Dubai, currently ${profile.current.title} at ${profile.current.org}. He builds web platforms for government and enterprise clients, ships personal products, and writes about software craft. Languages: ${profile.languages}.

## Core

- [Home](${absoluteUrl('/')}): Who ${profile.name} is, current role, personal products, and latest writing
- [Work](${absoluteUrl('/work')}): Career path, selected client work, and craft/skills
- [Writing](${absoluteUrl('/blog')}): Notes on building software, process, and tools

## Selected products

${profile.personal
	.map((item) => `- [${item.name}](${item.url}): ${item.summary}`)
	.join('\n')}

## Selected client work

${profile.work
	.map((item) => `- ${item.name} (${item.dates}): ${item.summary}`)
	.join('\n')}

## Writing

${postLinks || '- No published posts yet.'}

## Contact and profiles

- Email: ${profile.email}
${socialLinks}

## Optional

- Site domain: ${site.url}
- Preferred citation name: ${profile.name} (also known as ${site.name})
`;

	return new Response(body, {
		headers: {
			'Content-Type': 'text/plain; charset=utf-8',
			'Cache-Control': 'public, max-age=3600'
		}
	});
}
