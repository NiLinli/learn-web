# ftp 服务器

## 安装

`yum install -y vsftpd`

安装后目录为 `/etc/vsftpd`

## 配置

- ftpusers 黑名单
- user_list 白名单
- vsftpd.conf 核心配置
- vsftpd_conf_migrate.sh 脚本

```bash
chkconfig vsftpd on       # 修改为开机启动
service vsftpd restart    # 重启
netstat -antup | grep ftp # 查看服务
```

vsftpd.conf 配置

```bash
# 是否允许匿名登录
anonymous_enable=YES

# 是否允许跳出 home 目录
chroot_local_user=YES

# 添加一条 home 可以写
allow_writeable_chroot=YES
```

### 配置用户

指定确定的目录  
已有的目录不能存在文件, 无法拷贝 /etc/skel

- `useradd -s /sbin/nologin -d /usr/local/nginx/www ftp_upload_user` 添加用户
- `chmod o+w /usr/local/nginx/www` 修改权限
- `setenforce 0` 修改 selinux

使用该用户进行登录

## 客户端

- fileZilla
- SFTP(vscode)
