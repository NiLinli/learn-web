package annotation_;

import java.lang.reflect.Method;

public class Test {

  public static void main(String[] args) throws Exception {


    // 反射 动态创建的对象 或者操作其他操作
    Class clazz = Class.forName("annotation_.InitDemo");
    Method[] methods = clazz.getMethods();

    if (methods != null) {
      for (Method method : methods) {
        boolean isInitMethod = method.isAnnotationPresent(InitMethod.class);

        if (isInitMethod) {
          method.invoke(clazz.getConstructor(null).newInstance(null), null);
        }
      }
    }

  }

}
