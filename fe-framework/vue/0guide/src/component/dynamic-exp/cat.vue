<template>
  <div>a cat, {{ age }}</div>
</template>

<script>
export default {
  props: ['age'],
  created() {
    this.$emit('sleep');
  },
};
</script>

<style></style>
