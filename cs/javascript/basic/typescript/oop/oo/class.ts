class Greeter {
  // ts field
  // strictPropertyInitialization
  // !: definite assignment assertion operator
  name!: string;
  readonly words!: string;

  static x = 0;
  static printX() {
    console.log(Greeter.x);
  }
  // ts/js 没有 static Class, 因为 top-level 可以声明任何类型不必非要声明在 class 当中

  constructor(name: string, words: string) {
    // ts 并不会分析 constructor 是否初始化了, 因为 constructor 有可能会被动态改写
    this.name = name;
    this.words = words;
  }

  sayHello() {
    this.name.toLowerCase();
  }
}

// new Greeter().words = '123';

// Parameter Properties
// 在构造函数参数上面添加 public private protected readonly 就会把参数值赋值给同名 filed
class Params {
  constructor(public readonly x: number, protected y: number, private z: number) {
    // No body necessary
  }
}

// class expression
const someClass = class<Type> {
  content: Type;
  constructor(value: Type) {
    this.content = value;
  }
};

const m = new someClass('Hello, world');

export {};
