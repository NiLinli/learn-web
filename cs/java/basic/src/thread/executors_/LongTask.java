package thread.executors_;

public class LongTask {
  public static void simulate() {
    try {
      Thread.sleep(5000);
    } catch (InterruptedException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    }
  } 
}
