const { expect } = require('expect');

// toEqual 可以对比 asymmetric value

// number
// closeTo
expect(0.1 + 0.2).toEqual(expect.closeTo(0.3));
expect({
  title: '0.1 + 0.2',
  sum: 0.1 + 0.2,
}).toEqual({
  title: '0.1 + 0.2',
  sum: expect.closeTo(0.3, 5),
});

// array
const expected = ['Alice', 'Bob'];
expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(expected));
expect(['Bob', 'Eve']).not.toEqual(expect.arrayContaining(expected));

// string

// any
expect(123).toEqual(expect.anything());
expect({}).toEqual(expect.anything());
// expect(null).toEqual(expect.anything());
// expect(undefined).toEqual(expect.anything());

// class
class Cat {
  constructor(name) {
    this.name = name;
  }
}

console.log(expect);
expect(new Cat('wahaha')).toEqual(expect.any(Cat));
