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
- use table_name;
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