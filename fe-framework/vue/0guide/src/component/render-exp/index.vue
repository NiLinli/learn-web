<template>
  <el-tabs type="border-card">
    <el-tab-pane label="template or render function" lazy>
      <r-anchored-heading :level="2">render function 是 template 经过编译后的产物, 直接写 render function 更为灵活 </r-anchored-heading>
      <t-anchored-heading :level="3">template 优点: 有很多语法糖</t-anchored-heading>
    </el-tab-pane>
    <el-tab-pane label="VNodeData" lazy>
      <p>template compiler 生成 Vnode data, 格式化处理后, 传入 createElement, render function 需要手动处理， 并且需要手动实现编译阶段完成的语法糖(少量语法糖提供了 runtime 阶段 hack)</p>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import RAnchoredHeading from './render-anchored-heading';
import TAnchoredHeading from './template-anchored-heading';

export default {
  components: {
    RAnchoredHeading,
    TAnchoredHeading,
  },
};
</script>

<style></style>
