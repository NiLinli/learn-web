<template>
  <div id="app">
    <div v-for="route of indexRoutes" :key="route.name">
      <h1>{{ route.name }}</h1>
      <a class="el-button el-button--primary" :href="route.href">
        Go to {{ route.name }}
      </a>
    </div>
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
