import { State } from './State';

export class Context {
  private state!: State;

  constructor(initialState: State) {
    this.transitionTo(initialState);
  }

  transitionTo(state: State) {
    this.state = state;
    this.state.setContext(this);
  }

  request1(): void {
    this.state.request1();
  }

  request2(): void {
    this.state.request2();
  }

  other(): void {}

  other2(): void {}
}
