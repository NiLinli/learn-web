// 可选参数 type
function foo(name: string, age?: number): void {
}

foo('nixixi');

// 定义 function
// type 定义
type Fn = (a: string) => void;

// Object 定义, 函数也是一个 Object
interface Fn2 {
  (a: string): void; // 代表为该对象作为函数的定义
}

type Fn22 = {
  (a: string): void;
};

type DescribableFn = {
  (a: string): void;
  description: string; //  函数属性
};

type CallOrConstruct = {
  (n?: number): number;
  new (s: string): Date;    // 定义作为 Constructor 函数
};

export {};
