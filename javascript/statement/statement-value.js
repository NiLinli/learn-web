// block return the last statement value in the block
// statement value 存在: statement 可以作为一个 expression 看待
var a, b;

a = eval(`
  if (true) {
    b = 4 + 38;
  }
`);

console.log(a);

// ES7
// var c, d;
// c = do {
//   if (true) {
//     d = 4 + 38;
//   }
// };

// console.log(c)