<template>
  <el-tabs type="border-card">
    <el-tab-pane label="provide&inject" lazy>
      <level-one></level-one>
    </el-tab-pane>
    <el-tab-pane label="mock $parent&$children" lazy>
      <tabs>
        <!-- 嵌套了 -->
        <div class="special-tab-item">
          <tab-item>1</tab-item>
        </div>
        <tab-item>2</tab-item>
        <tab-item>3</tab-item>
      </tabs>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import LevelOne from './LevelOne';
import Tabs from './Tabs';
import TabItem from './TabItem';

export default {
  name: 'ProvideExp',
  components: { LevelOne, Tabs, TabItem }
}
</script>

<style>
</style>