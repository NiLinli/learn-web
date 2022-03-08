import { QuackStrategy } from './QuackStrategy';

export class SquackStrategy implements QuackStrategy {
  quack() {
    console.log('Duck is squack!!!');
  }
}
