# npm

## semver

Semantic Versioning

- MAJOR version when you make incompatible API changes
- MINOR version when you add functionality in a backwards-compatible manner
- PATCH version when you make backwards-compatible bug fixes

版本控制

- `*` MAJOR + MINOR + PATCH
- `^` MINOR + PATCH
- `~` PATCH
- `>= > < <= -` 其他

## lock file

- yarn.lock
- package-lock.json(npm v5.6+)
- pnpm-lock.yaml

根据 package.json 依赖来看 lock 文件是否满足要求

- lock 满足要求, 按照 lock 文件安装
- lock 不满足要求, 按照 package.json 安装依赖并更新 lock 文件

## npm command

### npm i

1. preinstall 钩子
2. npm i
   - 确定首层依赖模块、
   - 获取模块 tree
   - dedupe 得到新的 tree
   - 下载
3. postinstall

选项

- --no-save 不添加到 dependencies
- --save-exact/-E package.json 记录某个具体的版本

### npm update

1. `npm outdated` 查看那些包需要更新
2. `npm update` 更新到 wanted (package.json 会更新)

## .npmrc

npm 配置文件

1. 项目级别 `/path/to/my/project/.npmrc`
2. 用户级别 `~/.npmrc`
3. global config file ($PREFIX/etc/npmrc)
4. npm builtin config file (/path/to/npm/npmrc)

### nrm

切换镜像工具

- `npm i -g nrm` 安装
- `nrm ls` 列出镜像源
- `nrm use taobao`切换

## yarn/dedupe

npm5.6+/yarn 之后会对依赖 dedupe (解决依赖安装地狱)
dedupe 依赖 tree, 然后进行安装

1. 共同的依赖提升到顶层
2. 实在无法兼容的依赖就放在 当前依赖下面

如果严格按照原来的安装方式, 直接构建 tree 依赖 `--legacy-bundling`

## pnpm

performant 嵌套安装

### 虚拟存储目录

- .pnpm - ms@2.0.0 - ms@2.1.3

把相应的嵌套依赖都放入到 .pnpm 中

包和依赖都放在同一层

- 包的实际位置为 `.pnpm/<name>@<version>/node_modules/<name>`
- 包的依赖所在的位置 `.pnpm/<name>@<version>/node_modules/`
- 符号链接来创建依赖项的嵌套结构

### 实际文件依赖

实际包引用中的每个文件 硬链接到 `~/.pnpm-store`  
可以避免多个项目反复下载依赖
