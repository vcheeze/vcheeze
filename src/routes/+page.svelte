<script>
  import Collapsible from './Collapsible.svelte';
</script>

<div class="intro">
  <h1>Hello, I'm Peter.</h1>
  <p>
    I am a fullstack software engineer, working my way from the corporate world into the product and
    open source world.
  </p>
</div>

<section class="experience">
  <h2>Experience</h2>
  <div class="experienceItem">
    <h3 class="experienceItem-title">
      Lead Software Engineer @ <a href="https://www.pwc.com/m1/en.html" target="_blank"
        >PwC Middle East</a
      >
    </h3>
    <p class="experienceItem-subTitle">November 2018 - Present | Dubai, UAE / Remote</p>
    <p>
      I specialize in digital transformation. Besides the notable projects that I will go into
      detail below, I also built and pitched several demos to entities such as the UAE Federal Tax
      Authority, Abu Dhabi Digital Authority, Emirates NBD (National Bank of Dubai), the Qatar Free
      Zone Authority, etc. These mainly included customized CRM and BPM solutions built on top of
      Microsoft Dynamics 365.
    </p>
    <p>My key projects include:</p>
    <div class="project">
      <h4 class="project-title"><a href="https://www.tamm.abudhabi/" target="_blank">TAMM</a></h4>
      <p class="project-description">
        A unified platform for Abu Dhabi governmental services and information.
      </p>
      <h5>My Role</h5>
      <p>
        Over a span of 4 years, I was a technical lead for 3. My work included migrating services
        from government entities, building microservices, extending the database management layer,
        contributing to the design language system, handling L3 incidents, developing core enablers,
        while leading teams of developers and working with PMs, BAs, and QAs to liase with the Abu
        Dhabi Digital Authority and other Abu Dhabi government entities to deliver quality digital
        services to the Abu Dhabi public.
      </p>
      <h5>Technologies Used</h5>
      <ul>
        <li>
          <strong>Frameworks/Libraries</strong>: React, Redux, Less, Jest, Enzyme, Node, Express,
          TypeScript
        </li>
        <li><strong>Database</strong>: GraphQL, Apollo, MariaDB</li>
        <li><strong>Methodologies</strong>: Microservices, TDD, BDD</li>
        <li><strong>Tools</strong>: Git, GitLab, Kibana, Jira, Confluence, Service Now, Slack</li>
      </ul>
      <Collapsible triggerLabel="TLDR" />
    </div>
    <div class="project">
      <h4 class="project-title">Project Health Check</h4>
      <p class="project-description">
        A feedback platform that regularly asks employees for honest, anonymous input on how they
        feel about the quality of their projects, management, and leadership.
      </p>
      <h5>My Role</h5>
      <p>
        We built this project on top of Dynamics 365 using custom code and plugins. We essentially
        have regular jobs running on a PwC-provisioned Windows VM that queries employee data, such
        as basic personal profile, email, and the projects on which they have been working. These
        pieces of data are retrieved from various sources, so we process and consolidate the
        information we retrieve, run it through some rules to determine which employees will receive
        surveys and for which projects, then utilize Dynamics 365 to configure, send, and track the
        surveys.
      </p>
      <h5>Technologies Used</h5>
      <ul>
        <li>Frameworks/Libraries: .NET, C#, Dynamics 365, PowerSurveyPlus</li>
        <li>Tools: Visual Studio, Azure DevOps</li>
      </ul>
    </div>
    <div class="project">
      <h4 class="project-title">PGen (Proposal Generator)</h4>
      <p class="project-description">
        A web app that generates PowerPoint templates for PwC proposals that contain standardized
        branding and content for easy reuse.
      </p>
      <h5>My Role</h5>
      <p>
        I was the sole developer of the alpha version of this product, tasked with the daunting (at
        the time) task of building a product that can manipulate and combine PowerPoint files. Being
        much more comfortable with Node.js than other backend languages, I had to upskill my .NET
        knowledge within a few days and find a third party plugin (<a href="https://www.aspose.com/"
          >Aspose</a
        >) that met our requirements. Since I was learning new things anyway, I chose to build the
        app in Vue.js to familiarize myself with what seemed at the time the most promising
        contender to Angular and React. What I thought was just going to be an MVP was later rolled
        out across all business units in the Consulting line of service in PwC Middle East, meaning
        it is now used by more than 10,000 employees.
      </p>
      <h5>Technologies Used</h5>
      <ul>
        <li>Frameworks/Libraries: Vue, Vuetify, Matomo, SCSS, .NET Framework, C#, Aspose.Slides</li>
        <li>Tools: Git, Azure DevOps, IIS</li>
      </ul>
    </div>
  </div>
  <div class="experienceItem">
    <h3 class="experienceItem-title">
      Freelance Architect and Developer @ <a href="https://gopherwoodclinic.org/" target="_blank"
        >Gopher Wood Clinic</a
      >
    </h3>
    <p class="experienceItem-subTitle">January 2020 - Present | Remote</p>
    <h5>My Role</h5>
    <p>
      I designed, architected, and built the website for Gopher Wood Clinic in Hsinchu, Taiwan. This
      is my first fully remote freelance project that I have built from start to finish, handling
      everything from design, solution and software architecture, software development, devOps, and
      hosting.
    </p>
    <p>
      The first iteration of the app was built on Svelte and Sapper, and when it was clear that the
      Svelte team was moving away from Sapper to build SvelteKit, I rewrote the entire app with
      Remix and React.
    </p>
    <h5>Technologies Used</h5>
    <ul>
      <li>
        Frameworks/Libraries: React, Remix, TailwindCSS, TypeScript, Node.js, Svelte, Sapper,
        Tachyons, Rollup, Keycloak, Nginx, PM2
      </li>
      <li><strong>Database</strong>: CockroachDB, MariaDB</li>
      <li>Tools: Git, GitHub, Fly.io, Hostinger VPS, Docker</li>
    </ul>
  </div>
  <div class="experienceItem">
    <h3 class="experienceItem-title">Freelance Developer @ Oren IT Solutions</h3>
    <p class="experienceItem-subTitle">April 2021 - Present | Remote</p>
    <div class="project">
      <h4><a href="https://factarray.co.uk/" target="_blank">Factarray</a></h4>
      <p class="project-description">
        A health platform focusing on more accurate diagnosis of Giant Cell Arteritis in potential
        patients.
      </p>
      <h5>My Role</h5>
      <p>
        I took over this project when its maintainer was unable to devote further time to it. Having
        built the app on Meteor.js, he gave me a 30-minute crash course on it and some resources,
        with which I promptly started adding a new feature that automates a questionnaire process
        and outputs a diagnosis.
      </p>
      <h5>Technologies Used</h5>
      <ul>
        <li>Frameworks/Libraries: Meteor.js, Node.js</li>
        <li>Tools: Git, GitLab</li>
      </ul>
    </div>
  </div>
</section>

<style lang="scss">
  @import '../styles/variables.scss';

  p {
    margin-bottom: 0.5rem;
  }
  .intro {
    margin: 10rem;
    & > h1 {
      margin-bottom: 1rem;
    }
    & > p {
      font-weight: normal;
      font-size: 1.25rem;
    }
  }

  .experience {
    margin: 10rem 10rem 6rem 10rem;
    max-width: 768px;
    & > h2 {
      margin-bottom: 2rem;
    }
    &Item {
      margin-bottom: 4rem;
      &::before {
        content: '';
        display: block;
        height: 1rem;
        border-top: 2px solid #333333;
      }
      &-title {
        margin-bottom: 0.5rem;
      }
      &-subTitle {
        margin-bottom: 0.75rem;
        font-style: italic;
      }
    }
  }

  .project {
    margin: 1.5rem 0;

    &-title {
      margin-bottom: 0.5rem;
    }

    &-description {
      margin-bottom: 0.5rem;
    }
    & > h5 {
      margin-bottom: 0.25rem;
    }
  }

  @media screen and (max-width: $breakpoint-sm) {
    .intro {
      margin: 4rem 2rem;
    }
    .experience {
      margin: 2rem;
    }
  }
</style>
