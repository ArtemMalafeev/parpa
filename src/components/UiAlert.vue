<template>
  <div class="alert">
    <slot>No data...</slot>
  </div>
</template>

<script>
export default {
  name: 'UiAlert',
};
</script>

<style lang="scss" scoped>
.alert {
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  line-height: 28px;
  color: var(--font-color);
  border: 2px solid var(--gold);
  border-radius: 8px;
  margin: 32px 0;
}
</style>