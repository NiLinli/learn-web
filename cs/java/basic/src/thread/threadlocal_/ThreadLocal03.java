package thread.threadlocal_;

public class ThreadLocal03 {

  public static void main(String[] args) {
    new Service01().process();
  }

}

class Service01 {
  public void process() {
    User user = new User("abcd1234joe");
    UserContextHolder.holder.set(user);
    new Service02().process();
  }
}

class Service02 {
  public void process() {
    User user = UserContextHolder.holder.get();
    System.out.println("Service02: " + user.id);
    user.id = "omgsixlkjl12j3l";
    new Service03().process();
  }
}

class Service03 {
  public void process() {
    User user = UserContextHolder.holder.get();
    System.out.println("Service03: " + user.id);
  }
}

class UserContextHolder {
  // global 变量 防止 Thread 不安全
  public static ThreadLocal<User> holder = new ThreadLocal<>();

}

class User {
  String id;

  public User(String id) {
    this.id = id;
  }
}
