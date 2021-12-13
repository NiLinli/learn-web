# e2e

## 浏览器类型

### headless browsers

不渲染 ui 的情况下, 模拟浏览器的行为  
浏览器也必须安装在 os 上

### Chromium

开源浏览器

- Chrome(N)
- Edge(N)
- Open Source Chromium(N +1)

### FireFox

- FireFox

### WebKit

开源浏览器

- Apple Safari
- Open Source Webkit

## 框架类型

### 基于 webdriver

测试脚本和浏览器中有一层 webdriver 协议层, 调用的是真实的浏览器  
优点: 所有浏览器几乎都支持 webdriver  
缺点: 使用真实浏览器对资源消耗比较大

- selenium
- nightwatch

### 基于注入测试脚本

1. 注入测试脚本到浏览器, 被测试网站通过 iframe 打开, 两者通过 node 服务通信
2. 支持 headless browsers 模式

- cypress

### 基于 devtools

1. 脚本直接与浏览器交互
2. 支持 headless browsers

- puppeteer(支持 chrome/chromium)
- playwright(支持 chrome/chromium, firefox, webkit)

## cypress

`npm i -D playwright` 不提供与替他 test runner 集成的方式

### browsers

读取系统中 cypress 支持的浏览器

## playwright

- `npm i -D playwright` + 其他 test runner
- `npm i -D @playwright/test` + 自己的 test runner

### browsers

使用 `playwright install` 下载的浏览器  

- open source chromium (chromium 可以指定系统已有的 chrome 或者 edge)
- open source wekkit
- firefox

playwright 更新, 支持的浏览器也会更新, 每次 playwright 更新, 需要重新下载  
