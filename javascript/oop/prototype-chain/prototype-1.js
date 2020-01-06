// instance -> prototype <-> constructor 
// instance 和 constructor's prototype 直接联系
// instance 和 constructor 没有直接联系

function Car() {

}

let car = new Car();

// 在 prototype 上面找到 construtor 属性, 然后访问, 并不是直接访问
console.log(car.constructor);   
// instance 访问的 constructor 是 原型上面查找而得到的 ( 证明 实例 和 constructor 没有关系 )
console.log(car.constuctor === Car.prototype.constuctor);

console.log(car.__proto__ === car.constructor.prototype);
console.log(car.__proto__ === Object.getPrototypeOf(car));

// instance 虽然和 prototype 有直接联系
// 1. __proto__ 直接访问(调试)
// 2. instance prototype 上面查找 constructor(非直接) , 然后 constructor 上面指向 prototype
// 3. Object.getPrototypeOf 直接访问(ie9+)
