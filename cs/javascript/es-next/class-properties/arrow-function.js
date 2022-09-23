class MyClass {
  name = 'MyClass';

  // 不管在哪里调用
  // 都不会丢失 this 的 context
  getName = () => {
    return this.name;
  };
}
const c = new MyClass();
const g = c.getName;

// Prints "MyClass" instead of crashing
console.log(g());
