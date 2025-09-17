<script lang="ts">
  import { PortableText } from '@portabletext/svelte';
  import ArrowLeftIcon from 'lucide-svelte/icons/arrow-left';

  import { formatDate } from '$lib/utils';
  import { urlFor } from '$lib/utils/image';

  import CodeBlock from './CodeBlock.svelte';
  import type { PageData } from './$types';

  interface Props {
    data: PageData;
  }

  let { data }: Props = $props();
</script>

<svelte:head>
  <title>{data.title}</title>
  <meta name="description" content={data.title} />
</svelte:head>

<a class="mb-16 block" href="/blog" aria-label="Back"><ArrowLeftIcon class="h-4 w-4" /></a>
<section class="post">
  {#if data.mainImage}
    <img
      class="post__cover"
      src={urlFor(data.mainImage).url()}
      alt="Cover image for {data.title}"
    />
  {:else}
    <div class="post__cover--none"></div>
  {/if}
  <div class="post__container">
    <h1 class="mb-4 scroll-m-20 font-serif text-4xl font-extrabold tracking-tight lg:text-5xl">
      {data.title}
    </h1>
    <!-- <p class="post__excerpt">{data.excerpt}</p> -->
    <p class="text-sm italic">
      {formatDate(data.publishedAt)}
    </p>
    <div class="post my-6">
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
  :global {
    .post {
      h2 {
        scroll-margin: 5rem;
        font-family: Arvo, ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;
        font-size: 1.875rem;
        line-height: calc(2.25 / 1.875);
        font-weight: 600;
        letter-spacing: -0.025em;
        margin-top: 2rem;
        &:first {
          margin-top: 0;
        }
      }
      h3 {
        font-size: 1.5rem;
        line-height: 2rem;
        font-weight: 600;
        letter-spacing: -0.025em;
        scroll-margin: 5rem;
        margin-top: 2rem;
      }
      p {
        line-height: 1.75rem;
        &:not(:first-child) {
          margin-top: 1.5rem;
        }
      }
      a {
        color: var(--color-cyan-11);
        &:hover {
          text-decoration: underline;
        }
        &:visited {
          text-decoration: underline;
        }
      }
      blockquote {
        padding-left: 1.5rem;
        margin-top: 1.5rem;
        border-left-width: 2px;
        font-style: italic;
      }
      pre {
        margin-top: 0.5rem;
      }
      code:not(pre code) {
        border-radius: 0.25rem;
        padding: 0.2rem 0.3rem;
        font-size: 0.75rem;
        line-height: 1.25rem;
        background-color: #3b4252;
        color: #d8dee9;
      }
      ul,
      ol {
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
        margin-left: 1.5rem;
        & > li {
          margin-top: 0.5rem;
        }
      }
      ul {
        list-style-type: disc;
      }
      ol {
        list-style-type: decimal;
      }
    }
  }
</style>
