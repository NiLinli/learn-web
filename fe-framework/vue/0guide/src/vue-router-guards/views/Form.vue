<template>
  <div>
    <input type="text" />
    <p>表单填了没回退没保存 需要提醒</p>
  </div>
</template>

<script>
export default {
  // 路由加载
  // 初始化
  // VueComponent 未实例, this 无法访问
  beforeRouteEnter(to, from, next) {
    console.log('form beforeRouteEnter', to, from);
    next();

    // 可以通过 cb 访问 this
    // next(vm => vm)
  },
  // 路由复用
  // 参数变化
  // this 可以访问
  beforeRouteUpdate(to, from, next) {
    console.log('form beforeRouteUpdate', to, from);
    next();
  },
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