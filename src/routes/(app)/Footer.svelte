<script>
  import GitHubIcon from 'lucide-svelte/icons/github';
  import LinkedInIcon from 'lucide-svelte/icons/linkedin';

  const routes = [
    {
      name: 'GitHub',
      link: 'https://github.com/vcheeze',
      target: '_blank',
      icon: GitHubIcon
    },
    {
      name: 'LinkedIn',
      link: 'https://linkedin.com/in/peterweichen',
      target: '_blank',
      icon: LinkedInIcon
    }
  ];
</script>

<footer class="footer">
  {#each routes as route}
    <a class="footer__link" href={route.link} target={route.target || '_self'}
      ><route.icon /></a
    >
  {/each}
</footer>

<style lang="scss">
  .footer {
    &__link {
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
</style>
