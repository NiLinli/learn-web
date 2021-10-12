<template>
  <el-tabs :tab-position="'left'" style="min-height: 200px">
    <el-tab-pane label="functional 无需标记">
      <dynamic-heading :level="'1'">
        Vue 3.0 有状态组件和函数式组件 性能差异变小
      </dynamic-heading>
      <dynamic-heading-template :level="'2'">
        Vue 3.0 有状态组件和函数式组件 性能差异变小
      </dynamic-heading-template>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import DynamicHeading from './DynamicHeading.vue';
import DynamicHeadingTemplate from './DynamicHeadingTemplate.vue'

</script>