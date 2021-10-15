

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
    <el-tab-pane label="Css in Js" lazy>
      <css-in-js></css-in-js>
    </el-tab-pane>
    <el-tab-pane label="Key Attribute" lazy>
      <key-attribute></key-attribute>
    </el-tab-pane>
    <el-tab-pane label="v-bind" lazy>
      <v-bind></v-bind>
    </el-tab-pane>
    <el-tab-pane label="functional" lazy>
      <functional></functional>
    </el-tab-pane>
    <el-tab-pane label="async component" lazy>
      <async-component></async-component>
    </el-tab-pane>
    <el-tab-pane label="h" lazy>
      <render></render>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import MyBook from "./setup/MyBook.vue";
import MyBook2 from "./setup/MyBook2.vue";
import ModalButton from "./teleport/ModalButton.vue";
import Layout from "./fragment/Layout.vue";
import CustomEvent from "./custom-event/Index.vue";
import CssInJs from "./css-in-js/Index.vue";
import KeyAttribute from "./key-attribute/Index.vue";
import VBind from "./v-bind/Index.vue";
import Functional from "./functional/Index.vue";
import AsyncComponent from "./async/Index.vue";
import Render from './render/Index.vue'
</script>
