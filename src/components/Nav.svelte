<script>
  export let segment;
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(22, 160, 133, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  .selected {
    position: relative;
    display: inline-block;
  }

  .selected::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: rgb(22, 160, 133);
    display: block;
    bottom: -1px;
  }

  a {
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
</style>

<nav>
  <ul>
    <li>
      <a class={segment === undefined ? 'selected' : ''} href=".">home</a>
    </li>

    <!-- for the projects link, we're using rel=prefetch so that Sapper prefetches
		     the project data when we hover over the link or tap it on a touchscreen -->
    <li>
      <a
        rel="prefetch"
        class={segment === 'projects' ? 'selected' : ''}
        href="projects">
        projects
      </a>
    </li>

    <li>
      <a class={segment === 'about' ? 'selected' : ''} href="about">about</a>
    </li>
  </ul>
</nav>
