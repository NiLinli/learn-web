<template>
  <div>
    <button v-on:click="counter += 1">Add 1</button>
    <p>The button above has been clicked {{ counter }} times.</p>

    <button v-on:click="greet('hi', $event)">Greet</button>
  </div>
</template>

<script>
// v-on 用于监听 DOM 事件
// 事件绑定会自动清理
// 可以使用一些修饰符去修饰事件(本质上是语法糖)
export default {
  data() {
    return {
      counter: 0,
      name: 'Nilinli',
    };
  },
  methods: {
    greet(value, event) {
      // this 指向当前 vue instance
      alert(value + ' ' + this.name + '!');
      // 'event' 是原生 DOM Wrapper Event
      if (event) {
        alert(event.target.tagName);
      }
    },
  },
};
</script>

<style></style>
