<template>
  <button>My Button</button>
</template>

<script>
export default {
  data() {
    return {};
  },
  // 未定义在 emits 里面的事件
  // 添加到 $attrs- 然后 $attrs 默认绑定在根结点上面
  // 不声明 emits 等同于 .native 修饰
  emits: ['close']
}
</script>

<style>
</style>