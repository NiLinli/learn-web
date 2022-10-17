package io;
import java.io.*;

public class StandIOTest {
  public static void main(String[] args) throws IOException {
    
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    String str;
    System.out.println("Enter lines of text.");
    System.out.println("Enter 'end' to quit.");
    do {
      str = br.readLine();
      System.out.println(str);
    } while (!str.equals("end"));


    // System.out 是 PrintStream(char stream) 的一个引用
    System.out.write('1');
    System.out.write('\n');
    System.out.println("😄");
  }
}
