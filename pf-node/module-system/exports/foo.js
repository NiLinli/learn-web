

exports.foo = 'foo';
exports.bar = 'bar';

// 改变了指向 exports 指向一个新的对象, 而非模块的导出对象的引用
exports = {};

// exports 指向改了, 下面的 exports 对象挂载的属性都没有作用了
exports.bar2 = 'bar2';

// exports = module.exports
// exports = {}
// module.exports 还是模块的导出的引用

module.exports.foo3 = 'foo3';   // 有效



// 总的来说
// exports 指向 module.exports 为一个快捷引用
// 所以 exports 不能指向别的对象