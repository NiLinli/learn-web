package thread.notify_wait;

public class DownloadStatus {
  
  private boolean isDone;
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
