<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import Card from './Card.svelte';

  let { data } = $props();

  let visible = $state(false);
  onMount(() => {
    visible = true;
  });
</script>

<svelte:head>
  <title>Peter Chen - Blog</title>
  <meta name="description" content="Peter Chen's blog" />
</svelte:head>

{#if visible}
  <h1 in:fade class="scroll-m-20 font-serif text-4xl font-extrabold tracking-tight lg:text-5xl">
    Blog
  </h1>
  <p class="leading-7 [&:not(:first-child)]:mt-6">
    I write short blog posts about my experience as a software engineer.
  </p>
  <div in:fade={{ delay: 250 }}>
    {#if data.posts && data.posts.length}
      <div class="mt-12 grid gap-4 md:grid-cols-3">
        {#each data.posts as post}
          <Card title={post.title} link={`/blog/${post.slug.current}`} date={post.publishedAt} />
        {/each}
      </div>
    {:else}
      <p>No posts found.</p>
    {/if}
  </div>
{/if}
