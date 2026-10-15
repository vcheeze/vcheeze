<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import SiteNav from '#lib/components/SiteNav.svelte';
	import { formatPostDate } from '#lib/posts.js';
	import { collectionPageJsonLd, jsonLdScript, pageTitle, personJsonLd } from '#lib/seo.js';

	let { data } = $props();

	const blogDescription =
		'Writings by Peter Chen (vcheeze) about building software, process, tools, and life.';
	const blogJsonLd = jsonLdScript([
		personJsonLd(),
		collectionPageJsonLd({
			path: '/blog',
			name: pageTitle('Writing'),
			description: blogDescription
		})
	]);
</script>

<Seo title={pageTitle('Writing')} description={blogDescription} path="/blog" jsonLd={blogJsonLd} />

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
		{#if data.writing.length === 0}
			<p class="m-0 text-ink-muted">No writing yet.</p>
		{:else}
			<ul class="m-0 flex list-none flex-col gap-8 p-0">
				{#each data.writing as item (`${item.kind}-${item.slug}`)}
					<li>
						<article>
							<header class="mb-1 flex items-baseline justify-between gap-x-4">
								<h2 class="m-0 min-w-0 flex-1 text-body font-medium tracking-[-0.01em] text-pretty">
									<a
										class="border-b border-transparent text-inherit no-underline transition-colors duration-[160ms] ease-in-out hover:border-mark/40 hover:text-mark motion-reduce:transition-none"
										href={item.href}
										data-sveltekit-reload={item.kind === 'report' ? '' : undefined}>{item.title}</a
									>
								</h2>
								<p class="m-0 shrink-0 text-meta leading-[1.45] text-ink-muted">
									{#if item.kind === 'report'}
										<span>Report</span>
										<span aria-hidden="true"> · </span>
									{/if}
									<time datetime={item.date}>{formatPostDate(item.date)}</time>
								</p>
							</header>
							<p class="m-0 text-ink-muted">{item.description}</p>
						</article>
					</li>
				{/each}
			</ul>
		{/if}
	</main>
</div>
