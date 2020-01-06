# history

Web browsers

- keep track of what documents have been loaded into a window
- display Back and Forward buttons that allow the user to navigate among those documents.

## 历史记录

出于安全原因, 一般不能访问历史记录, 只能访问 length

1. back forward 不会影响 history stack 
2. back 之后
  -  push 新的 url, 会抛弃当前到栈顶原有的记录, 添加新的记录
  -  replace 新的 url, 不会抛弃当前到栈顶原有记录

## 模拟浏览器按钮

- `go()` 传递数字, 数字相当于点击浏览器前进后退按钮的次数
  - 1  = `forward()`  前进
  - -1 = `back()`     后退

## 改变 url 页面会刷新

- 地址栏重新输入一样(不同)的 url , 按 enter 键浏览器会 reload
- a 标签导航到一样(不同)的 url , 浏览器同样会 reload

## 改变 url 页面不刷新

- hash
- html5(ie10+)

两种方式都会添加历史记录

### hash

- location.hash
- location.replace()
- hashchange 监听
  - 浏览器 back forward (真实/模拟)
  - location.hash / location.replace() 改变 hash

### html5

同源 url

- pushState
- replaceState
- popstatechange 监听
  - 浏览器 back forward (真实/模拟)

## 导航

1. js 导航
  - 可以自行通过钩子控制页面路径
2. back forward 导航
  - 页面路径一定会变
  - 但是不会添加历史记录
  