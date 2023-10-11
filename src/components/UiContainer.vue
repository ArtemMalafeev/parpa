<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'UiContainer',
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 1440px;
  height: 100%;
  margin-inline: 1rem;

  @media screen and (min-width: 1440px) {
    margin-inline: auto;
  }
}
</style>