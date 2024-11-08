# shell script

`.sh` 文件约定俗成称为 shell script 执行文件
shell 执行时候中的文件路径都是以 cwd 作为基准, 和 sh 文件所在的文件夹没有关系  
命令都应该在工作区中执行  

执行方式

- `./filename.sh`
- `sh ./filename.sh`

## 注释

`#`代表要写注释该行

### 指定 shell

`#!/bin/bash` 第一行注释表示使用什么样的 shell 环境运行该 script

osx 切换 shell `chsh -s /bin/zsh`

## sh 执行调试

`sh [-nvx] scripts`

- `n` 不执行 scripts, 但是指出错误
- `v` 显示 scrpits 内容, 并执行
- `x` 有使用到的 scripts 显示在上面, 忽略注释等
  -  `+`source code, **会有每个变量的执行**
  -  不带 `+` 是 output

## variable 变量

变量名命名 `/$[A-Za-z_] [a-zA-Z0-9_]*/`

赋值形式 `variable=value`

- 等号两边不能有空格
- 没有变量类型, 都当作 string of character 来看待, 所以也不需要 declare 类型
- 没有定义的 variable 是 null

### Integer 计算

- `+, -, *, /, % and **`
- `+=, -=, *=, /=`
- `++, --`

需要用到两个括号这种形式 `$((a=a+1))`

### quote 引号

shell 中什么不带就是 string of character, 引入引号的作用是用来操作带空格的字符串

- single quote `''`
- double quote `""`
- backslash `\`
- back quote ` : 字符串中连接 command 返回的结果

### 参数传递

- `$#` 参数个数
- `$*` 所有参数
- `$1` 第一个参数

## statement 语句

shell 程序每执行完成一条语句都会返回一个 status code, 整个程序执行完成也会返回一个 status code

- 0 表示成功
- 非 0 表示失败

status code 会写入到 `$?` 中

### test

两种写法等同

- `test expression`
- `[expression]`

### exit

`exit n` 中断程序执行, 将 n 写入程序执行的 `$?` 即 status code 中

### if

### case-in

### &&, ||

- -a 是 and , && 断路执行命令
- -o 是 or, || 短路执行命令

### for-in

### while/until

## I/O

- `read` 读取 data 通过
  1. file
  2. terminal
- `printf` 输出格式话数据给标准输出

### read

`read variable` 将 file 或者 terminal 的值输入到 variable 上面

`$$` 当前用户的 pid(process Id)

### printf

`echo` 输出简单数据  
`printf` 输出格式化数据