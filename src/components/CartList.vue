<template>
  <transition-group class="cart__list" name="cart" tag="ul" appear>
    <li class="cart__item" v-for="product in products" :key="product.id">
      <cart-list-item :product="product" />
    </li>
  </transition-group>
</template>

<script>
import CartListItem from '@/components/CartListItem.vue';

export default {
  name: 'CartList',

  components: {
    CartListItem,
  },

  props: {
    products: {
      type: Array,
      required: true,
    }
  },
};
</script>

<style lang="scss" scoped>
.cart__list {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
}


.cart-up-move,
.cart-enter-active,
.cart-leave-active {
  transition: all .5s ease;
}

.cart-enter-from,
.cart-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}
</style>