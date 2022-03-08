# vscode

1. settings.json  全局级别
2. .vscode/setting.json 项目级别
3. 插件其他配置

## extensions

可以既 通过 npm 运行，又在 extension 运行的, 是在浏览器间隔执行该 npm 包并将输出反馈到编辑器上面
比如 eslint, prettier 都可以使用同一套配置文件, 确保效果一致

### formatter

#### EditorConfig

编辑器输入风格

- VS Code settings
- .editorconfig

#### Prettier

语法风格

- VS Code settings
- prettier configuration files
- .editorconfig file(可以设置为忽略)

## 远程开发

### live share

有些编辑器 extension 使用不了

### remote development

ssh 方式开发

## refactor

将代码提取为函数或者提升作用域, 方便复用

## rename symbol

定义和调用同时修改