package thread.atomic_object;

import java.util.concurrent.atomic.AtomicInteger;
import java.util.concurrent.atomic.LongAdder;

public class DownloadStatus {
  // CPU compare & swap
  // CPU 执行操作符 支持单一不间断操作
  // 原子操作: 当前值与预期值比较, 不一致就交换, 只占用一次

  // 读取 8
  // 计算 8 + 1 -> 9  8 + 1 -> 9
  // 赋值 9 9

  // 原子操作 8 + 1 -> 9 9 + 1 -> 10
  private AtomicInteger totalBytes = new AtomicInteger();


  // private LongAdder totalBytes = new LongAdder();

  public int getTotalBytes() {
    return totalBytes.get();

    // return totalBytes.intValue(); // sum()
  }

  public void incrementTotalBytes() {
    totalBytes.getAndIncrement();

    // totalBytes.increment();
  }
}
