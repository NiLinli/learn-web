import { ComplexCommand, SimpleCommand } from './Command';
import { Invoker } from './Invoker';
import { Receiver } from './Receiver';

const invoker = new Invoker();
invoker.setOnStart(new SimpleCommand('Say Hi!'));
const receiver = new Receiver();
invoker.setOnFinish(new ComplexCommand(receiver, 'Send email', 'Save Report'));

invoker.doSomethingImportant();
