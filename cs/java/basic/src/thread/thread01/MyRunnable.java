package thread.thread01;

public class MyRunnable implements Runnable {

  private Thread t;
  private String threadName;

  MyRunnable(String name) {
    this.threadName = name;
    System.out.println("Creating " + this.threadName);
  }

  public void start() {
    System.out.println("Starting " +  threadName );
    if (t == null) {
      t = new Thread(this, threadName);
    }
    t.start();

  }

  public void run() {
    System.out.println("Running " +  threadName);
      try {
         for(int i = 4; i > 0; i--) {
            System.out.println("Thread: " + threadName + ", " + i);
            // 让线程睡眠一会
            Thread.sleep(50);
         }
      }catch (InterruptedException e) {
         System.out.println("Thread " +  threadName + " interrupted.");
      }
      System.out.println("Thread " +  threadName + " exiting.");
  }
}