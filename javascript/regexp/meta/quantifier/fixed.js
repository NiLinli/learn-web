// x{n} 固定 n 个

const name1 = 'nilinli';
const name2 = 'ninini';

const regexp = /(ni){2}/g;

console.log(name1.match(regexp));
console.log(name2.match(regexp));
