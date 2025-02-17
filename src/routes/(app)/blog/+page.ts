import { getPosts } from '$lib/utils/sanity';
import type { PageLoad } from './$types';

export const ssr = false;

export const load = (async () => {
  const posts = await getPosts();
  if (posts) return { posts };
  return {
    status: 500,
    body: new Error('Internal Server Error')
  };
}) satisfies PageLoad;
