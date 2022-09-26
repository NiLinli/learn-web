// 泛形类
// 多个变量之间的联系
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;

  constructor(a: T, b: (x: T, y: T) => T) {
    this.zeroValue = a;
    this.add = b;
  }
}

// 100 推导出 T 为 number
new GenericNumber(100, (x, y) => {
  return x + y;
});

export {};
