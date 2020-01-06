<template>
  <div>
    <h2>router basic</h2>
    <router-link to="/p/nilinli" tag="li">Go to Foo</router-link>
    <router-link :to="{ name: 'p', params: { username: 'nixixi' } }" tag="li">Go to Foo</router-link>
    <router-link to="/p/nilinli/age/123" tag="li">Go to Bar</router-link>

    <h2>router nested</h2>
    <router-link to="/user/123/profile" tag="li">Go to profile</router-link>
    <router-link to="/user/123/posts" tag="li">Go to posts</router-link>

    <h2>router nested 无组件路由</h2>
    <router-link to="/test-user/profile" tag="li">Go to profile</router-link>
    <router-link to="/test-user/posts" tag="li">Go to posts</router-link>

    <div class="main-router-view">
        <router-view></router-view>
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
  }
</style>