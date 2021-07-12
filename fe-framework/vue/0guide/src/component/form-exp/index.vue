<template>
  <el-tabs type="border-card">
    <el-tab-pane label="v-model" lazy>
      <VmodelExp></VmodelExp>
    </el-tab-pane>
    <el-tab-pane label="input format" lazy>
      <Format></Format>
    </el-tab-pane>
    <el-tab-pane label="input limit" lazy>
      <Limit></Limit>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import VmodelExp from './VmodelExp';
import Format from './Format';
import Limit from './Limit';

export default {
  components: { VmodelExp, Format, Limit },
};
</script>

<style lang="scss"></style>
