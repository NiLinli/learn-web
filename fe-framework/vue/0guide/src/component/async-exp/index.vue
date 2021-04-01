<template>
  <el-tabs type="border-card">
    <el-tab-pane label="异步组件" lazy>
      <async></async>
    </el-tab-pane>
    <el-tab-pane label="webpack + ajax" lazy>
      <webpack-ajax></webpack-ajax>
    </el-tab-pane>
    <el-tab-pane label="处理加载状态" lazy>
      <handle-loading></handle-loading>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import async from './async';
import WebpackAjax from './webpack-ajax';
import HandleLoading from './handle-loading';

export default {
  components: {
    async,
    WebpackAjax,
    HandleLoading,
  },
};
</script>

<style></style>
