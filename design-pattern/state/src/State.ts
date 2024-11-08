import { Context } from './Context';

export abstract class State {
  protected context!: Context;

  setContext(context: Context) {
    this.context = context;
  }

  abstract request1(): void;
  abstract request2(): void;
}

export class ConcreteStateA extends State {
  request1(): void {
    console.log('ConcreteStateA handles request1.');
    console.log('ConcreteStateA wants to change the state of the context.');
    this.context.transitionTo(new ConcreteStateB());
  }

  request2(): void {
    console.log('ConcreteStateA handles request2.');
  }
}

export class ConcreteStateB extends State {
  request1(): void {
    console.log('ConcreteStateB handles request1.');
  }

  request2(): void {
    console.log('ConcreteStateB handles request2.');
    console.log('ConcreteStateB wants to change the state of the context.');
    this.context.transitionTo(new ConcreteStateA());
  }
}
