package reflection;

public class Person {
  public String name;
  private int age;

  public static int MAX_AGE = 150;

  public Person() {
    this("nixixi", 18);
  }

  public Person(String name, int age) {
    this.name = name;
    this.age = age;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getAge() {
    return age;
  }

  public void setAge(int age) {
    this.age = age;
  }
}
