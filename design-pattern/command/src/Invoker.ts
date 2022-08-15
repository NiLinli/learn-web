import { Command } from './Command';

// 注册 Command, 也可以组合一些 Command 或者其他操作
export class Invoker {
  private onStart: Command | undefined;
  private onFinish: Command | undefined;

  setOnStart(c: Command) {
    this.onStart = c;
  }

  setOnFinish(c: Command) {
    this.onFinish = c;
  }

  public doSomethingImportant(): void {
    console.log('Invoker: Does anybody want something done before I begin?');
    if (this.isCommand(this.onStart)) {
      this.onStart.execute();
    }

    console.log('Invoker: ...doing something really important...');

    console.log('Invoker: Does anybody want something done after I finish?');
    if (this.isCommand(this.onFinish)) {
      this.onFinish.execute();
    }
  }

  private isCommand(object: any): object is Command {
    return object.execute !== undefined;
  }
}
