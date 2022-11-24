package thread.sync;

import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class DownloadStatus {
  private int totalBytes;
  private int totalFiles;

  private Object totalBytesLock = new Object();
  private Object totalFilesLock = new Object(); 

  public int getTotalBytes() {
    return totalBytes;
  }

  // public void incrementTotalBytes() {
  //   // 两个线程无法并行访问一个对象
  //   synchronized (this) {
  //     totalBytes++;
  //   }
  // }

  // 等同于上面
  // public synchronized void incrementTotalBytes() {
  //   totalBytes++;
  // }

  public void incrementTotalBytes() {
    // 创建一个专有的监控对象
    synchronized (totalBytesLock) {
      totalBytes++;
    }
  }

  public int getTotalFiles() {
    return totalFiles;
  }

  // public void incrementTotalFiles() {
  //   // 访问 incrementTotalFiles 时候
  //   // 监控对象 this 整个对象被 lock, incrementTotalBytes 也无法访问
  //   synchronized (this) {
  //     totalFiles++;
  //   }
  // }

  public void incrementTotalFiles() {
    synchronized (totalFilesLock) {
      totalFiles++;
    }
  }
}
