package thread.volatile_;

import java.util.ArrayList;
import java.util.List;

public class ThreadDemo {
  public static void main(String[] args) {
    System.out.println(Thread.currentThread().getName());
    DownloadStatus status = new DownloadStatus();

    Thread thread = new Thread(new DownloadFileTask(status));

    Thread thread2 = new Thread(() -> {
      // 无限期调用, 看不到更改 done
      // visibility problem
      // 一个线程改了东西, 另外一个线程看不到
      // 原因: jvm 优化代码运行, 缓存值
      // RAM 存值
      // CPU 中有 local Cache, CPU 从 local Cache 中读取值会更快
      // CPU1 中改变的值, 同步到 RAM 中, 但是没有同步到 CPU2 中
      while (!status.isDone()) {
      }

      System.out.println(status.getTotalBytes());
    });

    thread.start();
    thread2.start();

    System.out.println(status.getTotalBytes());
  }
}
