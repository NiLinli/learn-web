import { Context } from "./Context";
import { ConcreteStateA } from "./State";

const ctx = new Context(new ConcreteStateA());
ctx.request2();
ctx.request1();
ctx.request2();
ctx.request2();