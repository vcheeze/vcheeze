<script>
  let { children } = $props();
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

{@render children?.()}
