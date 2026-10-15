<script lang="ts">
	// Report pages do not load the site design system. Each report paints its own document.
	// Reload links leave this document for every navigation and skip preloading, so site
	// CSS is never injected here.
	let { children } = $props();
</script>

<div style="display: contents" data-sveltekit-reload>
	{@render children()}
</div>

<style>
	:global(body) {
		margin: 0;
	}
</style>
