function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;

    this.toString = function () {
        return `${this.model} years = ${this.year} ,miles = ${this.miles}`;
    };
}

// JavaScript 构造器创建一个对象后
// 新对象就会具有构造器原型对象上面所有的属性


let car1 = new Car('Honda Civic', 2009, 20000),
    car2 = new Car('Honda According', 2018, 0);

console.log(car1.toString === car2.toString); // false