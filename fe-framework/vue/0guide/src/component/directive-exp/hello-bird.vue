<template>
  <div>
    <div>I'm a {{ color }} bird, {{ age }} years old</div>
    <div>{{ log }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      age: 1,
      color: 'blue',
      log: '',
    };
  },

  methods: {
    transfromColor(color) {
      this.color = color;
    },
  },
};
</script>

<style></style>
