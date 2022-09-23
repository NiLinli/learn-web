// prototype 特性
// 1. the instance of the [[prototype]]'s pointer is assgined when the constructor is called  

function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
}

Car.prototype.toString = function () {
    return `${this.model} years = ${this.year} ,miles = ${this.miles}`;
};

let car1 = new Car('Honda Civic', 2009, 20000);

// 2. dynamic nature --> the loose link between the instance and the prototype
// 即在实例创建之后在原型上面添加方法依然可以找到
Car.prototype.run = function(){
    return `${this.model} run so slowly`;
};

console.log(car1.run());

// 2. overwritten the prototype -> 实例指向的旧的原型， 肯定访问不到新的方法
Car.prototype = {
    constructor: Car,
    jump: function(){
        return `${this.model} jump so high`;
    }
};

console.log(car1.run()); // ok
console.log(car1.jump()); // error