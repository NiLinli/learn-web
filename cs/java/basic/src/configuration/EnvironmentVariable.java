package configuration;
import java.util.Map;

public class EnvironmentVariable {
  public static void main(String[] args) {
    Map<String, String> env = System.getenv();

    for(String envName: env.keySet()) {
      System.out.format("%s = %s\n", envName, env.get(envName));
    }
    
  }
}