<script>
  let { children } = $props();
</script>

<svelte:head>
  <title>Peter Chen for Doist!</title>
  <meta
    name="description"
    content="Hire Peter for your Frontend Engineer role! Herer's why he'd be a good fit :)"
  />
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');

    body {
      background-color: #fefdfc;
      color: #25221e;
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
      line-height: 1.6;
      -webkit-font-smoothing: antialiased;
    }
    h1 {
      font-size: clamp(
        2 * 1rem,
        calc((-1 * 30) * calc(2.75 - 2) / calc(70 - 30) + 2) * 1rem + calc(2.75 - 2) /
          calc(70 - 30) * 100vw,
        2.75 * 1rem
      );
      line-height: 1.15;
      font-weight: 600;
    }
    h2 {
      font-size: clamp(
        1.5 * 1rem,
        calc((-1 * 30) * calc(1.9375 - 1.5) / calc(70 - 30) + 1.5) * 1rem + calc(1.9375 - 1.5) /
          calc(70 - 30) * 100vw,
        1.9375 * 1rem
      );
      font-weight: 600;
      line-height: 1.28;
    }
    h3 {
      font-size: clamp(
        1.1875 * 1rem,
        calc((-1 * 30) * calc(1.375 - 1.1875) / calc(70 - 30) + 1.1875) * 1rem +
          calc(1.375 - 1.1875) / calc(70 - 30) * 100vw,
        1.375 * 1rem
      );
      font-weight: 600;
      line-height: 1.28;
    }
    h4,
    p,
    ul {
      font-size: clamp(
        1.0625 * 1rem,
        calc((-1 * 30) * calc(1.125 - 1.0625) / calc(70 - 30) + 1.0625) * 1rem +
          calc(1.125 - 1.0625) / calc(70 - 30) * 100vw,
        1.125 * 1rem
      );
      line-height: 1.75;
    }
    li::marker {
      color: #438952;
      font-size: 1.5em;
      font-weight: 600;
    }
    a {
      color: #0f66ae;
    }
    a:hover {
      text-decoration: underline;
    }

    .font-mono {
      font-family: 'Space Mono', monospace;
    }
    .section p {
      margin-bottom: 23px;
    }
    .contact-info > a {
      font-size: clamp(
        0.875 * 1rem,
        calc((-1 * 30) * calc(0.90625 - 0.875) / calc(70 - 30) + 0.875) * 1rem +
          calc(0.90625 - 0.875) / calc(70 - 30) * 100vw,
        0.90625 * 1rem
      );
      color: #25221ea8;
    }
    .info > p {
      font-size: clamp(
        0.96875 * 1rem,
        calc((-1 * 30) * calc(1 - 0.96875) / calc(70 - 30) + 0.96875) * 1rem + calc(1 - 0.96875) /
          calc(70 - 30) * 100vw,
        1 * 1rem
      );
      letter-spacing: 0.1em;
      line-height: 1.6;
    }
    .technologies {
      font-size: clamp(
        0.75 * 1rem,
        calc((-1 * 30) * calc(0.75 - 0.75) / calc(70 - 30) + 0.75) * 1rem + calc(0.75 - 0.75) /
          calc(70 - 30) * 100vw,
        0.75 * 1rem
      );
    }
    .action {
      font-size: clamp(
        var(--min-font-size) * 1rem,
        var(--intersection) * 1rem + var(--slope) * 100vw,
        var(--max-font-size) * 1rem
      );
    }
  </style>
</svelte:head>

{@render children?.()}
