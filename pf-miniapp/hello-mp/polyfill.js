// 全局变量没有挂载到 global 上面去
// 导致 umd package 读取 global 上面的变量报错
// 需要主动添加 shim 把全局变量挂载上去，保证常见的 umd lib 可以正常使用


global.Object = Object;
global.Array = Array;
// global.Buffer = Buffer;
global.DataView = DataView;
global.Date = Date;
global.Error = Error;
global.Float32Array = Float32Array;
global.Float64Array = Float64Array;
global.Function = Function;
global.Int8Array = Int8Array;
global.Int16Array = Int16Array;
global.Int32Array = Int32Array;
global.Map = Map;
global.Math = Math;
global.Promise = Promise;
global.RegExp = RegExp;
global.Set = Set;
global.String = String;
global.Number = Number;
global.Symbol = Symbol;
global.TypeError = TypeError;
global.Uint8Array = Uint8Array;
global.Uint8ClampedArray = Uint8ClampedArray;
global.Uint16Array = Uint16Array;
global.Uint32Array = Uint32Array;
global.WeakMap = WeakMap;
global.clearTimeout = clearTimeout;
// eslint-disable-next-line no-restricted-globals
global.isFinite = isFinite;
global.parseInt = parseInt;
global.parseFloat = parseFloat;
global.setTimeout = setTimeout;
