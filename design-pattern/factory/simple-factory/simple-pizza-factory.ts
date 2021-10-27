import { Pizza, CheesePizza, ClamPizza, VeggiePizza } from "./pizza";

export class SimplePizzaFactory {

  constructor() { }

  // 处理变化的部分 创建对象的细节
  // 静态方法不用实例化工厂, 但是不能通过继承改变创建方法的行为
  createPizza(type: string): Pizza {
    let pizza: Pizza;

    switch (type) {
      case 'cheese':
        pizza = new CheesePizza();
        break;
      case 'clam':
        pizza = new ClamPizza();
        break;
      case 'viggie':
        pizza = new VeggiePizza();
        break;
      default:
        pizza = new Pizza();
        break;
    }
    return pizza;
  }
}


// js 中 
// 一般直接定义一个函数为简单工厂
// export function createPizzaFactory(type: string): Pizza {
//   let pizza: Pizza;

//   switch (type) {
//     case 'cheese':
//       pizza = new CheesePizza();
//       break;
//     case 'clam':
//       pizza = new ClamPizza();
//       break;
//     case 'viggie':
//       pizza = new VeggiePizza();
//       break;
//     default:
//       pizza = new Pizza();
//       break;
//   }
//   return pizza;
// }




