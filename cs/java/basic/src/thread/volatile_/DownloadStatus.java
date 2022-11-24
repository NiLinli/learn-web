package thread.volatile_;

public class DownloadStatus {
  // 告知 JVM 这个值不稳定, 应该从 RAM 中取而不是在CPU cache 中存取
  // 确保修改是线程之间可见的
  // 比 Lock 更加轻量级
  private volatile boolean isDone;
  private int totalBytes;
  private int totalFiles;

  private Object totalBytesLock = new Object();
  private Object totalFilesLock = new Object(); 

  public int getTotalBytes() {
    return totalBytes;
  }

  public void incrementTotalBytes() {
    // 创建一个专有的监控对象
    synchronized (totalBytesLock) {
      totalBytes++;
    }
  }

  public int getTotalFiles() {
    return totalFiles;
  }

  public void incrementTotalFiles() {
    synchronized (totalFilesLock) {
      totalFiles++;
    }
  }

  public void done() {
    isDone = true;
  }

  public boolean isDone() {
    return isDone;
  }
}
