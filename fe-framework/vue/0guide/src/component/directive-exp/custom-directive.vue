<template>
  <div>
    <h2>runtime 操作 DOM, 不能操作/改写 Component</h2>
    <h3>v-show</h3>
    <p v-poor-show="show">poor show directive</p>
    <p v-show="show">show directive</p>
    <button @click="onToggleShow">toggle show</button>

    <h3>auto focus</h3>
    <input type="text" v-focus />

    <h3>hooks args(DOM)</h3>
    <div v-demo:foo.a.b="message"></div>
    <button @click="onChangeMessage">change message</button>

    <h3>hooks args(Component)</h3>
    <hello-bird v-bird:foo.a.b="color"></hello-bird>
  </div>
</template>

<script>
//
import focus from './directive/auto-focus';
import demo from './directive/demo';
import bird from './directive/bird';
import poorShow from './directive/poor-show';

import HelloBird from './hello-bird';

export default {
  components: {
    HelloBird,
  },
  directives: {
    focus,
    demo,
    bird,
    'poor-show': poorShow,
  },
  data() {
    return {
      show: false,
      message: '',
      color: '',
    };
  },
  mounted() {
    console.log(this);
    console.log(this._directives);
  },
  methods: {
    onToggleShow() {
      this.show = !this.show;
    },
    onChangeMessage() {
      this.message = Math.floor(Math.random() * 2) + 6;
    },
  },
};
</script>

<style></style>
