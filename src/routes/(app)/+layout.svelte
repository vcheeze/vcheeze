<script lang="ts">
  import { ModeWatcher } from 'mode-watcher';
  import { ScrollArea } from '$lib/components/ui/scroll-area';
  import Nav from './Nav.svelte';
  // import Footer from './Footer.svelte';
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<ModeWatcher />
<Nav />

<ScrollArea
  class="bg-slatep3a-1 text-slatep3a-12 dark:bg-slatedark-2 dark:text-slatedark-12 container mx-auto min-h-screen p-13"
>
  {@render children?.()}
</ScrollArea>
<!-- <Footer /> -->
