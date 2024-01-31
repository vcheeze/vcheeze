<script lang="ts">
  export let title: string | undefined;
  export let link: string;
</script>

<a class="card" href={link}>
  {title}
</a>

<style lang="scss">
  .card {
    display: block;
    background-color: var(--card-background-color);
    border-radius: 0.5rem;
    padding: 2rem;
    text-decoration: none;
    transition: background-color 0.5s;
    &:hover {
      background-color: var(--card-hover-background-color);
    }
  }
</style>
