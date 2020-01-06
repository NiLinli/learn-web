import { PizzaStore } from "./pizza-store";
import { SimplePizzaFactory } from "./simple-pizza-factory";

const store = new PizzaStore(new SimplePizzaFactory());


const pizza = store.orderPizza('cheese');

console.log(pizza);
