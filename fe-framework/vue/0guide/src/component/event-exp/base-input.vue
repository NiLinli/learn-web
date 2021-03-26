<template>
  <div class="input-wrapper">
    <label for="">{{ label }}</label>
    <input type="text" v-on="inputListeners" />
  </div>
</template>

<script>
export default {
  props: ['label'],
  computed: {
    inputListeners() {
      return {
        ...this.$listeners,
        // 改写 input 事件, 确保 v-model 可以使用
        input: (ev) => {
          this.$emit('input', ev.target.value);
        },
      };
    },
  },
};
</script>

<style></style>
