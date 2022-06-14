# Java

1995/5/23 Java 语言诞生

## JRE

Java Runtime Environment (Java 程序需要的环境, 用户使用)

- JVM java 虚拟机
- Java 基础 lib

## JDK

Java Development Kit (程序员使用)

- JRE
- 编译器 javac
- 其他开发小工具...

## 编译与执行


## 文件结构

### class 类

.java 文件 (class 定义, 编译单元)

- 一个 .java 文件称为一个编译单元(只能有一个 public class)

class 中带有 main() 方法

- 虚拟机把 main()作为程序的起点 `public static void main(String[] args) { }`
- 启动程序
- 启动测试程序 TestDrive

public

- class 必须与 .class 文件文件名一致

### package

package 包管理机制(用来管理 class)

文件夹去管理 package, 一个文件夹下面的编译单元都同属于一个 package
包里面带的 . 就是文件夹的层次

## 发布 pkg

### jar

jar: java archive [ˈɑ:rkaɪv] v.存档;n.档案文件; 档案室;

### 1.将 source 与 class 分离

```bash
cd MyProject/source
javac -d ../classes MyApp.java
javac -d ../classes *.java        // 编译当前source里面的所有文件
```

### 2.创建可执行的 jar

1. 确定所有类文件都在 classes 目录下
2. 创建 manifest.txt(放在 source 文件夹下面)
3. 描述哪个类带有 main()方法，并且该文件带有下面代码

`Main-Class: com.nll.MyApp`

### 3. 执行 jar 工具创建 jar 文件

压缩所有类文件以及 manifest.txt

```bash
cd MyProject/classes
jar -cvmf manifest.txt App.jar com    //com为文件夹
# 或
jar -cvmf manifest.txt App.jar *.class
```

### 执行 jar

%java -jar App.jar  
解压 jar

```bash
%jar -tf APP.jar  //Table file
%jar -xf App.jar  //eXtract file
```

### 类装入包中

1. 选择包名称：com.headfisrtjava
2. 在源文件加入说明语句，必须为第一个且靠上 `pakage com.headfirstjava;`
3. 在 source 设定相应的目录结构，且必须把类放在与包层次相对应的目录结构下

## compile(AOT)

`javac HelloWorld.java`

java(代码) => class(二进制文件)

### run(JIT)

`java HelloWorld`

不要带 class 后缀

## archive


