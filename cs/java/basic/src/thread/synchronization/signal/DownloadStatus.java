package thread.synchronization.signal;

public class DownloadStatus {

  private boolean isDone;
  private int totalBytes;

  private Object totalBytesLock = new Object();

  public int getTotalBytes() {
    return totalBytes;
  }

  public void incrementTotalBytes() {
    synchronized (totalBytesLock) {
      totalBytes++;
    }
  }

  public void done() {
    isDone = true;
  }

  public boolean isDone() {
    return isDone;
  }
}
