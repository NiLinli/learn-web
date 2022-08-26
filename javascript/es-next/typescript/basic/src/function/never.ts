// never(return type)
// 1. 函数死循环
function infiniteLoop(): never {
  while (true) {}
}

// 2. 抛出错误
function fail(msg: string): never {
  throw new Error(msg);
}

export {};
