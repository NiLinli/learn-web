<template>
  <child-emit type="custom-event" v-on:smile="onSmile" />
</template>

<script>
import ChildEmit from './child-emit';

// 驼峰和羊肉串不会自动转换
// 推荐使用 羊肉串 来自定义事件
export default {
  components: {
    ChildEmit,
  },
  methods: {
    onSmile(e) {
      console.log(e);
    },
  },
};
</script>

<style></style>
