// 操作  constructor of the class 
// observe
// modify 
// replace a class definition

function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return `Hello, ${this.greeting}`;
  }
}

// 无法添加静态方法
// (Greeter as any).id = 123;

// 无法添加 method
(Greeter.prototype as any).sayHello = function () { }

const greeter: any = new Greeter('world');





