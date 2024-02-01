<script lang="ts">
  import { PortableText } from '@portabletext/svelte';
  import ArrowLeftIcon from 'virtual:icons/radix-icons/arrowLeft';
  import { formatDate } from '$lib/utils';
  import { urlFor } from '$lib/utils/image';
  import CodeBlock from './CodeBlock.svelte';
  import type { PageData } from './$types';

  export let data: PageData;
</script>

<a class="back" href="/blog"><ArrowLeftIcon /></a>
<section class="post">
  {#if data.mainImage}
    <img
      class="post__cover"
      src={urlFor(data.mainImage).url()}
      alt="Cover image for {data.title}"
    />
  {:else}
    <div class="post__cover--none" />
  {/if}
  <div class="post__container">
    <h1 class="post__title">{data.title}</h1>
    <!-- <p class="post__excerpt">{data.excerpt}</p> -->
    <p class="post__date">
      {formatDate(data.publishedAt)}
    </p>
    <div class="post__content">
      <PortableText
        value={data.body}
        components={{
          types: {
            code: CodeBlock
          }
        }}
      />
    </div>
  </div>
</section>

<style lang="scss">
  .back {
    width: fit-content;
    display: flex;
    color: var(--foreground-color);
    &:hover {
      cursor: pointer;
      color: var(--accent-primary);
    }
  }

  .post {
    &__date {
      font-size: 0.9rem;
      font-style: italic;
    }
  }
</style>
