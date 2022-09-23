// instace 实例 
// arr instanceof Array -> arr 是不是 Array 类的实例
// 判断 object 具体的类型

// 系统类
let arr = [];
console.log(arr instanceof Array);


function func() {}

console.log(func instanceof Function);

// 自定义类

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let p = new Person('nilinli', 24);

console.log(p instanceof Person);