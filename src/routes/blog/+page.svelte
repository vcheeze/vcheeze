<script lang="ts">
	import { resolve } from '$app/paths';
	import SiteNav from '#lib/components/SiteNav.svelte';
	import { formatPostDate } from '#lib/posts.js';

	let { data } = $props();
</script>

<svelte:head>
	<title>Blog · vcheeze</title>
	<meta name="description" content="Writing from vcheeze." />
</svelte:head>

<div
	class="mx-auto min-h-dvh max-w-[calc(40rem+2*var(--spacing-page))] px-page pb-[clamp(3rem,8vw,6rem)]"
>
	<header class="pt-[clamp(2.5rem,8vh,4.5rem)] pb-[clamp(2rem,6vh,3.5rem)]">
		<SiteNav current="writing" />
		<h1
			class="mt-6 text-display leading-[1.05] font-normal tracking-[-0.03em] text-balance [view-transition-name:page-title]"
		>
			Writing
		</h1>
		<p
			class="mt-5 max-w-[34rem] text-body text-pretty text-ink-muted [view-transition-name:page-description]"
		>
			Writings about work, life, and whatever else pops into my head.
		</p>
	</header>

	<main>
		{#if data.posts.length === 0}
			<p class="m-0 text-ink-muted">No posts yet.</p>
		{:else}
			<ul class="m-0 flex list-none flex-col gap-8 p-0">
				{#each data.posts as post (post.slug)}
					<li>
						<article>
							<header class="mb-1 flex items-baseline justify-between gap-x-4">
								<h2 class="m-0 min-w-0 flex-1 text-body font-medium tracking-[-0.01em] text-pretty">
									<a
										class="border-b border-transparent text-inherit no-underline transition-colors duration-[160ms] ease-in-out hover:border-ink/30 motion-reduce:transition-none"
										href={resolve(`blog/${post.slug}`)}>{post.title}</a
									>
								</h2>
								<p class="m-0 shrink-0 text-meta leading-[1.45] text-ink-muted">
									<time datetime={post.date}>{formatPostDate(post.date)}</time>
								</p>
							</header>
							<p class="m-0 text-ink-muted">{post.description}</p>
						</article>
					</li>
				{/each}
			</ul>
		{/if}
	</main>
</div>
