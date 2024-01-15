<script lang="ts">
  import { createCollapsible, melt } from '@melt-ui/svelte';
  const {
    elements: { root, content, trigger }
  } = createCollapsible();

  export let triggerLabel: string;
</script>

<div use:melt={$root}>
  <h5 use:melt={$trigger}>{triggerLabel}</h5>
  <div use:melt={$content}>Obi-Wan says: Hello there!</div>
</div>
