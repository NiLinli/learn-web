<template>
  <transition :name="transitionName">
    <p v-if="show">hello</p>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      transitionName: '',
    };
  },
};
</script>

<style></style>
