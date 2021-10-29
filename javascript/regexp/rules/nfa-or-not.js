const string = 'nfa not';

console.log(string.match(/nfa|nfa not/));

// 匹配到了 nfa, 而不是 nfa not
// 表达式优先, js 使用的引擎是 nfa
