<template>
  <duck sex="female" v-bind="$attrs"  />
</template>


<script>
import Duck from './duck';

// $attr 收集了 option prop 未定义的属性
// extractPropsFromVNodeData (
//   data: VNodeData,
//   Ctor: Class<Component>,
//   tag?: string
// )

// ...
// ...

//   const propOptions = Ctor.options.props
//   遍历 propOptions
//   for (const key in propOptions) {}

// ...
// ...

// 将 VNodeData 中的 attr 值解析到 prop, 并删除 attr 上面的值
// res[key] = hash[key]
// if (!preserve) {
//   delete hash[key]
// }
// return true
export default {
  props: ['age'],
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
