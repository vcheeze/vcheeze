<script lang="ts">
  import { ModeWatcher } from 'mode-watcher';

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
<div class="container mx-auto p-13">
  {@render children?.()}
</div>

<!-- <Footer /> -->
