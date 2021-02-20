<template>
  <div class="ref-item" @click="onClick">
    {{ value }}
  </div>
</template>

<script>
export default {
  name: 'SubItem',
  data() {
    return {
      value: 'subitem'
    }
  },
  methods: {
    onClick() {
      this.$emit('click');
    }
  }

}
</script>

<style>

</style>