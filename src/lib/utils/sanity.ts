import type { PortableTextBlock } from '@portabletext/types';
import { createClient } from '@sanity/client';
import type { ImageAsset, Slug } from '@sanity/types';

import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET) {
  throw new Error('Did you forget to run sanity init --env?');
}

export const client = createClient({
  projectId: PUBLIC_SANITY_PROJECT_ID,
  dataset: PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: '2024-01-30'
});

export interface Post {
  _type: 'post';
  _createdAt: string;
  _updatedAt: string;
  title?: string;
  slug: Slug;
  excerpt?: string;
  mainImage?: ImageAsset;
  publishedAt: string;
  body: PortableTextBlock[];
}

export async function getPosts(): Promise<Post[]> {
  return await client.fetch(
    `*[_type == "post" && defined(slug.current)] | order(publishedAt desc)`
  );
}

export async function getPost(slug: string): Promise<Post> {
  return await client.fetch(`*[_type == "post" && slug.current == $slug][0]`, {
    slug
  });
}
