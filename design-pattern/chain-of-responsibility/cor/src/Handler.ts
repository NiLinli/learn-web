export interface Handler<T> {
  setNext(h: Handler<T>): Handler<T>;
  handle(request: T): T | null;
}
