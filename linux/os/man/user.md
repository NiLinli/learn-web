## 账户


用户登录

`[账号 @主机名 当前目录]`
光标在其后面表示可以输入 shell command, 其他情况下是进入了一些软件程序内

退出当前用户的登录 `exit`

### 登录

ssh 或者 telnet 连接主机, 然后需要 username + pwd 进行登录

1. 在 `/etc/passwd` 查看是否存在账号? 存在独处 userId(UID) groupId(GID)
2. 在 `/etc/shadow` 查看密码是否对应?
3. 进入 shell

### 账号管理

- `/etc/passwd` user 信息
- `/etc/group` group 信息

`root:*:0:0:System Administrator:/var/root:/bin/sh`  
账号名称:密码:UID:GID:说明:home 目录:用户所使用的 shell

- `/etc/shadow` user 密码管理
- `/etc/gshadow` group 密码管理

### SID

sid 0 为 系统管理员

### GID

group id

### 账号新增

1. 编辑/etc/passwd与/etc/group
2. 创建用户主目录
3. 从/etc/skel拷贝文件与目录
4. 让新用户获得其主目录与文件的拥有权限
5. 给新用户一个密码

```bash
# 添加 group
groupadd [-g GID] groupname
-g 指定 groupId

# 删除 group
groupdel groupname

# 添加 user
useradd [-u UID] [-g GID] [-d HOME] [-mM] [-s shell] username
-u 指定 userId
-g 添加到对应的 groupId 组内
-d 指定 HOME 目录
-s 定义其指定的 shell

# 删除 user
userdel [-r] username
-r 删除所有相关目录 [home directory] + [/var/spool/mail/username]
```

### 更改账号信息

```bash
# [-s shell] 改变当前用户的 shell
chsh [-s shellname] [-l]
-s 指定 shell
-l 列出所有 shell 的 list

# 修改密码(当前用户)
passwd

# 修改密码(root 给其他用户)
passwd [username]
```

### 使用身份切换

`/etc/sudoers` 设定可以使用 sudo 执行 root 权限的 user

- 使用 `visudo` 修改 `/etc/sudoers`

```bash
# User privilege specification

```

```bash
# 切换为 root, 但是环境变量还是原账户的
su

# 将环境变量切花到 root
su -

# 切换到一般账户
su username

# 切换到 root 执行命令(输入当前身份的密码即可, 防止了密码泄露)
sudo [command]

# root 切换到相应的 username 执行相应的 shell script
sudo [-u username] [command]
```

### 当前身份信息

```bash
# 查看 userId
id [username]

# 查看当前用户所在的 groupId
groups [username]

# finger
finger [-s] username
```
