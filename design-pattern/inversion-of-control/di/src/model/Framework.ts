import { Tire } from './Tire';

export class Framework {
  public tire: Tire;
  constructor(public make: number) {
    this.tire = new Tire(make);
  }
}
