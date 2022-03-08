import { FlyStrategy } from './FlyStrategy';

export class FlyNoWayStrategy implements FlyStrategy {
  fly() {
    console.log('Duck can not fly.');
  }
}
