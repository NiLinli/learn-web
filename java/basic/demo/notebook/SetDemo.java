import java.util.HashSet;

public class SetDemo {


  public static void main (String[] args) {
    HashSet<String> hs = new HashSet<String>();

    hs.add("456");
    hs.add("123");
    hs.add("1234");
    hs.add("123");

    // for (String s : hs) {
    //   System.out.println(s);
    // }  
    System.out.println(hs);
  }
}