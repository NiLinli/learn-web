function compose(...funcs) {
  return funcs.reduce((prev, cur) => {
    return (...args) => prev(cur(...args));
  });
}

function compose2(...funcs) {
  let prev = funcs[0];

  for (let i = 1; i < funcs.length; i++) {
    // func/tempPrev 都是 block scope 维持的变量
    const func = funcs[i]; // 当前的函数
    let tempPrev = prev; // 前面一个函数的高阶函数

    prev = (...args) => {
      // 往前调用 HOF 达到 compose
      return tempPrev(func(...args));
    };
  }

  // 最后一个函数的高阶函数接收参数
  return prev;
}

// 创建
// [a, b, c]
// prev: a
// prev: HOFb  () => a(b())
// prev: HOFc  () => HOFb(c())
// length - 1 个高阶函数

// 调用
// HOFc -> c + HOFb -> b + a

// 返回值
// HOF 都是 () =>
// HOFc 返回值为 HOFb 的返回值 ..... = a 的返回值

const floorAndToString = compose((val) => val.toString(), Math.floor, Math.abs);
const floorAndToString2 = compose2((val) => val.toString(), Math.floor, Math.abs);

console.log(floorAndToString(-121.111111));
console.log(floorAndToString2(-121.111111));
