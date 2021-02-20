<template>
  <div class="user">
    <h2>User {{ $route.params.id }}</h2>
    <div class="user-router-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
  .user-router-view {
    border: 1px solid darksalmon;
  }
</style>