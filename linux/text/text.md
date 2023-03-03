# 文本

- awk
  - AWK 程序设计语言(创始人首字母), 有一套 mini 语法, 分析文本     
  - 遍历每一行, 对列进行处理, 提取计算
- sed
  - stream editor
  - 编辑每一行, crud
- grep
  - global(G) search regular expression(RE) and print(P) out the line
  - 筛选符合正则的行
- cat
  - concatenate 连接并输出到标准输出中
- head/tail
- more/less

## vi

Linux 参数配置文件是 ASCII 纯文本文件
Unix 和 Linux 预设的文字处理软件

### 模式

- 一般模式: 移动光标, 复制, 删除, 粘贴等操作
  - "test1.txt" [New File] 文件名-新建文件
  - "test.txt" 2L, 30C  文件名-行数-字符数
- 编辑模式: 编辑文本, Esc 退出的一般模式
  - i 左下角显示 -- INSERT --
- 指令列命令模式: 一般模式下, : 进入
  - w 写入
  - q 退出
  - ! 强制

