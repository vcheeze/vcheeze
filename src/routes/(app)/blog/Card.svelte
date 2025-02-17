<script lang="ts">
  import { formatDate } from '$lib/utils';

  interface Props {
    title: string | undefined;
    link: string;
    date: string;
  }

  let { title, link, date }: Props = $props();
</script>

<a
  class="bg-slate-3 hover:bg-slate-4 dark:bg-slatedark-3 dark:hover:bg-slatedark-4 text-foreground group flex flex-col justify-between gap-2 rounded-lg p-8 no-underline transition-colors duration-500 ease-out"
  href={link}
>
  <div class="transition-all duration-250 ease-in-out group-hover:-translate-y-2">{title}</div>
  <div
    class="text-muted-foreground text-xs transition-all duration-250 ease-in-out group-hover:-translate-y-2"
  >
    {formatDate(date)}
  </div>
</a>
