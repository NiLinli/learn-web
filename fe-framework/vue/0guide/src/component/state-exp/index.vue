<template>
  <div id="example">
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
    <p>没有依赖的 Compute Property: {{ now }}</p>
    <p>Full Name: {{ fullName }}</p>
    <button @click="onChangeFirstName">
      改变 firstName
    </button>
  </div>
</template>

<script>
export default {
  // data.call(vm, vm)
  data(vm) {
    console.log(vm === this);
    return {
      message: 'Hello',
      firstName: 'Foo',
      lastName: 'Bar',
      fullName: 'Foo Bar',
      unuseVar: '123',
    };
  },
  // 对于复杂的逻辑 都应该使用 compute 属性
  computed: {
    // 计算属性的 getter
    reversedMessage: function() {
      // `this` 指向 vm 实例
      console.log('reversedMessage watcher getter call');
      return this.message
        .split('')
        .reverse()
        .join('');
    },
    now: function() {
      return Date.now();
    },
  },
  updated() {
    console.log('updated');
  },
  watch: {
    // set
    firstName: function(val) {
      console.log('firstName user watcher callback call');
      this.fullName = val + ' ' + this.lastName;
    },
    lastName: function(val) {
      console.log('lastName user watcher callback call');
      this.fullName = this.firstName + ' ' + val;
    },
  },
  mounted() {
    console.log(this);
    console.log(this._watchers);
    // 顺序(queueWatcher 根据 id 大小顺序更新)
    // 1. computed watcher
    // 2. user watcher
    // 3. render watcher(只收集 data 中定义的, createElement 访问过的 dep)
    console.log(this._watcher === this._watchers[this._watchers.length - 1]);
  },
  methods: {
    onChangeFirstName() {
      this.firstName = 'Linli';
    },
  },
};
</script>

<style></style>
