<template>
  <div>
    <duck sex="female" v-bind="$attrs" />
  </div>
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


// 未定义的 prop 被认作普通 dom attr 放入 $attrs
// 并且继承到根 dom 元素上面 => inheritAttrs 改变这一行为
// class/style 不受上面两条影响
export default {
  inheritAttrs: false,
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
