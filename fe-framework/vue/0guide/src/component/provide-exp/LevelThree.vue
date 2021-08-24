<template>
  <el-button type="danger" plain @click="onSayOmg">say omg</el-button>
</template>

<script>
export default {
  name: 'LevelThree',
  inject: ['sayHello'],
  methods: {
    onSayOmg: function () {
      this.sayHello();
    }
  }
}
</script>

<style>
</style>