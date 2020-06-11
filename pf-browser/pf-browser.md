# Browser

- Javascript 的执行是单线程的
- 浏览器是多线程的

单线程 + 事件循环 + 观察者 + I/O 线程池

## 浏览器兼容问题

不考虑 ie 678+

ie9/10 在 css 层面上面对 flexbox 支持不友好

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

## 内核

- KTHML, Opera -> Webkit -> Blink (Chrome, Opera, Safari)
- Netscape -> Firefox
- Trident or whatever -> IE

## 浏览器构成

内核 -> 中间层 -> 网卡/硬盘/显卡驱动

浏览器引擎(内核) = 渲染引擎 + Js 引擎(浏览器一般是组合使用内核的不同部分)

Chrome = webkit + v8
Safari = webkit + JSCore

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
