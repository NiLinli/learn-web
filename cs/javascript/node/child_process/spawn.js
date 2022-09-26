// spawn [spɔ:n] 产卵
const { spawn } = require('child_process');

// a streaming interface for I/O.
// 适用 I/0 数据比较大的情况
// const ls_process = spawn('ls', ['-lh', '/usr']);

// ls_process.stdout.on('data', (data) => {
//   console.log(`stdout: ${data}`);
// });

// ls_process.stderr.on('data', (data) => {
//   console.log(`stderr: ${data}`);
// });

// ls_process.on('close', (code) => {
//   console.log(`子进程退出，退出码 ${code}`);
// });

// ls_process.on('error', (code) => {
//  console.error('启动子进程失败');
// });

// ps ax | grep ssh

const ps = spawn('ps', ['ax']);
const grep = spawn('grep', ['ssh']);

ps.stdout.on('data', (data) => {
  grep.stdin.write(data);
});

ps.stderr.on('data', () => {
  console.error(`ps 的 stderr: ${data}`);
});

ps.on('close', (code) => {
  if (code !== 0) {
    console.log(`ps 进程退出，退出码 ${code}`);
  }
  grep.stdin.end();
});

grep.stdout.on('data', (data) => {
  console.log(data.toString());
});

grep.stderr.on('data', (data) => {
  console.error(`grep 的 stderr: ${data}`);
});

grep.on('close', (code) => {
  if (code !== 0) {
    console.log(`grep 进程退出，退出码 ${code}`);
  }
  grep.stdin.end();
});
