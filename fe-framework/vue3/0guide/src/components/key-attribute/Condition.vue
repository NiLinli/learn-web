<template>
  <!-- 条件分支上面不用手动写 key, 会自动生成 key -->
  <div v-if="condition">Yes</div>
  <div v-else>No</div>
</template>

<script setup>
import { reactive, ref } from 'vue';

const condition = ref(true);
</script>
