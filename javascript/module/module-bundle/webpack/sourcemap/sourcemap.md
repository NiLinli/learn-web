# sourcemap

## 流程

1. 编译打包工具生成 sourcemap 文件
2. js 执行代码(包括 `eval`) 会把 sourcemap 注释代码解析, 并 attach 到浏览器 devtool 上面

## sourcemap 文件

记录源码和生成码的映射文件

- mappings 记录了映射的位置
- ...

## sourceMappingURL

指定 source map 文件地址
浏览器通过 source map + 处理后代码 => 还原源代码

```js
//# sourceMappingURL=bundle-d34d6d4dad2c1cd76430.js.map
```

## eval

eval 执行代码添加 sourceMappingURL

**每一个模块**代码 eval 添加一个

- sourceURL
- sourceMappingURL

```js
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ndWlkZS8uL21vZGUvcHJvZHVjdGlvbi9zcmMvbWF0aC5qcz84NTI0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQSIsImZpbGUiOiIuL21vZGUvcHJvZHVjdGlvbi9zcmMvbWF0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBzcXVhcmUoeCkge1xyXG4gICAgcmV0dXJuIHggKiB4O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3ViZSh4KSB7XHJcbiAgICByZXR1cm4geCAqIHggKiB4O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n
//# sourceURL=webpack-internal:///./mode/production/src/math.js\n
```
