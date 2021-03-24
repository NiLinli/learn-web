<template>
  <div>
    <div v-bind:class="{ active: isActive }"></div>
    <div class="static" v-bind:class="{ active: isActive, 'text-danger': hasError }">123</div>
    <div v-bind:class="classObject">123</div>
    <div v-bind:class="classObjectCompute">123</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
      hasError: false,
      // 初始化放入
      classObject: {
        active: false,
        'text-danger': true,
      },
    };
  },
  computed: {
    // 动态放入 computed
    classObjectCompute() {
      return {
        active: this.isActive && !this.error,
        'text-danger': this.error
      };
    },
  },
};
</script>

<style>
.active {
  text-decoration: black;
}

.text-danger {
  color: red;
}
</style>
