package thread.volatile_;

public class DownloadFileTask implements Runnable {

  private DownloadStatus status;

  public DownloadFileTask(DownloadStatus status) {
    this.status = status;
  }

  @Override
  public void run() {
    System.out.println("Downloading a file: " + Thread.currentThread().getName());

    for(int i = 0; i< 1_000_000; i++) {
      if (Thread.currentThread().isInterrupted()) return;
      status.incrementTotalBytes();
    }

    status.done();
    
    System.out.println("Downloading a complete: " + Thread.currentThread().getName());
  }

  public DownloadStatus getStatus() {
    return status;
  }
}
