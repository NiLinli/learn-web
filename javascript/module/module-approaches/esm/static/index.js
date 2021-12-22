import { a, addA } from './foo';
import bar, { sayHello } from './bar';

console.log(a);
// Cannot set property a of #<Object> which has only a getter
// a++;
addA();

console.log(a);



console.log(bar);
sayHello();


