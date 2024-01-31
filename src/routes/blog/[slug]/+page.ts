import { error } from '@sveltejs/kit';
import { getPost } from '$lib/utils/sanity';
import type { PageLoad } from './$types';

export const ssr = false;

export const load = (async ({ params }) => {
  const post = await getPost(params.slug);
  console.log('post :>> ', post);
  if (post) return post;

  throw error(404, 'Not found');
}) satisfies PageLoad;