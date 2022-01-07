# devtools

## source

### workspaces

同步

source code & 本地文件同步  
修改都保持一致

根据文件夹结构和文件名映射

1. 可以在 workspaces 中直接修改任何文件并映射
2. 无法在 html 面板中修改 html 文件并映射, 因为 html 面板中的 html 是经过 DOM 操作后的 html, 不是初始 html
3. 可以在 css 面板中修改 css 并映射

### local overrides

覆盖

新建一个 overrides 目录存放文件夹  
直接在 source 中修改代码, 在 overrides 中会生成一个新的副本, 并且刷新后, 浏览器会读这个新的副本