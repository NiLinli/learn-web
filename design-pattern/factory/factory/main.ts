import BjPizzaStore from './store/BjPizzaStore';
import WhPizzaStore from './store/WhPizzaStore';

const bjPizzaStore = new BjPizzaStore();
const whPizzaStore = new WhPizzaStore();

bjPizzaStore.orderPizza('cheese');
whPizzaStore.orderPizza('cheese');

