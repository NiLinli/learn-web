// creation expression -- new
// constructor pattern

// new process
// 1. 创建一个新的对象
// 2. 分配 this 指向那个新对象
// 3. 通过 invoke a function(constructor) 给 this(新对象) 添加 property 
// 4. 隐式返回 this 新对象

function Person(name, age) {
  this.name = name;
  this.age = age;

  return 123;   // new 的时候 返回 this 覆盖
}

// Js 中首字母不一定要 uppercase
function person(name, age) {
  this.name = name;
  this.age = age;
}

let p1 = new Person('nixixi', 18);
let p2 = new person('nixixi', 18);

console.log(p1);
console.log(p2);

// constructor 当作普通函数调用 注意其 this 指向
function Student(name) {
  this.name = name;
  return this;
}

console.log(Student('nixixi') === global);
console.log(global.name);