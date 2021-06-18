# XSS

Cross-Site Scripting: 跨站 脚本 攻击(代码注入攻击)  
CSS 和 css 重名, 所以称为 xss

常规操作：

1. 网页渲染回显植入脚本/html结构
2. 执行脚本/类似于 crsf 中发送请求
3. **窃取用户数据**，执行操作

## 攻击

- html tag
  - href
  - onclick
  - src
  - 一些危险 attribute
- script
  - innerHTML 设置的 script 不会执行

## 防护

- escapeHtml/ deleteHtml
  - html 所有标签转译 (普通输入)
  - only script 标签 (富文本输入)
- href/onclick 中 javascript:
- ...

### 保护数据

- cookie 设置为 http-only

### 时机

展示时候处理 优于提交时候处理 不过不一定
