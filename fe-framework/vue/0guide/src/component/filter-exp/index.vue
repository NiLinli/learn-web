<template>
  <div>
    <h3>模版 filter 调用</h3>
    <p>{{ message | reverse | capitalize }}</p>
    <h3>prop filter 调用</h3>
    <div :id="rawId | reverse | capitalize"></div>
    <h3>filter 传递参数</h3>
    <p>{{ message | slice(0, 2) }}</p>
  </div>
</template>

<script>
import capitalize from './filters/capitalize';
import reverse from './filters/reverse';
import slice from './filters/slice';

// prop {{ }} 可用
// 简单的 js function, 处理常见的文本格式化, 不支持 async

export default {
  filters: {
    capitalize,
    reverse,
    slice,
  },
  data() {
    return {
      message: 'hello',
      rawId: 'dv',
    };
  },
};
</script>

<style></style>
