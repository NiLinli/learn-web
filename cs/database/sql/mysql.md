# mysql

[mysql doc](https://docs.oracle.com/en-us/iaas/mysql-database/doc/getting-started.html)

## 登陆 & 退出

- mysql -h xxxx.com -u root -p
- quit 

## 数据库

- show databases;
- use database
- create database [database name];
  - unix 下面 database name 是大小写敏感的

## 数据表

- show tables;
- create table table_name (name VARCHAR(20), owner VARCHAR(20),species VARCHAR(20), sex CHAR(1), birth DATE, death DATE);
- describe table_name; 
- alert table table_name ...

### where

conditions 选择 row

- 比较表达式 = >= <= > <
- is null/is not null
- 逻辑表达式 AND 优先级高于 OR 
- 正则表达式 like/not like/regexp/rlike/regexplike()

### sort by

sort by col_name asc(默认)/desc

### 插入数据 insert

INSERT INTO pet VALUES ('Puffball','Diane','hamster','f','1999-03-30',NULL);

### 查询 select(retrieving)

SELECT what_to_select FROM which_table WHERE conditions_to_satisfy;

查询默认是当前选择的数据库, 其他数据库需要带数据库名前缀


column 可以被计算

- date
  - CURDATE() 当前时间
  - TIMESTAMPDIFF(YEAR,birth,CURDATE()) AS age 时间差
  - ...
- count(*) 计算每种选择的行数

### 删除 delete

### 更新 update


### 数据类型

null: a missing unknown value  
is null/is not null 不能使用比较操作符 = > < >= <=
group by null 与 null 相同
order by null 是最小值

### 联表 join

from A join B on [match condition]

## sql language


## string

- VARCHAR(x) 支持索引 65535 ~64kb
  - VARCHAR(50)  short string
  - VARCHAR(255) medium-length string
- TINYTEXT 255bytes
- TEXT 64kb
- MEDIUMTEXT 16MB json, scv
- LONGTEXT 4GB  log text


2010 MySQL utfmb4
5.5.3+
utf-8

更改 utfmb4

```sql
ALTER DATABASE database_name CHARACTER SET = utf8mb4 COLLATE = utf8mb4_unicode_ci;
ALTER TABLE table_name CONVERT TO CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
ALTER TABLE table_name CHANGE column_name column_name VARCHAR(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

Modify connection, client, and server character sets

SHOW VARIABLES WHERE Variable_name LIKE 'character\_set\_%' OR Variable_name LIKE 'collation%';


select 'a string', "another string", 'a' ' ' 'string';

binary string 对比 byte
string of characters 对比 char

database/table/column 都可以设置 CHARACTER SET & COLLATION

 A collation is a set of rules for comparing characters in a character set.
 compare the encodings.

SHOW CHARACTER SET LIKE 'utf%';
SHOW COLLATION WHERE Charset = 'utf8mb4';

Every character string literal has a character set and a collation.


character_set_system 元数据编码, 不需要修改


select length();
select length('哈哈😄');

配置

客户端程序

- 客户端编码的字符集
- 告知 mysql 服务端是什么字符集

mysql --default-character-set=utf8mb4
SET NAMES 'utf8mb4'; 可以改变客户端的配置

- character_set_client
- character_set_connection
- character_set_results
- collation_connection 

客户端字面量去定义字符串的编码 [_charset_name]'string' [COLLATE collation_name]




服务端 MySQL server

character_set_server=utfmb4
collation_server=utf8mb4_0900_ai_ci

数据库

character_set_database=utfmb4
collation_database=utf8mb4_0900_ai_ci

insert into char_test values ('😄😄😄😄😄😄😄😄😄😄','😄😄😄😄😄😄😄😄😄😄' );



M 为字符数

- char(M) 存储固定长度
- varchar(M) 存储实际长度 + 1


- BINARY(M)
- VARCHAR(M)

## Integers

- TINYINT/UNSIGNED TINYINT 1b
- SMALLINT 2b
- INT 4b
- BIGINT 8b

INT(4) => 0001 补零 只是用来显示, 并不是存储 

在适合的情况下, 存储越小越好(存储空间虽然很便宜)
查询比较快, 因为内存消耗小

## Fixed or Float point

- DECIMAL(p, s) p 精度, s 小数位数 alias: DEC NUMERICAL FIXED
- FLOAT 4b
- DOUBLE 8b

## Booleans

- BOOL/BOOLEAN TINYINT TRUE = 1 FALSE = 0

## Enums

- ENUM('small', 'medium', 'large')

避免使用, 增加枚举项需要更改表结构, 表数据比较大的时候, 重建整张表数据花费时间比较长  
重新建一张表 称为查询表, 记录枚举值 

## DATE/TIME

- DATETIME 8b
- TIMESTAMP 4b (up to 2038)
- DATE
- TIME
- YEAR

TIMESTAMP 存的是 unix timestamp(s) 
显示和 DATETIME 一致, 但是取出时候会根据 timezone 计算时间  

## Blobs

- TINYBLOB 255b
- MEDIUMBLOB 65kb
- BLOB 16mb
- LONGBLOB 4gb

一般不要把文件作为二进制存入到数据库
数据库是为了处理结构化关系型数据设计的

increase database size
slower backups
performance 读取比直接读取文件慢
增加代码读取/存储文件

## Json

mysql v8+

- JSON

对比 VARCHAR , 可以在数据库中直接操作 json 编辑 提取

## join

- INNER JOIN 返回符合条件的记录
  - JOIN
- OUT JOIN 不符合条件时候也会返回
  - LEFT JOIN 左表全部返回
  - RIGHT JOIN 避免使用

- NATURAL JOIN 不需要写 ON, mysql engine 自动关联, 不推荐使用
- CROSS JOIN 两个表交叉关联 m * n 列

## union

将多个结果集合并

## 数据库设计

### 数据建模

1. 了解业务需求, 收集数据
2. 建立概念模型 Conceptual
  - 表示实体之间的关系
  - Entity Relationship ER 数据建模
  - UML
  - 和业务商业交流
3. 建立逻辑模型 Logic
  - 抽象的数据模型, 显示实体以及关系架构 数据类型
  - 独立于具体的数据库实现
4. 建立实体模型 Physic
  - 逻辑模型通过具体的数据库的实现


### 实体模型

- 主键 每条记录的唯一标示 
- 外键 引用另外一张表(子表)中的主键 
  - restrict 拒绝变化
  - cascade  跟着变化
  - set null 设置为 null
  - no action 和 restrict 相同

- 一对一
- 一对多

### 标准化

消除冗余, 支持扩展  
只需要为现有的问题制定最佳解决方案, 不需要过度建模

1. 一行的每个单元都有单一值, 并且不能出现重复列
  - 存储 List => 多行List => 多对多
  - 直接存储了一个列表 List x=> 一行的每个单元都有单一值
  - 存储 Item1, Item2, ... x=> 不能出现重复列
  - 一对多(item 表) + 一对多(链接表 record) = 多对多
2. 一张表只能代表一个实例, 表中的每一列都在描述这个实体
  - 不属于这个实例的列 新建表 然后存入新表的 id
3. 表中的列不能派生自其他列
4. ...


## Indexes 索引

索引放入内存中, 也会持久化

- 增加数据库大小
- 更新数据时候 索引也会要更新 导致变慢

Btree
基于查询: 查询性能关键的位置添加索引


创建索引时候需要考虑索引的大小 (小) 与单个索引对应的数据的量 (小)

- 索引越长, 索引大小越大 x 对应的数据量越越少 ok
- 索引越短, 索引大小越小 ok 对应的数据量越多 x

找到最接近总数的 索引长度最短的

前缀index 只能匹配 = 不能匹配 LIKEs 

