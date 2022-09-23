const { expect } = require('expect');

const favors = 'lemon, apple, pea';
const favorList = ['lemon', 'apple', 'pea'];

// string & Array
expect(favors).toContain('apple');
expect(favorList).toContain('apple');

// Array 中的 Object 使用 Equal
const beverages = [
  {
    delicious: true,
    sour: false,
  },
];
const myBeverage = { delicious: true, sour: false };
expect(beverages).toContainEqual(myBeverage);
