<template>
  <el-tabs :tab-position="'left'" style="min-height: 200px">
    <el-tab-pane label="自定义 event">
      <custom-form @submit="onCustomFormSubmit" />
    </el-tab-pane>
    <el-tab-pane label="未声明的自定义 event">
      <my-button @click="onButtonClick" />
    </el-tab-pane>
    <el-tab-pane label="v-model">
      <book v-model:title="title" />
    </el-tab-pane>
    <el-tab-pane label="自定义 v-model 修饰符">
      <h2>{{ inputValue }}</h2>
      <h2>{{ description }}</h2>
      <custom-modify
        v-model.capitalize="inputValue"
        v-model:description.capitalize="description"
      />

      <ul>
        <li>支持 .trim .number .lazy 硬编码 compile 阶段生成的代码</li>
        <li>
          也支持自定义 modifier, compile 时候添加到 argsModifies prop 上面
        </li>
      </ul>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import CustomForm from "./CustomForm.vue";
import MyButton from "./MyButton.vue";
import Book from "./Book.vue";
import CustomModify from "./CustomModify.vue";

export default {
  name: "CustomEvent",
  components: {
    CustomForm,
    MyButton,
    Book,
    CustomModify,
  },
  data() {
    return {
      title: "漫长的告别",
      inputValue: "abc",
      description: "abc",
    };
  },
  methods: {
    onCustomFormSubmit(accountInfo) {
      console.log(accountInfo);
    },
    onButtonClick() {
      console.log("my button");
    },
  },
};
</script>

<style>
</style>