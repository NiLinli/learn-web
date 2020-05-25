# config 配置

全局配置 `git config --global`  
当前项目配置 `git config`

特定仓库的数据 `.git/config`
全局配置 `~/.gitconfig`

## 命令配置

[user] 用户相关

- `git config user.name <name>` 
- `git config user.email <email>`

[alias] 指令别名相关

- `git config alias.<alias-name> <git command>`

[core] git 相关配置

## 修改配置文件

- `git config --edit` 通过默认编辑器打开配置文件修改(纯文本) `.git/config`
- `git config --global --edit` 打开 `~/.gitconfig` 文件
