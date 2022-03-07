import { Beverage } from './Beverage';
import whip from './decorators/whip';

// 使用时候定义即可
@whip
export class MochaBeverage extends Beverage {
  constructor() {
    super();
  }
}
