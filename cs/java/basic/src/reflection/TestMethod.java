package reflection;

import java.lang.reflect.Array;
import java.lang.reflect.Method;
import java.util.Arrays;

public class TestMethod {
  public static void main(String[] args) throws Exception {
    Class<?> birdClass = Class.forName("reflection.Bird");

    // public class and superclass method
    // Method[] methods = birdClass.getMethods();
    // System.out.println(Arrays.toString(methods));

    // public class
    // Method[] declaredMethods = birdClass.getDeclaredMethods();
    // System.out.println(Arrays.toString(declaredMethods));

    Method setWalksMethod = birdClass.getDeclaredMethod("setWalks", boolean.class);
    Method getWalksMethod = birdClass.getDeclaredMethod("getWalks");

    Bird bird = new Bird();

    setWalksMethod.invoke(bird, true);
    System.out.println(getWalksMethod.invoke(bird));
  }
}
