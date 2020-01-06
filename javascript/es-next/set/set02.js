console.log(NaN === NaN); // false

const s = new Set();

s.add(NaN);
s.add(NaN);
s.add(1);
s.add(1);
s.add(1);
s.add(+0);
s.add(-0);

console.log(s);