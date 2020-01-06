const path = require('path');

console.log(`/foo/bar is Absolute? ${path.isAbsolute('/foo/bar')}`);
console.log(`/baz/.. is Absolute? ${path.isAbsolute('/baz/..')}`);
console.log(`qux/ is Absolute? ${path.isAbsolute('qux/')}`);
console.log(`. is Absolute? ${path.isAbsolute('.')}`);