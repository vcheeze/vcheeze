<script>
  import '../styles/global.scss';
</script>

<div class="content">
  <slot></slot>
</div>

<style lang="scss">
  @import '../styles/variables.scss';

  .content {
    padding: 6rem;
  }

  @media screen and (max-width: $breakpoint-sm) {
    .content {
      padding: 2rem;
    }
  }
</style>
