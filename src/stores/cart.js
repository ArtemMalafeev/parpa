import { defineStore } from 'pinia';

export const useCartStore = defineStore("cart", {
  state: () => ({ 
    cartProducts: [], 
  }),

  actions: {
    addProduct(product) {
      const hasProduct = this.cartProducts
        .find((currentProduct) => currentProduct.id === product.id);

      if (!hasProduct) {
        this.cartProducts.push(product);
      }
    },

    removeProduct(product) {
      this.cartProducts = this.cartProducts
        .filter((currentProduct) => currentProduct.id !== product.id);
    },
  },
});