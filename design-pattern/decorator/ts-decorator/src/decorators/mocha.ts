import { CondimentDecorator } from './CondimentDecorator';

export default function mocha(constructor: any) {
  return class extends CondimentDecorator {
    constructor() {
      super();
    }

    getDescription() {
      const beverage = constructor.prototype;
      const description = beverage.getDescription();
      return description ? (description + ', Mocha') : 'Mocha';
    }

    cost() {
      const beverage = constructor.prototype;
      return beverage.cost() + 2.1;
    }
  };
}
