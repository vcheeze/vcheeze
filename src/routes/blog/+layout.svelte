<script>
  import { fade } from 'svelte/transition';

  export let data;

  const duration = 250;
</script>

{#key data.url}
  <div in:fade={{ duration, delay: duration }} out:fade={{ duration }}>
    <slot />
  </div>
{/key}
