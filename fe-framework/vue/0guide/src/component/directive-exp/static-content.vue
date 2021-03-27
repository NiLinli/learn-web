<template>
  <div>
    <h4>Terms of Service</h4>
    <p>... 大量的静态内容 ...</p>
    <p>... 没有必要每次都渲染 只用 this._update(this._render) 一次即可 ...</p>
    <p>... a lot of static content ...</p>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this);
  },
};
</script>

<style></style>
