<template>
  <div>{{ initialCounter }}</div>
</template>

<script>
// props 作为初始值
export default {
  props: ['initialCounter'],
  data: function() {
    return {
      counter: this.initialCounter,
    };
  },
};
</script>

<style></style>
