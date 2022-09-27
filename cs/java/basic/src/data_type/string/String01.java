package data_type.string;
import java.util.Scanner;

public class String01 {
  public static void main(String[] args) {

    // 字符串的创建
    String s1 =  new String("a string");
    System.out.println(s1);


    // 使用字面量创建
    String s2 = "Hello world";
    System.out.println(s2);

    Scanner in = new Scanner(System.in);
    String s3 = in.next();
    String s4 = in.nextLine();
    
    System.out.println(s3);
    System.out.println(s4);

  }
}