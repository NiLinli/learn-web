<script lang="ts">
import MyBook from "./setup/MyBook.vue";
import MyBook2 from "./setup/MyBook2.vue";
import ModalButton from "./teleport/ModalButton.vue";
import Layout from "./fragment/Layout.vue";
import CustomEvent from "./custom-event/Index.vue";

export default {
  components: {
    MyBook,
    MyBook2,
    ModalButton,
    Layout,
    CustomEvent,
  },
  data() {
    return {
      activeName: "first",
    };
  },
};
</script>

<template>
  <el-tabs type="card">
    <el-tab-pane label="Compsition">
      <my-book></my-book>
      <my-book2></my-book2>
    </el-tab-pane>
    <el-tab-pane label="Teleport" lazy>
      <h3>teleport 远距离传输端口</h3>
      <p>逻辑父子级组件, 但是可以指定出口 DOM 挂载位置</p>
      <modal-button></modal-button>
    </el-tab-pane>
    <el-tab-pane label="Fragment" lazy>
      Vue3.0 支持多根节点组件
      <layout></layout>
    </el-tab-pane>
    <el-tab-pane label="Custom Event" lazy>
      <custom-event></custom-event>
    </el-tab-pane>
  </el-tabs>
</template>

<style scoped>
</style>
