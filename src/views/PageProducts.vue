<template>
  <ui-container>
    <transition name="fade" mode="out-in">
      <template v-if="products">
        <template v-if="products.length">
          <section class="products">
            <products-list :products="visibledProducts" />
            <button class="products__button" type="button" v-if="isVisibledButton" @click="showMore">
              Показать еще
            </button>
          </section>
        </template>
        <ui-alert v-else>Список товарок пуст...</ui-alert>
      </template>
      <ui-alert v-else>Загрузка...</ui-alert>
    </transition>
  </ui-container>
</template>

<script>
import ProductsList from '@/components/ProductsList.vue';
import UiContainer from '@/components/UiContainer.vue';
import UiAlert from '@/components/UiAlert.vue';
import { fetchProducts } from '@/api.js';


export default {
  name: 'PageProducts',

  components: {
    UiAlert,
    UiContainer,
    ProductsList,
  },

  data() {
    return {
      products: null,
      step: 4,
      productsVisible: 4,
    };
  },

  computed: {
    visibledProducts() {
      return this.products.slice(0, this.productsVisible);
    },

    isVisibledButton() {
      return this.visibledProducts.length < this.products.length
    },
  },

  async mounted() {
    this.products = await fetchProducts();
  },

  methods: {
    showMore() {
      this.productsVisible += this.step;
    },
  },
};
</script>

<style lang="scss" scoped>
.products {
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  height: 100%;
  padding-block: 40px;
}

.products__button {
  display: inline-block;
  width: max-content;
  padding: 15px;
  align-self: center;
  border: none;
  background-color: transparent;
  border-radius: 4px;
  background-color: var(--background-color);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: var(--dark-grey);
  transition: all .2s ease-out;
  cursor: pointer;

  &:hover {
    transform: translateY(2px);
  }
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
