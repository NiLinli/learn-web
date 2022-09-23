let m;
if (Math.random() > 0.5) {
  m = require('./bar');
} else {
  m = require('./foo');
}

console.log(m.name);
