<template>
  <el-tabs :tab-position="'left'" style="min-height: 200px">
    <el-tab-pane label="v-if">
      <condition />
    </el-tab-pane>
    <el-tab-pane label="template v-for"> 
      <loop></loop>
    </el-tab-pane>
    <el-tab-pane label="v-if v-for"> 
      v-if 与 v-for 同时出现, v-if 优先级高于 v-for
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import Condition from './Condition.vue';
import Loop from './Loop.vue';
</script>
