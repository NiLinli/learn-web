// Unix 使用, 不产生新的 shell, 稍微更高效, 但是在 Windows 上面不产生新的 shell 不能执行

const { execFile } = require('child_process');

// 执行的是 file(可执行文件, PATH 环境变量目录下也可以) 而不是 command
// 适用场景: 执行一个应用(不产生大量输出的)并获取输出
const child = execFile('node', ['--version'], (error, stdout, stderr) => {
  if (error) {
    throw error;
  }

  console.log(stdout);
});
