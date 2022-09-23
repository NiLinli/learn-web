const { expect } = require('expect');

class ArgumentError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ArgumentError';
  }
}

function flat(arr, depth = 1, ...rest) {
  if (rest.length !== 0) {
    throw new ArgumentError('flat function have only two arguments more!');
  }
}

const wrapperFunc = () => {
  flat([1, 2, 3, 4], 1, 200);
};

expect(wrapperFunc).toThrow('flat function have only two arguments more!');
expect(wrapperFunc).toThrow(/two arguments /);
expect(wrapperFunc).toThrow(ArgumentError);
