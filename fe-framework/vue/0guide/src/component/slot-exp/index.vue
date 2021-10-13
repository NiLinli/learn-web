<template>
  <el-tabs type="border-card">
    <el-tab-pane label="v-slot 指令方式" lazy>
      <base-layout>
        <template v-slot:header>
          <h1>Here might be a page title</h1>
        </template>

        <p>A paragraph for the main content.</p>
        <p>And another one.</p>

        <template v-slot:footer>
          <p>Here's some contact info</p>
        </template>
      </base-layout>
      <h3>slot props</h3>
      <user-ni></user-ni>
      <user-ni-template></user-ni-template>
    </el-tab-pane>
    <el-tab-pane label="attribute 方式(decrepcate)" lazy>
      <base-layout>
        <template slot="header">
          <h1>Here might be a page title</h1>
        </template>

        <p>A paragraph for the main content.</p>
        <p>And another one.</p>

        <template slot="footer">
          <p>Here's some contact info</p>
        </template>
      </base-layout>
      <h3>slot props</h3>
      <current-user>
        <template slot-scope="{ user }">
          <p>{{ user.firstName }}</p>
        </template>
      </current-user>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import BaseLayout from './name-slot';
import CurrentUser from './scoped-slot';
import UserNiTemplate from './user-ni-template.vue';
import UserNi from './user-ni.js';
// slot 相比 prop 可以传递组件, 更加灵活
// slots.default 等同于 react 中的 children


export default {
  components: {
    BaseLayout,
    CurrentUser,
    UserNiTemplate,
    UserNi
  },
};
</script>

<style></style>
