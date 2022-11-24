package thread.concurrency;

public class DownloadFileTask implements Runnable {
  @Override
  public void run() {
    System.out.println("Downloading a file: " + Thread.currentThread().getName());

    // try {
    //   Thread.sleep(5000);
    // } catch (Exception e) {
    //   e.printStackTrace();
    // }

    for(int i = 0; i< Integer.MAX_VALUE; i++) {
      if (Thread.currentThread().isInterrupted()) return;
      System.out.println("Downloading byte " + i);
    }
    
    System.out.println("Downloading a complete: " + Thread.currentThread().getName());
  }
}
