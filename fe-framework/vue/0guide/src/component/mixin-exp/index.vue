<template>
  <div>{{ mixinData }}</div>
</template>

<script>
import mixin from './mixin';
// 顺序: 组件内部 > 局部 > 全局
// 可自定义合并策略 是合并成数组还是对象, 并不是合并顺序
export default {
  mixins: [mixin],
  data() {
    return {
      mixinData: '0.0',
    };
  },
  created() {
    console.log('组件内部的钩子被调用');
    // Vue.options
    // Vue.extendOptions
    // Vue.extendOptions.mixin 数组定义的 options
    // 合并称为 vm.$options
    // 然后用合并完成的 $options 实例化组件
    console.log(this.$options);
  },
  methods: {
    sayHello() {
      console.log('component method');
    },
  },
};
</script>

<style></style>
