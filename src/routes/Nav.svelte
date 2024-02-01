<script lang="ts">
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';
  import HomeIcon from 'virtual:icons/radix-icons/home';
  import MoonIcon from 'virtual:icons/radix-icons/moon';
  import ReaderIcon from 'virtual:icons/radix-icons/reader';
  import SunIcon from 'virtual:icons/radix-icons/sun';
  import { THEMES } from '$lib/config';

  const routes = [
    {
      link: '/',
      name: 'home',
      icon: HomeIcon
    },
    {
      link: '/blog',
      name: 'blog',
      icon: ReaderIcon
    }
  ];

  let visible = false;
  let currentTheme: string | null;

  onMount(() => {
    visible = true;
    currentTheme = document.body.getAttribute('data-theme');
  });

  function setTheme(theme: string) {
    if (!Object.values(THEMES).includes(theme)) return;
    localStorage.setItem('theme', theme);
    document.body.setAttribute('data-theme', theme);
  }

  function toggleTheme() {
    const theme = currentTheme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    currentTheme = theme;
    setTheme(theme);
  }
</script>

<nav class="side-nav">
  <button class="side-nav__item" on:click={toggleTheme}>
    {#if currentTheme === THEMES.LIGHT}
      <MoonIcon />
    {:else}
      <SunIcon />
    {/if}
  </button>
  {#each routes as route, index}
    {#if visible}
      <a
        class="side-nav__item"
        href={route.link}
        in:fly={{ y: -50, delay: 250 * index, duration: 1000 }}
        ><svelte:component this={route.icon} /></a
      >
    {/if}
  {/each}
</nav>

<style lang="scss">
  @import '../styles/variables.scss';

  .side-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    position: fixed;
    top: 0;
    right: 0;
    padding: 1rem 1.5rem;

    &__item {
      display: flex;
      color: var(--foreground-color);
      padding: 0.5rem;
      border-radius: 0.25rem;
      transition: background-color 0.5s ease-out;
      &:hover {
        cursor: pointer;
        background-color: var(--button-hover-background-color);
      }
    }
  }

  @media screen and (max-width: $breakpoint-sm) {
    .side-nav {
      padding: 0.5rem 0.75rem;
    }
  }
</style>
