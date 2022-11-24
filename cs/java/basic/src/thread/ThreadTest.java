package thread;

public class ThreadTest {
  public static void main(String[] args) {
    System.out.println(Thread.activeCount());
    System.out.println(Runtime.getRuntime().availableProcessors());
  }
}
