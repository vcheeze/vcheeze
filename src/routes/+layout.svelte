<script lang="ts">
	import { afterNavigate, beforeNavigate, onNavigate } from '$app/navigation';
	import { bindLinkTracking, initAnalytics, trackPageView } from '#lib/analytics.js';
	import favicon from '#lib/assets/favicon.svg';
	import './view-transition.css';

	let { children } = $props();

	const isReportRoute = (id: string | null | undefined) => id?.startsWith('/(reports)') ?? false;

	// Stylesheets are never unloaded during client-side navigation, so crossing between the
	// site and a report must load a fresh document. A reload link arrives with no route id
	// and is left alone, so the browser can run a cross-document view transition.
	beforeNavigate(({ from, to, type, cancel }) => {
		if (!from?.route.id || !to?.route.id || type === 'leave' || type === 'popstate') return;
		if (isReportRoute(from.route.id) === isReportRoute(to.route.id)) return;
		cancel();
		location.href = to.url.href;
	});

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
</svelte:head>

{@render children()}
