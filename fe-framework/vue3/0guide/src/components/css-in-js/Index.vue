<template>
  <el-tabs :tab-position="'left'" style="min-height: 200px">
    <el-tab-pane label="Css Module">
      <module></module>
    </el-tab-pane>
    <el-tab-pane label="js in css">
      <css-bind></css-bind>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
  import Module from './Module.vue';
  import CssBind from './CssBind.vue'
</script>