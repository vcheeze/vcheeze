<script lang="ts">
	import Seo from '#lib/components/Seo.svelte';
	import SiteNav from '#lib/components/SiteNav.svelte';
	import { wishlist, wishWhose, type Wish } from '#lib/content/wishlist.js';
	import { collectionPageJsonLd, jsonLdScript, pageTitle, personJsonLd } from '#lib/seo.js';
	import ArrowSquareOutIcon from 'phosphor-svelte/lib/ArrowSquareOutIcon';

	const description = 'Things I (or my wife) like or want, in no particular order.';
	const jsonLd = jsonLdScript([
		personJsonLd(),
		collectionPageJsonLd({
			path: '/wishlist',
			name: pageTitle('Wishlist'),
			description
		})
	]);

	const frameClass =
		'group flex h-full flex-col text-inherit no-underline focus-visible:outline-[1.5px] focus-visible:outline-offset-[3px] focus-visible:outline-mark';

	let imageFailed = $state<Record<string, true>>({});

	function initials(name: string): string {
		const words = name.trim().split(/\s+/).filter(Boolean);
		if (words.length === 0) return '';
		if (words.length === 1) return words[0].slice(0, 1).toUpperCase();
		return (words[0][0] + words[words.length - 1][0]).toUpperCase();
	}
</script>

{#snippet tile(item: Wish)}
	{@const whose = wishWhose(item)}
	{@const showImage = Boolean(item.image) && !imageFailed[item.name]}
	<div class="relative aspect-video w-full">
		{#if showImage}
			<img
				src={item.image}
				alt=""
				loading="lazy"
				decoding="async"
				class="absolute inset-0 size-full object-contain"
				onerror={() => {
					imageFailed[item.name] = true;
				}}
			/>
		{:else}
			<div class="absolute inset-0 flex items-center justify-center" aria-hidden="true">
				<span
					class="text-[clamp(1.75rem,3vw,2.5rem)] leading-none font-normal tracking-[-0.04em] text-ink-muted"
				>
					{initials(item.name)}
				</span>
			</div>
		{/if}
	</div>
	<div class="pt-3">
		<div class="flex items-baseline justify-between gap-x-3 gap-y-1">
			<h2
				class="m-0 w-fit border-b border-transparent text-body font-medium tracking-[-0.01em] text-balance transition-colors duration-[160ms] ease-in-out motion-reduce:transition-none {item.href
					? 'group-hover:border-mark/40 group-hover:text-mark'
					: ''}"
			>
				{item.name}
				{#if item.href}
					<span
						class="inline-flex translate-y-[-0.06em] opacity-55 [&>svg]:block"
						aria-hidden="true"
					>
						<ArrowSquareOutIcon size="0.7em" weight="regular" />
					</span>
				{/if}
			</h2>
			{#if item.price}
				<p class="m-0 shrink-0 text-meta leading-[1.45] text-ink-muted">{item.price}</p>
			{/if}
		</div>
		{#if item.maker || whose}
			<p class="m-0 mt-1 text-meta leading-[1.45]">
				{#if item.maker}<span class="text-ink-muted">{item.maker}</span>{/if}
				{#if item.maker && whose}<span class="text-ink-muted"> · </span>{/if}
				{#if whose}<span class="text-mark">{whose}</span>{/if}
			</p>
		{/if}
		{#if item.note}
			<p class="m-0 mt-1 text-meta leading-[1.45] text-pretty text-ink-muted">{item.note}</p>
		{/if}
	</div>
{/snippet}

<Seo title={pageTitle('Wishlist')} {description} path="/wishlist" {jsonLd} />

<div
	class="mx-auto min-h-dvh max-w-[calc(72rem+2*var(--spacing-page))] px-page pb-[clamp(3rem,8vw,6rem)]"
>
	<header class="pt-[clamp(2.5rem,8vh,4.5rem)] pb-[clamp(1.75rem,5vh,3rem)]">
		<SiteNav current="wishlist" />
		<h1
			class="mt-6 text-display leading-[1.05] font-normal tracking-[-0.03em] text-balance [view-transition-name:page-title]"
		>
			Wishlist
		</h1>
		<p
			class="mt-5 max-w-[34rem] text-body text-pretty text-ink-muted [view-transition-name:page-description]"
		>
			{description}
		</p>
	</header>

	<main>
		{#if wishlist.length === 0}
			<p class="m-0 text-ink-muted">Nothing on the list yet.</p>
		{:else}
			<ul class="m-0 grid list-none grid-cols-2 gap-8 p-0 sm:grid-cols-3">
				{#each wishlist as item (item.name)}
					<li>
						{#if item.href}
							<a
								class={frameClass}
								href={item.href}
								target="_blank"
								rel="external noopener noreferrer"
							>
								{@render tile(item)}
							</a>
						{:else}
							<div class={frameClass}>
								{@render tile(item)}
							</div>
						{/if}
					</li>
				{/each}
			</ul>
		{/if}
	</main>
</div>
