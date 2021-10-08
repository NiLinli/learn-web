<template>
  <h3>{{ title }}</h3>
  <input type="text" v-model="inputValue" @change="onInputChange" />
</template>

<script>
// v-model
// model 配置 => 变成了 .sync 模式
// v-model:prop 添加参数可支持多个 prop 绑定
// .sync 模式没必要了
export default {
  name: 'Book',
  props: ['title'],
  emits: ['update:title'],
  data() {
    return {
      inputValue: ''
    };
  },
  methods: {
    onInputChange() {
      this.$emit('update:title', this.inputValue);
    }
  }
}
</script>

<style>
</style>