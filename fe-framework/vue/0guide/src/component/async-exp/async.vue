<template>
  <div>
    <p>组件需要被渲染的时候触发工厂函数</p>
    <p>从服务器得到 options 配置, 然后渲染</p>
    <p>一般不会把 options 放在服务器返回，webpack 拆成 js, 通过 ajax get 请求 js</p>
    <async-component></async-component>
  </div>
</template>

<script>
import { getAsyncComponentOptions } from './ajax';

export default {
  components: {
    // 使用工厂函数代替直接 options
    AsyncComponent: (resolve) => {
      getAsyncComponentOptions().then((options) => {
        resolve(options);
      });
    },
  },
};
</script>

<style></style>
