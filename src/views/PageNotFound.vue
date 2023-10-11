<template>
  <ui-container>
    <ui-alert>
      Страница не найдена
    </ui-alert>
  </ui-container>
</template>

<script>
import UiContainer from '@/components/UiContainer.vue';
import UiAlert from '@/components/UiAlert.vue';


export default {
  name: 'PageNotFound',

  components: {
    UiContainer,
    UiAlert,
  },
};
</script>

<style lang="scss" scoped></style>