package thread.synchronization.synchronized_collection;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;

public class TreadDemo {
  public static void main(String[] args) {


    // 可能会出现
    // [null, null, null, 4, 5, 6]
    // [4, 5, 6]
    // [1, 2, 3, 4, 5, 6]
    // ...
    Collection<Integer> collection = new ArrayList<>();

    // [1, 2, 3, 4, 5, 6]
    // [4, 5, 6, 1, 2, 3]
    Collection<Integer> collection2 = Collections.synchronizedCollection(new ArrayList<>());

    Thread thread = new Thread(() -> {
      collection.addAll(Arrays.asList(1, 2, 3));
      collection2.addAll(Arrays.asList(1, 2, 3));
    });

    Thread thread2 = new Thread(() -> {
      collection.addAll(Arrays.asList(4, 5, 6));
      collection2.addAll(Arrays.asList(4, 5, 6));
    });

    thread.start();
    thread2.start();

    try {
      thread.join();
      thread2.join();
    } catch (InterruptedException e) {
      e.printStackTrace();
    }

    System.out.println(collection);
    System.out.println(collection2);
  }
}
