package reflection;

import java.lang.reflect.Modifier;

public class TestModifier {
  public static void main(String[] args) throws Exception {
    Class<?> goatClass = Class.forName("reflection.Goat");
    Class<?> animalClass = Class.forName("reflection.Animal");

    int goatMods = goatClass.getModifiers();
    int animalMods = animalClass.getModifiers();

    System.out.println(Modifier.isPublic(goatMods));
    System.out.println(Modifier.isPublic(animalMods));
    System.out.println(Modifier.isAbstract(animalMods));

  }
}
