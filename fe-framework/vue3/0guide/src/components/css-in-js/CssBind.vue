<template>
  <div class="text">hello</div>
  <div></div>
  <el-button @click="setColor">change text color to blue</el-button>
</template>

<script setup>
import { ref } from 'vue';

const color = ref('red');
const setColor = () => color.value = 'blue';

</script>

<style>
/* html 页面所有根节点都添加 var 变量
<div class="text" style="--54c51578-color:red;">hello</div>
<div style="--54c51578-color:red;"></div> */

/* css 静态
.text {
  color: var(--54c51578-color);
} */

/* 渲染时候改变 html 结构即可 */

.text {
  color: v-bind(color);
}
</style>