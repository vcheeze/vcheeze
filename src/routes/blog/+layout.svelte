<script lang="ts">
  import { fade } from 'svelte/transition';

  let { data, children } = $props();

  const duration = 250;
</script>

{#key data.url}
  <div in:fade={{ duration, delay: duration }} out:fade={{ duration }}>
    {@render children?.()}
  </div>
{/key}
