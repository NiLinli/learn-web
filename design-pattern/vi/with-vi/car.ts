import { Engine, Tires, Engine2 } from '../model';

export class Car {
    description = 'DI';

    constructor(
        public engine: Engine,
        public tires: Tires
    ) { }
    //  Car 类不再创建引擎 engine 或者轮胎 tires。 它仅仅“消费”它们
    // 达到解耦合的作用 需要多少动力的引擎 传入即可
    // 即 容易测试

    // Method using the engine and tires
    drive() {
        return `${this.description} car with ` +
            `${this.engine.cylinders} cylinders and ${this.tires.make} tires.`;
    }
}



let car1 = new Car(new Engine(10), new Tires(1));


// 也会有烦恼， 修改创建 car 实例的代码
// 但是car 本身并没有发生变化
let car2 = new Car(new Engine2(20), new Tires(2));


// Dependency injection：它是一种编程模式，可以让类从外部源中获得它的依赖，而不必亲自创建它们

// 新问题：
// 既然这个东西不是由 Car 类创建，那就是消费者创建咯
// 那些希望得到一个 Car 的人们现在必须创建所有这三部分了：Car、Engine 和 Tires。 Car 类把它的快乐建立在了消费者的痛苦之上。
// 需要一个工厂模式 --> car-factory.ts