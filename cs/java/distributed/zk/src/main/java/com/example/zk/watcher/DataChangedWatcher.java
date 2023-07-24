package com.example.zk.watcher;

import org.apache.zookeeper.WatchedEvent;
import org.apache.zookeeper.Watcher;
import org.apache.zookeeper.Watcher.Event.EventType;

public class DataChangedWatcher implements Watcher {

  @Override
  public void process(WatchedEvent event) {
    System.out.println("DataChangedWatcher process");
    if (event.getType() == EventType.NodeDataChanged) {
      System.out.println("数据被改变");
    }
    if (event.getType() == EventType.NodeDeleted) {
      System.out.println("节点已删除");
    }
  }

}
