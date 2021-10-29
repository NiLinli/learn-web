import { Pizza } from "./Pizza";
import { PizzaIngredientFactory } from '../ingredient/PizzaIngredientFactory';


export class BjStyleCheesePizza extends Pizza {

  ingredientFactory: PizzaIngredientFactory;

  // 引用抽象工厂, 对修改关闭
  constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.ingredientFactory = ingredientFactory;
  }

  prepare() {
    console.log('Pizza prepare!');
    console.log(this.ingredientFactory.createCheese());
    console.log(this.ingredientFactory.createDough());
  }

  box() {
    console.log('BJStyleCheesePizza box!');
  }
}


export class BjStyleVeggiePizza extends Pizza {

  ingredientFactory: PizzaIngredientFactory;

  constructor(ingredientFactory: PizzaIngredientFactory) {
    super();
    this.ingredientFactory = ingredientFactory;
  }

  prepare() {
    console.log('Pizza prepare!');
    this.ingredientFactory.createCheese();
    this.ingredientFactory.createDough();
  }

  box() {
    console.log('BJStyleVeggiePizza box!');
  }
}