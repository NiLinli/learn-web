// AsyncFunction function class
// 并没有全局暴露
const AsyncFunction = Object.getPrototypeOf(async function (params) {}).constructor;

// AsyncFunction([...args], functionBody)
// new AsyncFunction/AsyncFunction 效果相同
