<template>
  <div>
    <div id="foo" :class="[isBig ? 'big' : 'small']"></div>
    <el-button @click="onChangeStyle">change style</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isBig: false,
    };
  },
  mounted() {
    const foo = document.getElementById('foo');
    alert(foo.clientHeight);
  },
  methods: {
    onChangeStyle() {
      this.isBig = !this.isBig;

      // this.$nextTick().then(() => {

      // });

      setTimeout(() => {
        const foo = document.getElementById('foo');
        alert(foo.clientHeight);
      }, 0);
    },
  },
};
</script>

<style>
#foo {
  border: 1px solid #000;
}

.small {
  width: 100px;
  height: 100px;
}

.big {
  width: 200px;
  height: 200px;
}
</style>
