// 默认 public

// private 不能在声明它的类的外部访问
// 1. 实例不能访问
// 2. 子类的方法中也不能访问
class Animal {
    private name: string;

    constructor(theName: string) {
        this.name = theName;
    }

    move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Cat extends Animal {
    constructor(theName: string) {
        super(theName);
    }

    sayHello() {
        // console.log(`${this.name} sayHello`); // error
    }
}

let animal1: Animal = new Animal('kitty');
// animal1.name; // error

// protected
// 实例不能访问
class Person {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Employee extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee('Howard', 'Sales');
console.log(howard.getElevatorPitch());
// console.log(howard.name); // error
