import type { Component } from 'svelte';

export type PostMeta = {
	title: string;
	description: string;
	date: string;
	published?: boolean;
};

export type Post = PostMeta & {
	slug: string;
};

type PostModule = {
	default: Component;
	metadata: PostMeta;
};

const modules = import.meta.glob<PostModule>('/src/posts/*.{md,svx}', { eager: true });

function slugFromPath(path: string): string {
	const file = path.split('/').at(-1) ?? '';
	return file.replace(/\.(md|svx)$/, '');
}

function isPublished(meta: PostMeta): boolean {
	return meta.published !== false;
}

export function getPosts(): Post[] {
	return Object.entries(modules)
		.map(([path, mod]) => ({
			slug: slugFromPath(path),
			...mod.metadata
		}))
		.filter(isPublished)
		.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPost(slug: string): (Post & { content: Component }) | undefined {
	const entry = Object.entries(modules).find(([path]) => slugFromPath(path) === slug);
	if (!entry) return undefined;

	const [, mod] = entry;
	if (!isPublished(mod.metadata)) return undefined;

	return {
		slug,
		...mod.metadata,
		content: mod.default
	};
}

export function formatPostDate(date: string): string {
	return new Intl.DateTimeFormat('en', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
		timeZone: 'UTC'
	}).format(new Date(date));
}
