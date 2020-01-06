<template>
  <span>
    <slot :user="user">{{ user.lastName }}</slot>
  </span>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: 'Linli',
        lastName: 'Ni'
      }
    }
  }
};
</script>

<style>
</style>