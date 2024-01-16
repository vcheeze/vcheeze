<script>
  import '../styles/global.scss';
</script>

<div class="content">
  <slot />
</div>

<style lang="scss">
  @import '../styles/variables.scss';

  .content {
    padding: 6rem;
    margin: 0 auto;
    max-width: 1600px;
  }

  @media screen and (max-width: $breakpoint-xxl) {
    .content {
      max-width: 1380px;
    }
  }

  @media screen and (max-width: $breakpoint-sm) {
    .content {
      padding: 2rem;
    }
  }
</style>
