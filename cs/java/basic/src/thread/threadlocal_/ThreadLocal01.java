package thread.threadlocal_;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ThreadLocal01 {
  
  public static ExecutorService executorService = Executors.newFixedThreadPool(10);

  public static void main(String[] args) {
    for (int i = 0; i < 60; i++) {
      int finalI = i;
      executorService.submit(new Runnable() {
        @Override
        public void run() {
          String dateString = new ThreadLocal01().dateFormat(finalI);
          System.out.println(dateString);
        }
      });
    }

    executorService.shutdown();
    
  }

  public String dateFormat(int seconds) {
    Date date = new Date(seconds * 1000);
    // 每个线程都新建一个变量
    SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    return dateFormat.format(date);
  }
}
