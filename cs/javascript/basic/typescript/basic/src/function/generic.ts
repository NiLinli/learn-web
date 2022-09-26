// 函数范型: 强调两个值之间的关系
// 函数: 参数 返回值 函数体
// 函数中出现一次并且未 传入到其他范型中可以考虑不使用


// 表示 参数 和 返回值相同
function identify<T>(arg: T): T {
  return arg;
}

const output1 = identify<string>('nixixi');
// 因为值是相关性的, 所以支持类型推论
const output2 = identify(1);

// 类型推论: 不必指定范型类型, 只需多个相关值满足范型相关定义即可
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func);
}

// ['1', '2', '3'] -> type Input = number[];
// type Input = number[] & (arg: Input) => Output & (n) => parseInt(n) -> type Output = number
map(['1', '2', '3'], (n) => parseInt(n));

// 泛型限制约束
// 一般用于限制 object 属性, 不建议用户限制整体类型
function newLoggingIdentify<
  T extends {
    length: number;
  }
>(arg: T): T {
  console.log(arg.length); // yes
  return arg;
}

newLoggingIdentify('123');

export {};
