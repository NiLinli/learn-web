<template>
  <el-tabs :tab-position="'left'" style="min-height: 200px">
    <el-tab-pane label="v-bind 合并优先级">
      <combine></combine>
    </el-tab-pane>
    <el-tab-pane label="移除 $listeners">
      <awesome-input></awesome-input>
    </el-tab-pane>
    <el-tab-pane label="$attrs & inheritAttrs 包含 class & style">
      <class-and-style style="background-color:red;"></class-and-style>
    </el-tab-pane>
  </el-tabs>
</template>

<script setup>
import Combine from './Combine.vue';
import AwesomeInput from './AwesomeInput.vue'
import ClassAndStyle from './ClassAndStyle.vue'
</script>
