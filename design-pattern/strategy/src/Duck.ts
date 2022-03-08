import { FlyStrategy } from './strategys/FlyStrategy';
import { QuackStrategy } from './strategys/QuackStrategy';
import { SquackStrategy } from './strategys/SquackStrategy';
import { FlyWithWingsStrategy } from './strategys/FlyWithWingsStrategy';

abstract class Duck {
  abstract quackBehavior: QuackStrategy;
  abstract flyBehavior: FlyStrategy;

  constructor() {}

  swim() {}

  display() {}

  // 动态设定行为 -- 在运行时改变行为
  setFlyBehavior(fb: FlyStrategy) {
    this.flyBehavior = fb;
  }

  setQuackBehavior(qb: QuackStrategy) {
    this.quackBehavior = qb;
  }

  performFly() {
    this.flyBehavior.fly();
  }

  performQuack() {
    this.quackBehavior.quack();
  }
}

export class MallardDuck extends Duck {
  quackBehavior: QuackStrategy;
  flyBehavior: FlyStrategy;
  
  constructor() {
    super();
    this.quackBehavior = new SquackStrategy();
    this.flyBehavior = new FlyWithWingsStrategy();
  }

  display() {
    console.log("I'm a really MallardDuck.");
  }
}
