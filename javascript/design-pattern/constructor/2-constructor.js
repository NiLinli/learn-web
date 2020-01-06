function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
}

Car.prototype.toString = function () {
    return `${this.model} years = ${this.year} ,miles = ${this.miles}`;
};

let car1 = new Car('Honda Civic', 2009, 20000),
    car2 = new Car('Honda According', 2018, 0);

console.log(car1.toString === car2.toString); // true