<template>
  <duck sex="female" v-bind="$attrs"  />
</template>


<script>
import Duck from './duck';

// $attr 收集了 option prop 为定义的属性
export default {
  components: {
    Duck,
  },
  mounted() {
    console.log(this.$attrs === this.$vnode.data.attrs);
    console.log(this.$attrs);
  }
};
</script>

<style></style>
