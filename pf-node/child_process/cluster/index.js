const cluster = require('cluster');
const master = require('./master');
const work = require('./work');

cluster.isMaster ? master() : work();
// cluster.isWorker
