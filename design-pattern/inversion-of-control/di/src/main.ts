import { Engine, SuperEngine, Framework } from './model';

class Car {
  public engine: Engine;
  public framework: Framework;
  public description = 'No DI';

  constructor(make: number) {
    this.engine = new Engine();
    // 修改
    // this.engine = new SuperEngine();
    this.framework = new Framework(10);
  }
}

const car = new Car(10);

// 如果要修改 Engine 需要修改 Car 代码
// 如果要修改 Tire, 需要修改 Framework or Car 的代码
