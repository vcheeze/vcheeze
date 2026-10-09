import { profile } from '#lib/content/profile.js';

export const site = {
	name: 'vcheeze',
	url: 'https://ptrchn.com',
	locale: 'en_US',
	themeColor: '#0E4D4E',
	backgroundColor: '#F1EDE4',
	title: `${profile.name} · vcheeze`,
	description: profile.intro,
	tagline: profile.thesis
} as const;

export function absoluteUrl(path = '/'): string {
	const normalized = path.startsWith('/') ? path : `/${path}`;
	if (normalized === '/') return site.url;
	return `${site.url}${normalized}`;
}

export function pageTitle(title: string): string {
	if (title === site.title || title.endsWith(' · vcheeze')) return title;
	return `${title} · ${site.name}`;
}

const sameAs = profile.socials
	.filter((social) => social.id !== 'email')
	.map((social) => social.href);

export function personJsonLd() {
	return {
		'@context': 'https://schema.org',
		'@type': 'Person',
		'@id': `${site.url}/#person`,
		name: profile.name,
		alternateName: site.name,
		url: site.url,
		email: profile.email,
		description: profile.thesis,
		jobTitle: profile.current.title,
		worksFor: {
			'@type': 'Organization',
			name: profile.current.org
		},
		address: {
			'@type': 'PostalAddress',
			addressLocality: 'Dubai',
			addressCountry: 'AE'
		},
		knowsLanguage: ['en', 'zh'],
		alumniOf: {
			'@type': 'CollegeOrUniversity',
			name: profile.education.school
		},
		sameAs
	};
}

export function websiteJsonLd() {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		'@id': `${site.url}/#website`,
		name: site.name,
		alternateName: profile.name,
		url: site.url,
		description: site.description,
		inLanguage: 'en',
		publisher: { '@id': `${site.url}/#person` },
		author: { '@id': `${site.url}/#person` }
	};
}

export function profilePageJsonLd(path: string, description: string) {
	return {
		'@context': 'https://schema.org',
		'@type': 'ProfilePage',
		'@id': absoluteUrl(path),
		url: absoluteUrl(path),
		name: pageTitle(profile.name),
		description,
		mainEntity: { '@id': `${site.url}/#person` },
		isPartOf: { '@id': `${site.url}/#website` }
	};
}

export function collectionPageJsonLd(opts: {
	path: string;
	name: string;
	description: string;
}) {
	return {
		'@context': 'https://schema.org',
		'@type': 'CollectionPage',
		'@id': absoluteUrl(opts.path),
		url: absoluteUrl(opts.path),
		name: opts.name,
		description: opts.description,
		isPartOf: { '@id': `${site.url}/#website` },
		author: { '@id': `${site.url}/#person` }
	};
}

export function blogPostingJsonLd(opts: {
	slug: string;
	title: string;
	description: string;
	date: string;
	updated?: string;
}) {
	const url = absoluteUrl(`/blog/${opts.slug}`);
	return {
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		'@id': url,
		headline: opts.title,
		description: opts.description,
		datePublished: opts.date,
		dateModified: opts.updated ?? opts.date,
		mainEntityOfPage: url,
		url,
		inLanguage: 'en',
		author: { '@id': `${site.url}/#person` },
		publisher: { '@id': `${site.url}/#person` },
		isPartOf: { '@id': `${site.url}/#website` }
	};
}

export function jsonLdScript(data: Record<string, unknown> | Record<string, unknown>[]): string {
	return JSON.stringify(data).replace(/</g, '\\u003c');
}
