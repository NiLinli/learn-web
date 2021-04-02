<template>
  <el-tabs type="border-card">
    <el-tab-pane label="单个组件/元素过渡" lazy>
      <single-component></single-component>
    </el-tab-pane>
    <el-tab-pane label="Js hooks" lazy>
      <custom-control></custom-control>
    </el-tab-pane>
    <el-tab-pane label="初始状态 appear" lazy>
      <appear-transition></appear-transition>
    </el-tab-pane>
    <el-tab-pane label="多个元素的过渡" lazy>
      
    </el-tab-pane>
    <el-tab-pane label="多个组件的过渡" lazy>
      
    </el-tab-pane>
    <el-tab-pane label="transition-group 列表过渡" lazy>
      
    </el-tab-pane>
    <el-tab-pane label="动态过渡" lazy>
      <dynamic-transition></dynamic-transition>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import SingleComponent from './single-component';
import CustomControl from './custom-control';
import AppearTransition from './appear-transition';
import DynamicTransition from './dynamic-transition';

export default {
  components: {
    SingleComponent,
    CustomControl,
    AppearTransition,
    DynamicTransition
  },
};
</script>

<style></style>
