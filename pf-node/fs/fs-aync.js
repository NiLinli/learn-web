const fs = require('fs');

// async
fs.unlink('/dfsa.md', (err) => {
    if (err) {
        throw err;
    }
    console.log('删除成功 !!!');
});

// sync 不推荐使用同步操作
try {
    fs.unlinkSync('./dfsa.md');
    console.log('删除成功 !!!');
} catch (error) {
    throw error;
}

