import { Engine, SuperEngine, Framework, Tire } from './model-vi';

// IoC 通过 DI 实现
class Car {
  public engine: Engine;
  public framework: Framework;
  public description = 'DI';

  constructor(framework: Framework, engine: Engine) {
    this.framework = framework;
    this.engine = engine;
  }
}

const tire = new Tire(10);
// 实例化的位置可以替换
// const tire = new Tire(20);
const framework = new Framework(tire);
const engine = new Engine();
// const engine = new SuperEngine;
const car = new Car(framework, engine);


// 上述实例化过程可以通过 IoC container 来实现
// 可以等效于
// const car = injector.get(Car);
