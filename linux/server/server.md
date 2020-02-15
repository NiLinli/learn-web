# 服务器

## ip 地址

私网地址

```text
10.0.0.0 - 10.255.255.255
172.16.0.0 - 172.31.255.255
192.168.0.0 - 192.168.255.255
```

NAT

172.20.10.2

## 代理

- 正向代理: 代理的是客户端, 客户端通过代理找服务端请求数据(典型 vpn)
- 反向代理: 代理服务器端, 转发数据到服务器端(内网服务器)

主要看代理服务器是**隐藏**了 客户端 信息还是 服务器端 的信息

## 防火墙

### iptables

### firewall

```bash
# 暂停防火墙
systemctl stop firewalld.service
# 启动防火墙
systemctl start firewalld.service
```

## ifconfig

配置和显示**Linux内核**中网络接口的网络参数

```bash
enp0s3: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 172.20.10.2  netmask 255.255.255.240  broadcast 172.20.10.15
        inet6 fe80::6949:12ab:aba3:f399  prefixlen 64  scopeid 0x20<link>
        ether 08:00:27:8b:65:da  txqueuelen 1000  (Ethernet)
        RX packets 60154  bytes 76739824 (73.1 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 31734  bytes 2971719 (2.8 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0

lo: flags=73<UP,LOOPBACK,RUNNING>  mtu 65536
        inet 127.0.0.1  netmask 255.0.0.0
        inet6 ::1  prefixlen 128  scopeid 0x10<host>
        loop  txqueuelen 1000  (Local Loopback)
        RX packets 428  bytes 37160 (36.2 KiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 428  bytes 37160 (36.2 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

## netstat

查看 Linux 应用的网络状态信息
