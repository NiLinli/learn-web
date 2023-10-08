package thread.synchronization.atomic_;

import java.util.concurrent.atomic.AtomicInteger;

public class DownloadStatus {
  // CPU 指令级别
  // CAS 乐观锁
  private AtomicInteger totalBytes = new AtomicInteger();

  public int getTotalBytes() {
    return totalBytes.get();
  }

  public void incrementTotalBytes() {
    totalBytes.getAndIncrement();

  }
}
