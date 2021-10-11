<template>
  <el-tabs :tab-position="'left'" style="min-height: 200px">
    <el-tab-pane label="v-bind 合并优先级">
      <combine></combine>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import Combine from './Combine.vue';
</script>
