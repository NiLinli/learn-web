package thread.race_collection;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;

public class TreadDemo {
  public static void main(String[] args) {
    // Collection<Integer> collection = new ArrayList<>();
    Collection<Integer> collection = Collections.synchronizedCollection(new ArrayList<>());


    Thread thread = new Thread(() -> {
      collection.addAll(Arrays.asList(1, 2, 3));
    });

    Thread thread2 = new Thread(() -> {
      collection.addAll(Arrays.asList(4, 5, 6));
    });


    thread.start();
    thread2.start();

    try {
      thread.join();
      thread2.join();
    } catch (InterruptedException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
    }


    System.out.println(collection);
  }
}
