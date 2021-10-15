<template>
  <button @click="count++">Clicked {{ count }} times.</button>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
}
</script>
 
<style>
</style>
