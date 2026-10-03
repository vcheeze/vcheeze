<script lang="ts">
	import { browser } from '$app/environment';
	import { resolve } from '$app/paths';
	import { observeBlogRead } from '#lib/analytics.js';
	import Seo from '#lib/components/Seo.svelte';
	import { getPost, formatPostDate } from '#lib/posts.js';
	import { blogPostingJsonLd, jsonLdScript, pageTitle, personJsonLd } from '#lib/seo.js';

	let { data } = $props();

	const post = $derived(getPost(data.slug));
	const Content = $derived(post?.content);
	const postJsonLd = $derived(
		jsonLdScript([
			personJsonLd(),
			blogPostingJsonLd({
				slug: data.slug,
				title: data.title,
				description: data.description,
				date: data.date
			})
		])
	);

	$effect(() => {
		if (!browser) return;
		return observeBlogRead(data.slug);
	});
</script>

<Seo
	title={pageTitle(data.title)}
	description={data.description}
	path={`/blog/${data.slug}`}
	type="article"
	publishedTime={data.date}
	jsonLd={postJsonLd}
/>

<div
	class="mx-auto min-h-dvh max-w-[calc(40rem+2*var(--spacing-page))] px-page pb-[clamp(3rem,8vw,6rem)]"
>
	<header class="pt-[clamp(2.5rem,8vh,4.5rem)] pb-[clamp(2rem,6vh,3.5rem)]">
		<p class="m-0 text-meta text-ink-muted">
			<a
				class="text-ink-muted no-underline transition-colors duration-[160ms] ease-in-out hover:text-ink motion-reduce:transition-none"
				href={resolve('blog')}>← Blog</a
			>
		</p>
		<h1 class="mt-6 text-display leading-[1.05] font-normal tracking-[-0.03em] text-balance">
			{data.title}
		</h1>
		<p class="mt-5 text-meta leading-[1.45] text-ink-muted">
			<time datetime={data.date}>{formatPostDate(data.date)}</time>
		</p>
	</header>

	{#if Content}
		<article class="prose-blog">
			<Content />
		</article>
	{/if}
</div>
