// 可以用来监视，修改或者替换方法定义
function enumerable(value: boolean) {
  return function (
    target: any,              // 装饰方法所处的宿主, mehtod 为 prototype, static method 为 constructor
    propertyKey: string,      // 方法名字
    descriptor: PropertyDescriptor    // 方法对应的属性描述符
  ) {

    console.log(target);
    // console.log(Greeter2.prototype)

    descriptor.enumerable = value;
  }
}



class Greeter2 {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  @enumerable(false)
  greet1() { }

  @enumerable(true)
  greet2() { }

}

let greeter2 = new Greeter2('Hello world');

for (const k in Greeter2.prototype) {
  if (Object.prototype.hasOwnProperty.call(Greeter2.prototype, k)) {
    console.log(k)
  }
}
