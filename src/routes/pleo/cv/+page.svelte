<script lang="ts">
  import { fly } from 'svelte/transition';
  import ArrowRight from 'lucide-svelte/icons/arrow-right';
  import Globe from 'lucide-svelte/icons/globe';
  import { animate, hover } from 'motion';
  import { onMount } from 'svelte';

  let visible = $state(false);

  function profileHover(node: HTMLImageElement) {
    const cleanup = hover(node, () => {
      animate(
        node,
        { scale: [1, 1.05, 1], rotate: [0, 360, 360] },
        { duration: 0.8, ease: 'easeInOut' }
      );

      return () => {
        animate(node, { scale: 1 }, { duration: 0.8, ease: 'easeInOut' });
      };
    });

    return {
      destroy() {
        cleanup();
      }
    };
  }

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
  <title>Peter Chen for Pleo!</title>
  <meta
    name="description"
    content="Hire Peter for your Senior Frontend Engineer role! Herer's why he'd be a good fit :)"
  />
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');

    body {
      font-family:
        Inter,
        var(
          --default-font-family,
          ui-sans-serif,
          system-ui,
          sans-serif,
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        );
      font-size: 23px;
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }
    h1 {
      font-size: 64px;
      line-height: 1.1;
    }
    h2 {
      font-size: 45px;
    }
    h3 {
      font-size: 32px;
    }
    a {
      text-decoration: underline;
    }
    a:hover {
      background-color: #ffdee2;
    }

    .font-mono {
      font-family: 'Space Mono', monospace;
    }
    .section p {
      margin-bottom: 23px;
    }
  </style>
</svelte:head>

<a
  href="/pleo/cover-letter"
  class="fixed right-4 bottom-4 flex items-center gap-1 rounded-[25px] bg-[#222222] px-[14px] py-[7px] font-mono text-[13px] text-white no-underline! hover:bg-black! print:hidden"
  use:linkHover>Read my Cover Letter <ArrowRight class="h-[13px] w-[13px]" /></a
>
<div class="flex gap-10 not-print:container not-print:mx-auto not-print:my-10">
  {#if visible}
    <div
      class="w-[265px] flex-none font-mono text-[16px]"
      in:fly={{ duration: 800, delay: 200, x: -100 }}
    >
      <img
        src="/images/profile.png"
        class="h-[265px] w-[265px]"
        alt="Peter Chen's Profile Pic"
        use:profileHover
      />
      <div class="border-b pb-6">
        <p class="mt-6 mb-4 text-[18px]">I'm good at</p>
        <div class="space-y-2">
          <p>
            <span class="bg-[#ffc8d0]">Problem-solving</span>
          </p>
          <p>
            The
            <span class="bg-[#ffc8d0]">full web stack</span>
            - experienced in Next.js, Remix, and SvelteKit. At home with microservices architecture,
            and dabbled in Python to do some mixed-integer linear programming for my fantasy NBA team.
          </p>
          <p>
            <span class="bg-[#ffc8d0]">Working remotely</span>
            and asynchronously, a natural habit from being homeschooled.
          </p>
        </div>
      </div>

      <div class="border-b pb-6">
        <p class="mt-6 mb-4 text-[18px]">I studied</p>
        <div class="space-y-1">
          <p>
            <strong>Computer Science</strong> @
            <a href="https://nyuad.nyu.edu/en/" target="_blank">New York University Abu Dhabi</a>
          </p>
          <p class="text-[14px] text-[#333333]">August 2014 - May 2018</p>
          <p class="text-[14px] text-[#333333]">Full-ride scholarship</p>
          <p>
            Published
            <a href="https://aclanthology.org/C18-2033/" target="_blank">capstone paper</a> on NLP with
            ACL Anthology
          </p>
        </div>
      </div>
      <div class="border-b pb-6">
        <p class="mt-6 mb-4 text-[18px]">I speak</p>
        <div class="space-y-1">
          <p><strong>English</strong> @ native level</p>
          <p><strong>Mandarin Chinese</strong> @ native level</p>
        </div>
      </div>
      <div class="border-b pb-6">
        <p class="mt-6 mb-4 text-[18px]">I am certified in</p>
        <div class="space-y-1">
          <p>
            <strong>Sitecore 9.0 Certified Platform Associate Developer</strong>
            from Sitecore
          </p>
          <p>
            <strong>Microsoft Dynamics 365 Customization and Configuration</strong>
            from Microsoft
          </p>
        </div>
      </div>
    </div>
    <div>
      <div
        class="relative space-y-5 rounded-2xl bg-[#d9f2e1] p-[25px]"
        in:fly={{ duration: 800, delay: 400, y: -100 }}
      >
        <a
          href="https://vcheeze.pages.dev/pleo/cv"
          class="text-muted-foreground absolute top-[25px] right-[25px] hidden items-center gap-1 text-xs print:flex"
          ><Globe class="h-3 w-3" />Read the web version here</a
        >
        <h1>Peter Chen</h1>
        <p class="text-[32px] text-[#333333]">Lead Frontend Engineer</p>
        <div class="flex gap-5">
          <p class="flex items-center gap-1 text-[18px] text-[#333333]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-phone h-[18px] w-[18px] stroke-[#333333]"
            >
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
              />
            </svg>
            <a href="tel:+971563052979" target="_blank">+971563052979</a>
          </p>
          <p class="flex items-center gap-1 text-[18px] text-[#333333]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-at-sign h-[18px] w-[18px] stroke-[#333333]"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
            </svg>
            <a href="mailto:peter.wei.chen212@gmail.com" target="_blank"
              >peter.wei.chen212@gmail.com</a
            >
          </p>
          <p class="flex items-center gap-1 text-[18px] text-[#333333]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-linkedin h-[18px] w-[18px] stroke-[#333333]"
            >
              <path
                d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
              />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <a href="https://linkedin.com/in/peterweichen" target="_blank">Peter Chen</a>
          </p>
          <p class="flex items-center gap-1 text-[18px] text-[#333333]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-github h-[18px] w-[18px] stroke-[#333333]"
            >
              <path
                d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
              />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
            <a href="https://github.com/vcheeze" target="_blank">vcheeze</a>
          </p>
        </div>
        <p>
          I am a problem-solver at heart, and the web is simply my medium. Some of my most
          meaningful work includes building a centralized e-services portals that serve millions and
          a "health check" tool which fostered a better work environment for my colleagues. Growing
          up homeschooled made me self-driven and adaptable, which is why I thrive in remote and
          asynchronous teams. Lately, I've had some extra motivation to seek out fully remote
          opportunities, courtesy of my two adorable little boys.
        </p>
      </div>
      <div class="section" in:fly={{ duration: 800, delay: 400, y: 100 }}>
        <h2 class="mt-12">Experience</h2>
        <div>
          <h3>
            Lead Software Engineer / Manager
            <span class="text-[18px] text-[#333333]"
              >@
              <a href="https://www.pwc.com/m1/en.html" target="_blank">PwC Middle East</a></span
            >
          </h3>
          <div class="flex justify-between text-[18px] text-[#333333]">
            <p>Dubai, UAE / Remote</p>
            <p>November 2018 - Present</p>
          </div>
          <h4 class="scroll-m-20 text-2xl font-semibold tracking-tight">
            <a href="https://www.tamm.abudhabi/" target="_blank">TAMM</a>
          </h4>
          <p class="text-muted-foreground text-lg italic">
            Abu Dhabi government's e-services portal serving nearly 4 million users - because who
            has the time to look for everything individually?
          </p>
          <ul class="my-6 ml-6 list-disc [&>li]:mt-2">
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
          </ul>
          <div class="flex flex-wrap gap-2 font-mono text-[13px] leading-[14px]">
            <div class="rounded-[25px] border border-[#333333] px-[14px] py-[7px]">React</div>
            <div class="rounded-[25px] border border-[#333333] px-[14px] py-[7px]">Redux</div>
            <div class="rounded-[25px] border border-[#333333] px-[14px] py-[7px]">Storybook</div>
            <div class="rounded-[25px] border border-[#333333] px-[14px] py-[7px]">Jest</div>
            <div class="rounded-[25px] border border-[#333333] px-[14px] py-[7px]">Node.js</div>
            <div class="rounded-[25px] border border-[#333333] px-[14px] py-[7px]">TypeScript</div>
            <div class="rounded-[25px] border border-[#333333] px-[14px] py-[7px]">GraphQL</div>
            <div class="rounded-[25px] border border-[#333333] px-[14px] py-[7px]">MariaDB</div>
          </div>
          <h4 class="mt-12 scroll-m-20 text-2xl font-semibold tracking-tight">
            <a href="https://www.pif.gov.sa/" target="_blank">PIF Partners Hub</a>
          </h4>
          <p class="text-muted-foreground text-lg italic">
            One of the world's largest sovereign funds wanted a shiny new portal for their customers
            - who were we to say no?
          </p>
          <ul class="my-6 ml-6 list-disc [&>li]:mt-2">
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
          <div class="flex flex-wrap gap-2 font-mono text-[13px] leading-[14px]">
            <div class="rounded-[25px] border border-[#333333] px-[14px] py-[7px]">Next.js</div>
            <div class="rounded-[25px] border border-[#333333] px-[14px] py-[7px]">Craft.js</div>
            <div class="rounded-[25px] border border-[#333333] px-[14px] py-[7px]">Zustand</div>
            <div class="rounded-[25px] border border-[#333333] px-[14px] py-[7px]">Shadcn UI</div>
            <div class="rounded-[25px] border border-[#333333] px-[14px] py-[7px]">Storybook</div>
            <div class="rounded-[25px] border border-[#333333] px-[14px] py-[7px]">
              Tailwind CSS
            </div>
            <div class="rounded-[25px] border border-[#333333] px-[14px] py-[7px]">Zeroheight</div>
          </div>
          <h4 class="mt-12 scroll-m-20 text-2xl font-semibold tracking-tight">PwC</h4>
          <ul class="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              Developed the Project Health Check, a biweekly employee satisfaction system rolled out
              across the Middle East, providing partners with key insights into project management
              performance
            </li>
            <li>
              Built PGen, short for "Proposal Generator", an automated PowerPoint proposal creator
              used by 3000+ consultants, reducing manual effort and ensuring brand consistency.
            </li>
          </ul>
          <div class="flex flex-wrap gap-2 font-mono text-[13px] leading-[14px]">
            <div class="rounded-[25px] border border-[#333333] px-[14px] py-[7px]">Vue.js</div>
            <div class="rounded-[25px] border border-[#333333] px-[14px] py-[7px]">
              Aspose.Slides
            </div>
            <div class="rounded-[25px] border border-[#333333] px-[14px] py-[7px]">
              Microsoft Dynamics 365
            </div>
            <div class="rounded-[25px] border border-[#333333] px-[14px] py-[7px]">
              .NET Framework
            </div>
          </div>
        </div>
        <div>
          <h3 class="mt-12">
            Freelance Fullstack Engineer
            <span class="text-[18px] text-[#333333]"
              >@
              <a href="https://gopherwoodclinic.org" target="_blank">Gopher Wood Clinic</a></span
            >
          </h3>
          <p class="text-muted-foreground mb-0! text-lg italic">
            My Dad started his own clinic, so I built a clinic management platform for him.
          </p>
          <div class="flex justify-between text-[18px] text-[#333333]">
            <p>Remote</p>
            <p>January 2020 - Present</p>
          </div>
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
          <div class="flex flex-wrap gap-2 font-mono text-[13px] leading-[14px]">
            <div class="rounded-[25px] border border-[#333333] px-[14px] py-[7px]">Remix</div>
            <div class="rounded-[25px] border border-[#333333] px-[14px] py-[7px]">Radix UI</div>
            <div class="rounded-[25px] border border-[#333333] px-[14px] py-[7px]">
              Tailwind CSS
            </div>
            <div class="rounded-[25px] border border-[#333333] px-[14px] py-[7px]">Fly.io</div>
            <div class="rounded-[25px] border border-[#333333] px-[14px] py-[7px]">
              Google Analytics
            </div>
          </div>
        </div>
        <h2 class="mt-12" id="personal-projects">Personal Projects</h2>
        <div>
          <h3>
            <a href="https://fantasy-nba.vercel.app" target="_blank">Fantasy NBA Planner</a>
          </h3>
          <p class="text-muted-foreground text-lg italic">
            A Fantasy NBA Salary Cap Edition planner and visualizer to (maybe) help you beat your
            rivals with a data-driven approach.
          </p>
          <ul class="my-6 ml-6 list-disc [&>li]:mt-2">
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
          <div class="flex flex-wrap gap-2 font-mono text-[13px] leading-[14px]">
            <div class="rounded-[25px] border border-[#333333] px-[14px] py-[7px]">Next.js</div>
            <div class="rounded-[25px] border border-[#333333] px-[14px] py-[7px]">Shadcn UI</div>
            <div class="rounded-[25px] border border-[#333333] px-[14px] py-[7px]">Recharts</div>
            <div class="rounded-[25px] border border-[#333333] px-[14px] py-[7px]">Python 3</div>
            <div class="rounded-[25px] border border-[#333333] px-[14px] py-[7px]">FastAPI</div>
          </div>
        </div>
        <div>
          <h3 class="mt-12">
            <a href="https://mammon-manager.pages.dev" target="_blank">Mammon Manager</a>
          </h3>
          <p class="text-muted-foreground text-lg italic">
            Manage your mammon, and let not your mammon manage you - built for the financial needs
            of my own household.
          </p>
          <ul class="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>Income & expense tracking with real-time syncing across users</li>
            <li>Insights into periodic trends with a grouped view of monthly transactions</li>
            <li>Visual reports on spending breakdowns and trends for better financial planning</li>
          </ul>
          <div class="flex flex-wrap gap-2 font-mono text-[13px] leading-[14px]">
            <div class="rounded-[25px] border border-[#333333] px-[14px] py-[7px]">SvelteKit</div>
            <div class="rounded-[25px] border border-[#333333] px-[14px] py-[7px]">
              Shadcn Svelte
            </div>
            <div class="rounded-[25px] border border-[#333333] px-[14px] py-[7px]">Lucia Auth</div>
            <div class="rounded-[25px] border border-[#333333] px-[14px] py-[7px]">Drizzle ORM</div>
            <div class="rounded-[25px] border border-[#333333] px-[14px] py-[7px]">
              Xata PostgreSQL
            </div>
            <div class="rounded-[25px] border border-[#333333] px-[14px] py-[7px]">
              Cloudflare Pages
            </div>
            <div class="rounded-[25px] border border-[#333333] px-[14px] py-[7px]">
              Cloudflare Analytics
            </div>
          </div>
        </div>
      </div>
    </div>
  {/if}
</div>
