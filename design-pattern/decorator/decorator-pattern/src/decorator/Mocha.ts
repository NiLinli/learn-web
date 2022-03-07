import { Beverage } from '../component/Beverage';
import { CondimentDecorator } from './CondimentDecorator';

export class Mocha extends CondimentDecorator {
  // 用一个实例去记录被装饰者
  constructor(public beverage: Beverage) {
    super();
  }

  getDescription() {
    return this.beverage.getDescription() + ', Mocha';
  }

  cost() {
    return this.beverage.cost() + 0.2;
  }
}
