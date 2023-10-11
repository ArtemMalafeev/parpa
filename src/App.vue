<script>
import AppHeader from '@/components/AppHeader.vue';
import AppFooter from '@/components/AppFooter.vue';

export default {
  name: 'App',

  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<template>
  <div class="page">
    <app-header />
    <main class="main">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in" appear>
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <app-footer />
  </div>
</template>

<style scoped lang="scss">
.page {
  display: grid;
  grid-template-rows: min-content 1fr min-content;
  min-height: 100vh;
  background-image: var(--background-color);
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: all .2s ease-out
}

.fade-leave-to {
  opacity: 0;
}
</style>
