<template>
  <!-- template + v-for key 写在 template 上面  -->
  <template v-for="item in list" :key="item.id">
    <div v-if="item.isVisible">{{ item.title }}</div>
    <span v-else>...</span>
  </template>
</template>

<script setup>
import { reactive, ref } from 'vue';

const list = reactive([{
  isVisible: true,
  id: 2,
  title: 'abc'
}]);
</script>
