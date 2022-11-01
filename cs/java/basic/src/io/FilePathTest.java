package io;

import java.io.File;

public class FilePathTest {
  public static void main(String[] argv) {
    // 相对于 cwd
    // 绝对与系统文件根目录
    System.out.println("cwd:");
    System.out.println(new File("").getAbsolutePath());
    System.out.println(new File("/").getAbsolutePath());
    System.out.println(System.getProperty("user.dir"));

    // 相对于 当前 class 文件
    // 绝对于 cp
    System.out.println("class:");
    System.out.println(FilePathTest.class.getResource(""));
    System.out.println(FilePathTest.class.getResource("/"));

    // cp
    // 相对于 cp
    System.out.println("cp:");
    System.out.println(ClassLoader.getSystemResource("io"));
    System.out.println(FilePathTest.class.getClassLoader().getResource("oop"));
    System.out.println(FilePathTest.class.getClassLoader().getResource(""));
    System.out.println(Thread.currentThread().getContextClassLoader().getResource(""));

    // cwd:
    // /Users/nilinli/Note/learn-web/cs/java/basic
    // /
    // /Users/nilinli/Note/learn-web/cs/java/basic
    // class:
    // file:/Users/nilinli/Note/learn-web/cs/java/basic/bin/io/
    // file:/Users/nilinli/Note/learn-web/cs/java/basic/bin/
    // cp:
    // file:/Users/nilinli/Note/learn-web/cs/java/basic/bin/io
    // file:/Users/nilinli/Note/learn-web/cs/java/basic/bin/oop
    // file:/Users/nilinli/Note/learn-web/cs/java/basic/bin/
    // file:/Users/nilinli/Note/learn-web/cs/java/basic/bin/

    // cwd:
    // /Users/nilinli/Note/learn-web/cs/java/basic
    // /
    // /Users/nilinli/Note/learn-web/cs/java/basic
    // class:
    // jar:file:/Users/nilinli/Note/learn-web/cs/java/basic/bin/App.jar!/io/
    // null
    // cp:
    // jar:file:/Users/nilinli/Note/learn-web/cs/java/basic/bin/App.jar!/io
    // jar:file:/Users/nilinli/Note/learn-web/cs/java/basic/bin/App.jar!/oop
    // null
    // null
  }
}
