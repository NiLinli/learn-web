# Browser

[inside-browser](https://developer.chrome.com/blog/inside-browser-part1/)

## 架构

multi-process architecture

更多工具 -> 任务管理器 可查看所有进程

### Browser Process

主进程


- address bar
- bookmarks
- back and forward buttons
- network requests 
- file access
- ...

上述部分 Servicification  
在硬件性能充沛的设备上面会是多个独立的 process  
在限制资源的设备上(Android)都会汇聚在 browser process, 节约内存  


### Render Process

浏览器内核就是指这个模块

#### 分配情况

一个 tab 页面一个/一个 iframe 也会分配一个(site isolation)

- 避免单个 Render Process 挂了之后所有的都挂了
- 访问内存 sandbox, 两个页面的内存数据&访问通过 process 之间的保护策略进行保护


#### 组成

- Rendering Engine: 渲染引擎, html等解析并渲染网页
- JS Engine: 执行 JS

常见内核

- Trident: IE
- Gecko: Firefox  
- Webkit: Safari
- Chromium/Blink: Chrome, Opera, MSEdge

Chromium/Blink 为 Webkit 子核：

- Webkit = Webcore(Rendering Engine) + Jscore
- Chromium/Blink = Webcore(Blink) + V8

#### Rendering Engine

#### Js Engine

Thread

- Javascript 不开启的执行是单线程的
- 浏览器是多线程的

浏览器多线程 CPU 

单线程 + 事件循环 + 观察者 + I/O 线程池

1. 执行 callback 的时候, 浏览器停止响应用户输入(UI)
  - callback 不能过于复杂 -> 浏览器不响应(甚至 crash)
  - HTML5 web worker 解决上述问题


### Plugin Process

管理浏览器页面中的中的插件, 
eg: flash

### Extension Process

浏览器扩展
eg: Axure RP Extension for Chrome

### GPU Process


Handles GPU tasks in isolation from other processes. It is separated into different process because GPUs handles requests from multiple apps and draw them in the same surface.














### 其他部分

内核 -> 中间层 -> 网卡/硬盘/显卡驱动

## 兼容性

依次向下考虑

1. 非 IE
2. ie 11
3. ie 9/10
4. ie 6/7/8

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
