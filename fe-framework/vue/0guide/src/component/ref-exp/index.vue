<template>
  <div>
    <item ref="item1" />
    <item ref="item2" />
    <item />
    <item />

    <button @click="onBtnClick">log</button>
  </div>
</template>

<script>
import Item from './Item';

export default {
  name: 'RefExp',
  components: { Item },
  mounted() {},
  methods: {
    onBtnClick() {
      console.log(this.$refs.item1.$refs.domRef);
      console.log(this.$refs.item2.$refs.domRef);
    },
  },
};
</script>

<style></style>
