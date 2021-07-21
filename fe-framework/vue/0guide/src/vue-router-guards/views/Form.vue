<template>
  <div>
    <input type="text" />
    <p>表单填了没回退没保存 需要提醒</p>
  </div>
</template>

<script>
export default {
  // 路由离开拦截
  beforeRouteLeave(to, from, next) {
    console.log('form beforeRouteLeave', to, from, history.length);
    const answer = window.confirm('Do you really want to leave? you have unsaved changes!');
    answer ? next() : next(false);
  }
}
</script>

<style>
</style>