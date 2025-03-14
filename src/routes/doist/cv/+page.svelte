<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, fly } from 'svelte/transition';

  import { animate, hover } from 'motion';

  import ArrowRight from 'lucide-svelte/icons/arrow-right';
  import Globe from 'lucide-svelte/icons/globe';

  import ScrollProgressBar from '$lib/components/ScrollProgressBar.svelte';

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

<ScrollProgressBar />
<a
  href="https://vcheeze.pages.dev/doist/cover-letter"
  class="action fixed right-4 bottom-4 flex items-center gap-1 rounded-lg bg-[#438952] px-[14px] py-[7px] text-white! hover:bg-[#539359]! hover:no-underline! print:hidden"
  use:linkHover>Read my Cover Letter <ArrowRight class="h-[13px] w-[13px]" /></a
>
<div class="min-h-screen">
  <div class="mx-auto max-w-5xl px-4 py-16">
    {#if visible}
      <header in:fade={{ duration: 600, delay: 100 }} class="mb-16 text-center">
        <h1>Peter Chen</h1>

        <p class="mt-2 leading-relaxed font-[475] text-[#25221ea8]">
          Product-focused frontend engineer with 6+ years of experience leading and developing
          scalable web applications. Passionate about building intuitive, high-performing user
          experiences, with a proven track record of crafting clean UIs and driving impact in
          remote-first environments. At home in the TypeScript, React, Next.js, and Node.js world,
          and thrives in autonomous, async-driven teams like Doist.
        </p>

        <div class="contact-info mt-6 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:peter.wei.chen212@gmail.com"
            class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium"
          >
            peter.wei.chen212@gmail.com
          </a>
          <a
            href="tel:+971563052979"
            class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium"
          >
            +971563052979
          </a>
          <a
            href="https://linkedin.com/in/peterweichen"
            target="_blank"
            class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/vcheeze"
            target="_blank"
            class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium"
          >
            GitHub
          </a>
        </div>
        <div class="mt-16 flex flex-col items-center gap-2">
          <img
            src="/images/profile-2.png"
            alt="Peter Chen's Profile"
            class="h-xs w-xs rounded-[6px]"
          />
          <a
            href="https://vcheeze.pages.dev/doist/cv"
            class="hidden items-center gap-1 text-xs print:flex"
            ><Globe class="h-3 w-3" />Read the web version here</a
          >
        </div>
      </header>

      <section in:fly={{ duration: 600, delay: 300, y: 20 }}>
        <h2>I've worked as...</h2>
        <div>
          <h3 class="mt-8">
            Lead Software Engineer / Manager
            <span class="text-[18px] text-[#333333]"
              >@
              <a href="https://www.pwc.com/m1/en.html" target="_blank">PwC Middle East</a></span
            >
          </h3>
          <div class="info mt-2 flex justify-between text-[#575757]">
            <p>Dubai, UAE <span class="p-1 text-[#999]">•</span> Remote</p>
            <p>November 2018 - Present</p>
          </div>
          <h4 class="mt-4 font-semibold tracking-tight">
            <a href="https://www.tamm.abudhabi/" target="_blank">TAMM</a>
          </h4>
          <p class="mt-2 leading-relaxed font-[475] text-[#25221ea8]">
            Abu Dhabi government's e-services portal serving nearly 4 million users - because who
            has the time to look for everything individually?
          </p>
          <ul class="my-4 list-disc space-y-2 pl-8">
            <li>
              Led a globally distributed team (Canada, UAE, Pakistan, India) to deliver 30+ health
              facility licensing services for the Department of Health
            </li>
            <li>
              Spearheaded another remote team of 13 engineers, stabilizing and enhancing 200+
              services for the Department of Municipalities and Transport, including 3 of the most
              used services on TAMM
            </li>
            <li>
              Designed and developed core microservices and tooling, collaborating closely with
              business analysts and designers to enhance TAMM's core ecosystem and Design Language
              System
            </li>
            <li>
              Built an interactive kiosk interface deployed across 20+ service centers, allowing
              users to easily submit video, audio, and text feedback
            </li>
            <li>
              Wrote hundreds of unit and snapshot tests with Jest to ensure the robustness of my
              team's work
            </li>
          </ul>
          <div class="technologies flex flex-wrap gap-2">
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              React
            </div>
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              Redux
            </div>
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              Storybook
            </div>
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              Jest
            </div>
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              Node.js
            </div>
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              TypeScript
            </div>
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              GraphQL
            </div>
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              MariaDB
            </div>
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              Microservices
            </div>
          </div>
          <h4 class="mt-12 font-semibold tracking-tight">
            <a href="https://www.pif.gov.sa/" target="_blank">PIF Partners Hub</a>
          </h4>
          <p class="mt-2 leading-relaxed font-[475] text-[#25221ea8]">
            One of the world's largest sovereign funds wanted a shiny new portal for their customers
            - who were we to say no?
          </p>
          <ul class="my-4 list-disc space-y-2 pl-8">
            <li>
              Designed and built a custom drag-and-drop form editor integrated with Dynamics CRM's
              for seamless data management
            </li>
            <li>
              Developed a dynamic rendering engine for forms created by the custom editor, embedded
              in Next.js
            </li>
            <li>
              Created a component library using Radix primitives, customized Shadcn UI, Storybook,
              and Zeroheight for showcase and documentation
            </li>
          </ul>
          <div class="technologies flex flex-wrap gap-2">
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              Next.js
            </div>
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              Craft.js
            </div>
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              Zustand
            </div>
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              Shadcn UI
            </div>
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              Chakra UI
            </div>
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              Storybook
            </div>
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              Tailwind CSS
            </div>
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              Zeroheight
            </div>
          </div>
          <h4 class="mt-12 font-semibold tracking-tight">PwC Middle East</h4>
          <p class="mt-2 leading-relaxed font-[475] text-[#25221ea8]">
            Sometimes the best thing we can do for clients is to build masterful internal tools that
            help us work better.
          </p>
          <ul class="my-4 list-disc space-y-2 pl-8">
            <li>
              Developed the <strong>Project Health Check</strong>, a biweekly employee satisfaction
              system rolled out across the Middle East, providing partners with key insights into
              project management performance
            </li>
            <li>
              Built <strong>PGen</strong>, short for "Proposal Generator", an automated PowerPoint
              proposal creator used by 3000+ consultants, reducing manual effort and ensuring brand
              consistency.
            </li>
          </ul>
          <div class="technologies flex flex-wrap gap-2">
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              Vue.js
            </div>
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              Aspose.Slides
            </div>
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              Microsoft Dynamics 365
            </div>
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              .NET Framework
            </div>
          </div>
        </div>
        <hr class="my-8 bg-[#25221e2e]" />
        <div>
          <h3>
            Freelance Fullstack Engineer
            <span class="text-[18px] text-[#333333]"
              >@
              <a href="https://gopherwoodclinic.org" target="_blank">Gopher Wood Clinic</a></span
            >
          </h3>
          <div class="info mt-2 flex justify-between text-[#575757]">
            <p>Remote</p>
            <p>January 2020 - Present</p>
          </div>
          <p class="mt-2 leading-relaxed font-[475] text-[#25221ea8]">
            My Dad started his own clinic, so I built a clinic management platform for him.
          </p>
          <ul class="mb-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              Designed and built an admin dashboard clinic employees to manage and configure
              appointments, handling complex scheduling rules, dynamic time slots, custom holidays,
              and more
            </li>
            <li>
              Created a progressively enhanced online appointment system for users to make
              appointments easily, integrating real-time settings from the admin panel
            </li>
            <li>Increased SEO rankings to top 5 on Google search results</li>
          </ul>
          <div class="technologies flex flex-wrap gap-2">
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              Remix
            </div>
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              Radix UI
            </div>
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              Tailwind CSS
            </div>
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              Fly.io
            </div>
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              Google Analytics
            </div>
          </div>
        </div>
      </section>
      <hr class="my-12 bg-[#25221e2e]" />
      <section in:fly={{ duration: 600, delay: 500, y: 20 }}>
        <h2>In my free time, I've built...</h2>
        <div>
          <h3 class="mt-8">
            <a href="https://fantasy-nba.vercel.app" target="_blank">Fantasy NBA Planner</a>
          </h3>
          <p class="mt-2 leading-relaxed font-[475] text-[#25221ea8]">
            A Fantasy NBA Salary Cap Edition planner and visualizer to (maybe) help you beat your
            rivals with a data-driven approach.
          </p>
          <ul class="mb-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              Built an optimizer using Python + FastAPI with mixed-integer programming to generate
              optimal teams and transfers
            </li>
            <li>
              Designed an intuitive UI with Next.js, Shadcn UI, and Recharts, providing real-time
              insights into player performance and team structure
            </li>
            <li>
              Upcoming features: Advanced planning tools to save and compare team strategies,
              in-depth visualizations of player contributions over time, and other fun
              visualizations and stats
            </li>
          </ul>
          <div class="technologies flex flex-wrap gap-2">
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              Next.js
            </div>
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              Shadcn UI
            </div>
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              Recharts
            </div>
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              Python 3
            </div>
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              FastAPI
            </div>
          </div>
        </div>
        <div>
          <h3 class="mt-12">
            <a href="https://mammon-manager.pages.dev" target="_blank">Mammon Manager</a>
          </h3>
          <p class="mt-2 leading-relaxed font-[475] text-[#25221ea8]">
            Manage your mammon, and let not your mammon manage you - built for the financial needs
            of my own household.
          </p>
          <ul class="mb-6 ml-6 list-disc [&>li]:mt-2">
            <li>Income & expense tracking with real-time syncing across users</li>
            <li>Insights into periodic trends with a grouped view of monthly transactions</li>
            <li>Visual reports on spending breakdowns and trends for better financial planning</li>
          </ul>
          <div class="technologies flex flex-wrap gap-2">
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              SvelteKit
            </div>
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              Shadcn Svelte
            </div>
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              Lucia Auth
            </div>
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              Drizzle ORM
            </div>
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              Xata PostgreSQL
            </div>
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              Cloudflare Pages
            </div>
            <div
              class="inline-block rounded-lg bg-[#25221e12] px-[9px] py-[7px] font-medium text-[#25221ea8]"
            >
              Cloudflare Analytics
            </div>
          </div>
        </div>
      </section>
      <section
        in:fly={{ duration: 600, delay: 600, y: 20 }}
        class="mt-12 rounded-[10px] border border-[rgba(37,34,30,.18)] bg-white p-4"
      >
        <h2>Other things about me...</h2>

        <h3 class="mt-8">I studied...</h3>
        <div class="flex justify-between">
          <h4 class="mt-4 font-semibold tracking-tight">
            Computer Science @ <a href="https://nyuad.nyu.edu/en/" target="_blank"
              >New York University Abu Dhabi</a
            >
          </h4>
          <div class="info mt-2 flex justify-between text-[#575757]">
            <p class="mb-2 text-[#666]">August 2014 - May 2018</p>
          </div>
        </div>
        <ul class="my-4 list-disc space-y-2 pl-8">
          <li>Full-ride scholarship</li>
          <li>
            Published
            <a href="https://aclanthology.org/C18-2033/" target="_blank">capstone paper</a> on NLP with
            ACL Anthology
          </li>
        </ul>

        <h3 class="mt-8">I speak with native fluency...</h3>
        <ul class="my-4 list-disc space-y-2 pl-8">
          <li>English</li>
          <li>Mandarin Chinese</li>
        </ul>
      </section>
    {/if}
  </div>
</div>
