import { WordsCollection } from './IterableCollection';
import { AlphabeticalOrderIterator } from './Iterator';

const wordsCollection = new WordsCollection();
wordsCollection.addItem('First');
wordsCollection.addItem('Second');
wordsCollection.addItem('Third');

console.log('Straight traversal:');
const iterator = wordsCollection.createIterator();
while (iterator.valid()) {
  console.log(iterator.next());
}

console.log('');
console.log('Reverse traversal:');
// 客户端直接创建
// 可随时切换新的 iterator, 不用修改 ConcreteCollection 类
const reverseIterator = new AlphabeticalOrderIterator(wordsCollection, true);

while (reverseIterator.valid()) {
  console.log(reverseIterator.next());
}
