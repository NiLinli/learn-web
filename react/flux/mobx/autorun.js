const { observable, autorun, action, computed } = require('mobx');

const numbers = observable([1, 2, 3]);

const sum = computed(() => numbers.reduce((a, b) => a + b, 0));

// 初次也会响应
const disposer = autorun(() => console.log(sum.get()), {
  delay: 300,
  onError(e) {
    console.log(e)
  }
});

const intervalId = setInterval(() => {
  numbers.push(4);
}, 100)

setTimeout(() => {
  clearInterval(intervalId);
  disposer();   // 取消
  numbers.push(5);
}, 1000);

