package thread.synchronization.visibility;

public class ThreadDemo {
  public static void main(String[] args) {
    System.out.println(Thread.currentThread().getName());
    DownloadStatus status = new DownloadStatus();

    Thread thread = new Thread(new DownloadFileTask(status));

    Thread thread2 = new Thread(() -> {
      // visibility problem: thread cache
      while (!status.isDone())
        ;
      System.out.println(status.getTotalBytes());
    });

    thread.start();
    thread2.start();

    System.out.println(status.getTotalBytes());
  }
}
