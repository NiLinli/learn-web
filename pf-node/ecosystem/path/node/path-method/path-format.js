const path = require('path');

const f1 = path.format({
    root: '/ignored', // 指定 dir ,root 会被忽略
    dir: '/home/user/dir',
    base: 'file.txt'
});

const f2 = path.format({
    root: '/',
    base: 'file.txt', // 指定了 base , 则 name + ext 都会被忽略
    ext: 'ignored'
});

const f3 = path.format({
    root: '/',
    name: 'file',
    ext: '.txt'
});

const pObj = path.parse('/use/loca/bin/file.md');



console.log(f1);
console.log(f2);
console.log(f3);
console.log(pObj);