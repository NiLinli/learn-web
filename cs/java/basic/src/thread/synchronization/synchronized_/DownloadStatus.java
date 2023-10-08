package thread.synchronization.synchronized_;

public class DownloadStatus {
  private int totalBytes;
  private int totalFiles;

  private Object totalBytesLock = new Object();
  private Object totalFilesLock = new Object();

  public int getTotalBytes() {
    return totalBytes;
  }

  public void incrementTotalBytes() {
    // 创建一个专有的监控对象 totalBytesLock
    // 尽量不要使用 this, 会出现一个监控对象 lock 多个的情况
    synchronized (totalBytesLock) {
      totalBytes++;
    }
  }

  // public void incrementTotalBytes() {
  //   synchronized (this) {
  //     totalBytes++;
  //   }
  // }

  // 等同于上面 synchronized (this), 所以不要用于修饰 method
  // public synchronized void incrementTotalBytes() {
  //   totalBytes++;
  // }

  public int getTotalFiles() {
    return totalFiles;
  }

  public void incrementTotalFiles() {
    synchronized (totalFilesLock) {
      totalFiles++;
    }
  }
}
