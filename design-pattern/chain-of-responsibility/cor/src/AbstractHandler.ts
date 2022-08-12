import { Handler } from './Handler';

export class AbstractHandler implements Handler<string> {
  private nextHandler: Handler<string> | null = null;

  setNext(h: Handler<string>): Handler<string> {
    this.nextHandler = h;
    // 链式调用 link handler
    return h;
  }

  handle(request: string): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }

    return null;
  }
}
