import { BJPizzaStore } from "./pizza-store/bj-pizza-store";

const bjPizzaStore = new BJPizzaStore();

const cheesePizza =  bjPizzaStore.orderPizza('cheese');

console.log(cheesePizza)

