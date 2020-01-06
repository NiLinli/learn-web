<template>
  <div>
    <h1>具名 slot</h1>
    <h3>v-slot 方式</h3>
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
    <h3>slot 方式(2.6.0 废弃)</h3>
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

    <h1>作用域 slot</h1>
    <h3>v-slot 方式</h3>
    <current-user v-slot:default="{ user }">{{ user.firstName }}</current-user>
    <h3>slot-scope 方式</h3>
  </div>
</template>

<script>
import BaseLayout from "./name-slot";
import CurrentUser from "./scoped-slot";

export default {
  components: {
    BaseLayout,
    CurrentUser
  }
};
</script>

<style>
</style>