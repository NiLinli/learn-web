<template>
  <div class="user">
    <h2>User params id: {{ $route.params.id }}</h2>
    <h2>User prop id: {{ id }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    id: [String]
  }
};
</script>

<style>
  .user-router-view {
    border: 1px solid darksalmon;
  }
</style>