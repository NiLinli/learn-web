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

- 目录 blocls

### 文件访问

1. 目录 block 中找到通过文件名找到文件名对应的 inode
2. 通过 inode 找到文件 block

## 链接

`ln [-s] source target`  
`ls -l -i` 查看文件 inode

链接文件: 共享文件的一种方式

### hard link 硬链接

特点

- 新建: 普通文件, 和源文件指向同一个 inode(文件夹存储的文件信息 直接指向一个 inode)
- 查看/修改: 源文件/硬链接文件, 两个文件都会发生改变
- 删除: 只要有文件还指向 inode, 文件就不会被删除, 所以只有将源文件和硬链接文件都删除, 才会删除文件 block

限制(建立新的 inode 的情况都被限制)

- 不能跨分区建立硬链接文件, 因为会跨分区会重新建立 inode
- 不能给目录建立硬链接, 因为目录下面子文件/夹都要递归建立硬连接记录 inode

无法给目录建立 & 无法跨区导致硬链接使用比较少

### soft/symbol link 软链接

些目录层次较深的文件链接到一个更易访问的目录

特点

- 新建: 建立了一个新的文件 (inode + block)
  - block 存放源文件文件名和 inode (window 快捷方式文件, 指针)
- 查看/修改: 同硬链接
- 删除: 源文件删除了, 软链接文件显示不存在; 软链接文件删除了, 源文件不收影响
