package data_type.string;

public class StringBuilderTest {
  public static void main(String[] argv) {
    // StringBuilder 动态数组
    // creates empty builder, capacity 16
    StringBuilder sb = new StringBuilder();
    // adds 9 character string at beginning
    sb.append("Greetings");
    sb.reverse();

    System.out.println(sb);
  }
}
