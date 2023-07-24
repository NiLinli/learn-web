# zookeeper

tree

## 节点类型

- 持久节点
- 临时节点
- 顺序节点

## 客户端连接

`sh zkCli -server 127.0.0.1:2181`

## 节点操作

```sh
# 查询节点
ls / 

#
create path data

# 查询节点数据
get path 

# update
set path data

# delete
delete path
```

## version

```sh
stat path

dataVersion = 1

## 版本号一致才能修改
set path data -v1
```

## 临时节点

客户端退出后就会清理掉

create path data -e

stat path

ephemeralOwner = 0x100828e8e950000

## 顺序节点

创建时候保持在父节点下命名唯一  
每创建一个节点, 无论是否存在都有一个自增数

create /php/abc -s

Created /php/abc0000000001

## watcher

数据发生变化时候更新 比如配置中心

## ACL

Access Control List

- create
- read
- write
- delete 可以删除**子**节点
- admin 权限设置, 拥有所有权限




