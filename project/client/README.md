# web client

## mock 数据

- [swagger](https://swagger.io/)
- [mock.js](https://github.com/nuysoft/Mock)

## 线上模拟

easy mock 等搭建, 这种情况不是很多见, 而且一般也不是由前端来做

## 调试模拟

重写 XHR 拦截, 不可取

1. 依赖 XHR 的第三方库失效
2. 调试不在 NETWORK 中
3. 不方便 MOCK 部分接口

推荐方式

在启动项目的时候同时启动 mock server, 然后根据 request.js 中 baseURL 配置一个专用 mockService
