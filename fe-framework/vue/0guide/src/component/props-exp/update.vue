<template>
  <div>
    <p>prop bar: {{ bar }}</p>
    <p>data foo: {{ foo }}</p>
  </div>
</template>

<script>
export default {
  props: {
    bar: String,
  },
  data() {
    return {
      foo: 'foo',
    };
  },
  beforeUpdate() {
    console.log('sub update component beforeUpdate');
  },
  updated() {
    console.log('sub update component updated');
  },
};
</script>

<style></style>
