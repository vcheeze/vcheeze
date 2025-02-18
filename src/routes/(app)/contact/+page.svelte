<script>
  const routes = [
    {
      name: 'Email',
      link: 'mailto:peter.wei.chen212@gmail.com',
      text: 'peter.wei.chen212@gmail.com'
    },
    {
      name: 'GitHub',
      link: 'https://github.com/vcheeze',
      text: 'vcheeze'
    },
    {
      name: 'LinkedIn',
      link: 'https://linkedin.com/in/peterweichen',
      text: 'Peter Chen'
    }
  ];
</script>

<div class="md:p-20">
  <h1 class="mb-6 scroll-m-20 font-serif text-4xl font-extrabold tracking-tight lg:text-5xl">
    Contact Me
  </h1>

  <div class="flex gap-12 max-sm:flex-col">
    <img src="/images/profile.png" alt="Peter Chen's Profile" class="w-full md:max-w-xs" />

    <div class="space-y-4">
      {#each routes as route}
        <div>
          <h4 class="scroll-m-20 text-xl font-semibold tracking-tight">{route.name}</h4>
          <p>
            <a href={route.link} target="_blank" class="hover:text-cyan-11 underline"
              >{route.text}</a
            >
          </p>
        </div>
      {/each}
    </div>
  </div>
</div>
