package reflection;

public class TestClass {
  public static void main(String[] args) throws Exception {
    Class<?> goatClass = Class.forName("reflection.Goat");
    Class<?> stringClass = Class.forName("java.lang.String");

    // package name
    System.out.println(goatClass.getPackage().getName());
    System.out.println(stringClass.getPackage().getName());

    // super class
    System.out.println(goatClass.getSuperclass().getName());
    System.out.println(stringClass.getSuperclass().getName());

    // interface
    System.out.println(goatClass.getInterfaces().length);

  }
}
