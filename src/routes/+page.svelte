<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';

  let visible = false;
  onMount(() => {
    visible = true;
  });
</script>

<svelte:head>
  <title>Peter Chen - Home</title>
  <meta
    name="description"
    content="Peter Chen, passionate problem-solver, lead software engineer"
  />
  <meta
    name="keywords"
    content="Peter, Peter Chen, Chen, software, software engineer, manager, web, web developer, fullstack, frontend"
  />
</svelte:head>

{#if visible}
  <div class="py-40 md:py-40">
    <h1
      class="mb-4 scroll-m-20 font-serif text-4xl font-extrabold tracking-tight lg:text-5xl"
      in:fade={{ delay: 250, duration: 750 }}
    >
      Hello, I'm Peter.
    </h1>
    <p class="text-xl font-normal" in:fade={{ delay: 750, duration: 750 }}>
      I am a fullstack software engineer, working my way from the corporate world into the product
      and open source world.
    </p>
  </div>

  <section class="py-40 md:py-24" in:fade={{ delay: 1500, duration: 750 }}>
    <h2
      class="border-border mb-8 scroll-m-20 border-b pb-2 font-serif text-3xl font-semibold tracking-tight transition-colors first:mt-0"
    >
      Experience
    </h2>

    <div class="mb-16 border-t-2 border-current pt-4">
      <h3 class="mb-2 text-2xl font-bold">
        Lead Software Engineer | Manager @ <a
          href="https://www.pwc.com/m1/en.html"
          target="_blank"
          class="text-cyan-11 dark:text-cyandark-11 hover:underline">PwC Middle East</a
        >
      </h3>
      <p class="mb-3 italic">November 2018 - Present | Dubai, UAE / Remote</p>
      <p class="mb-4">
        I specialize in digital transformation. Besides the notable projects that I will go into
        detail below, I also built and pitched several demos to entities such as the UAE Federal Tax
        Authority, Abu Dhabi Digital Authority, Emirates NBD (National Bank of Dubai), the Qatar
        Free Zone Authority, etc. These mainly included customized CRM and BPM solutions built on
        top of Microsoft Dynamics 365.
      </p>
      <p class="mb-4">My key projects include:</p>

      <div class="my-6">
        <h4 class="mb-2 text-xl font-bold">
          <a
            href="https://www.tamm.abudhabi/"
            target="_blank"
            class="text-cyan-11 dark:text-cyandark-11 hover:underline">TAMM</a
          >
        </h4>
        <p class="mb-2">A unified platform for Abu Dhabi governmental services and information.</p>
        <h5 class="mb-1 text-lg font-bold">My Role</h5>
        <p class="mb-4">
          Over a span of 4 years, I was a technical lead for 3. My work included migrating services
          from government entities, building microservices, extending the database management layer,
          contributing to the design language system, handling L3 incidents, developing core
          enablers, while leading teams of developers and working with PMs, BAs, and QAs to liase
          with the Abu Dhabi Digital Authority and other Abu Dhabi government entities to deliver
          quality digital services to the Abu Dhabi public.
        </p>
        <h5 class="mb-1 text-lg font-bold">Technologies Used</h5>
        <ul class="list-disc pl-5">
          <li class="mb-2">
            <strong>Frameworks/Libraries</strong>: React, Redux, Less, Jest, Enzyme, Node, Express,
            TypeScript
          </li>
          <li class="mb-2"><strong>Database</strong>: GraphQL, Apollo, MariaDB</li>
          <li class="mb-2"><strong>Methodologies</strong>: Microservices, TDD, BDD</li>
          <li class="mb-2">
            <strong>Tools</strong>: Git, GitLab, Kibana, Jira, Confluence, Service Now, Slack
          </li>
        </ul>
      </div>

      <div class="my-6">
        <h4 class="mb-2 text-xl font-bold">Project Health Check</h4>
        <p class="mb-2">
          A feedback platform that regularly asks employees for honest, anonymous input on how they
          feel about the quality of their projects, management, and leadership.
        </p>
        <h5 class="mb-1 text-lg font-bold">My Role</h5>
        <p class="mb-4">
          We built this project on top of Dynamics 365 using custom code and plugins. We essentially
          have regular jobs running on a PwC-provisioned Windows VM that queries employee data, such
          as basic personal profile, email, and the projects on which they have been working. These
          pieces of data are retrieved from various sources, so we process and consolidate the
          information we retrieve, run it through some rules to determine which employees will
          receive surveys and for which projects, then utilize Dynamics 365 to configure, send, and
          track the surveys.
        </p>
        <h5 class="mb-1 text-lg font-bold">Technologies Used</h5>
        <ul class="list-disc pl-5">
          <li class="mb-2">
            <strong>Frameworks/Libraries</strong>: .NET, C#, Dynamics 365, PowerSurveyPlus
          </li>
          <li class="mb-2"><strong>Tools</strong>: Visual Studio, Azure DevOps</li>
        </ul>
      </div>
    </div>

    <div class="mb-16 border-t-2 border-current pt-4">
      <h3 class="mb-2 text-2xl font-bold">
        Freelance Architect and Developer @ <a
          href="https://gopherwoodclinic.org/"
          target="_blank"
          class="text-cyan-11 dark:text-cyandark-11 hover:underline">Gopher Wood Clinic</a
        >
      </h3>
      <p class="mb-3 italic">January 2020 - Present | Remote</p>
      <h5 class="mb-1 text-lg font-bold">My Role</h5>
      <p class="mb-4">
        I designed, architected, and built the website for Gopher Wood Clinic in Hsinchu, Taiwan.
        This is my first fully remote freelance project that I have built from start to finish,
        handling everything from design, solution and software architecture, software development,
        devOps, and hosting.
      </p>
      <h5 class="mb-1 text-lg font-bold">Technologies Used</h5>
      <ul class="list-disc pl-5">
        <li class="mb-2">
          <strong>Frameworks/Libraries</strong>: React, Remix, TailwindCSS, TypeScript, Node.js,
          Svelte, Sapper, Tachyons, Rollup, Keycloak, Nginx, PM2
        </li>
        <li class="mb-2"><strong>Database</strong>: CockroachDB, MariaDB</li>
        <li class="mb-2"><strong>Tools</strong>: Git, GitHub, Fly.io, Hostinger VPS, Docker</li>
      </ul>
    </div>

    <div class="mb-16 border-t-2 border-current pt-4">
      <h3 class="mb-2 text-2xl font-bold">Freelance Developer @ Oren IT Solutions</h3>
      <p class="mb-3 italic">April 2021 - Present | Remote</p>
      <div class="my-6">
        <h4 class="mb-2 text-xl font-bold">
          <a
            href="https://factarray.co.uk/"
            target="_blank"
            class="text-cyan-11 dark:text-cyandark-11 hover:underline">Factarray</a
          >
        </h4>
        <p class="mb-2">
          A health platform focusing on more accurate diagnosis of Giant Cell Arteritis in potential
          patients.
        </p>
        <h5 class="mb-1 text-lg font-bold">My Role</h5>
        <p class="mb-4">
          I took over this project when its maintainer was unable to devote further time to it.
          Having built the app on Meteor.js, he gave me a 30-minute crash course on it and some
          resources, with which I promptly started adding a new feature that automates a
          questionnaire process and outputs a diagnosis.
        </p>
        <h5 class="mb-1 text-lg font-bold">Technologies Used</h5>
        <ul class="list-disc pl-5">
          <li class="mb-2"><strong>Frameworks/Libraries</strong>: Meteor.js, Node.js</li>
          <li class="mb-2"><strong>Tools</strong>: Git, GitLab</li>
        </ul>
      </div>
    </div>
  </section>
{/if}
