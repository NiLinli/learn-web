import { ArrayIterator } from './create-iterator';
import { travel } from './travel';

const str = '😄0😄';

class IterableCollection implements Iterable<any> {
  private array = ['1', '2', '3'];
  [Symbol.iterator]() {
    return new ArrayIterator(this.array);
  }
}

console.log('Iterator: ');
const it = str[Symbol.iterator]();
travel(it);

console.log("Iterator equal Iterator's iterator: ");
const iterableIt = it[Symbol.iterator]();
console.log(it === iterableIt);

console.log('for-of: ');
for (const value of str) {
  console.log(value);
}

console.log('customObject for-of: ');
for (const value of new IterableCollection()) {
  console.log(value);
}
