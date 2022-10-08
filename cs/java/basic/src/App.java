import java.io.Console;

// 一个.java 文件称为一个编译单元
// 只能有一个 public class
// 文件名需与类名一致
public class App {

    // 程序入口方法
    public static void main(String[] args) throws Exception {

        Console c = System.console();

        if (c == null) {
            System.err.println("No console.");
            System.exit(1);
        }

        // 阻塞测试 attach 调试
        String login = c.readLine("Debugger pause: ");

        System.out.println(login);        
        System.out.println("Hello, World!");
    }
}
