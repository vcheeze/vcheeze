<script lang="ts">
	import ArrowRightIcon from 'phosphor-svelte/lib/ArrowRightIcon';

	let { text }: { text: string } = $props();

	const parts = $derived(text.split('→'));
</script>

{#each parts as part, i (i)}
	{#if i > 0}
		<span
			class="mx-[0.15em] inline-flex align-[-0.12em] text-current opacity-70 [&>svg]:block"
			aria-hidden="true"
		>
			<ArrowRightIcon size="0.9em" weight="regular" />
		</span>
	{/if}{part}
{/each}
