<script lang="ts">
  import { formatDate } from '$lib/utils';

  export let title: string | undefined;
  export let link: string;
  export let date: string;
</script>

<a class="card" href={link}>
  <div class="card__title">{title}</div>
  <div class="card__date">{formatDate(date)}</div>
</a>

<style lang="scss">
  .card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 0.5rem;
    background-color: var(--card-background-color);
    border-radius: 0.5rem;
    padding: 2rem;
    color: var(--foreground-color);
    text-decoration: none;
    transition: background-color 0.5s ease-out;
    & > div {
      transition: all 0.25s ease-in-out;
    }
    &:hover {
      background-color: var(--card-hover-background-color);
      & > div {
        transform: translateY(-0.5rem);
      }
    }

    &__date {
      font-size: 0.75rem;
      color: var(--card-description-color);
    }
  }
</style>
