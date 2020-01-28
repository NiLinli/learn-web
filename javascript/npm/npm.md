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

## nrm

切换镜像工具

- `npm i -g nrm`  安装
- `nrm ls`        列出镜像源
- `nrm use taobao`切换

## dedupe

npm5 之后会对依赖 dedupe (解决依赖安装地狱),
dedupe 依赖 tree, 然后进行安装

1. 共同的依赖提升到顶层
2. 实在无法兼容的依赖就放在 当前依赖下面

如果严格按照原来的安装方式, 直接构建 tree 依赖 `--legacy-bundling`

## npm i

1. preinstall 钩子
2. npm i
   - 确定首层依赖模块、
   - 获取模块 tree
   - dedupe 得到新的 tree
   - 下载
3. postinstall

## npm update

1. `npm outdated` 查看那些包需要更新
2. `npm update` 更新到 wanted (package.json 会更新)