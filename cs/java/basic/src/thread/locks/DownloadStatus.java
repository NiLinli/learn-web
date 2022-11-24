package thread.locks;

import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class DownloadStatus {
  private int totalBytes;
  private Lock lock = new ReentrantLock();

  public int getTotalBytes() { 
    return totalBytes;
  }

  // 限制并行访问一个对象, 通过 lock 对象
  // 只能按照顺序去访问
  public void incrementTotalBytes() {
    lock.lock();
    try {
      totalBytes++;
    } finally {
      lock.unlock();
    }
  }
}
