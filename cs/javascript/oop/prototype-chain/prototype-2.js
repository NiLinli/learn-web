function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
}

// prototype 产生： 
// 1. 自动获得一个属性 constructor 指向构造函数
// 2. 如果重新将 prototype 指向一个新的对象 constructor 会丢失

Car.prototype = {
    // constructor: Car, // 手动添加
    toString: function () {
        return `${this.model} years = ${this.year} ,miles = ${this.miles}`;
    }

};

let car1 = new Car('Honda Civic', 2009, 20000);

// instanceof 下列两项是否相等
// - Object.getPrototypeOf(car) 对象所指原型
// - Car.prototype              构造函数所指原型
console.log(car1 instanceof Car); // true
console.log(car1.constructor === Car); // false Car.prototype 上面没有 constructor 属性， 往 Object.prototype 上面寻找
console.log(car1.constructor === Object); // true  Object.prototype 上面指向 Object


// 解决办法
function AirPlane(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
}

let airplane1 = new AirPlane('f15', 2018, 1000000);

for (const key in airplane1) {
    console.log(key);
}

AirPlane.prototype = {
    // constructor: AirPlane, // 添加 (但是有个副作用， 这个属性本来是不可enumerable)
    toString: function () {
        return `${this.model} years = ${this.year} ,miles = ${this.miles}`;
    }
};

// ES5 解决这个问题
Object.defineProperty(AirPlane.prototype, 'constructor', {
    enumerable: false,
    value: AirPlane
})

let airplane2 = new AirPlane('f15', 2018, 1000000);

for (const key in airplane2) {
    console.log(key);
}