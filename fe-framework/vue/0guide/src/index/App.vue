<template>
  <div>
    <span v-for="(route, index) of indexRoutes" :key="route.name">
      <a :href="route.href">{{ route.name }} </a>
      <el-divider direction="vertical" v-if="index < indexRoutes.length - 1" />
    </span>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  },
  data() {
    return {
      indexRoutes: process.env.INDEX_ROUTES
    };
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

a {
}
</style>
