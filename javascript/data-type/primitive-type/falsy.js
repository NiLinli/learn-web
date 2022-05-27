let falsy = [
  '', // string
  0, -0, NaN, // number
  false, // boolean
  undefined,
  null
];

console.log(falsy.every((v) => !v));