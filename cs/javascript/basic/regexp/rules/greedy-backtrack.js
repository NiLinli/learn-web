// 标准量词是匹配优先的
// 总是尝试匹配到能匹配的上限

// back tracking
// 匹配优先量词 引擎会先选择尝试
// 忽略优先量词 引擎会先选择跳过尝试
// 选择完成之后
// 如果满足条件, 匹配完成
// 如果不满足条件, 就开始回到备用状态, 再开始判断, 一直回溯到最小匹配量词
// 回溯到最后一个备用状态还不满足就匹配失败

// 回溯会也会保存子表达式里面的状态以及匹配成功的文本

console.log('regexes'.match(/\b(\w+)s\b/));

// $1 24
console.log('about 24 characters long'.match(/^.*([0-9][0-9])/));

// $1 4
console.log('about 24 characters long'.match(/^.*([0-9]+)/));


