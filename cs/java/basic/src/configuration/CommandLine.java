package configuration;

public class CommandLine {
  public static void main(String[] args) {
    // args: space character separates
    for(String s: args) {
      System.out.println(s);
    }
  }
}

// arg 传递方式
// java configuration.CommandLine arg1 arg2 arg3 ...