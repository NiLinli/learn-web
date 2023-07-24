package com.example.zk.watcher;

import org.apache.zookeeper.WatchedEvent;
import org.apache.zookeeper.Watcher;
import org.apache.zookeeper.Watcher.Event.KeeperState;

public class ConnectWatcher implements Watcher {

  @Override
  public void process(WatchedEvent watchedEvent) {
    System.out.println("ConnectWatcher process");

    if (watchedEvent.getState() == KeeperState.SyncConnected) {
      System.out.println("Connect Success");
    } else if (watchedEvent.getState() == KeeperState.Closed) {
      System.out.println("Connect Closed");
    }

  }

}
