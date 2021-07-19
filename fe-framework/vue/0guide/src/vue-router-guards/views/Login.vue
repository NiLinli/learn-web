<template>
  <div>
    <p>你还未登录, 请登录！</p> 
    <button @click="onLogin">Login</button>
  </div>
</template>

<script>
export default {
  methods: {
    onLogin() {

      window.isLogin = true;

      const { redirectURL } = this.$route.query;
      this.$router.replace({
        path: redirectURL || '/index'
      });
    }
  }

}
</script>

<style>

</style>