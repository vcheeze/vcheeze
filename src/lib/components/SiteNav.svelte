<script lang="ts">
	import { resolve } from '$app/paths';

	type Page = 'home' | 'work' | 'writing';

	let { current }: { current: Page } = $props();

	const items = [
		{ id: 'home' as const, label: 'Home', href: resolve('/') },
		{ id: 'work' as const, label: 'Work', href: resolve('work') },
		{ id: 'writing' as const, label: 'Writing', href: resolve('blog') }
	];

	const linkClass =
		'text-ink-muted no-underline transition-colors duration-[160ms] ease-in-out hover:text-mark motion-reduce:transition-none';
</script>

<nav
	class="m-0 flex list-none flex-wrap gap-x-5 gap-y-[0.65rem] p-0 text-meta text-ink-muted [view-transition-name:page-nav]"
	aria-label="Site"
>
	{#each items as item (item.id)}
		{#if item.id === current}
			<span aria-current="page" class="text-ink">{item.label}</span>
		{:else}
			<a class={linkClass} href={item.href}>{item.label}</a>
		{/if}
	{/each}
</nav>
