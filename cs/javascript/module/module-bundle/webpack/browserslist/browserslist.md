# browserslist

**不要在某个工具中单独指定浏览器版本，应该统一交给 browserslist 来做**

The config to share target browsers and Node.js versions

1. 大多数需要读取 browserslist 的构建工具
2. 支持 browserslist 字符串方式的写法

依赖 `caniuse-lite` 的数据

## 配置

1. .browserslistrc 文件配置
2. package.json 中 browserslist 字段
3. 支持 extends
4. 支持环境区分

## query 语句

- or/, 并集
- and 交集
- not 排除

[语法](https://github.com/browserslist/browserslist#full-list)

## 调试

`npx browserslist`
