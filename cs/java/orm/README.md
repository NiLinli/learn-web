# ORM

## JDBC

Java DataBase Connectivity

- Connection
- Statement
  - PreparedStatement 防止 SQL 注入
- ResultSet

## Mybatis

对 jdbc 的封装, Object Mapping 

- connect pool  
- ResultSet => Mapping => Java Object  
  - 会根据 interface 定义的类型映射
- dynamic sql
- cache sql
- lazy load sql
- ...

`#{}` 使用 PreparedStatement  
`${}` 直接拼接 使用 Statement

## ORM

Object 面向对象  
Relational 关系型数据库  
Mapping 映射  

