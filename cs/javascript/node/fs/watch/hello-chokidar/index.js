const chokidar = require('chokidar');

const watcher = chokidar.watch('./src');
const log = console.log;

watcher
  // 常规
  .on('add', (path) => log(`File ${path} has been added`)) // 文件加入 watcher 触发事件
  .on('change', (path, stats) => log(`File ${path} has been changed`))
  .on('unlink', (path) => log(`File ${path} has been removed`))
  // 其他
  .on('addDir', (path) => log(`Directory ${path} has been added`))
  .on('unlinkDir', (path) => log(`Directory ${path} has been removed`))
  .on('error', (error) => log(`Watcher error: ${error}`))
  .on('ready', () => log('Initial scan complete. Ready for changes'))
  .on('raw', (event, path, details) => {
    // internal
    log('Raw event info:', event, path, details);
  });

setTimeout(() => {
  watcher.add('./package.json');
}, 10000);

setTimeout(() => {
  watcher.unwatch('./package.json');
}, 2000);

setTimeout(() => {
  watcher.close();
}, 1000 * 60);


console.log(watcher.getWatched());
