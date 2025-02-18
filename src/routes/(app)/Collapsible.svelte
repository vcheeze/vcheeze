<script lang="ts">
  import { slide } from 'svelte/transition';
  import { createCollapsible, melt } from '@melt-ui/svelte';
  const {
    elements: { root, content, trigger },
    states: { open }
  } = createCollapsible({
    forceVisible: true
  });

  interface Props {
    triggerLabel: string;
  }

  let { triggerLabel }: Props = $props();
</script>

<div use:melt={$root}>
  <h5 use:melt={$trigger}>{triggerLabel}</h5>
  {#if $open}
    <div use:melt={$content} transition:slide>Obi-Wan says: Hello there!</div>
  {/if}
</div>
