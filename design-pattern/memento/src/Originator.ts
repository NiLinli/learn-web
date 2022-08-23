import { ConcreteMemento, Memento } from './Memento';

export class Originator {
  private state: string;

  constructor(state: string) {
    this.state = state;
    console.log(`Originator: My initial state is: ${state}`);
  }

  doSomething(): void {
    console.log("Originator: I'm doing something important.");
    this.state = this.generateRandomString(30);
    console.log(`Originator: and my state has changed to: ${this.state}`);
  }

  // 对状态的保存和还原只能在原发器中进行
  save(): Memento {
    // 对状态进行序列化存储
    return new ConcreteMemento(this.state);
  }

  restore(memento: Memento): void {
    // 状态取回来的时候, 进行反序列化
    this.state = memento.getState();
    console.log(`Originator: My state has changed to: ${this.state}`);
  }

  private generateRandomString(length: number = 10): string {
    const charSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    return Array.apply(null, Array(length))
      .map(() => charSet.charAt(Math.floor(Math.random() * charSet.length)))
      .join('');
  }
}
