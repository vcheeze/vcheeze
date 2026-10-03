<script lang="ts">
	import { afterNavigate, onNavigate } from '$app/navigation';
	import './layout.css';
	import { bindLinkTracking, initAnalytics, trackPageView } from '#lib/analytics.js';
	import favicon from '#lib/assets/favicon.svg';
	import { site } from '#lib/seo.js';

	let { children } = $props();

	onNavigate((navigation) => {
		if (navigation.shallow) return;
		if (!document.startViewTransition) return;

		return new Promise<void>((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	afterNavigate(({ to }) => {
		if (!to) return;
		initAnalytics();
		bindLinkTracking();
		trackPageView(to.url);
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} type="image/svg+xml" />
	<meta name="theme-color" content={site.themeColor} />
	<meta name="color-scheme" content="light" />
</svelte:head>

{@render children()}
