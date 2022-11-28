package thread.executors_;

public class FlightDemo {
  public static void main(String[] args) {
    FlightService service = new FlightService();

    service.getQuote("site1")
        .thenAccept(quote -> {
          System.out.println(quote);
        });

    try {
      Thread.sleep(10_000);
    } catch (InterruptedException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    }
  }
}
