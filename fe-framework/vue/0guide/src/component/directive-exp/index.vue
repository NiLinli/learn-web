<template>
  <el-tabs type="border-card">
    <el-tab-pane label="模版指令" lazy>
      <template-directive></template-directive>
    </el-tab-pane>
    <el-tab-pane label="自定义指令" lazy>
      
    </el-tab-pane>
    <el-tab-pane label="Dom Event" lazy>
      
    </el-tab-pane>
  </el-tabs>
</template>

<script>

// 指令: 响应式地作用于 (给其添加一些 props/event/...) Component/DOM
import TemplateDirective from './template-directive';

export default {
  components: {
    TemplateDirective
  }
};
</script>

<style></style>
