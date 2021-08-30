// 函数组合 composition
// 将一系列函数组合执行

// 从左到右注册
// 从右向左执行 pipe 相反
// 先执行的结果当作后执行的参数

function compose(...funcs) {
  // 提供一个初始参数
  // 返回一个函数
  return function composedFunc(initArgs) {
    let args = initArgs;
    for (let i = funcs.length - 1; i >= 0; i--) {
      const func = funcs[i];
      args = func(args);
    }
    return args;
  };
}



// const compose = (f, g, h) => (a) =>  f(g(h(a)));

const floorAndToString = compose((val) => val.toString(), Math.floor);

console.log(floorAndToString(121.111111));
