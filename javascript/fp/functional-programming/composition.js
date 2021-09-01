// 函数组合 composition
// 将一系列函数组合执行

// 从右向左执行 pipe 相反
// 先执行的结果当作后执行的参数

// function compose(...funcs) {
//   // 提供一个初始参数
//   // 返回一个函数
//   return function composedFunc(initArgs) {
//     let args = initArgs;
//     for (let i = funcs.length - 1; i >= 0; i--) {
//       const func = funcs[i];
//       args = func(args);
//     }
//     return args;
//   };
// }

// function compose(...funcs) {
//   return funcs.reduce((prev, cur) => {
//     return (...args) => prev(cur(...args))
//   });
// }


// a, b, c
// a  a
// nb  () => b(a())
// c   () => nb(c())  
function compose(...funcs) {
  let prev = funcs[0];

  for (let i = 1; i < funcs.length; i++) {
    const func = funcs[i];

    let tempPrev = prev;

    prev = (...args) => {
      // 返回函数调用
      // 当前的函数
      // 前面的函数
      return tempPrev(func(...args));
    };
  }

  return prev;
}

// const compose = (f, g, h) => (a) =>  f(g(h(a)));
const floorAndToString = compose((val) => val.toString(), Math.floor);

console.log(floorAndToString(121.111111));
