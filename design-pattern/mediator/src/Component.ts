import { Mediator } from './Mediator';

export class BaseComponent {
  protected mediator: Mediator | undefined;

  constructor(mediator?: Mediator) {
    this.mediator = mediator;
  }

  setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }
}

export class Component1 extends BaseComponent {
  doA() {
    console.log('Component 1 does A.');
    this.mediator?.notify(this, 'A');
  }

  doB() {
    console.log('Component 1 does B.');
    this.mediator?.notify(this, 'B');
  }
}

export class Component2 extends BaseComponent {
  doC() {
    console.log('Component 2 does C.');
    this.mediator?.notify(this, 'C');
  }

  doD() {
    console.log('Component 2 does D.');
    this.mediator?.notify(this, 'D');
  }
}
