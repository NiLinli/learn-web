// never(return type)
// 1. 函数死循环
function infiniteLoop(): never {
  while (true) {}
}

// 2. 抛出错误
function fail(msg: string): never {
  throw new Error(msg);
}

// void(return type)
// js 会隐式返回 undefined
// 在 ts 中 void 和 undefined 不同
function noop(a: string): void {
  // 没有明确 return 的值
  return;
}

function noop2(a: number): void {
  // 没有 return 语句
}

export {};
