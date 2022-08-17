import { travel } from './travel';

// class
export class ArrayIterator implements Iterator<any> {
  private array: string[];
  private nextIndex: number = 0;

  constructor(array: string[]) {
    this.array = array;
    this.nextIndex = 0;
  }

  next() {
    return this.nextIndex < this.array.length
      ? {
          value: this.array[this.nextIndex++],
          done: false,
        }
      : {
          value: undefined,
          done: true,
        };
  }

  map(callback: (value: any) => any): Iterator<any> {
    const iterator = new ArrayIterator(this.array);
    return {
      next: () => {
        const { done, value } = iterator.next();
        return {
          done: done,
          value: done ? undefined : callback(value),
        };
      },
    };
  }
}

// closure + factory
function makeIterator(arr: string[]): Iterator<any> {
  let nextIndex = 0;

  // 返回 iterator
  return {
    next: () =>
      nextIndex < arr.length
        ? {
            value: arr[nextIndex++],
            done: false,
          }
        : {
            value: undefined,
            done: true,
          },
  };
}

// infinite iterator
function createInfiniteIterator() {
  let index = 0;
  return {
    next: () => ({
      value: index++,
      done: false,
    }),
  };
}

const arr = ['1', '2'];

console.log('Closure iterator:');
const it = makeIterator(arr);
travel(it);

console.log('Class iterator:');
let it2 = new ArrayIterator(arr);
travel(it2);

const it3 = it2.map((value: string) => value + '0');
travel(it3);
