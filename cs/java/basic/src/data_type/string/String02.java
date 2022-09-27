package data_type.string;

import java.util.Scanner;

public class String02 {
  public static void main(String[] args) {

    String s1 =  new String("Hello");
    System.out.println(s1 + " world");   // 使用 + 拼接 
    
    // 比较 String 是否相等 (String 是 reference 变量)
    String s2 = "Hello";
    String s3 = "Hello";
    System.out.println(s2 == s3);
    System.out.println("Hello" == "Hello");

    String s4 = "World";
    String s5 = "234";
    String s6 = "World";
    System.out.println(s4 == s6);

    Scanner in = new Scanner(System.in);

    String s7 = in.next();
    System.out.println(s7);
    System.out.println(s4 == s7);
    System.out.println(s4.equals(s7));

    // ==       是否是同一个东西
    // equals   是否是相同的内容

  }
}