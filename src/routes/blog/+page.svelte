<script>
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import Card from './Card.svelte';

  export let data;

  let visible = false;
  onMount(() => {
    visible = true;
  });
</script>

<svelte:head>
  <title>Peter Chen - Blog</title>
</svelte:head>

{#if visible}
  <h1 in:fade>Blog</h1>
  <div in:fade={{ delay: 250 }}>
    {#if data.posts && data.posts.length}
      <div class="posts">
        {#each data.posts as post}
          <Card title={post.title} link={`/blog/${post.slug.current}`} date={post.publishedAt} />
        {/each}
      </div>
    {:else}
      <p>No posts found.</p>
    {/if}
  </div>
{/if}

<style lang="scss">
  @import '../../styles/variables.scss';

  .posts {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2rem;
    margin-top: 4rem;
  }

  @media screen and (max-width: $breakpoint-sm) {
    .posts {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
  }
</style>
