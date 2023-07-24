package com.example.zk;

import java.io.IOException;

import org.apache.zookeeper.ZooKeeper;

import com.example.zk.watcher.ConnectWatcher;

public class FirstConnect {
  public static void main(String[] args) throws IOException, InterruptedException {
    ConnectWatcher watcher = new ConnectWatcher();

    ZooKeeper zk = new ZooKeeper(ZkConstant.ZK_HOST, ZkConstant.ZK_CONNECT_TIMEOUT, watcher);

    System.out.println("zk client try connect server");

    Thread.sleep(5000);
    zk.close();
  }
}
