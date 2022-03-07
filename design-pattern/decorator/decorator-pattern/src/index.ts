import { Beverage } from './component/Beverage';
import { Espresso } from './component/Espresso';
import { HouseBlend } from './component/HouseBlend';
import { Mocha } from './decorator/Mocha';
import { Whip } from './decorator/Whip';

function main() {
  const beverage1 = new Espresso();
  getDescriptionAndCost(beverage1);

  let beverage2 = new Espresso();
  beverage2 = new Mocha(beverage2);
  beverage2 = new Whip(beverage2);
  getDescriptionAndCost(beverage2);

  let beverage3 = new HouseBlend();
  beverage3 = new Whip(beverage3);
  getDescriptionAndCost(beverage3);  
}

function getDescriptionAndCost(beverage: Beverage) {
  console.log(`${beverage.getDescription()} $${beverage.cost()}`);
}

main();
