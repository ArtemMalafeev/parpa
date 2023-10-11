<template>
  <article class="card">
    <div class="card__image card__image--empty"></div>
    <div class="card__inner">
      <div class="card__description">
        <h2 class="card__title">
          {{ product.title }}
        </h2>
        <p class="card__category">
          Категория
        </p>
      </div>
      <div class="card__buy">
        <p class="card__price">
          {{ formatPrice(product.price) }}
        </p>
        <button class="card__button" type="button" @click="removeProduct(product)">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="19.2846" height="1.92846" rx="0.96423"
              transform="matrix(0.707104 0.707109 -0.707104 0.707109 1.36353 0)" fill="#333333" />
            <rect width="19.2846" height="1.92846" rx="0.96423"
              transform="matrix(0.707104 -0.707109 0.707104 0.707109 0 13.6365)" fill="#333333" />
          </svg>
        </button>
      </div>
    </div>
  </article>
</template>

<script>
import { mapActions } from 'pinia';
import { useCartStore } from '@/stores/cart';

const formatOptions = new Intl.NumberFormat('ru-RU', {
  minimumFractionDigits: 0,
  style: "currency",
  currency: "RUB",
});

export default {
  name: 'CartListItem',

  formatOptions,

  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  methods: {
    ...mapActions(useCartStore, ['removeProduct']),

    formatPrice(value) {
      return this.$options.formatOptions.format(value)
    },
  }
};
</script>

<style lang="scss" scoped>
.card {
  position: relative;
  display: grid;
  grid-template-columns: 200px 1fr;
  max-height: 200px;
  box-shadow: 4px 4px 10px 0px rgba(0, 0, 0, 0.20);
}

.card__image {
  max-width: 200px;
  max-height: 200px;
  min-height: 200px;
  background-color: var(--background-color-grey);

  &--empty {
    background-image: url('@/assets/camera.png');
    background-repeat: no-repeat;
    background-position: center;
  }
}

.card__image img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card__inner {
  display: flex;
  background-color: transparent;
  flex-direction: column;
  row-gap: 66px;
  padding: 20px;
}

.card__description {
  display: flex;
  flex-direction: column;
  row-gap: 2px;
}

.card__title {
  margin: 0;
  font-weight: 400;
}

.card__category {
  opacity: .5;
}

.card__buy {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card__price {
  font-size: var(--normal-font-size);
}

.card__button {
  position: absolute;
  top: 20px;
  right: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.card__button-icon {
  fill: var(--gold);
  transition: fill 0.2s ease-out;

  &:hover {
    fill: var(--black);
  }
}

.card__button svg {
  display: block;
}
</style>