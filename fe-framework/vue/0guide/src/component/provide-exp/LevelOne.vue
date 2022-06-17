<template>
  <div class="border-box">
    {{foo}}
    <el-button type="danger" plain @click="foo += ' change'">foo change</el-button>
    <el-button type="danger" plain @click="obj.name = 'nixixi2'">obj.name change</el-button>
    <el-button type="danger" plain @click="obj = { name: 'nixixi3' }">obj change</el-button>
    <level-two></level-two>
  </div>
</template>

<script>
import LevelTwo from './LevelTwo';

// callHook(vm, 'beforeCreate');
// ...
// initInjections(vm);  // resolve injections before data/props
// initState(vm);
// initProvide(vm);     // resolve provide after data/props
// callHook(vm, 'created');
// ...

export default {
  name: 'LevelOne',
  components: { LevelTwo },
  provide() {
    return {
      sayHello: this.sayHello,
      foo: this.foo,
      getFoo: () => this.foo,
      obj: this.obj,
    };
  },
  data() {
    return {
      foo: 'foo',
      obj: {
        name: 'nixixi',
      },
    };
  },
  beforeUpdate() {
    console.log('LevelOne beforeUpdate');
  },
  updated() {
    console.log('LevelOne updated');
  },
  methods: {
    sayHello: function (foo) {
      console.log('祖上有矿, 低调', foo);
    },
  },
};
</script>

<style></style>
