package thread.executors_;

import java.util.Random;
import java.util.concurrent.CompletableFuture;


public class FlightService {
  public CompletableFuture<Quote> getQuote(String site) {
    return CompletableFuture.supplyAsync(() -> {
      System.out.println("Getting a quote from " + site);

      LongTask.simulate();
      Random r = new Random();
      return new Quote(site, 100 + r.nextInt(10));
    });
  }
}
