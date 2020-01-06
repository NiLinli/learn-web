// toString()
// 默认
class Person {
    constructor(name, age) { }
}

let p = new Person('nilinli', 24);

console.log(p.toString()); // [object Object]

// 自定义
Person.prototype.toString = function () {
    console.log(`name = ${this.name} , age = ${this.age}`);
}

console.log(p.toString()); // name = nilinli , age = 24


// Array 
let arr = [1, 2];
console.log(arr.toString());

console.log(Object.prototype.toString.call(arr)); // [object Array]

// Function
let foo = function() {}

console.log(Object.prototype.toString.call(foo));       // [object Function]

// Object.toString - inspect the sub type of object
// [object Object]
// [object Array]
// [object Function]
// [object String]