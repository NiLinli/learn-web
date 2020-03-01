# Browser Environment

浏览器环境下

- dmo/$
- ng/react/vue

类浏览器环境下

- mp
- react/vue + mp

## MVVW or Flux

- MV* 相同点是 * 作为中介连通 Model 和 View 层
- MVC 实现方式多种多样, 不同语言不同框架定义也比较混乱
- MVVW 是 MVC 的简化模式
- Flux 是 另外一种视图模式

## 浏览器兼容问题

不考虑 ie 678+

ie9/10 在 css 层面上面对 flexbox 支持不友好

## 调试

- 普通浏览器 (自带调试工具)
- webview
  - android
    1. 方式1: `chrome://inspect`(需要翻墙)
    2. 方式2: AS 中打印
  - ios
    1. 手机端 Safari -> 高级 -> Web检查器
    2. 电脑端 Safari -> 偏好设置 -> 高级 -> Show develop menu in menu bar
    3. 电脑端 Safari 开发菜单中选择相应的设备

## 项目文件划分

1. 按照文件类型
    - 常见 MVC 划分 model controller view
2. 按照 feature 划分, 一个功能相关的都放在一起(更改的时候比较方便一起更改)
    - Angular MVVW 文件结构划分
    - React redux 将 reducer action page 放在一起

- 方式2 比较适合大型应用开发
- 创建严格的模块边界 (一个功能模块应该只有一个 public API)
- 避免循环引用

## 问题

常见表单验证方式

1. 同步验证
2. 异步验证


1. 常规 router 原理
    - react-router
    - angular-router
    - vue-router
2. stack router 原理
    - react-navigation

## 开发形式

1. jQuery + 后端路由
2. spa 纯单页应用 + spa-router
3. spa(umd) + 后端路由

## token

- token 过期接口处理
- token 过期 更新过程

# browser

- Javascript 的执行是单线程的
- 浏览器是多线程的

单线程 + 事件循环 + 观察者 + I/O 线程池

## 内核

- KTHML, Opera -> Webkit -> Blink (Chrome, Opera, Safari)
- Netscape -> Firefox
- Trident or whatever -> IE

## 浏览器构成

内核 -> 中间层 -> 网卡/硬盘/显卡驱动

浏览器引擎(内核) = 渲染引擎 + Js 引擎(浏览器一般是组合使用内核的不同部分)

Chrome = webkit + v8
Safari = webkit + JSCore

## 渲染引擎

1. 解析 HTML 为 DOM tree
2. 待 CSS 加载完成 构建 CSS OM tree
3. DOM tree + CSS OM tree = render tree
4. render tree --> layout

### 渲染优化

- repaint 改变 css (不影响布局的 CSS background-color, border-color,visibility)
- reflow  改变 css (影响布局的 css) + DOM 操作

优化 repaint 和 reflow

1. CSS 角度
   - 例如一个 position 设置为 absolute/fixed 的元素的更改只会影响其本身和其子元素，而static的元素变化则会影响其之后的所有页面元素
   - 更改多个 style 的时候, 通过添加 class 而不是直接修改每一个样式来操作
2. Js 角度
   - 尽量减少操作 DOM 次数
