# Browser

## Browser Core

### Engine

- Rendering Engine: 渲染引擎, html等解析并渲染网页
- JS Engine: 执行 JS

### Core

一般指 Rendering Engine + JS Engine

- Trident: IE
- Gecko: Firefox  
- Webkit: Safari
- Chromium/Blink: Chrome, Opera, MSEdge

Chromium/Blink 为 Webkit 子核：

- Webkit = Webcore(Rendering Engine) + Jscore
- Chromium/Blink = Webcore(Blink) + V8

### Thread

- Javascript 的执行是单线程的
- 浏览器是多线程的

单线程 + 事件循环 + 观察者 + I/O 线程池

## 其他部分

内核 -> 中间层 -> 网卡/硬盘/显卡驱动

## 兼容性

依次向下考虑

1. ie 11
2. ie 9/10
3. ie 6/7/8

## 调试

- 普通浏览器 (自带调试工具)
- webview
  - android
    1. 方式 1: `chrome://inspect`(需要翻墙)
    2. 方式 2: AS 中打印
  - ios
    1. 手机端 Safari -> 高级 -> Web 检查器
    2. 电脑端 Safari -> 偏好设置 -> 高级 -> Show develop menu in menu bar
    3. 电脑端 Safari 开发菜单中选择相应的设备

## DOM 渲染

JS 线程和 GUI 线程互斥, js 操作 DOM, GUI 线程会抢执行权

1. 解析 HTML 为 DOM tree
2. 待 CSS 加载完成 构建 CSS OM tree
3. DOM tree + CSS OM tree = render tree
4. render tree --> layout

### 渲染优化

- repaint 改变 css (不影响布局的 CSS background-color, border-color,visibility)
- reflow 元素的布局和几何属性改变时就会触发

#### 减少 dom 操作次数

理论上: 一个 function 中修改 n 次 能够引发 render 的 dom 属性, 就会引起 n 次 render
现实: 是浏览器一般会做优化, 会缓存起来一次性 render

#### CSS 角度

- 例如一个 position 设置为 absolute/fixed 的元素的更改只会影响其本身和其子元素，而 static 的元素变化则会影响其之后的所有页面元素
- 更改多个 style 的时候, 通过添加 class 而不是直接修改每一个样式来操作
