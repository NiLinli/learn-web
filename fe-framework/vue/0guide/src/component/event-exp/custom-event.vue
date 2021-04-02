<template>
  <!-- <child-emit type="custom-event" ref="child"  v-on:smile="onSmile" /> -->
  <child-emit type="custom-event" ref="child" />
</template>

<script>
import ChildEmit from './child-emit';

// 驼峰和羊肉串不会自动转换
// 推荐使用 羊肉串 来自定义事件
export default {
  components: {
    ChildEmit,
  },

  mounted() {
    // 过 5s 绑定事件
    // setTimeout(() => {
    //   this.$refs['child'].$on('smile', this.onSmile);
    // }, 5000);

    // 绑定一次事件
    this.$refs['child'].$once('smile', this.onSmile);


    // 通过 vm 动态操作组件的事件
  },
  methods: {
    onSmile(e) {
      console.log(e);
    },
  },
};
</script>

<style></style>
