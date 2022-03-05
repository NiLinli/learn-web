import { MochaBeverage } from './MochaBeverage';
import { MochaWhipBeverage } from './MochaWhipBeverage'

const beberage1 = new MochaBeverage();
getDescriptionAndCost(beberage1);

const beberage2 = new MochaWhipBeverage();
getDescriptionAndCost(beberage2);

function getDescriptionAndCost(beverage: any) {
  console.log(`${beverage.getDescription()} $${beverage.cost()}`);
}
