<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <li class="navigation__item">
        <router-link class="navigation__link" active-class="navigation__link--active" :to="{ name: 'index' }">
          Главная
        </router-link>
      </li>
      <li class="navigation__item">
        <router-link class="navigation__link" active-class="navigation__link--active" :to="{ name: 'cart' }">
          Корзина
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'AppNavigation',
};
</script>

<style lang="scss" scoped>
.navigation {
  font-size: var(--small-font-size);
}

.navigation__list {
  display: flex;
  column-gap: 24px;
}

.navigation__link {
  color: var(--font-color);
  transition: all .5s ease-out;

  &--active,
  &:hover {
    color: var(--active-color);
  }
}
</style>