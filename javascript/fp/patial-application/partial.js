// patial function 
// args        --> origin function
// returnValue --> new function by pre-filling some of the arguments to the original function.
//                --> 提前填充原函数的一些 argument 
//                --> 返回填充好的新函数

// array-like 对象转变为 true array
function array(a, n) {
  return Array.prototype.slice.call(a, n || 0);
}

// 提前定义好左边的参数 (bind arg)
// 使用 closure 暂存 提前定义好的参数
// 新传递的参数和 暂存 的组合生成实际调用的函数的参数
exports.partialLeft1 = function(f) {
  let outArgs = arguments;
  return function () {
      let a = array(outArgs, 1);      // 取 partialLeft f 后面的参数
      a = a.concat(array(arguments)); // 链接 返回函数调用的参数
      return f.apply(this, a);
  };
};

exports.partialLeft2 = (f, ...args) => 
  (...moreArgs) => f(...args, ...moreArgs);

// this arguments to this function are passed on the left
// 提前定义好右边的参数
exports.partialRight1 = function(f) {
  let outArgs = arguments;
  return function () {
      let a = array(arguments);
      a = a.concat(array(outArgs, 1));
      return f.apply(this, a);
  };
};

exports.partialRight2 = (f, ...args) =>
  (...moreArgs) => f(...moreArgs, ...args);

// 从做依次占位 undefined 变量
exports.partialSkipUndefined = function(f)  {
  let outArgs = arguments;

  return function () {
      let a = array(outArgs, 1); // 取 partialLeft f 后面的参数

      let i = 0,
          j = 0;

      // 通过 loop 将 返回函数调用的参数 赋值给 undefined 的占位符 
      for (; i < a.length; i++)
          if (a[i] === undefined)
              a[i] = arguments[j++];

      // 从 j 开始 链接没有取占用 undefined 的参数
      a = a.concat(array(arguments, j));

      return f.apply(this, a);
  };
};