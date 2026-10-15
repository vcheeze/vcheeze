<script lang="ts">
	import { site } from '#lib/seo.js';
	import { siteRootClass } from '#lib/style-boundary.js';
	import './layout.css';

	let { children } = $props();
</script>

<svelte:head>
	<meta name="theme-color" content={site.themeColor} />
	<meta name="color-scheme" content="light" />
</svelte:head>

<div class={siteRootClass}>
	{@render children()}
</div>
