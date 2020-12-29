function classDecorator<T extends { new(...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    newProperty = 'new property';
    hello = 'override';
  }
}

// 可以用来监视，修改或替换类定义
@classDecorator
class Greeter {
  property = 'property';
  hello: string;

  constructor(m: string) {
    this.hello = m;
  }
}

console.log(new Greeter('world'));