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
// foo(1);

export {};
