// 判断一个属性是在实例还是原型
export class Car {
    constructor(model, year, miles) {}

    run() {}
}

Car.prototype.model = 'Accord';


let civic = new Car('Civic', 2019, 10000);

console.log(civic.hasOwnProperty('model')); // true
delete civic.model;
console.log(civic.hasOwnProperty('model')); // false 不在实例上 而在原型上面 
console.log(civic.model); // 'Accord'

console.log('--------------');
// 实际应用 -> 遍历 instance 中的属性 过滤原型中的属性

for (const key in civic) {
    if (civic.hasOwnProperty(key)) {
        const element = civic[key];
        console.log(key);
    }
}