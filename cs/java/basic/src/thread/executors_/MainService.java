package thread.executors_;

import java.util.concurrent.CompletableFuture;

public class MainService {
  public void send() {
    LongTask.simulate();
    System.out.println("Mail was sent.");
  }

  public CompletableFuture<Void> sendAsync() {
    return CompletableFuture.runAsync(() -> send());
  }
}
