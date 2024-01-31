<script>
  import Card from './Card.svelte';

  export let data;
</script>

<h1>Blog</h1>
<div>
  {#if data.posts && data.posts.length}
    <div class="posts">
      {#each data.posts as post}
        <Card title={post.title} link={`/blog/${post.slug.current}`} />
      {/each}
    </div>
  {:else}
    <p>No posts found.</p>
  {/if}
</div>

<style lang="scss">
  .posts {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 2rem;
    margin-top: 4rem;
  }
</style>
