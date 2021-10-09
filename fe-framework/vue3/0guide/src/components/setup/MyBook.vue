<template>
  <div>{{ collectionName }}: {{ readersNumber }} {{ book.title }}</div>
</template>

<script>
// setup 结合 options + template

import { ref, reactive } from 'vue';

export default {
  props: {
    collectionName: String
  },
  setup(props) {
    const readersNumber = ref(0);
    const book = reactive({ title: 'Vue 3 Guide' });

    // 添加到实例上面
    // 暴露给 template
    return {
      readersNumber,
      book
    };
  }
}
</script>

<style>
</style>