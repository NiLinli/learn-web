import { MallardDuck } from "./Duck";
import { FlyNoWayStrategy } from './strategys/FlyNoWayStrategy';

const mallard = new MallardDuck();

mallard.performFly();
mallard.performQuack();

// 动态改变行为
mallard.setFlyBehavior(new FlyNoWayStrategy());
mallard.performFly();
mallard.performQuack();