<script lang="ts">
  import { onMount } from 'svelte';
  import { animate } from 'motion';

  let progressBar = $state<HTMLDivElement>();

  onMount(() => {
    // Calculate scroll progress
    const updateProgress = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / docHeight;
      console.log('progress :>> ', progress);
      console.log('progressBar :>> ', progressBar);

      // Animate the progress bar
      animate(
        progressBar,
        {
          transform: `scaleX(${progress})`
          // Add slight spring effect for smoother feel
        },
        {
          duration: 0.2,
          easing: [0.4, 0.0, 0.2, 1]
        }
      );
    };

    // Add scroll listener
    window.addEventListener('scroll', updateProgress);

    // Initial progress
    updateProgress();

    // Cleanup
    return () => {
      window.removeEventListener('scroll', updateProgress);
    };
  });
</script>

<div class="progress-container print:hidden">
  <div bind:this={progressBar} class="progress-bar"></div>
</div>

<style>
  .progress-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    z-index: 9999;
    background-color: #25221e12;
  }

  .progress-bar {
    height: 100%;
    background: #438952;
    transform-origin: 0 50%;
    transform: scaleX(0);
  }
</style>
