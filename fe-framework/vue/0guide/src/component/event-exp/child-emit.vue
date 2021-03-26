<template>
  <div class="">
    <template v-if="type === 'custom-event'">
      <button v-on:click="$emit('smile', 'omg')">smile</button>
    </template>
    <template v-if="type === 'sync'">
      <p>{{ title }}</p>
      <button v-on:click="$emit('update:title', 'omg')">update:title</button>
    </template>
  </div>
</template>

<script>
export default {
  props: ['title', 'type'],
  mounted() {
    console.log(this);
  },
};
</script>

<style></style>
