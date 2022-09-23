class SuperType {
    constructor(name) {
        this.name = name;
        this.colors = ['green', 'red'];
    }

    sayName() {
        console.log(this.name);
    }
}

// 3 prasitic combination inheritance
class SubType extends SuperType {
    constructor(name, age) {
        super(name);
        this.age = age;
    }

    sayAge() {
        console.log(this.age);
    }
}

let sub1 = new SubType();
console.log(sub1 instanceof SubType); // true
console.log(sub1 instanceof SuperType); // true