const str = 'résumé';
const strReverse = str.split('').reverse().join('');
const strReverse1 = str.split(/(?:)/u).reverse().join('');

console.log(strReverse, strReverse1);
