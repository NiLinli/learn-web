package data_type.string;

public class StringTest {
  public static void main(String[] args) {

    // 字符串的创建
    String s1 =  new String("Hello world");
    // 使用字面量创建
    String s2 = "Hello world";

    System.out.println(s1);
    System.out.println(s2);

    // equals
    System.out.println(s1 == s2);
    System.out.println(s1.equals(s2));

    // length()
    System.out.println(s1.length());

    // charAt() 不支持数组访问的方式
    System.out.println(s1.charAt(1));
    // The type of the expression must be an array type but it resolved to String
    // System.out.println(s1[1]);

    String s3 = "123";
    int a = Integer.valueOf(s3);

    String s4 = "😊";
    System.out.println(s4.length()); // 2 和 js 处理逻辑相同

  }
}