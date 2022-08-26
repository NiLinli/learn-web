const func = () => {};
const arr = [1, 2, 3];
const obj = {};

function foo(o: object): void {}

// * instanceof Object
// * => object
foo(func);
foo(arr);
foo(obj);
foo(new Number(1));

// not ok
// primary type
// foo(1);
// foo(BigInt(123));
// foo(Symbol(1));

export {};
