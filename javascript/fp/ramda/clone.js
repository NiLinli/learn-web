const R = require('ramda');

// deep Clone

const objs = [{}, {}, {}];
const objectsClone = R.clone(objs);

console.log(objs === objectsClone);
console.log(objs[0] === objectsClone[0]);