package com.example.zk;

import java.io.IOException;

import org.apache.zookeeper.CreateMode;
import org.apache.zookeeper.KeeperException;
import org.apache.zookeeper.ZooKeeper;
import org.apache.zookeeper.ZooDefs.Ids;

import com.example.zk.watcher.DataChangedWatcher;

public class ZkWatcher {
  public static void main(String[] args) throws IOException, InterruptedException, KeeperException {
    DataChangedWatcher watcher = new DataChangedWatcher();
    ZooKeeper zk = new ZooKeeper(ZkConstant.ZK_HOST, ZkConstant.ZK_CONNECT_TIMEOUT, watcher);
    System.out.println("zk client try connect server");
    Thread.sleep(2000);

    String path = "/java-api-watcher";

    zk.create(path, "apache".getBytes(), Ids.OPEN_ACL_UNSAFE, CreateMode.EPHEMERAL);
    Thread.sleep(2000);

    // 每次都要设置监听
    zk.getData(path, true, null);
    zk.setData(path, "apache new".getBytes(), -1);
    Thread.sleep(2000);

    zk.getData(path, true, null);
    zk.delete(path, -1);
    zk.close();
  }
}
