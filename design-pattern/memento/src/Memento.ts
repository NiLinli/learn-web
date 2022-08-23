export interface Memento {
  getState(): string;

  getName(): string;

  getDate(): string;
}

export class ConcreteMemento implements Memento {
  private state: string;
  private date: string;

  constructor(state: string) {
    this.state = state;
    this.date = new Date().toISOString().slice(0, 19).replace('T', ' ');
  }

  getState(): string {
    return this.state;
  }

  getDate(): string {
    return this.date;
  }

  getName(): string {
    return `${this.date} / (${this.state.slice(0, 9)}...)`;
  }
}
