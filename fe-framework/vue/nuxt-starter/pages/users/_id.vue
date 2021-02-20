<template>
  <div>
    <p>User id is {{ $route.params.id }}</p>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id);
  }
}
</script>

<style>

</style>