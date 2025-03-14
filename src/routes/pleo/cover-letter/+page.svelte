<script lang="ts">
  import { onMount } from 'svelte';

  import ArrowRight from 'lucide-svelte/icons/arrow-right';
  import Earth from 'lucide-svelte/icons/earth';
  import Globe from 'lucide-svelte/icons/globe';
  import Paintbrush from 'lucide-svelte/icons/paintbrush';
  import Rocket from 'lucide-svelte/icons/rocket';
  import Wrench from 'lucide-svelte/icons/wrench';
  import { animate, hover } from 'motion';

  import * as HoverCard from '$lib/components/ui/hover-card';

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

<svelte:head>
  <style>
    .highlight-text {
      background: linear-gradient(90deg, #ffdee2 50%, transparent 50%);
      background-size: 200% 100%;
      background-position: 100% 0;
      animation: highlight 1s ease forwards;
    }

    @keyframes highlight {
      from {
        background-position: 100% 0;
      }
      to {
        background-position: 0 0;
      }
    }
  </style>
</svelte:head>

<a
  href="/pleo/cv"
  class="fixed right-4 bottom-4 flex items-center gap-1 rounded-[25px] bg-[#222222] px-[14px] py-[7px] font-mono text-[13px] text-white no-underline! hover:bg-black! print:hidden"
  use:linkHover>Read my CV <ArrowRight class="h-[13px] w-[13px]" /></a
>
<div class="mx-auto my-10 max-w-5xl">
  {#if visible}
    <a
      href="https://vcheeze.pages.dev/pleo/cover-letter"
      class="text-muted-foreground absolute top-[25px] right-[25px] hidden items-center gap-1 text-xs print:flex"
      ><Globe class="h-3 w-3" />Read the web version here</a
    >
    <h1>
      On the Art of Frontend Engineering - A Note from <HoverCard.Root
        ><HoverCard.Trigger class="no-underline! hover:cursor-pointer"
          ><span class="highlight-text">da Vinci</span></HoverCard.Trigger
        ><HoverCard.Content class="w-80"
          ><img src="/images/leodavinci.jpg" alt="It's Leo" /></HoverCard.Content
        ></HoverCard.Root
      >
    </h1>
    <p class="[&:not(:first-child)]:mt-6">To the visionaries of Pleo,</p>
    <p class="[&:not(:first-child)]:mt-6">
      In my time, I sought to bridge art and science, invention and intuition. I dissected cadavers
      to understand motion, sketched flying machines to challenge gravity, and painted with a
      precision that sought to capture the very soul of a subject. If I were among you today, I
      would tell you that the same spirit of relentless curiosity and mastery burns within Peter.
    </p>
    <p class="[&:not(:first-child)]:mt-6">
      Peter is not merely an engineer; he is a <strong class="bg-[#ffc8d0]"
        >craftsman of experience</strong
      >. Just as I once layered pigment to create depth, he layers his wide array of tools – React,
      Svelte, Python, or whatever new technology he is learning these days – to sculpt interfaces
      that feel natural, responsive, and alive. He does not settle for functionality alone; he
      refines, iterates, and perfects, ensuring that every pixel and interaction serves a purpose.
    </p>
    <p class="[&:not(:first-child)]:mt-6">
      His greatest works are not just technical feats but products that have reshaped the lives of
      millions. He has:
    </p>
    <ul class="my-6 ml-6 [&>li]:mt-2">
      <li>
        <Paintbrush class="inline-block h-[23px] w-[23px]" /> Designed and built digital platforms that
        serve millions, leading a team to enhance 200+ government services used daily.
      </li>
      <li>
        <Wrench class="inline-block h-[23px] w-[23px]" /> Engineered AI-powered experiences, integrating
        Generative AI to make complex services feel effortless.
      </li>
      <li>
        <Earth class="inline-block h-[23px] w-[23px]" /> Led and scaled remote teams, working with engineers,
        designers, QAs, and PMs across Canada, the UAE, Pakistan, and India to deliver high-quality,
        user-focused products.
      </li>
      <li>
        <Rocket class="inline-block h-[23px] w-[23px]" /> Crafted intuitive interfaces, from a kiosk
        experience deployed across 20 service centers to a proposal automation tool that cut response
        times by 140%.
      </li>
    </ul>
    <p class="[&:not(:first-child)]:mt-6">
      But what truly sets him apart is his obsession with details that elevate a product from useful
      to <strong class="bg-[#ffc8d0]">unforgettable</strong>. Just as I once studied the play of
      light upon a subject's face, he fine-tunes performance, accessibility, and interactions –
      ensuring that every experience is seamless, engaging, and deeply human.
    </p>
    <p class="[&:not(:first-child)]:mt-6">
      Pleo, in its pursuit of crafting financial experiences that are both playful and powerful,
      offers a challenge worthy of his abilities. Hand him the brush, and he will create not just an
      interface – but a masterpiece, and maybe even his Mona Lisa.
    </p>
    <p class="[&:not(:first-child)]:mt-6">Yours in the pursuit of innovation,</p>
    <p class="[&:not(:first-child)]:mt-6">Leonardo da Vinci</p>
  {/if}
</div>
