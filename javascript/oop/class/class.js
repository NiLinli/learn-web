class Car {
    // constructor method 和 class 名字相同 in Java 
    constructor(model, year, miles) {
        this.model = model;
        this.year = year;
        this.miles = miles;
    }

    toString() {
        return this.model + ' has done ' + this.miles + ' miles';
    }
}


var car1 = new Car('Honda Civic', 2009, 20000);
console.log(car1.toString());
console.log(Car.prototype.toString === car1.toString);