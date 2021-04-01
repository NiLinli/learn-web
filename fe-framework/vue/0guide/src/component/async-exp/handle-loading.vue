<template>
  <div>
    <async-component></async-component>
  </div>
</template>

<script>
import LoadingComponent from './loading-component';
import ErrorComponent from './error-component';

export default {
  components: {
    // webpack + es6
    AsyncComponent: () => {
      // return import('./async-component');
      return {
        component: import('./async-component'),
        loading: LoadingComponent,
        error: ErrorComponent,
        delay: 0, // 延时多久开始加载 loading
        timeout: 8000, // 超时
      };
    },
  },
};
</script>

<style></style>
