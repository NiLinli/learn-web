<template>
  <el-tabs :tab-position="'left'" style="min-height: 200px">
    <el-tab-pane label="createElement 引用更改">
      <reference-h></reference-h>
    </el-tab-pane>
    <el-tab-pane label="app 全局级别的组件引用方式修改">
      <render-global></render-global>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import ReferenceH from './ReferenceH.vue';
import RenderGlobal from './RenderGlobal.vue';
</script>
