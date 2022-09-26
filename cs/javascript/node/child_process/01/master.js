const { fork } = require('child_process');
const cpus = require('os').cpus();

cpus.forEach((v, i) => {
  fork(__dirname + '/work.js');
});

// Master-Worker 模式 => 主从模式
// Master 不负责具体的业务处理, 负责调度和管理工作进程
// Worker 负责具体的业务处理
