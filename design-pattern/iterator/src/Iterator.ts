import { WordsCollection } from './IterableCollection';

export interface Iterator<T> {
  current(): T;
  getPosition(): number;
  next(): T;
  valid(): boolean;
  rewind(): void; // 回到初始位置
}

export class AlphabeticalOrderIterator implements Iterator<string> {
  private collection: WordsCollection;

  private position: number = 0;

  private reverse: boolean = false;

  constructor(collection: WordsCollection, reverse: boolean = false) {
    this.collection = collection;
    this.reverse = reverse;

    if (reverse) {
      this.position = collection.getCount() - 1;
    }
  }

  rewind(): void {
    this.position = this.reverse ? this.collection.getCount() - 1 : 0;
  }

  current(): string {
    return this.collection.getItems()[this.position];
  }

  getPosition(): number {
    return this.position;
  }

  // next 和 valid 可以合并为一个方法
  next(): string {
    const item = this.collection.getItems()[this.position];
    this.position += this.reverse ? -1 : 1;
    return item;
  }

  valid(): boolean {
    if (this.reverse) return this.position >= 0;
    return this.position < this.collection.getCount();
  }
}
