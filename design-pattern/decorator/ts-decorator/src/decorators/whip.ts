import { CondimentDecorator } from './CondimentDecorator';

export default function whip(constructor: any) {
  return class extends CondimentDecorator {
    constructor() {
      super();
    }

    getDescription() {
      const beverage = constructor.prototype;
      const description = beverage.getDescription();
      return description ? description + ', Whip' : 'Whip';
    }

    cost() {
      const beverage = constructor.prototype;
      return beverage.cost() + 1;
    }
  };
}
