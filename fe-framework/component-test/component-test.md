# 组件测试

## @testing-library/dom

提供一个 dom 交互环境

### 仿真 dom

jest-environment-jsdom(jsdom)

- node 下以运行仿真 dom 为环境运行 jest 等 runner

### 真实 dom

browser

- webpack 打包测试用例在 browser 运行
- query 功能集成到 e2e 测试框架中

### query

查找 html 中的元素

### user action

fireEvent

1. 创建一个 EventObject
2. trigger Event

userEvent

1. 模拟用户操作
2. fireEvent

### fake timer

