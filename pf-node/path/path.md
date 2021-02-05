# path

- 绝对路径: 是指目录下的绝对位置，直接到达目标位置，通常是从盘符开始的路径。
- 相对路径: 就是指由这个文件所在的路径引起的跟其它文件（或文件夹）的路径关系。使用相对路径可以为我们带来非常多的便利。HTML 绝对路径(absolute path)指带域名的文件的完整路径。

根目录:

- web 站点 根目录 为参考基础的目录路径
- nodejs 系统根目录

## web

```text
|-- www
    |-- demo1
        |-- index.html
        |-- style.css
```

### 根目录

`http://192.168.1.10:8080` 指向 www 目录, 为站点的根目录

### 绝对路径

```html
<link rel="stylesheet" href="/demo1/style.css" />
```

结果: `http://192.168.1.10:8080/demo1/style.css` baseURI 没有效果

### 相对路径

相对于 baseURI(baseURI 默认为 /)

```html
<base href="/demo222222222/" /> <link rel="stylesheet" href="./demo1/style.css" />
```

结果: `http://192.168.1.10:8080/demo222222222/demo1/style.css`

## Node

### 相对路径

- `.` process.cwd()/是相对于 node shell 执行的位置/工作目录
  - require 方法 `.` 是指相对于 `__dirname`, 特殊处理过
- `__dirname` 才是文件所在路径

## 资料

- [wiki path](<https://en.wikipedia.org/wiki/Path_(computing)#Absolute_and_relative_paths>)
- [stackoverflow](https://stackoverflow.com/questions/8131344/what-is-the-difference-between-dirname-and-in-node-js)
