<template>
  <header class="header">
    <ui-container>
      <div class="header__inner">
        <app-logo />
        <app-navigation />
      </div>
    </ui-container>
  </header>
</template>

<script>
import AppNavigation from '@/components/AppNavigation.vue';
import AppLogo from '@/components/AppLogo.vue';
import UiContainer from '@/components/UiContainer.vue';

export default {
  name: 'AppHeader',

  components: {
    AppNavigation,
    AppLogo,
    UiContainer,
  },
};
</script>

<style lang="scss" scoped>
.header {
  padding-block: 20px;
  background-color: var(--background-color);
}

.header__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
