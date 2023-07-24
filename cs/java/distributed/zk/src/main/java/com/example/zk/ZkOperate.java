package com.example.zk;

import java.io.IOException;

import org.apache.zookeeper.CreateMode;
import org.apache.zookeeper.KeeperException;
import org.apache.zookeeper.ZooKeeper;
import org.apache.zookeeper.ZooDefs.Ids;

import com.example.zk.watcher.ConnectWatcher;

public class ZkOperate {
  public static void main(String[] args) throws IOException, InterruptedException, KeeperException {
    ConnectWatcher watcher = new ConnectWatcher();
    ZooKeeper zk = new ZooKeeper(ZkConstant.ZK_HOST, ZkConstant.ZK_CONNECT_TIMEOUT, watcher);
    System.out.println("zk client try connect server");
    Thread.sleep(2000);

    String path = "/java-api";

    zk.create(path, "apache".getBytes(), Ids.OPEN_ACL_UNSAFE, CreateMode.EPHEMERAL);
    Thread.sleep(2000);
    System.out.println(new String(zk.getData(path, false, null)));

    // version -1 表示任意版本
    zk.setData(path, "apache new".getBytes(), -1);
    Thread.sleep(2000);
    System.out.println(new String(zk.getData(path, false, null)));

    zk.delete(path, -1);
    zk.close();
  }
}
