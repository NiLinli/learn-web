import graphics.*;

// 一个.java 文件称为一个编译单元
// 只能有一个 public class
// 文件名需与类名一致
public class App {

    // 程序入口方法
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");        
        new Circle(); // import
        new graphics.Circle(); // 直接使用 namespace 调用
    }
}
