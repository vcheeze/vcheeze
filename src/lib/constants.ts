import { dev } from '$app/environment';

export let APP_URL: string;

if (dev) {
  APP_URL = 'http://localhost:5173';
} else {
  APP_URL = 'https://vcheeze.pages.dev';
}
