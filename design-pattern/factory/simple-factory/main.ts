import { PizzaStore } from "./PizzaStore";
import { SimplePizzaFactory } from "./SimplePizzaFactory";

const store = new PizzaStore(new SimplePizzaFactory());


const pizza = store.orderPizza('cheese');

console.log(pizza);
