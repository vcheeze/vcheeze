<script lang="ts">
	import { resolve } from '$app/paths';
	import { profile } from '#lib/content/profile.js';
	import { formatPostDate } from '#lib/posts.js';

	let { linkOrg = false, summary = false }: { linkOrg?: boolean; summary?: boolean } = $props();

	const orgLinkClass =
		'border-b border-transparent font-medium text-inherit no-underline transition-colors duration-[160ms] ease-in-out hover:border-mark/40 hover:text-mark motion-reduce:transition-none';
</script>

<section class="mt-0" aria-labelledby="sec-now">
	<div class="mb-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-[0.35rem]">
		<h2 id="sec-now" class="text-title font-normal tracking-[-0.02em]">Now</h2>
		<p class="m-0 text-meta leading-[1.45] text-ink-muted">
			<time datetime={profile.now.asOf}>{formatPostDate(profile.now.asOf)}</time>
		</p>
	</div>
	<div class="flex flex-col gap-[0.55rem]">
		<p class="m-0">
			{#if linkOrg}
				<a class={orgLinkClass} href={resolve('work')}>{profile.current.org}</a>
			{:else}
				<span class="font-medium">{profile.current.org}</span>
			{/if}<span class="text-meta leading-[1.45] text-ink-muted"
				>{` · ${profile.current.title} · ${profile.current.dates}`}</span
			>
		</p>
		<div class="flex flex-col gap-[0.9rem]">
			{#each profile.now.lines as line, i (i)}
				<p class="m-0 text-pretty">{line}</p>
			{/each}
		</div>
		{#if summary}
			<p class="m-0 mt-6">{profile.current.summary}</p>
		{/if}
	</div>
</section>
