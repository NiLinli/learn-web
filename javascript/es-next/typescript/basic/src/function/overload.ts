// js 不支持常规意义上面的重载 (多个实现 使用参数和返回值类型区分)
// 使用 单个实现 去适配参数 arguments 执行不同的代码, 满足 overload 定义

// ts: overload signatures 定义
function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;

// js: implementation signatures 实现 overload signatures
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}

const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);

// 不适合写 overload 
// 参数个数相同
function len(s: string): number;
function len(arr: any[]): number;
function len(x: any) {
  return x.length;
}

// Argument of type '"hello" | number[]' is not assignable to parameter of type 'string'.
// 两个都无法匹配, 也无法 narrowing
// len(Math.random() > 0.5 ? 'hello' : [0]);

// 修改为单个函数
function len2(x: any[] | string) {
  return x.length;
}

len2(Math.random() > 0.5 ? 'hello' : [0]);

export {};
