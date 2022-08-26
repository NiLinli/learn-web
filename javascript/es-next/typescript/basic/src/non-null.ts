// strictNullChecks: true
// 断言不会是 null or undefined

export function liveDangerously(x?: number | null) {
  x!.toFixed();
}

export class Person {
  // 没有 constructor, 有可能为 null or undefined
  private name!: string;

  setName(name: string) {
    this.name = name;
  }

  sayHello() {
    console.log(`My name is ${this.name.toUpperCase()}`);
  }
}
