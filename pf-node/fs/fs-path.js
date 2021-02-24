const fs = require('fs');

console.log(process.cwd())

// 绝对路径
fs.stat('/fs.md', (err,stats) => {
    if(err) console.log(err);

    console.log(JSON.stringify(stats));
}); 


// 相对路径
// process.cwd() 工作区目录 + 路径名
fs.stat('fs.md', (err,stats) => {
    if(err) console.log(err)

    console.log(JSON.stringify(stats));
});