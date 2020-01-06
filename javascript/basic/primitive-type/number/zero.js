// normal zero positive zero
// negative zero

const a = 0 / -3;
const b = 0 * -3;

console.log(a, b);

// stringfy negative zero (can not)
console.log(a.toString());
console.log(a + '');
console.log(JSON.stringify(a));

// string to number (can)
const c = '-0';
console.log(+ c);
console.log(Number(c));
console.log(JSON.parse(c));

// comparison
console.log(a === b);
console.log(a === 0);
console.log(a == b);
console.log(a == 0);

function isNegZero(n) {
  n = Number(n);
  return n === 0 && (1 / n === -Infinity);
}

console.log(isNegZero(a))