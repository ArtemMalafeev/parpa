<template>
  <div class="footer">
    <ui-container>
      <p class="footer__author">Artem Malafeev</p>
    </ui-container>
  </div>
</template>

<script>
import UiContainer from '@/components/UiContainer.vue';

export default {
  name: 'PageFooter',

  components: {
    UiContainer,
  },
};
</script>

<style lang="scss" scoped>
.footer {
  padding-block: 20px;
  text-align: center;
  background-color: var(--background-color-black);
  color: var(--font-color-white)
}
</style>
