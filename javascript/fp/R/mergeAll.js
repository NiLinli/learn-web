const R = require('ramda');

console.log(R.mergeAll([{foo:1},{bar:2},{baz:3}])); 
console.log(R.mergeAll([{foo:1},{foo:2},{bar:2}]));