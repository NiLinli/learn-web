<template>
  <div>
    <el-menu mode="horizontal" :default-active="activeIndex" :router="true">
      <el-menu-item v-for="(item, key) in menuItem" :key="key" :index="item.path">
        {{ item.title }}
      </el-menu-item>
    </el-menu>
    <div class="rv-container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
const menuItem = [
  { title: 'props', path: '/props' },
  { title: 'provide', path: '/provide' },
  { title: 'data', path: '/data' },
  { title: 'event', path: '/event' },
  { title: 'form', path: '/form' },
  { title: 'directive', path: '/directive' },
  { title: 'filter', path: '/filter' },
  { title: 'slots', path: '/slots' },
  { title: 'ref', path: '/ref' },
  { title: 'mixin', path: '/mixin' },
  { title: 'functional-component', path: '/functional-component' },
  { title: 'render function', path: '/render' },
  { title: 'async component', path: '/async' },
  { title: 'dynamic component', path: '/dynamic' },
  { title: 'transition component', path: '/transition' },
  
];

export default {
  name: 'app',
  components: {},
  data() {
    return {
      menuItem: menuItem,
      activeIndex: this.$route.path,
    };
  },
  mounted() {},
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.rv-container {
  margin: 20px;
}
</style>
