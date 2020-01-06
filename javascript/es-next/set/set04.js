// 没有 key , 遍历出来 key = value
const s = new Set(['ni', 'xi', 'xi']);

const it1 = s.keys();
console.log(it1);

const it2 = s.values();
console.log(it2);

const it3 = s.entries();
console.log(it3);

// 默认 iterator 与 values() 返回的 iterator 相同
console.log(Set.prototype[Symbol.iterator] === Set.prototype.values);

for (const item of s) {
  console.log(item);
  
}