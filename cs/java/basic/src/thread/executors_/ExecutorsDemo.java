package thread.executors_;

import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class ExecutorsDemo {
  public static void main(String[] args) {
    ExecutorService executor = Executors.newFixedThreadPool(2);

    // System.out.println(executor.getClass().getName());

    // 不用显式的创建内存
    // 将 runnable 给线程池, 会自动分配执行
    // try {
    //   for (int i = 0; i < 10; i++) {
    //     executor.submit(() -> {
    //       System.out.println(Thread.currentThread().getName());
    //     });
    //   }
    // } finally {
    //   // 等待所有 runnable 完成后关闭 
    //   executor.shutdown();
    // }

    try {
      
      // 同步调用
      Future future = executor.submit(() -> {
        LongTask.simulate();
        return 1;
      });

      // 调用后不立即阻塞
      System.out.println("Do more thing ...");

      try {
        // 获取结果时候还是会阻塞
        Object result = future.get();
        System.out.println(result);
      } catch (InterruptedException | ExecutionException e) {
        e.printStackTrace();
      }
    }
    finally {
      executor.shutdown();
    }

  }
}