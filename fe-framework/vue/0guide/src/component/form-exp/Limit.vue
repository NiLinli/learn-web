<template>
  <div>
    <h2>修复 input 非受控组件 视图 和 data 不一致</h2>
    <h3>value + input</h3>
    <input type="text" :value="bar" @input="validateInput" />
    <p>{{ bar }}</p>

    <h3>value + change</h3>
    <input type="text" :value="bar" @change="validateInput" />
    <p>{{ bar }}</p>

    <h2>限制输入数字</h2>
    <input type="text" v-model="foo" @input="limitInput" />
    <p>{{ foo }}</p>
  </div>
</template>

<script>

const NUMERIC_DOT = /[^-0-9.]/g;
const NUMERIC = /[^-0-9]/g;

export default {
  name: 'FormLimit',
  data() {
    return {
      foo: '',
      bar: ''
    };
  },
  methods: {
    validateInput(e) {
      const input = e.target;
      const value = e.target.value;
      let newVal;
      if (value === 'a') {
        newVal = '';
      } else {
        newVal = value;
      }

      // fix 修正视图不一致问题
      if (input && newVal !== value) {
        input.value = newVal;
      }

      this.bar = newVal;
    },
    // v-model 
    // next tick input or change
    limitInput(e) {
      const value = e.target.value;
      this.foo = value.replace(NUMERIC_DOT, '');
    }
    // 使用 onchange/使用 oninput
    // 输入开始 startValue
    // 输入结束 计算出 endValue
    // startValue === endValue 
    // bug: 视图不刷新，页面显示和 data 中数据不一样

    // v-model(input) + 
    // change formatter
    // input  limit

    // set: function reactiveSetter (newVal) {
    //   const value = getter ? getter.call(obj) : val
    //   // 新旧值相同的情况下, 不会触发 dep.notify()
    //   if (newVal === value || (newVal !== newVal && value !== value)) {
    //     return
    //   }
    //   dep.notify()
    // }
  }
}
</script>

<style>
</style>