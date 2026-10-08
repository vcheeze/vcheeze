<script lang="ts">
	import type { profile } from '#lib/content/profile.js';
	import ArrowSquareOutIcon from 'phosphor-svelte/lib/ArrowSquareOutIcon';

	type Project = (typeof profile.personal)[number] & { dates?: string };

	let { item, headingLevel = 3 }: { item: Project; headingLevel?: 2 | 3 } = $props();
</script>

<article>
	<header class="mb-1 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-[0.35rem]">
		<svelte:element this={`h${headingLevel}`} class="m-0 text-body font-medium tracking-[-0.01em]">
			<a
				class="inline-flex items-center gap-[0.3em] border-b border-transparent text-inherit no-underline transition-colors duration-[160ms] ease-in-out hover:border-mark/40 hover:text-mark motion-reduce:transition-none"
				href={item.url}
				target="_blank"
				rel="external noopener noreferrer"
			>
				{item.name}
				<span class="inline-flex opacity-55 [&>svg]:block" aria-hidden="true">
					<ArrowSquareOutIcon size="0.85em" weight="regular" />
				</span>
			</a>
		</svelte:element>
		{#if item.dates}
			<p class="m-0 text-meta leading-[1.45] text-ink-muted">{item.dates}</p>
		{/if}
	</header>
	<p class="m-0">{item.summary}</p>
	<p class="mt-[0.65rem] text-meta leading-[1.45] text-ink-muted">{item.meta}</p>
</article>
