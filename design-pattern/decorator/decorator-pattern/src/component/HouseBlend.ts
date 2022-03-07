import { Beverage } from './Beverage';

export class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = 'HouseBlend';
  }

  cost(): number {
    return .99;
  }
}
