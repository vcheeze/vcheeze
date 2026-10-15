<script lang="ts">
	import type { Component } from 'svelte';
	import Seo from '#lib/components/Seo.svelte';
	import { slugFromPath } from '#lib/reports.js';
	import { pageTitle } from '#lib/seo.js';

	const modules = import.meta.glob<{ default: Component }>('/src/reports/*/Report.svelte', {
		eager: true
	});

	let { data } = $props();

	const Report = $derived.by(() => {
		const entry = Object.entries(modules).find(([path]) => slugFromPath(path) === data.slug);
		return entry?.[1].default;
	});
</script>

<Seo
	title={pageTitle(data.title)}
	description={data.description}
	path={`/blog/reports/${data.slug}`}
	type="article"
	publishedTime={data.date}
	modifiedTime={data.updated}
/>

{#if Report}
	<Report />
{/if}
