<template>
  <div>
    <keep-alive>
      <router-view v-if="keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!keepAlive"></router-view>
  </div>
</template>

<script>


export default {
  computed: {
    keepAlive() {
      return this.$route.meta.keepAlive;
    }
  }
};
</script>

<style>
</style>