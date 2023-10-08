package thread.confinement.unshare;

import java.util.ArrayList;
import java.util.List;

public class ThreadDemo {
  public static void main(String[] args) {
    System.out.println(Thread.currentThread().getName());

    List<Thread> threads = new ArrayList<>();
    List<DownloadFileTask> tasks = new ArrayList<>();
    
    for (int i = 0; i < 10; i++) {
      DownloadFileTask task = new DownloadFileTask();
      Thread thread = new Thread(task);
      thread.start();
      threads.add(thread);
      tasks.add(task);
    }

    for (Thread thread : threads) {
      try {
        thread.join();
      } catch (InterruptedException e) {
        e.printStackTrace();
      }
    }

    int totalBytes = tasks.stream()
        .map(t -> t.getStatus().getTotalBytes())
        .reduce(0, (a, b) -> a + b);

    System.out.println(totalBytes);
  }
}
