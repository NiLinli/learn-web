<template>
  <div>
    <keep-alive :include="include">
      <router-view v-if="keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!keepAlive"></router-view>
  </div>
</template>

<script>

// keep-alive 会 watch include 和 exclude
// include/exclude => pruneCache 清楚不在范围内的 cache


// 可用 store 在不同时机操作 include
// routeName 和 componentName 相同

export default {
  data() {
    return {
      include: []
    };
  },
  computed: {
    keepAlive() {
      return this.$route.meta.keepAlive;
    }
  },
  watch: {
    $route(to, from) {
      // include fail
      // include 用于添加 to 缓存
      // $route 变化在导航完成之后, include 已经应用
      // exclude ok
      // exclude 用于删除 from 缓存
      const findIndex = this.include.findIndex((item) => item === from.name);
      if (from.name === 'Index' && to.name === 'Form') {
        findIndex === -1 && this.include.push(from.name);
      } else {
        const findIndex = this.include.findIndex((item) => item === from.name);
        findIndex !== -1 && this.include.splice(findIndex, 1);
      }
    }
  }
};
</script>

<style>
</style>