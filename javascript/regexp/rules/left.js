
// 每一轮都是尝试所有情况 左边
// 然后才会进入下一轮

const string = 'The dragging belly indicates that your cat is too fat';

console.log(string.match(/(fat|cat|belly)/));

// 匹配到 belly 而不是 fat