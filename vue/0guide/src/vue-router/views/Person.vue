<template>
  <div>
    <p>User username = {{ $route.params.username }}</p>
    <p>Post id = {{ $route.params.age }}</p>
  </div>
</template>

<script>
export default {
  watch: {
    // 路由变化信息
    $route(to, from) {
      console.log("to:", to);
      console.log("from:", from);
    }
    // 添加路由守卫
    // ...
  }
};
</script>

<style>
</style>