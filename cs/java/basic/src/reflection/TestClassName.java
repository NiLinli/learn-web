package reflection;

public class TestClassName {
  public static void main(String[] args) {
    Object goat = new Goat("haha");

    // 这种获取方式比较耗费内存
    Class<?> clazz = goat.getClass();

    System.out.println(clazz.getSimpleName());
    System.out.println(clazz.getName());
    // Canonical 典型的
    System.out.println(clazz.getCanonicalName());

  try {
    // 获取 class 的常规方式: 通过 class full name 找到 class
    Class<?> clazz1 = Class.forName(clazz.getName());

    System.out.println(clazz1.getSimpleName());
    System.out.println(clazz1.getName());
    System.out.println(clazz1.getCanonicalName());
  } catch (ClassNotFoundException e) {
    
    e.printStackTrace();
  }
  }
}
