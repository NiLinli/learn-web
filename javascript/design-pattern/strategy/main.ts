import { MallardDuck } from "./duck";
import { FlyNoWay } from "./fly-behavior";

const mallard = new MallardDuck();

mallard.performFly();
mallard.performQuack();

// 动态改变行为
mallard.setFlyBehavior(new FlyNoWay());
mallard.performFly();