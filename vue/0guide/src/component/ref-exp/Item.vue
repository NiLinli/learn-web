<template>
  <div class="ref-item">
    <div style="margin-top: 20px;">
      <sub-item ref="sub"></sub-item>
      <div ref="domRef" @click="onClick">123</div>
    </div>
  </div>
</template>

<script>
import SubItem from './SubItem';
export default {
  name: 'RefItem',
  components: { SubItem },
  methods: {
    onClick() {
      this.$refs.sub.value = 'omg';
      this.$refs.domRef.innerText = 'omg';
    },
  },
};
</script>

<style></style>
