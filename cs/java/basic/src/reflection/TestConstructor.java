package reflection;

import java.lang.reflect.Constructor;

public class TestConstructor {
  public static void main(String[] args) throws Exception {
    Class<?> birdClass = Class.forName("reflection.Bird");

    // Inspecting Constructors
    Constructor<?>[] birdConstructors = birdClass.getConstructors();
    System.out.println(birdConstructors.length);

    Constructor<?> cons1 = birdClass.getConstructor();
    Constructor<?> cons2 = birdClass.getConstructor(String.class);
    Constructor<?> cons3 = birdClass.getConstructor(String.class, boolean.class);

    // instantiate objects
    Bird bird1 = (Bird) cons1.newInstance();
    Bird bird2 = (Bird) cons2.newInstance("Weaver bird");
    Bird bird3 = (Bird) cons3.newInstance("dove", true);

    System.out.println(bird1.getName());
    System.out.println(bird2.getName());
    System.out.println(bird3.getName());
  }

}
