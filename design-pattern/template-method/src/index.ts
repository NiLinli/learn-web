import { AbstractClass } from './Abstract';
import { ConcreteClass1, ConcreteClass2 } from './Concrete';

// 函数调用时候可以使用多态
function clientCode(abstractClass: AbstractClass) {
  abstractClass.templateMethod();
}

console.log('Same client code can work with different subclasses:');
clientCode(new ConcreteClass1());
console.log('');

console.log('Same client code can work with different subclasses:');
clientCode(new ConcreteClass2());
