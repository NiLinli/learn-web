<template>
  <div>
    <p>component 是模版语法, 生成 render function code</p>
    <keep-alive>
      <component :is="currentComponent" v-bind="currentProps" v-on="currentListeners" />
    </keep-alive>

    <button @click="onChangeAnimal">
      改变 Animals
    </button>
  </div>
</template>

<script>
import Cat from './cat';
import Dog from './dog';
import animal from './animal.mixin';

export default {
  mixins: [animal],
  computed: {
    currentComponent() {
      const map = {
        dog: Dog,
        cat: Cat,
      };

      // 可以是全局注册的 ComponentName
      // 也可以是 component options
      return map[this.animal] || Dog;
    },
    currentProps() {
      const map = {
        dog: {
          age: 2,
        },
        cat: {
          age: 5,
        },
      };

      return map[this.animal] || {};
    },
    currentListeners() {
      const map = {
        dog: {
          eat: this.onEat,
        },
        cat: {
          sleep: this.onSleep,
        },
      };

      return map[this.animal] || {};
    },
  },

};
</script>

<style></style>
