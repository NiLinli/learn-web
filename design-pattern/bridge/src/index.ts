import { Abstraction, ExtendedAbstraction } from './Abstraction';
import { ConcreteImplementationA, ConcreteImplementationB } from './Implementation';

let implementation = new ConcreteImplementationA();
let abstraction = new Abstraction(implementation);
clientCode(abstraction);

implementation = new ConcreteImplementationB();
abstraction = new Abstraction(implementation);
clientCode(abstraction);

abstraction = new ExtendedAbstraction(implementation);
clientCode(abstraction);

function clientCode(abstraction: Abstraction) {
  console.log(abstraction.operation());
}
