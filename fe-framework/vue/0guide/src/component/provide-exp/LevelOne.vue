<template>
  <div>
    <level-two></level-two>
  </div>
</template>

<script>
import LevelTwo from './LevelTwo';

export default {
  name: 'LevelOne',
  components: { LevelTwo },
  // 祖辈提供一些信息 供子子孙孙获取使用
  provide() {
    return {
      sayHello: this.sayHello
    };
  },
  methods: {
    sayHello: function () {
      console.log('祖上有矿, 低调');
    }
  }
}
</script>

<style>
</style>