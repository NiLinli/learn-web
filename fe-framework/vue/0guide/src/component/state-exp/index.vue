<template>
  <div id="example">
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
    <p>没有依赖的 Compute Property : {{ now }}</p>
    <p>Method Reversed message: "{{ reversedMessage2() }}"</p>
    
    <h3>full name</h3>
    <div id="demo">{{ fullName }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello',
      firstName: 'Foo',
      lastName: 'Bar',
      fullName: 'Foo Bar',
    };
  },
  // 对于复杂的逻辑 都应该使用 compute 属性
  computed: {
    // 计算属性的 getter
    reversedMessage: function() {
      // `this` 指向 vm 实例
      // 依赖于 this.message 实例
      // this.message 发生改变 --> reversedMessage 发生改变
      return this.message
        .split('')
        .reverse()
        .join('');
    },
    now: function() {
      return Date.now();
    },
  },
  watch: {
    // set
    firstName: function(val) {
      this.fullName = val + ' ' + this.lastName;
    },
    lastName: function(val) {
      this.fullName = this.firstName + ' ' + val;
    },
  },
  methods: {
    // 调用方法 可以达到同样的效果
    reversedMessage2: function() {
      return this.message
        .split('')
        .reverse()
        .join('');
    },
  },
};
</script>

<style></style>
