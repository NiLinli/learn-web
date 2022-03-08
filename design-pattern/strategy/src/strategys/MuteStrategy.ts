import { QuackStrategy } from './QuackStrategy';

export class MuteStrategy implements QuackStrategy {
  quack() {
    console.log('Duck is MuteQuack!!!');
  }
}
