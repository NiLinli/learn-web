package thread.thread01;

public class ThreadTest {

  public static void main(String[] args) {
    MyRunnable R1 = new MyRunnable("Thread-1");
    R1.start();

    MyRunnable R2 = new MyRunnable("Thread-2");
    R2.start();
  }
}