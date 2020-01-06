# FHS

Filesystem Hierarchy Standard 文件系统结构标准

`/` 根目录是整个系统最重要的一个目录，因为不但所有的目录都是由根目录衍生出来的

下面这些必须与根目录放在根目录下面(开机过程中, 仅有根目录会被挂载)

- /etc：配置文件
- /bin：重要执行档
- /dev：所需要的装置文件
- /lib：执行档所需的函式库与核心所需的模块
- /sbin：重要的系统执行文件

其他

## /usr

**不是 user**, Unix Software Resource 放 app 的

- /usr
  - /usr/local/

## /var
