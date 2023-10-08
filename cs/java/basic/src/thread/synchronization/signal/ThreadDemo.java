package thread.synchronization.signal;

public class ThreadDemo {
  public static void main(String[] args) {
    System.out.println(Thread.currentThread().getName());
    DownloadStatus status = new DownloadStatus();

    Thread thread = new Thread(new DownloadFileTask(status));

    Thread thread2 = new Thread(() -> {

      while (!status.isDone()) {
        synchronized (status) {
          try {
            // 被告知更新, 直接从 RAM 取值而不是取 CPU cache
            status.wait();
          } catch (InterruptedException e) {
            e.printStackTrace();
          }
        }
      }

      System.out.println(status.getTotalBytes());
    });

    thread.start();
    thread2.start();

    System.out.println(status.getTotalBytes());
  }
}
