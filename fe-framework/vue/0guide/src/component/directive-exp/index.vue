<template>
  <el-tabs type="border-card">
    <el-tab-pane label="自定义指令" lazy>
      <custom-directive></custom-directive>
    </el-tab-pane>
    <el-tab-pane label="模版指令" lazy>
      <template-directive></template-directive>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
// 指令: 响应式地作用于 (给其添加一些 props/event/...) Component/DOM
// 编译阶段除去生成 render function外, 内置的部分指令动态改变 props/event 等等
// 运行阶段 render/update vdom => DOM 阶段
import TemplateDirective from './template-directive';
import CustomDirective from './custom-directive';

export default {
  components: {
    TemplateDirective,
    CustomDirective,
  },
};
</script>

<style></style>
