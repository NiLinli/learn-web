# shell

『 Shell 』将我们输入的指令与 Kernel 沟通，好让 Kernel 可以控制硬件来正确无误的工作

## bash

Bourne Again SHell

- 记忆使用过的指令
  - 当前登录的在内存中
  - 上一次登录的在 `~/.bash_history` 文件中
- 指令补全
  - 指令
  - 文件名
- 命令别名 `alias lm='ls -al'`
- 工作控制 将程序放置于后台中运行, 避免 ctrl-c 关闭程序
- shell script 编写

`command [-options] params1 params2...` 命令 选项 参数1 参数2 ...

说明：

1. options - 简写 -- 全写
2. 一行代码写不下 \ 跳过 Enter 执行

### 快捷键

- ctrl+A 行首
- ctrl+E 行尾
- alt + f/b(-> <-) 按单词移动

- ctrl+u 行首到光标(最后) 
- ctrl+k 行尾到光标 

### 开机流程

- 环境变量读取 ps: 为了区别与普通变量 , 环境变量都是大写 PATH/HOME/MAIL/SHELL 等

bash shell 配置(打开 shell, 会先读取配置文件)

- 系统 root
- 用户

系统配置文件

- `/etc/profile`
- `/etc/bashrc`

用户配置文件

- `~/.bashrc` no-login 形式执行时候, 读取
- `~/.bash_profile` 登录形式执行时候, 读取
- `~/.bash_history`

`source` 将配置文件重新读取一次, 不需要重新登录

### login shell & subshell

This login shell maintains what’s known as your environment

- login shell: 默认的 shell (subshell 的 root)
- sub shell: 执行一个单独的 sh script 时候, 会开启一个 subshell 去执行
  - 读取变量类似于函数, local variable 和 global variable(不是login shell, 而是上层 shell export variable)
  - **export 可以导出变量给其 sub shell 访问**(copy 给 subshell), 不能反向访问



`export -p` 可以查看 login shell 中导出的变量  
`. foo.sh` 可以在当前 login shell 中执行脚本  
`source ~/.bash_profile` 也是在 login shell 执行脚本(source: 在当前 shell 中执行脚本) 

### 环境变量

1. 全局的环境变量只能在系统配置文件中改, 然后 shell 加载时候读取
2. export 临时环境变量是 export 给 sub sub sub sub, **export 向下导入**, 不是导出给 father, 所以不会影响全局环境变量

### 变量

程序运行需要从内存中读取变量值, 如果是值存在于存储中, 则需要重新编译程序

- `echo` 显示变量内容, 需要在变量前面加一个 `$` 符号
- `env` 显示目前系统中主要的环境变量
- `set` 环境变量 + 自定义变量
- `read` 可以由 Input 输入去控制变量值

规则

1. 变量名不能以数字开头
2. `=` 两边不能留空白
3. 不加引号表示普通字符串 `"` 可以保留特殊变量特性
4. 变量 += 操作 `PATH="$PATH":/user/abc`
5. 变量需要其他子 bash 可以读取, 需要用 `export` 导出(进入子程序, 在 bash 中打开 bash)
6. 指令中的指令 ``, 类似于模版字符串

`export` 可以将自定义变量设置为环境变量

- 不带任何参数, 展示所有的环境变量

#### 变量类型

Array

`a[0]=1`
`a[1]=2`

`echo ${a[0]}`

RANDOM

`echo $RANDOM`

### 命令

别名

`alias` 显示所有别名

`alias ll='ls -l'`
`alias rm='rm -i'`
`unalias rm`

### 通配符

类似于 regexp 中的符号

- `*` 一个或者多个字符
- `?` 一个字符

### I/O重定向

- 0 标准输入 stdin <
- 1 标准输出 stdout >
- 2 错误输出 stderr >

`ls -al > list.txt` 1 覆盖输出到 list.txt  
`ls -al >> list.txt` 1 追加输出到 list.txt  
`ls -al 1> list.txt 2> err.txt` 1 覆盖输出到 list.txt 2 覆盖输出到 err.txt  

### pipe

前面一个输出 out 作为后面的一个输入 in

`last | grep nilinli | wc -l`
