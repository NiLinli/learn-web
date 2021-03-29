<template>
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'base-layout',
  mounted() {
    // 存放父组件编译好的 vnode
    console.log(this.$slots)
  }
};
</script>

<style>
</style>