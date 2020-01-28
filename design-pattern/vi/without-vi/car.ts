import { Engine, Engine2, Tires } from '../model';

export class Car {

    public engine: Engine; // Car 类需要一个引擎 (engine) 和一些轮胎 (tire)，它没有去请求现成的实例
    public tires: Tires; //  而是在构造函数中用具体的 Engine 和 Tires 类实例化出自己的副本
    public description = 'No DI';

    constructor() {
        this.engine = new Engine(12);

        // engine 升级 (需要改写 Car 的代码)
        // 测试 engine 不同版本 (需要改写 Car 的代码)
        // this.engine = new Engine(theNewParameter)


        this.tires = new Tires(11);
    }

    // Method using the engine and tires
    drive() {
        return `${this.description} car with ` +
            `${this.engine.cylinders} cylinders and ${this.tires.make} tires.`;
    }
}

// engine 的变化 -> Car 类的变化 -> 耦合性太高 