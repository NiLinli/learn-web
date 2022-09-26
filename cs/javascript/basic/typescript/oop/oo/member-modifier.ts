// 默认 public

// private 不能在声明它的类的外部访问
// 1. 实例不能访问
// 2. 子类的方法中也不能访问
class Animal {
  constructor(
    // 子类访问 & 实例不可访问
    protected name: string,
    // 子类不可访问 & 实例不可访问
    private age: number
  ) {}

  move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Cat extends Animal {
  constructor(name: string, age: number) {
    super(name, age);
  }

  sayHello() {
    // protected 子类可以访问
    console.log(`${this.name} sayHello`);
  }

  // error  private 子类不可以访问
  //   getAge() {
  //     return this.age;
  //   }
}

const animal = new Animal('kitty', 1);

// protected & private 实例都不能访问
// animal.name; // error
// animal.age; // error

