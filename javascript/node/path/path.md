# path

An absolute or full path points to the same location in a file system, regardless of the current working directory. To do that, it must include the root directory.

By contrast, a relative path starts from some given working directory, avoiding the need to provide the full absolute path. A filename can be considered as a relative path based at the current working directory. If the working directory is not the file's parent directory, a file not found error will result if the file is addressed by its name.

绝对路径是指目录下的绝对位置，直接到达目标位置，通常是从盘符开始的路径。
相对路径就是指由这个文件所在的路径引起的跟其它文件（或文件夹）的路径关系。使用相对路径可以为我们带来非常多的便利。HTML绝对路径(absolute path)指带域名的文件的完整路径。

引用文件

被引用文件



相对路径：
绝对路径

    - web 站点 根目录 为参考基础的目录路径
    - nodejs 系统根目录

## html

```text
|-- www
    |-- demo1
        |-- index.html
        |-- style.css
```

http://192.168.1.10:8080 指向 www 目录, 为站点的根目录

引用 css

1. 相对路径, 相对于 document.baseURI, 可以通过修改 `base` 标签来修改 baseURI



相对路径(相对与 baseURI)：


不设置 base 标签
document.baseURI 为 index.html 页面路径 'http://192.168.1.10:8080/demo1/'
http://192.168.1.10:8080/demo1/style.css  ok

设置 base 标签

`<base href="/demo222222222/">`
document.baseURI 为http://192.168.1.10:8080/demo222222222/
http://192.168.1.10:8080/demo222222222/style.css fail



绝对路径(相对与根目录)：
```html
<link rel="stylesheet" href="/demo1/style.css">
```
无视 base (baseURI) , 网站根目录 + 路径
http://192.168.1.10:8080/demo1/style.css 


## Nodejs

path
1. dir
2. base
    - name
    - ext

working directory
文件
被引用的文件

## 资料

- [wiki path](https://en.wikipedia.org/wiki/Path_(computing)#Absolute_and_relative_paths)
- [stackoverflow](https://stackoverflow.com/questions/8131344/what-is-the-difference-between-dirname-and-in-node-js)

