<script lang="ts">
  import { onMount } from 'svelte';
  import SunIcon from 'virtual:icons/radix-icons/sun';
  import MoonIcon from 'virtual:icons/radix-icons/moon';
  import { THEMES } from '$lib/config';
  import '../styles/global.scss';

  let currentTheme: string | null;

  onMount(() => {
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

<button class="theme-switch" on:click={toggleTheme}>
  {#if currentTheme === THEMES.LIGHT}
    <MoonIcon />
  {:else}
    <SunIcon />
  {/if}
</button>
<div class="content">
  <slot />
</div>

<style lang="scss">
  @import '../styles/variables.scss';

  .theme-switch {
    all: unset;
    position: fixed;
    top: 1rem;
    right: 1.5rem;
    display: flex;
    padding: 0.5rem;
    border-radius: 0.25rem;
    &:hover {
      cursor: pointer;
      background-color: var(--button-hover-background-color);
    }
  }
  .content {
    padding: 6rem;
    margin: 0 auto;
    max-width: 1600px;
  }

  @media screen and (max-width: $breakpoint-xxl) {
    .content {
      max-width: 1380px;
    }
  }

  @media screen and (max-width: $breakpoint-sm) {
    .content {
      padding: 2rem;
    }
  }
</style>
