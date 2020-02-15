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
