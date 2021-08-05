# webpack

模块打包器

- ES Module
- CommonJs Module
- ...

转化为 webpack Module 运行

## 概念

- entry
  - 打包入口
  - 单个/多个
- loader
  - 模块转化器
  - **文件** 级别的 module transform
- plugins
  - 打杂, webpack 会在一些时机放出一些钩子提供操作
  - 非模块化的操作文件, 可以理解为不直接操作文件
- output
  - 输出文件

## config

- webpack-chain 创建 config 并且通过链式修改
- webpack-merge 合并 webpack config

vue-cli-service

1. 先用 webpack-chain 创建基础的 chainConfig
2. 扩展
    1. 修改 chainConfig
    2. 通过 webpack-merge 合并 chainConfig.toConfig() 导出的 config

```js
  resolveWebpackConfig (chainableConfig = this.resolveChainableWebpackConfig()) {
    // get raw config 
    let config = chainableConfig.toConfig()
    const original = config
    // apply raw config fns
    this.webpackRawConfigFns.forEach(fn => {
      if (typeof fn === 'function') {
        // function with optional return value
        const res = fn(config)
        if (res) config = merge(config, res)
      } else if (fn) {
        // merge literal values
        config = merge(config, fn)
      }
    })
    return config
  }

```

## API

- Compiler 编译器
- Compilation 一次编译过程
- module 每个代码文件对应的模块, 上面模块相关的信息
  - 通过 module.hot 模块获取

`.bin/webpack`

```bash
  node  "$basedir/../webpack/bin/webpack.js" "$@"
```

通过 Node API 自行创建 script

## entry

## loader

## plugin

## output

code-splitting

- 代码分离到不同的 bundle 中 (chunks: 块) (emitted: 发出)
- 按需加载或并行加载
- 极大影响加载时间

动态加载, 支持

- prefetch: resource is probably needed for some navigation in the future
- preload: resource might be needed during the current navigation

**缓存**

1. 提取 runtime + manifest.js
2. 分离第三方
   - vendor

## 特性

### HMR

修改文件再次编译过程中, 模块代码可以访问 `module.hot` API 去操作做一些操作, 比如插入/修改 css 等

- HMR 代替 LiveReload
- webpack-dev-server 先尝试 HMR, 再尝试 LiveReload

### source map

有错误后，将编译后的代码映射回源代码。

### webpack-dev-server

npm install --save-dev webpack-dev-server

### 环境

开发环境(development)

- 实时重新加载(live reloading)
- 热模块替换(hot module replacement)
- source map
- localhost server

生产环境(production)

- 更小的 bundle
- 更轻量的 source map, 或者不需要
- 更优化的资源，以改善加载时间

Don't repeat yourself - DRY - 通过 webpack-merge

- common
- dev
- prod

### 全局引入

externals

- $
- 没有提供模块化写法的 lib
- umd cdn
- polyfill
