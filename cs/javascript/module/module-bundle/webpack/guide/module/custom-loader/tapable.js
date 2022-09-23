const { SyncHook, SyncBailHook, SyncWaterfallHook, SyncLoopHook, AsyncParallelHook, AsyncParallelBailHook, AsyncSeriesHook, AsyncSeriesBailHook, AsyncSeriesWaterfallHook } = require('tapable');

class Car {
  constructor() {
    this.hooks = {
      accelerate: new SyncHook(['newSpeed']),
      brake: new SyncHook(),
      calculateRoutes: new AsyncParallelHook(['source', 'target', 'routesList']),
    };
  }

  setSpeed(newSpeed) {
    // following call returns undefined even when you returned values
    // 触发
    this.hooks.accelerate.call(newSpeed);
  }

  useNavigationSystemPromise(source, target) {
    const routesList = new List();
    // 触发
    return this.hooks.calculateRoutes.promise(source, target, routesList).then((res) => {
      // res is undefined for AsyncParallelHook
      return routesList.getRoutes();
    });
  }

  useNavigationSystemAsync(source, target, callback) {
    const routesList = new List();
    // 触发
    this.hooks.calculateRoutes.callAsync(source, target, routesList, (err) => {
      if (err) return callback(err);
      callback(null, routesList.getRoutes());
    });
  }
}

const myCar = new Car();

// 监听
// 参数
myCar.hooks.accelerate.tap('LoggerPlugin', (newSpeed) => console.log(`Accelerating to ${newSpeed}`));

// 没有参数
myCar.hooks.brake.tap('WarningLampPlugin', () => warningLamp.on());

// 参数
myCar.hooks.calculateRoutes.tapPromise('GoogleMapsPlugin', (source, target, routesList) => {
  // return a promise
  return google.maps.findRoute(source, target).then((route) => {
    routesList.add(route);
  });
});
