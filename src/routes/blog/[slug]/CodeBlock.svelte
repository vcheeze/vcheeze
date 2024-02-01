<script lang="ts">
  import { onMount } from 'svelte';
  import type { CustomBlockComponentProps } from '@portabletext/svelte';
  import { codeToHtml } from 'shiki';

  // Property custom blocks receive from @portabletext/svelte when redered
  export let portableText: CustomBlockComponentProps<{ code: string }>;

  let code: any;
  onMount(async () => {
    code = await codeToHtml(portableText.value.code, {
      lang: 'javascript',
      theme: 'nord'
    });
  });
</script>

<div>
  {@html code}
</div>

<style>
  :global(.shiki) {
    font-size: 0.75rem;
    padding: 1rem;
    border-radius: 0.5rem;

    & > code {
      background-color: unset;
      padding: unset;
    }
  }
</style>
