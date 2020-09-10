<template>
  <div>
    <item ref="item1"/>
    <item ref="item2" />
    <item />
    <item />

    <button @click="onBtnClick">btn</button>
  </div>
</template>

<script>
import Item from './Item';

export default {
  name: 'RefExp',
  components: { Item },
  mounted() {
    console.log(this.$refs.item1.domRef === this.$refs.item2.domRef)
  },
  methods: {
    onBtnClick() {
      console.log(this.$refs.item1.$refs.domRef === this.$refs.item2.$refs.domRef)
      console.log(this.$refs.item1.$refs.domRef === this.$refs.item2.domRef)
      console.log(this.$refs.item1.domRef)
      console.log(this.$refs.item2.domRef)
    }
  }

}
</script>

<style>

</style>