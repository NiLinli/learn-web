# secure shell

## OpenSSH

[openssh](https://www.openssh.com)

port 22

### ssh

`ssh username@ip`

#### config

- `/etc/ssh/ssh_config`
- `~/.ssh/config`

```bash
Host <alias>
  HostName <ip-address/域名>
  Port <port>
  User <username>
  IdentityFile <path_to_your_private_key>
```

git ssh 方式登陆配置

```bash
Host github
  HostName github.com
  Port 22
  User git
  IdentityFile ~/.ssh/custom_private_key
```

#### 凭证

有默认值

- 通过命令指定 `ssh username@ip -i ~/.ssh/id_rsa`
- 通过配置指定

### sftp

```bash
sftp username@ip  # 登录

# 远程操作
ls
pwd
mkdir

# 本地操作
lpwd
put -r   # 上传
get -r   # 下载

exit              # 退出
```

### key manange

- 生成 key
- 添加默认 key
- ...
