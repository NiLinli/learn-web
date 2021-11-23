const string = ' nixixi  ';


console.log(
  string.replace(/^\s+/, '').replace(/\s+$/, '') === 'nixixi'
)

// 大量回溯, 比上面分两步走慢了 5 倍
const regexp = /^\s*(.*?)\s*$/;

console.log(
  string.replace(regexp, '$1') === 'nixixi'
)
