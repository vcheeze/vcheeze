<script lang="ts">
  interface Props {
    title: string;
    subTitle: string;
    description: string;
    projects: Array<{
    title: string;
    link?: string;
    description: string;
    role?: string;
    technologies?: Array<{ type: string; details: string }>;
  }>;
  }

  let {
    title,
    subTitle,
    description,
    projects
  }: Props = $props();
</script>

<div class="experienceItem">
  <h3 class="experienceItem-title">
    {title}
  </h3>
  <p class="experienceItem-subTitle">{subTitle}</p>
  <p>{description}</p>
  {#if projects.length > 0}
    <p>My key projects include:</p>
    {#each projects as project}
      <div class="project">
        <h4 class="project-title">
          {#if project.link}
            <a href="https://www.tamm.abudhabi/" target="_blank">{project.title}</a>
          {:else}
            {project.title}
          {/if}
        </h4>
        <p class="project-description">
          {project.description}
        </p>
        {#if project.role}
          <h5>My Role</h5>
          <p>
            {project.role}
          </p>
        {/if}
        {#if project.technologies}
          <h5>Technologies Used</h5>
          <ul>
            {#each project.technologies as tech}
              <li><strong>{tech.type}</strong>{tech.details}</li>
            {/each}
          </ul>
        {/if}
      </div>
    {/each}
  {/if}
</div>

<style lang="scss">
  .experienceItem {
    margin-bottom: 4rem;
    // &::before {
    //   content: '';
    //   display: block;
    //   height: 1rem;
    //   border-top: 2px solid #333333;
    // }
    &-title {
      margin-bottom: 0.5rem;
    }
    &-subTitle {
      margin-bottom: 0.75rem;
      font-style: italic;
    }
  }
</style>
