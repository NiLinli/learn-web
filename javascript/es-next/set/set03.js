const s = new Set();

// C
s.add(1).add(1).add(2).add(3);
console.log(s.size);  // 3

// R
console.log(s.has(1));

// U
// 无

// D
s.delete(1);
console.log(s);

s.clear();
console.log(s);


// 

