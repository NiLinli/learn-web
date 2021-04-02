<template>
  <el-tabs type="border-card">
    <el-tab-pane label="component" lazy>
      <component-template></component-template>
    </el-tab-pane>
    <el-tab-pane label="if - else" lazy>
      <if-template></if-template>
    </el-tab-pane>
    <el-tab-pane label="keep-alive" lazy>
      keep-alive 为一个内置组件 <br>
      会读取默认 slot <br>
      然后缓存 slot <br>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import ComponentTemplate from './component-template';
import IfTemplate from './if-template';
export default {
  components: {
    ComponentTemplate,
    IfTemplate,
  },
};
</script>

<style></style>
