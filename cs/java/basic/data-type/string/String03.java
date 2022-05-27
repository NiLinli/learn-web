import java.util.Scanner;

public class String03 {
  public static void main(String[] args) {
    // compareTo 根据 unicode 大小比较
    String s1 = "abc";
    String s2 = "abd";
    System.out.println(s1.compareTo(s2));

    // length() 获得长度
    String s3 = "倪西西abc";
    String s4 = "abcd123";
    String s5 = "😄123";
    System.out.println(s3.length());  // 6
    System.out.println(s4.length());  // 7
    System.out.println(s5.length());  // 5

    // charAt() 访问某个位置上面的字符
    System.out.println(s3.charAt(1));
    System.out.println(s4.charAt(1));
    System.out.println(s5.charAt(1));

    // substring(b, e)  [b, e)
    // substring(n)     [b=n, length)
    System.out.println(s4.substring(1));
    System.out.println(s4.substring(1, 3));

    // indexOf
    System.out.println(s4.indexOf('2'));  // 5 返回 index


  }
}