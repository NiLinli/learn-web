# io

## stdio

标准的输入输出

- 文本 printf scanf fscanf
- 二进制 fread fwrite

## 文件重定向

`./a.out > 123.out`    printf 打印信息输出到 output 文件, shell 中不会显示(shell 中 > 也是输入)
`./a.out < 123.in`        scanf 读取 123.in 中的文件

## 文件

- 所有文件都是二进制的
- 文本文件是特殊的文本文件, 便于读写, 所以单独分类

### 风格

- unix 喜欢用 文本文件来做数据存储和程序配置
- dos/window 喜欢用二进制文件(草根文化)

### 取舍

- 文本文件
  - 优点: 方便人类读写, 而且跨平台
  - 缺点: 程序输入输出需要格式话, 开销大
- 二进制文件(程序通过第三方 lib 去读写)
  - 优点: 读写快
  - 缺点: .........., 不一定跨平台 (int 大小不一致, 大小端的问题, 移植性差 32 和 64 位机器读出方式不同, 使用 typedef 代替 int)

### 使用文件

- 配置
  - unix 用文本
  - windows 用注册表(注册表编辑器)
- 数据
  - 大的数据都用数据库
- 媒体
  - 二进制

- 文本文件 more cat ...
- 二进制文件 od

## 代码

- printf-01.c   flag
- printf-02.c   width + prec
- printf-03.c   hlL
- printf-04.c   type
- scanf.c  
- file-01.c     文本文件的 io
- file-02.c     二进制文件的 io
