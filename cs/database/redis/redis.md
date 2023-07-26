# redis

Not Only SQL 

[redis doc](https://redis.io/docs/)

key-value db  
run in-memory dataset 不能超过机器 memory
persistent on disk database   
高效检索数据

默认会创建 16 个 DB

- set value
  - set value nx
  - set value xx
- get value
- exist key
- del key
- type key


## key

- 二进制安全的字符串(不会用标记物去标示字符串, 存储和读取到内存中二进制序列相同)
- key size 512M
  - 不建议太长, 实在太长可以考虑 hash
  - 不建议太短, 建议遵循相应的 schema, 比如 comment:4321:reply.to (user-type:id)

## time to live

过期时间

- expire key 10
- set key ex 10
- ttl key

## string

基本类型是字符串, 没有数字
number-like 的字符串可以进行算数操作

## composed of multiple elements

在添加第一个元素之前自动生成  
在取出最后一个元素后自动销毁  

### list

linked list

- rpush/lpush
- rpop/lpop
- lrange
- ltrim
- brpop...

- 记录最近的更新者
- consumer-producer pattern

### set

unordered collections of strings  
   
(返回值没有什么规律)

- sadd key member member
- spop key
- scard key 集合数量
- smembers key 
- sismember key member
- sinter key (intersection)
- sunionstore key (union)
- sdiffstore key (difference)

### hashes 

hash table

- hset key field1 value1 field2 value2 ...
- hget key field
- hmget key field1 value1 ...
- hgetall key

### sorted sets

结合 sets 和 hashes 特点, 给每个 member 一个 score 进行排序

- zdd key score member score member
- zrange key [withscores]/zrevrange key
- zrangebyscore key 
- zremrangebyscore hackers 
- zrank key memeber

## 其他类型

- streams
- geospatial 地理
- hyperloglog
- bitmaps
- bitfields