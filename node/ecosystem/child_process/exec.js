const { exec, execSync } = require('child_process');

// 衍生 shell
// 在 shell 中执行 command, 缓冲产生的输出
// /bin/sh or cmd.exe

exec('cat *js | wc -l', (error, stdout, stderr) => {
  if (error) {
    console.error(`执行的错误： ${error}`);
    return;
  }

  console.log(`stdout: ${stdout}`);
  console.log(`stderr: ${stderr}`);
});

console.log(execSync('echo "\\$HOME 变量为 $HOME"', { encoding: 'utf-8' }));
// JS 会 escape 一遍:  'echo "\\$HOME 变量为 $HOME"'  => 'echo "\$HOME 变量为 $HOME"' 