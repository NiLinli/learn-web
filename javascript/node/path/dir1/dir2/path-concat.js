const path = require('path');

// join 把各个片段拼接在一起 正常的拼接
console.log(path.join(__dirname, '../test.json'));


// normalize 将 url 标准化 
console.log(path.normalize('/user/hehe/haha/acg'))
console.log(path.normalize('/user/hehe/haha/acg/'))
console.log(path.normalize('/user/hehe/haha/acg/.'))
console.log(path.normalize('/user/hehe/haha/acg/..'))

// relative 计算两个路径的相对值
console.log(path.relative('/folderA/folderB/test.md', '/folderA'));

// reslove 解析为绝对路径(相对与 working directory 生成)
console.log(path.resolve('./a', './b'))
// /Users/nilinli/Desktop/Note/learn-nodejs/path/dir1/a/b
// /Users/nilinli/Desktop/Note/learn-nodejs/path/dir1/dir2/a/b