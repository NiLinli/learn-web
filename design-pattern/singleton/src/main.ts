import { EarlySingleton } from './EarlySingleton';
import { LazilySingleton } from './LazilySingleton';
import { ClosureSingleton } from './ClosureSingleton';

// Constructor of class 'EarlySingleton' is private and only accessible within the class declaration.
// new EarlySingleton();

const early = EarlySingleton.getInstance();
early.sayHello();

const lazily = LazilySingleton.getInstance();
lazily.sayHello();

const closure = ClosureSingleton.getInstance();
closure.sayHello();