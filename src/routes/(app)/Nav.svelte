<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  import MailboxIcon from 'lucide-svelte/icons/mailbox';
  import HouseIcon from 'lucide-svelte/icons/house';
  import MoonIcon from 'lucide-svelte/icons/moon';
  import LibraryIcon from 'lucide-svelte/icons/library';
  import SunIcon from 'lucide-svelte/icons/sun';
  import { toggleMode } from 'mode-watcher';

  import { Button } from '$lib/components/ui/button';

  type Route = {
    name: string;
    link: string;
    icon: any;
    target?: string;
  };
  const routes: Route[] = [
    {
      name: 'home',
      link: '/',
      icon: HouseIcon
    },
    {
      name: 'blog',
      link: '/blog',
      icon: LibraryIcon
    },
    {
      name: 'contact',
      link: '/contact',
      icon: MailboxIcon
    }
  ];

  let visible = $state(false);

  onMount(() => {
    visible = true;
  });
</script>

<nav class="fixed top-0 right-0 flex flex-col items-center gap-2 px-2 py-4 max-sm:px-3 max-sm:py-2">
  <Button variant="ghost" size="icon" onclick={toggleMode}>
    <SunIcon class="h-4 w-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
    <MoonIcon
      class="absolute h-4 w-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90"
    />
    <span class="sr-only">Toggle theme</span>
  </Button>
  {#each routes as route, index}
    {#if visible}
      <div in:fly={{ y: -50, delay: 250 * index, duration: 1000 }}>
        <Button
          variant="ghost"
          size="icon"
          href={route.link}
          aria-label={route.name}
          target={route?.target || ''}><route.icon class="h-4 w-4" /></Button
        >
      </div>
    {/if}
  {/each}
</nav>
