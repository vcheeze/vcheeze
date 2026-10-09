import { browser, dev } from '$app/env';

const MEASUREMENT_ID = 'G-YBZN7FMZL2';
const PROD_HOSTS = new Set(['ptrchn.com', 'www.ptrchn.com']);
const BLOG_THRESHOLDS = [25, 50, 75, 100] as const;

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
let linksBound = false;

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

function trackEvent(name: string, params?: Record<string, string | number>): void {
	if (!enabled()) return;
	initAnalytics();
	if (!ready) return;
	window.gtag('event', name, params);
}

export function trackPageView(url: URL): void {
	trackEvent('page_view', {
		page_title: document.title,
		page_location: url.href,
		page_path: `${url.pathname}${url.search}`
	});
}

function linkIdFromHref(href: string): string {
	if (href.startsWith('mailto:')) return 'email';

	try {
		const url = new URL(href, location.origin);
		const host = url.hostname.replace(/^www\./, '');

		if (host === 'x.com' || host === 'twitter.com') return 'x';
		if (host === 'linkedin.com' || host.endsWith('.linkedin.com')) return 'linkedin';
		if (host === 'github.com') return 'github';
		if (host === 'gopherwoodclinic.org') return 'gopher-wood-clinic';
		if (host === 'looops.ptrchn.com') return 'looops';
		if (host === 'mammon-manager.com') return 'mammon-manager';
		if (host === 'programming-with-conscience.vercel.app') return 'programming-with-conscience';

		return host;
	} catch {
		return 'unknown';
	}
}

function trackLinkClick(href: string): void {
	if (href.startsWith('mailto:')) {
		trackEvent('contact_click', { link_id: 'email', method: 'email' });
		return;
	}

	try {
		const url = new URL(href, location.origin);
		if (url.origin === location.origin) return;

		trackEvent('outbound_click', {
			link_id: linkIdFromHref(href),
			url: url.href
		});
	} catch {
		// ignore invalid hrefs
	}
}

function onDocumentClick(event: MouseEvent): void {
	const target = event.target;
	if (!(target instanceof Element)) return;

	const anchor = target.closest('a');
	if (!anchor) return;

	const href = anchor.getAttribute('href');
	if (!href || href.startsWith('#') || href.startsWith('javascript:')) return;

	trackLinkClick(href);
}

export function bindLinkTracking(): void {
	if (!enabled() || linksBound) return;
	linksBound = true;
	document.addEventListener('click', onDocumentClick);
}

export function observeBlogRead(slug: string): () => void {
	if (!enabled()) return () => {};

	const fired = new Set<number>();

	const measure = () => {
		const scrollable = document.documentElement.scrollHeight - window.innerHeight;
		const percent =
			scrollable <= 0 ? 100 : Math.min(100, Math.round((window.scrollY / scrollable) * 100));

		for (const threshold of BLOG_THRESHOLDS) {
			if (percent >= threshold && !fired.has(threshold)) {
				fired.add(threshold);
				trackEvent('blog_read', { slug, percent: threshold });
			}
		}
	};

	measure();
	window.addEventListener('scroll', measure, { passive: true });
	window.addEventListener('resize', measure);

	return () => {
		window.removeEventListener('scroll', measure);
		window.removeEventListener('resize', measure);
	};
}
