const sum = require('../src/sum');

// hello jest
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

// toBe
test('two plus two is four', () => {
  // toBe 使用的 Object.is() 来进行比对
  expect(2 + 2).toBe(4);
});

// toEqual 递归对比
test('object assiginment', () => {
  const data = {
    one: 1,
    two: 2,
    obj: {
      name: 123
    }
  }

  expect(data).toEqual({
    one: 1,
    two: 2,
    obj: {
      name: 123
    }
  });
});

// not
test('adding positive number is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
});