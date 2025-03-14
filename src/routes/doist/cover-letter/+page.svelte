<script lang="ts">
  import { onMount } from 'svelte';

  import ArrowRight from 'lucide-svelte/icons/arrow-right';
  import Globe from 'lucide-svelte/icons/globe';
  import HeartHandshake from 'lucide-svelte/icons/heart-handshake';
  import Paintbrush from 'lucide-svelte/icons/paintbrush';
  import Rocket from 'lucide-svelte/icons/rocket';
  import TrendingUp from 'lucide-svelte/icons/trending-up';
  import { animate, hover } from 'motion';

  let visible = $state(false);

  function linkHover(node: HTMLAnchorElement) {
    const child = node.querySelector('svg');
    const cleanup = hover(node, () => {
      animate(
        child || node,
        { scale: 1, rotate: [0, 360, 360] },
        { duration: 0.4, ease: 'easeInOut' }
      );

      return () => {
        animate(
          child || node,
          { scale: 1, rotate: [360, 360, 0] },
          { duration: 0.4, ease: 'easeInOut' }
        );
      };
    });

    return {
      destroy() {
        cleanup();
      }
    };
  }

  onMount(() => {
    visible = true;
  });
</script>

<a
  href="https://vcheeze.pages.dev/doist/cv"
  class="action fixed right-4 bottom-4 flex items-center gap-1 rounded-lg bg-[#438952] px-[14px] py-[7px] text-white! hover:bg-[#539359]! hover:no-underline! print:hidden"
  use:linkHover>Read my CV <ArrowRight class="h-[13px] w-[13px]" /></a
>
<div class="mx-auto my-16 max-w-5xl px-4">
  {#if visible}
    <header class="text-center">
      <a
        href="https://vcheeze.pages.dev/doist/cover-letter"
        class="hidden items-center justify-center gap-1 text-xs print:flex"
        ><Globe class="h-3 w-3" />Read the web version here</a
      >
      <h1 class="mt-4 mb-2">👋 Hello, I'm Peter.</h1>
      <h1 class="mb-12">Here's why I'd be a great addition to Doist.</h1>
    </header>

    <h2>Why I'd be a natural fit at Doist</h2>
    <ul class="my-4 list-disc space-y-2 pl-8">
      <li>
        I build high-impact, intuitive solutions that solve complex problems, because <strong
          >simplicity attracts, retains, and endures</strong
        >.
      </li>
      <li>
        I thrive in <strong>remote, asynchronous environments</strong> - I mastered autonomous work growing
        up as a homeschooler, and it has translated seamlessly into my professional career, where I led
        and scaled remote teams to deliver high-quality, user-focused products.
      </li>
      <li>
        I communicate and collaborate effectively, in writing, in person, and in code :)
        Productivity isn't just speed; it's the harmony of effectiveness and efficiency. Clarity in
        direction makes efficiency worthwhile.
      </li>
      <li>
        I am <strong>obsessed with performance and reliability</strong>. My work is test- and
        performance-driven, and I constantly iterate to meet the evolving standard of excellence in
        web development.
      </li>
    </ul>

    <h2>What I can do for Doist</h2>
    <ul class="my-4 space-y-2">
      <li class="flex gap-2">
        <Rocket class="mt-1 h-[18px] w-[18px] flex-none" />
        <span
          >I am <strong>product</strong>ive - I don't just produce high-quality code at a fast pace,
          I build compelling <strong>products</strong>. In an era where AI can generate apps in
          hours, true craftsmanship stands out. I am a product manager + frontend engineer. At
          Doist, I can help craft elegant, robust solutions for our clients.</span
        >
      </li>
      <li class="flex gap-2">
        <Paintbrush class="mt-1 h-[18px] w-[18px] flex-none" />
        <span
          >I am a
          <strong>frontend craftsman</strong>. I create interfaces that feel natural, responsive,
          and alive. I obsess over progressive enhancement, performance, and accessibility, because
          the web is for everyone. At Doist, I can help build delightful and refreshing user
          interfaces and experiences.</span
        >
      </li>
      <li class="flex gap-2">
        <TrendingUp class="mt-1 h-[18px] w-[18px] flex-none" />
        <span
          >I am <strong>always growing</strong>. While I specialize in React and Next.js, I have
          built with Svelte, Remix, Astro in the past year. I keep a constant eye out for emerging
          technologies and practices, and I incorporate them in my work to best understand them. At
          Doist, I can help bring cutting edge technologies and practices to our products.</span
        >
      </li>
      <li class="flex gap-2">
        <HeartHandshake class="mt-1 h-[18px] w-[18px] flex-none" />
        <span
          >Perks of being a manager in a consulting firm, I have honed strong business acumen. My
          global perspective - growing up in Taiwan, studying in the US, China, and UAE, and working
          in Dubai - gives me a <strong
            >unique blend of technical expertise and cross-cultural empathy</strong
          >. At Doist, I believe I would be a culture add, not just a fit.</span
        >
      </li>
    </ul>

    <hr class="my-8 bg-[#25221e2e]" />

    <p class="[&:not(:first-child)]:mt-6">
      Let's build simple, practical, and impactful products <strong>together</strong>.
    </p>
    <p class="[&:not(:first-child)]:mt-6">Sincerely,</p>
    <p class="[&:not(:first-child)]:mt-6">Peter</p>
  {/if}
</div>
