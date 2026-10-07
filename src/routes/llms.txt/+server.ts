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
		.map((post) => `- [${post.title}](${absoluteUrl(`/blog/${post.slug}`)}): ${post.description}`)
		.join('\n');

	const personalSummaries: Record<(typeof profile.personal)[number]['url'], string> = {
		'https://gopherwoodclinic.org':
			'He built this for a clinic in Hsinchu and still runs it: appointments, staff admin, a PWA, and a live queue. It has been in production for five or six years and handles somewhere between 250 and 500 appointments a month.',
		'https://mammon-manager.com':
			'This is how his household keeps track of money. Shared envelopes, budgets that can span several categories, and charts by month or by year. He uses it every day, so when something breaks, he is the first to find out.'
	};

	const body = `# ${site.name}

> Personal site of ${profile.name} (${site.name}). He designs and ships web platforms for government services and AI products, and he leads that work from architecture through production.

${profile.name} is a ${profile.current.title} at ${profile.current.org}, based in Dubai. He builds web platforms for government and enterprise clients, ships personal products, and writes about the work. Languages: ${profile.languages}.

## Now

As of ${profile.now.asOf}:

${profile.now.lines.map((line) => `- ${line}`).join('\n')}

## Core

- [Home](${absoluteUrl('/')}): Who ${profile.name} is, current role, personal products, and latest writing
- [Work](${absoluteUrl('/work')}): Career path, selected client work, and craft/skills
- [Writing](${absoluteUrl('/blog')}): Notes on building software, process, and tools

## Selected products

${profile.personal
	.map((item) => `- [${item.name}](${item.url}): ${personalSummaries[item.url]}`)
	.join('\n')}

## Selected client work

${profile.work.map((item) => `- ${item.name} (${item.dates}): ${item.summary}`).join('\n')}

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
