import { dev } from '$app/environment';

export let BLOG_URL: string;

if (dev) {
  BLOG_URL = 'http://localhost:5173';
} else {
  BLOG_URL = 'https://vcheeze.pages.dev';
}
