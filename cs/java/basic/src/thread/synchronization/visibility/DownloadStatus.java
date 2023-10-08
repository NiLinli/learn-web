package thread.synchronization.visibility;

public class DownloadStatus {
  // 确保修改是线程之间可见的
  // 比 Lock 更加轻量级
  private  volatile boolean isDone;
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

  // lock 也会解决不可见问题
  // lock 与 volatile 不需要同时使用
  
  // public synchronized void done() {
  //   isDone = true;
  // }

  // public synchronized boolean isDone() {
  //   return isDone;
  // }
}
