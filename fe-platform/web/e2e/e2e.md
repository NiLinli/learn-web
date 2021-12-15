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

### inspector

- PWDEBUG=1 启动调试
- await page.pause(); 运行时调试
- ...

调试工具 Explore 可以点击网页元素生成 selector

`window.playwright` 对象会注入到目标浏览器中

- $(selector)   第一个元素
- $$(selector)  所有元素
- selector(dom) 生成选择器
- inspect(selector) 浏览器调试面板 Element 下选中选择器所对应的元素

### trace viewer

记录测试轨迹

- screenshots
- snapshots

### generator

- `playwright open` 使用 pw 浏览网站
- `playwright codegen` 使用 pw 浏览网站并生成测试代码(通过用户行为生成测试代码)

可记录访问的 web application storage 供下次使用

### API test

- 测试服务端 API
- 辅助 web 测试流程
  - 前: 通过 API 走一些流程, 准备一些状态
  - 后: 通过 API 验证是否正确

### Authentication

范围依次扩大

- beforeEach 每个测试走完登陆流程
- beforeAll  创建一个 page 实例, 每个 test 都用一个 page 实例
- config globalSetup 登陆一次保存登陆信息 测试读取

可以保存浏览器状态的

- requestContext
- pageContext
- codegen/open
