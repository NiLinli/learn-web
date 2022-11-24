package thread.concurrency;

public class ThreadDemo {
  public static void main(String[] args) {
    System.out.println(Thread.currentThread().getName());

    // concurrency
    // 花费 5s, 而不是 5 * 10 s
    // for(int i = 0; i < 10; i++) {
    //   Thread thread = new Thread(new DownloadFileTask());
    //   thread.start();
    // }

    // join
    // Thread thread = new Thread(new DownloadFileTask());
    // thread.start();
    // try {
    //   // 告诉当前 thread (main thread) 线程执行完成
    //   thread.join();
    // } catch (InterruptedException e) {
    //   e.printStackTrace();
    // }
    // System.out.println("File is ready to be scanned");


    // interrupt
    Thread thread = new Thread(new DownloadFileTask());
    thread.start();

    try {
      Thread.sleep(2000);
    } catch (InterruptedException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    }
    
    // 发送指令给 thread
    thread.interrupt();
  }
}
