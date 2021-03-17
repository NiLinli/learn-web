<template>
  <div>
    <el-menu mode="horizontal" :router="true">
      <el-menu-item v-for="(item, key) in menuItem" :key="key" :index="item.path">
        {{ item.title }}
      </el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
const menuItem = [
  { title: 'props', path: '/props' },
  { title: 'state', path: '/state' },
  { title: 'slots', path: '/slots' },
  { title: 'render function', path: '/render' },
  { title: 'ref', path: '/ref' }
];

export default {
  name: 'app',
  data() {
    return {
      menuItem: menuItem,
    };
  },
  components: {},
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
</style>
