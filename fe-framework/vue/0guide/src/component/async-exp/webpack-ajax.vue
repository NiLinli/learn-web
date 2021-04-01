<template>
  <div>
    <async-component></async-component>
  </div>
</template>

<script>
export default {
  components: {
    // webpack + ajax
    // AsyncComponent: (resolve) => {
    //   require(['./async-component'], resolve);
    // },
    // webpack + es6
    AsyncComponent: () => {
      return import('./async-component');
    },
  },
};
</script>

<style></style>
