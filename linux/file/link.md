# link

## ext4 文件系统

- inode 集合
- block 集合
- 超级块

### inode

128 Byte, 一个文件对应一个 inode, 记录:

- 文件权限 rwx
- owner，group
- size
- mtime/ctime/atime
- 文件的 **block 编号**

### block

1kb/2kb/3kb/4kb(默认)

文件的实际存储

- 目录 block: 目录下的文件名信息 以及 inode 等
- 文件 block: 实际的文件内容

### 文件访问

1. 目录 block 中找到通过文件名找到文件名对应的 inode
2. 通过 inode 找到文件 block

## 链接

`ln [-s] source target`  
`ls -l -i` 查看文件 inode

### hard link 硬链接

特点

- 硬连接的文件都指向同一个 inode
- 硬链接不会建立新的 inode 信息, 所以也不会更改 inode 总数

限制

- 不能跨分区建立硬链接文件，因为会跨分区会重新建立 inode
- 不能给目录建立硬链接, 因为目录下面子文件/夹都要递归建立硬连接记录 inode

文件

- 修改: 源文件/硬链接文件, 两个文件都会发生改变
- 删除文件: 只要有文件还指向 inode, 文件就不会被删除, 所以只有将源文件和硬链接文件都删除, 才会删除文件 block

总结

限制多, 除了源文件/链接文件相同 inode 之外, 特征不明显, 不是**很常用**

### soft link 软链接

特点

- 软链接新建了一个 inode 以及一个 block, block 存放源文件文件名和 inode (window 快捷方式文件, 指针)

无硬链接的限制

文件

- 修改: 同硬链接
- 删除文件: 源文件删除了, 软链接文件显示不存在; 软链接文件删除了, 源文件不收影响

