import { Beverage } from './Beverage';
import whip from './decorators/whip';
import mocha from './decorators/mocha';

// 使用时候定义即可
@mocha
@whip
export class MochaWhipBeverage extends Beverage {
  constructor() {
    super();
  }
}
