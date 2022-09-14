// keyof 对象 key 值类型组成的类型或者联合类型
type Point = {
  x: number;
  y: number;
};

// 'x' | 'y' 字面量
type P = keyof Point;

type Arrayish = {
  // index signature
  [n: number]: unknown;
};
// number
type A = keyof Arrayish;

type Mapish = {
  [k: string]: boolean;
};
// string | number   number => 会自动转换为 string, 所以 number 也满足条件
type M = keyof Mapish;

// typeof 和 js 中 typeof 类似, 计算表达式的 ts 类型, 用于变量不用于函数调用后的返回值
let s = 'hello';
// n: string
let n: typeof s;

function f() {
  return {
    x: 3,
    y: 3,
  };
}
// {
//   x: number;
//   y: number;
// }
type RP = ReturnType<typeof f>;

export {};
