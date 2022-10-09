package oop.anonymous;

public class HelloWorldAnonymousClasses {
  interface HelloWorld {
    public void greet();
    public void greetSomeone(String someone);
  }

  public void sayHello() {

    class EnglishGreeting implements HelloWorld {
      String name = "world";

      public void greet() {
        greetSomeone("world");
      }

      public void greetSomeone(String someone) {
        name = someone;
        System.out.println("Hello " + name);
      }
    }

    // 具名类
    HelloWorld englishGreeting = new EnglishGreeting();

    // 匿名类 基于父类去创建子匿名类
    HelloWorld frenchGreeting = new HelloWorld() {
      String name = "tout le monde";

      public void greet() {
        greetSomeone("tout le monde");
      }

      public void greetSomeone(String someone) {
        name = someone;
        System.out.println("Salut " + name);
      }
    };

    // 匿名类
    HelloWorld spanishGreeting = new HelloWorld() {
      String name = "mundo";

      public void greet() {
        greetSomeone("mundo");
      }

      public void greetSomeone(String someone) {
        name = someone;
        System.out.println("Hola, " + name);
      }
    };

    englishGreeting.greet();
    frenchGreeting.greetSomeone("Fred");
    spanishGreeting.greet();
  }

  public static void main(String... args) {
    HelloWorldAnonymousClasses myApp = new HelloWorldAnonymousClasses();
    myApp.sayHello();
  }
}
