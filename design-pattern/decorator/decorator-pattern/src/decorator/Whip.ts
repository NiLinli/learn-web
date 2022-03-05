import { Beverage } from '../component/Beverage';
import { CondimentDecorator } from './CondimentDecorator';

export class Whip extends CondimentDecorator {
  // 用一个实例去记录被装饰者
  constructor(public beverage: Beverage) {
    super();
  }

  getDescription() {
    return this.beverage.getDescription() + ', Whip';
  }

  cost() {
    return this.beverage.cost() + 1;
  }
}
