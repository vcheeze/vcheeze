import { browser, dev } from '$app/environment';

const MEASUREMENT_ID = 'G-YBZN7FMZL2';
const PROD_HOSTS = new Set(['ptrchn.com', 'www.ptrchn.com']);

declare global {
	interface Window {
		dataLayer: unknown[];
		gtag: (...args: unknown[]) => void;
	}
}

function enabled(): boolean {
	return browser && !dev && PROD_HOSTS.has(location.hostname);
}

let ready = false;

export function initAnalytics(): void {
	if (!enabled() || ready) return;
	ready = true;

	window.dataLayer = window.dataLayer || [];
	window.gtag = function gtag(..._args: unknown[]) {
		window.dataLayer.push(arguments);
	};
	window.gtag('js', new Date());
	window.gtag('config', MEASUREMENT_ID, { send_page_view: false });

	const script = document.createElement('script');
	script.async = true;
	script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
	document.head.appendChild(script);
}

export function trackPageView(url: URL): void {
	if (!enabled() || !ready) return;

	window.gtag('event', 'page_view', {
		page_title: document.title,
		page_location: url.href,
		page_path: `${url.pathname}${url.search}`
	});
}
