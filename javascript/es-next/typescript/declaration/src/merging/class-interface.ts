// interface 可以与 class 声明合并, 不过官网并没有找到说明
interface Person1229 {
  name: string;
  age: number;
}

class Person1229 {
  sayHello() {
    console.log(`my name is ${this.name}, my age is ${this.age} years old`);
  }
}

