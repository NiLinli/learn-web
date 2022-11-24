package thread.atomic_object;

import java.util.ArrayList;
import java.util.List;

public class ThreadDemo {
  public static void main(String[] args) {
    System.out.println(Thread.currentThread().getName());
    DownloadStatus status = new DownloadStatus();

    List<Thread> threads = new ArrayList<>();
    for (int i = 0; i < 10; i++) {
      Thread thread = new Thread(new DownloadFileTask(status));
      thread.start();
      threads.add(thread);
    }

    for (Thread thread : threads) {
      try {
        thread.join();
      } catch (InterruptedException e) {
        e.printStackTrace();
      }
    }
    System.out.println(status.getTotalBytes());
  }
}
