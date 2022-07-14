# Browser

[inside-browser](https://developer.chrome.com/blog/inside-browser-part1/)

## 架构

multi-process architecture  
chrome: 更多工具 -> 任务管理器 可查看所有进程

### Browser Process

主进程

- ui thread  浏览器除了网页部分的 ui 变化
  - address bar
  - bookmarks
  - back and forward buttons
- network thread
- storage thread
  - file access

上述部分 Servicification 机制  
硬件性能好: thread 分拆为多个独立的 process  eg: Desktop chrome
资源限制: process 汇聚到 browser process 中变成 thread, 节约内存  eg: Android webview



#### 输入网址浏览器工作流程

Browser Process <-IPC-> Renderer Process 

1. UI Thread 判断 input 输入的是 url 还是搜索内容
2. UI thread 告知 Network thread 要导航到到 url
3. Network thread 通过 Content-Type 判断响应类型是 HTML 并且是安全的站点
4. Network thread 告知 UI Thread 去寻找 Renderer Process
5. Browser Process 通过 IPC 通知 Renderer Process, 请求 Render
6. Renderer Process 通过 IPC 通知 Browser Process 页面 loaded, Browser Process 中 UI Thread 会停止 loading...


### Renderer Process

浏览器内核就是指这个模块  
**页面性能优化点**

开销

- 不同的 tab 拥有单独的 Process
- 同一 tab 中, 不同 frame(iframe) 也拥有单独的 Process (site isolation)

优点

- 避免单个 Render Process 挂了之后所有的都挂了
- 访问内存 sandbox, 两个页面的内存数据&访问通过 process 之间的保护策略进行保护

#### 组成

- Rendering Engine: 渲染引擎, html等解析并渲染网页
- JS Engine: Javascript VM, 执行 JS

常见内核

- Trident: IE
- Gecko: Firefox  
- Webkit: Safari
- Chromium/Blink: Chrome, Opera, MSEdge

Chromium/Blink 为 Webkit 子核：

- Webkit = Webcore(Rendering Engine) + Jscore
- Chromium/Blink = Webcore(Blink) + V8

#### Rendering Engine

ParseHtml -> ....-> Paint -> Compositor(不占用主线程)

#### Js Engine

用户代码解析  
代码在 Main Thread 上面执行, 所以说是单线程的
代码也可以在 web worker 上面执行, 多线程

在 js 执行的过程中如果与 DOM API 发生交互, 则有可能会执行 Rendering Engine 中的操作

#### Main Thread

Renderer Engine & Js Engine 都是在 Main Thread(call stack) 上面执行  
Renderer Engine & Js Engine 互斥

### GPU Process

Handles GPU tasks in isolation from other processes. 
It is separated into different process because GPUs handles requests from multiple apps and draw them in the same surface.

### Plugin Process

管理浏览器页面中的中的插件, 
eg: flash

### Extension Process

浏览器扩展
eg: Axure RP Extension for Chrome

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
