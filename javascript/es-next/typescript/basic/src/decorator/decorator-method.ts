// 可以用来监视，修改或者替换方法定义
function enumerable(value: boolean) {
  return function(
    target: any, 
    propertyKey: string, 
    descriptor: PropertyDescriptor) {
    descriptor.enumerable = value;
  }
}



class Greeter2 {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  @enumerable(false)
  greet1() {}

  @enumerable(true)
  greet2() {}

}

let greeter2 = new Greeter2('Hello world');

console.log(greeter2.greet1.enumerable);
console.log(greeter2.greet2.enumerable);
