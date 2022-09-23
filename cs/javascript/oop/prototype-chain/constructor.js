function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
}

Car.prototype.toString = function () {
    return `${this.model} years = ${this.year} ,miles = ${this.miles}`;
};

let civic = new Car('civic', 1 ,1000);
console.log(civic.toString());

console.log(civic.constructor === Car); // 每个实例 都从原型上面继承 constructor(在 Car.prototype 上面) 属性， 指向Car

console.log(civic.__proto__ === Car.prototype);

console.log(civic.__proto__ ===  civic.constructor.prototype);


function Foo(){
    return '123';
}

let foo = new Foo();

console.log(foo);

