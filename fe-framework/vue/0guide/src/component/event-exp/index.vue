<template>
  <el-tabs type="border-card">
    <el-tab-pane label="Dom Event" lazy>
      <dom-event></dom-event>
    </el-tab-pane>
    <el-tab-pane label="Custom Event" lazy>
      <custom-event></custom-event>
    </el-tab-pane>
    <el-tab-pane label="$listeners" lazy>
      <hoc-listeners> </hoc-listeners>
    </el-tab-pane>
    <el-tab-pane label=".sync" lazy>
      <sync-sugar></sync-sugar>
    </el-tab-pane>
    <el-tab-pane label="v-model" lazy>
      <hoc-listeners> </hoc-listeners>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import DomEvent from './dom-event';
import CustomEvent from './custom-event';
import HocListeners from './hoc-listeners';
import SyncSugar from './sync-sugar';

export default {
  components: {
    DomEvent,
    CustomEvent,
    HocListeners,
    SyncSugar,
  },
  mounted() {
    this.$bus.$emit('global-message', 'event-exp send some message!!!');
  },
};
</script>

<style></style>
