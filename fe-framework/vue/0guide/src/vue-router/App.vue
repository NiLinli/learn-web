<template>
  <div>
    <h2>router basic</h2>
    <router-link to="/p/nilinli" tag="li">Go to Foo</router-link>
    <router-link :to="{ name: 'p', params: { username: 'nixixi' } }" tag="li">Go to Foo</router-link>
    <router-link to="/p/nilinli/age/123" tag="li">Go to Bar</router-link>

    <h2>router nested</h2>
    <router-link to="/user/123/profile" tag="li">Go to profile</router-link>
    <router-link to="/user/123/posts" tag="li">Go to posts</router-link>

    <h2>router nested 无组件路由 x</h2>
    <router-link to="/test-user/profile" tag="li">Go to profile</router-link>
    <router-link to="/test-user/posts" tag="li">Go to posts</router-link>

    <h2>命名路由</h2>
    <router-link to="/name-route" tag="li">Go to name router</router-link>

    <h2>重定向</h2>
    <router-link to="/test-redirect" tag="li">Go to const redirect</router-link>
    <router-link to="/test-redirect-object" tag="li">Go to object redirect</router-link>
    <router-link to="/test-redirect-function" tag="li">Go to function redirect</router-link>

    <h2>prop</h2>
    <router-link to="/test-prop-true/1000" tag="li">Go to params prop</router-link>
    <router-link to="/test-prop-object/1000" tag="li">Go to object prop</router-link>
    <router-link to="/test-prop-function/10000" tag="li">Go to function prop</router-link>

    <div class="main-router-view">
      <router-view></router-view>
    </div>

    <div class="help-router-view">
      <router-view name="helper" />
    </div>
  </div>
</template>

<script>


export default {

};
</script>

<style>
.main-router-view {
  border: 1px solid #000;
  min-height: 200px;
}

.help-router-view {
  background: darksalmon;
}
</style>