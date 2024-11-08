# 文件权限

**Permission deny** 哈哈

文件的信息

`[1][2][3][4][5][6][7]`
`[权限][链接][拥有者][群组][文件容量][修改日期][文件名]`

## 权限

`- rw- r-- r--`
`[1] [2] [3] [4]`

`[1]` 表示文件类型

- `-` 普通文件
- `d` 文件夹
- `l` link file 软链接
- `b` 存储
- `c` 串行设备

`[2]` 文件拥有者的权限  
`[3]` 同群组权限  
`[4]` 其他非本群组权限

### 具体权限

- r (read) 4
- w (write) 2
- x (execute) 1
  - 文件: linux 通过 x 来判断, windows 通过文件后缀判断
  - 目录: x 判断是否可以切换到该目录 cd ./abc

文件名后缀在 linux 中只是起到了说明文档类型作用, 辅助
网络传输会改变 linux 的文件权限, 需要注意

### 改变文件权限

`chmod`

`r-4 w-2 x-1 none-0` 权限对应数字

`chmod 777 bashrc.sh` 直接修改权限

u 拥有者 g 群组 o 其他 a 所有

`chmod u=rx,g=rwx` 逗号隔开, = 赋值
`chmod u-x,g-rx` + - 表示增加或者减少某一个权限

## 拥有者 owner

`chown [-R] [账号名称]:[组名] [文件]`

## 群组 group

`chgroup [-R] [组名] [文件]`

比如 copy 文件后, copy 的文件需要改变 group 或者 owner