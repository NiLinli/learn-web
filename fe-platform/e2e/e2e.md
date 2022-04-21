


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
