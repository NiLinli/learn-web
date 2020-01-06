// 判断一个属性是在实例还是原型

function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
}

Car.prototype.model = 'Accord';
Car.prototype.price = 10000000000;

Car.prototype.toString = function () {
    return `${this.model} years = ${this.year} ,miles = ${this.miles}`;
};

let civic = new Car('Civic', '2018', '10000');

// in : instance 或者 prototype
// hasOwnProperty: instance
// prototype:
function hasPrototypeProperty(object, name) {
    return !object.hasOwnProperty(name) && (name in object);
}

console.log('price' in civic); // true

console.log(hasPrototypeProperty(civic, 'price')); // true
console.log(hasPrototypeProperty(civic, 'model')); // false


// for - in enumerate all properties include both(不可枚举的不包括)
// 1. instance
// 2. prototype
for (const key in civic) {
    const v = civic[key];
    console.log(`${key} : ${v}`);
}

// 改进
for (const key in civic) {
    if (civic.hasOwnProperty(key)) { // 存在于实例当中
        const v = civic[key];
        console.log(`${key} : ${v}`);
    }
}


// 总结：
// 1. 判断遍历的范围
//      in & for-in -> 实例 + 原型链 （采用hasOwnProperty过滤原型链）
//      Object.keys & Object.getOwnPropertyNames -> 实例

// 2. 是否能遍历
// Object.getOwnPropertyNames 除外， 其他都要考虑这个问题

