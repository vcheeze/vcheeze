<script lang="ts">
	import { page } from '$app/state';
	import { absoluteUrl, site } from '#lib/seo.js';

	let {
		title,
		description,
		path,
		type = 'website',
		jsonLd,
		publishedTime,
		modifiedTime
	}: {
		title: string;
		description: string;
		path?: string;
		type?: 'website' | 'article' | 'profile';
		jsonLd?: string;
		publishedTime?: string;
		modifiedTime?: string;
	} = $props();

	const canonical = $derived(absoluteUrl(path ?? page.url.pathname));
	const ogType = $derived(
		type === 'article' ? 'article' : type === 'profile' ? 'profile' : 'website'
	);
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta name="author" content="Peter Chen" />
	<meta name="robots" content="index, follow, max-image-preview:large" />
	<link rel="canonical" href={canonical} />

	<meta property="og:site_name" content={site.name} />
	<meta property="og:locale" content={site.locale} />
	<meta property="og:type" content={ogType} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={canonical} />

	<meta name="twitter:card" content="summary" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:creator" content="@peterchenwei" />

	{#if type === 'article' && publishedTime}
		<meta property="article:published_time" content={publishedTime} />
		{#if modifiedTime}
			<meta property="article:modified_time" content={modifiedTime} />
		{/if}
		<meta property="article:author" content="Peter Chen" />
	{/if}

	{#if jsonLd}
		{@html `<script type="application/ld+json">${jsonLd}</script>`}
	{/if}
</svelte:head>
