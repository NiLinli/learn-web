import { Receiver } from './Receiver';

export interface Command {
  execute(): void;
}

export class SimpleCommand implements Command {
  private payload: string;
  constructor(payload: string) {
    this.payload = payload;
  }

  execute(): void {
    console.log(`SimpleCommand: See, I can do simple things like printing (${this.payload})`);
  }
}

// 注册 Receiver
export class ComplexCommand implements Command {
  constructor(private receiver: Receiver, private a: string, private b: string) {}

  execute(): void {
    console.log('ComplexCommand: Complex stuff should be done by a receiver object.');
    this.receiver.doSomething(this.a);
    this.receiver.doSomethingElse(this.b);
  }
}
