// 泛形类
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;

  constructor(a: T, b: (x: T, y: T) => T) {
    this.zeroValue = a;
    this.add = b;
  }
}

let myGenericNumber = new GenericNumber<string>('', (x, y) => {
  return x + y;
});
