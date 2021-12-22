const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

// cluster.settings 配置
// cluster.setupMaster([settings]) 更改配置

console.log(`master 进程 ${process.pid} 正在运行`);

cluster.setupMaster({
  exec: 'work.js'
});

// 衍生工作进程
for (let i = 0; i < numCPUs; i++) {
  // 对 child_process.fork 的封装, 返回 cluster.Worker
  const work = cluster.fork();

  // work 实例做其他事情
  // ...
}

let numReqs = 0;

// cluster.workers 存储了活跃的工作进程对象
for (const id in cluster.workers) {
  const work = cluster.workers[id];

  work.on('message', (msg) => {
    if (msg.cmd && msg.cmd === 'notifyRequest') {
      numReqs += 1;
    }
    console.log(msg, work.id);
  });

  work.on('disconnect', () => {
    console.log(`工作进程 ${id} 已断开连接`);
  });

  // 工作进程关闭
  work.on('exit', (code, signal) => {
    // code 正常退出码
    // signal 导致进程被杀死的信号名称(异常)
    if (signal) {
      return console.log(`work 进程 ${id} 已被信号 ${signal} 杀死`);
    }

    if (code !== 0) {
      return console.log(`work 进程 ${id} 退出，退出码: ${code}`);
    }

    console.log(`work 进程 ${id} 成功退出`);
  });
}

// 对 work 进程操作
// work.kill();

// 监听所有的 work exit 事件
cluster.on('exit', (worker, code, signal) => {
  if (signal) {
    return console.log(`work ${worker.id} 进程已被信号 ${signal} 杀死`);
  }

  if (code !== 0) {
    return console.log(`work ${worker.id} 进程退出，退出码: ${code}`);
  }

  console.log('work ${worker.id} 进程成功退出');
});
