function compose(...funcs) {
  // 返回一个函数 用于接收初始参数
  return function composedFunc(initArgs) {
    let args = initArgs;
    // 循环调用
    for (let i = funcs.length - 1; i >= 0; i--) {
      const func = funcs[i];
      args = func(args);
    }
    return args;
  };
}

const floorAndToString = compose((val) => val.toString(), Math.floor);

console.log(floorAndToString(121.111111));
