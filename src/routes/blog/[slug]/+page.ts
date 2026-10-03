import { error } from '@sveltejs/kit';
import { getPost, getPosts } from '#lib/posts.js';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

export const entries: EntryGenerator = () => {
	return getPosts().map((post) => ({ slug: post.slug }));
};

export const load: PageLoad = ({ params }) => {
	const post = getPost(params.slug);
	if (!post) error(404, 'Post not found');

	return {
		slug: post.slug,
		title: post.title,
		description: post.description,
		date: post.date,
		updated: post.updated,
		tags: post.tags ?? []
	};
};
