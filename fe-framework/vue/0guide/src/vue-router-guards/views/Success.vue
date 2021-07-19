<template>
  <div>resolve success</div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter', to.path, from.path)

    if (to.path === '/beforeResolveFail') {
      return next();
    }
    
    next(false)
  },
}
</script>

<style>
</style>