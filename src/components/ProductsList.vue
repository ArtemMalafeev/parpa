<template>
  <transition-group class="products__list" name="list" tag="ul" appear>
    <li class="products__item" v-for="product in products" :key="product.id">
      <product-list-item :product="product" />
    </li>
  </transition-group>
</template>

<script>
import ProductListItem from '@/components/ProductListItem.vue';

export default {
  name: 'ProductList',

  components: {
    ProductListItem,
  },

  props: {
    products: {
      type: Array,
      requred: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.products__list {
  display: grid;
  gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
}

.list-enter-active {
  transition: all 0.5s ease;
}

.list-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
</style>