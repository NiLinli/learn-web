import { AlphabeticalOrderIterator, Iterator } from './Iterator';

export interface IterableCollection<T> {
  createIterator(): Iterator<T>;
}

export class WordsCollection implements IterableCollection<string> {
  private items: string[] = [];

  public getItems(): string[] {
    return this.items;
  }
  public addItem(item: string): void {
    this.items.push(item);
  }

  public getCount(): number {
    return this.items.length;
  }

  createIterator(): Iterator<string> {
    return new AlphabeticalOrderIterator(this);
  }

  // createReverseIterator(): Iterator<string> {
  //   return new AlphabeticalOrderIterator(this, true);
  // }
}
