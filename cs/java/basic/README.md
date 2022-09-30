# Java

1995/5/23 Java 语言诞生

[java8 教程](https://docs.oracle.com/javase/tutorial/tutorialLearningPaths.html#newtojava)

Write once, run anywhere

- source code.java 源代码
- bytecode.class 字节码
- machine code/native code 机器码

## JDK

Java Development Kit (程序员使用)

### JRE

Java Runtime Environment (Java 程序需要的环境, 用户使用)

- JVM java 虚拟机
- Java 基础 lib

### 编译

编译器 javac: .java => .class(二进制文件)  
compile(AOT)  

```sh
javac \
  -d ./bin \  # 目标文件夹
  HelloWorld.java
```
编译生成的文件夹结构和原始结构并不相同, 是根据 package 生成的  
编辑器会编译的相同, 所以源文件结构 package 和文件夹名字应该保持相同  

### 执行

执行 java: 寻找主类执行, 不是加载文件, 不要带 class 后缀  
run(JIT)  
CLASSPATH: 寻找 user classes.

```sh
java \
  -cp ./bin \  # class path 覆盖执行
  HelloWorld
```

### 打包

jar: java archive [ˈɑ:rkaɪv] 打包 存档


查看
```bash
%jar -tf APP.jar  // table file
%jar -xf App.jar  // extract file
```

创建 & 更新
```bash
# 在构建 class 的文件夹中生成
cd Project/bin

# cf 创建 jar
# m 追加 manifest 属性, 注意换行
# e 覆盖 manifest's Main-Class
# v 输出创建的过程
jar -cfmv jar-file addon-manifest input-file(s)
jar -cfev jar-file Main-Class input-file(s)
```

运行
```java
java -jar App.jar
```

## JVM

Java Virtual Machine

## OOP

- object: An object is a software bundle of related state and behavior.
- class: A class is the blueprint from which individual objects are created.
- inheritance: Object-oriented programming allows classes to inherit commonly used state and behavior from other classes.
- interface: Interfaces form a contract between the class and the outside world, and this contract is enforced at build time by the compiler. 
- package: A package is a **namespace** that organizes a set of related classes and interfaces. 

## Distribute

