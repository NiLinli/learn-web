<template>
  <div>a dog, {{ age }}</div>
</template>

<script>
export default {
  props: ['age'],
  created() {
    this.$emit('eat');
  },
};
</script>

<style></style>
