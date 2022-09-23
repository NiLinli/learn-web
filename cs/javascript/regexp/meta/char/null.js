const str = `\0\0abcd${String.fromCharCode(0)}ekjkdjflas`;

const regexp = /\0/g;
const regexp1 = /\u0000/g;

console.log(str.match(regexp));
console.log(str.match(regexp1));
