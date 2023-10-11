<template>
  <ui-container>
    <transition name="fade" mode="out-in">
      <template v-if="cartProducts.length">
        <section class="cart">
          <cart-list :products="cartProducts" />
        </section>
      </template>
      <ui-alert v-else>Корзина пуста</ui-alert>
    </transition>
  </ui-container>
</template>

<script>
import UiAlert from '@/components/UiAlert.vue';
import UiContainer from '@/components/UiContainer.vue';
import CartList from '@/components/Cartlist.vue';
import { useCartStore } from '@/stores/cart';
import { mapState } from 'pinia';

export default {
  name: 'PageCart',

  components: {
    UiAlert,
    UiContainer,
    CartList,
  },

  computed: {
    ...mapState(useCartStore, ['cartProducts']),
  }
};
</script>

<style lang="scss" scoped>
.cart {
  padding-block: 40px;
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