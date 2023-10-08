package thread.confinement.unshare;

public class DownloadFileTask implements Runnable {

  private DownloadStatus status;

  // confinement 限制
  // 限制多个线程共享对象, 每个线程都拥有一份对象
  public DownloadFileTask() {
    this.status = new DownloadStatus();
  }

  @Override
  public void run() {
    System.out.println("Downloading a file: " + Thread.currentThread().getName());

    for(int i = 0; i< 10_000; i++) {
      if (Thread.currentThread().isInterrupted()) return;
      status.incrementTotalBytes();
    }
    
    System.out.println("Downloading a complete: " + Thread.currentThread().getName());
  }

  public DownloadStatus getStatus() {
    return status;
  }
}
