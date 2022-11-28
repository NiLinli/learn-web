package thread.executors_;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.Future;
import java.util.function.Supplier;

public class CompletableFutureDemo {

  public static void main(String[] args) {
    Supplier<Integer> task = () -> 1;
    CompletableFuture future = CompletableFuture.supplyAsync(task);

    // try {
    //   Object result = future.get();
    //   System.out.println(result);
    // } catch (InterruptedException | ExecutionException e) {
    //   e.printStackTrace();
    // }

    // future.thenRun(() -> {
    //   System.out.println(Thread.currentThread().getName());
    //   System.out.println("Run Done!");
    // });
    // System.out.println("Hello world.");

    // future.thenRunAsync(() -> {
    //   System.out.println(Thread.currentThread().getName());
    //   System.out.println("Run async Done!");
    // });
    // System.out.println("Hello world.");

    // future.thenAccept((result) -> {
    //   System.out.println(Thread.currentThread().getName());
    //   System.out.println(result);
    // });

    // future.thenAcceptAsync((result) -> {
    //   System.out.println(Thread.currentThread().getName());
    //   System.out.println(result);
    // });

    // MainService service = new MainService();
    // service.send();
    // System.out.println("Hello world.");

    // MainService service = new MainService();
    // CompletableFuture future = service.sendAsync();
    // future.thenRunAsync(() -> {
    // System.out.println(Thread.currentThread().getName());
    // System.out.println("Done!");
    // });
    // System.out.println("Hello world.");


    // transform
    // CompletableFuture<Integer> future2 = CompletableFuture.supplyAsync(() -> 20);
    // future2
    //   .thenApply((celsius) ->  (int) (celsius * 1.8) + 32)
    //   .thenAccept((result) -> {
    //     System.out.println(result);
    //   });

    // // compose
    // CompletableFuture<String> future3 = CompletableFuture.supplyAsync(() -> "email");
    // future3.thenCompose(email -> CompletableFuture.supplyAsync(() -> "playlist"))
    //   .thenAccept(playlist -> System.out.println(playlist));

    
    // // combine
    // CompletableFuture<Integer> future4 = CompletableFuture.supplyAsync(() -> 20);
    // CompletableFuture<Double> future5 = CompletableFuture.supplyAsync(() -> 0.9);
    // future5
    //   .thenCombine(future4, (exchangeRate, price) -> {
    //     return price * exchangeRate;
    //   })
    //   .thenAccept(result -> System.out.println(result));

    // // all
    // CompletableFuture<Integer> first = CompletableFuture.supplyAsync(() -> 1);
    // CompletableFuture<Integer> second = CompletableFuture.supplyAsync(() -> 2);
    // CompletableFuture<Integer> third = CompletableFuture.supplyAsync(() -> 3);

    // CompletableFuture<Void> all = CompletableFuture.allOf(first, second, third);

    // all.thenRun(() -> {
    //   try {
    //     // 不会阻塞代码, 因为都执行完毕了
    //     int firstResult = first.get();
    //     System.out.println(firstResult);
    //   } catch (InterruptedException | ExecutionException e) {
    //     e.printStackTrace();
    //   }
    //   System.out.println("All tasks completed successfully.");
    // });

    // anyOf
    // CompletableFuture<Integer> first = CompletableFuture.supplyAsync(() -> {
    //   LongTask.simulate();
    //   return 20;
    // }); 
    // CompletableFuture<Integer> second = CompletableFuture.supplyAsync(() -> 2);
    // CompletableFuture<Object> faster = CompletableFuture.anyOf(first, second);
    // faster.thenAccept(temp -> System.out.println(temp));





  




  }
}
