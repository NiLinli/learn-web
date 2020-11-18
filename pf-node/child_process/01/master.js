const { fork } = require('child_process');
const cpus = require('os').cpus();

cpus.forEach((v, i) => {
  fork(__dirname + '/work.js');
});
