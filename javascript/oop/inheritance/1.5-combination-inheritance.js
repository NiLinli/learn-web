// pseudoclassical inheritance
// pseudo 虚伪的

function SuperType(name) {
    this.name = name;
    this.colors = ['red', 'blue', 'green'];
}

SuperType.prototype.sayName = function () {
    console.log(this.name);
};

function SubType(name, age) {
    SuperType.call(this, name); // super constructor called second

    this.age = age;
}

// inherit methods
SubType.prototype = new SuperType(); // super constructor called first -> not efficient

SubType.prototype.sayAge = function () {
    console.log(this.age);
};

let sub1 = new SubType('nixixi', 18);

console.log(sub1.sayName());
console.log(sub1.sayAge());

console.log(sub1 instanceof SubType); // true
console.log(sub1 instanceof SuperType); // true

// 创建一个子实例 需要调用两次 super constructor
// SubType.prototype 放了多余的 name 与 age