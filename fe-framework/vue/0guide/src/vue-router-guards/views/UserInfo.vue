<template>
  <div>
    <div>个人中心</div>
    <router-link to="/user?name=123">更新用户信息</router-link>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(from, to, next) {
    console.log('beforeRouteEnter');
    next();
  }, 
  beforeRouteUpdate(from, to, next) {
    console.log('beforeRouteUpdate');
    next();
  }
}
</script>

<style>
</style>