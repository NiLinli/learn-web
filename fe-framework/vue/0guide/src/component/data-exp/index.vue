<template>
  <div id="example">
    <p>Original message: "{{ message }}"</p>
    <p>Computed reversed message: "{{ reversedMessage }}"</p>
    <p>没有依赖的 Compute Property: {{ now }}</p>
    <p>Full Name: {{ user.fullName }}</p>
    <button @click="onChangeFirstName">改变 firstName</button>
    <button @click="onWatchFullName">动态 watch/unwatch fullname</button>

    <h3>vm.$set 在数组中的应用</h3>
    <p>{{ arr.toString() }}</p>
    <button @click="onSetArrValue">改变某个索引下面的值</button>
  </div>
</template>

<script>
export default {
  data(vm) {
    console.log(vm === this); // data.call(vm, vm)
    return {
      message: 'Hello',
      user: {
        firstName: 'Foo',
        lastName: 'Bar',
        fullName: 'Foo Bar',
      },
      arr: [1, 2, 3, 4, 5, 6],
    };
  },
  computed: {
    reversedMessage() {
      // `this` 指向 vm 实例
      console.log('reversedMessage watcher getter call'); // 计算属性的 getter
      return this.message.split('').reverse().join('');
    },
    now() {
      return Date.now();
    },
  },
  watch: {
    'user.firstName'(val) {
      console.log('firstName user watcher callback call');
      this.user.fullName = val + ' ' + this.user.lastName;
    },
    'user.lastName'(val) {
      console.log('lastName user watcher callback call');
      this.user.fullName = this.user.firstName + ' ' + val;
    },
  },
  mounted() {
    console.log(this);
    // data proxy
    console.log('this.$data === this._data?', this.$data === this._data);

    // computed proxy

    // watch
    console.log('all watchers: ', this._watchers);
    console.log('render watcher: ', this._watcher, this._watchers[this._watchers.length - 1]);

    // 顺序(queueWatcher 根据 id 大小顺序更新)
    // 1. computed watcher
    // 2. user watcher
    // 3. render watcher
  },
  methods: {
    onChangeFirstName() {
      this.user.firstName = 'Linli' + (Math.floor(Math.random() * 9) + 1); // [1, 10]
    },
    onWatchFullName() {
      if (this.unwatch) {
        this.unwatch();
        return (this.unwatch = null);
      }
      this.unwatch = this.$watch('fullName', (val, oldVal) => {
        console.log(`fullName ${val} change to ${oldVal}`);
      });
    },
    onSetArrValue() {
      this.$set(this.arr, 2, 99);
    },
  },
};
</script>

<style></style>
