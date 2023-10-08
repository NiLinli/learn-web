package thread.confinement.threadlocal_;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ThreadLocal02 {
  
  public static ExecutorService executorService = Executors.newFixedThreadPool(10);

  // 共用一个 线程不安全
  // static SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");

  // Thread -> ThreadLocalMap -> ThreadLocal 每个 thread 都维护一套副本
  static ThreadLocal<SimpleDateFormat> dateFormat = new ThreadLocal<SimpleDateFormat>() {
    @Override
    protected SimpleDateFormat initialValue() {
      return new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    }
  };
  
  public static void main(String[] args) {
    for (int i = 0; i < 60; i++) {
      int finalI = i;
      executorService.submit(new Runnable() {
        @Override
        public void run() {
          String dateString = new ThreadLocal02().dateFormat(finalI);
          System.out.println(dateString);
        }
      });
    }

    executorService.shutdown();
    
  }

  public String dateFormat(int seconds) {
    Date date = new Date(seconds * 1000);

    // return ThreadLocal02.dateFormat.format(date);

    SimpleDateFormat simpleDateFormat = ThreadLocal02.dateFormat.get();

    System.out.println(Thread.currentThread().getName() + System.identityHashCode(simpleDateFormat));
    return simpleDateFormat.format(date);

  }
}
