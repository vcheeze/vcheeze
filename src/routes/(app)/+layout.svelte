<script lang="ts">
  import { ModeWatcher } from 'mode-watcher';
  import { ScrollArea } from '$lib/components/ui/scroll-area';
  import '../../app.css';
  import Nav from './Nav.svelte';
  // import Footer from './Footer.svelte';
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<ModeWatcher />
<Nav />

<ScrollArea class="container mx-auto min-h-screen p-13">
  {@render children?.()}
</ScrollArea>
<!-- <Footer /> -->
