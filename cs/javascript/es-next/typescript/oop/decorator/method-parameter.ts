function validate() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {

  }
}

// 参数装饰器只能用来监视一个方法的参数
// 1. 是否被传入
// 2. 传入的有没有问题等等
// ...
function required() {
  return function (
    target: any,
    propertyKey: string,
    parameterIndex: number  // 参数在函数中的位置
  ) {

  }
}

class Greeter5 {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  @validate()
  greet(@required() name: string) {
    return "Hello " + name + ", " + this.greeting;
  }
}