package com.example.zk;

import org.apache.curator.framework.CuratorFramework;
import org.apache.curator.framework.CuratorFrameworkFactory;
import org.apache.curator.framework.api.CuratorEvent;
import org.apache.curator.framework.recipes.cache.ChildData;
import org.apache.curator.framework.recipes.cache.NodeCache;
import org.apache.curator.framework.recipes.cache.NodeCacheListener;
import org.apache.curator.retry.ExponentialBackoffRetry;
import org.apache.zookeeper.CreateMode;
import org.apache.zookeeper.WatchedEvent;
import org.apache.zookeeper.Watcher.Event.EventType;

public class ZkCurator {
  public static void main(String[] args) throws Exception {
    ExponentialBackoffRetry retry = new ExponentialBackoffRetry(1000, 10);
    CuratorFramework client = CuratorFrameworkFactory.newClient(ZkConstant.ZK_HOST, retry);
    client.start();

    String path = "/curator";

    client.getCuratorListenable().addListener((CuratorFramework c, CuratorEvent event) -> {
      switch (event.getType()) {
        case WATCHED:
          WatchedEvent watchedEvent = event.getWatchedEvent();
          if (watchedEvent.getType() == EventType.NodeDataChanged) {
            System.out.println(new String(c.getData().forPath(path)));
            System.out.println("触发 NodeDataChanged");
          }
          break;
        default:
          break;
      }
    });

    String data = "test";
    String data2 = "test2";

    // client.create().withMode(CreateMode.EPHEMERAL).forPath(path,
    // data.getBytes());

    // // 设置监听
    // byte[] bytes = client.getData().watched().forPath(path);
    // System.out.println(new String(bytes));

    // client.setData().forPath(path, data2.getBytes());
    // Thread.sleep(2000);

    // // 每一次都要监听
    // client.getData().watched().forPath(path);
    // client.setData().forPath(path, data2.getBytes());
    // Thread.sleep(2000);

    // client.delete().forPath(path);
    // Thread.sleep(2000);

    String pathCache = "/curator-cache";
    client.create().withMode(CreateMode.EPHEMERAL).forPath(
        pathCache,
        data.getBytes());

    NodeCache nodeCache = new NodeCache(client, pathCache);
    nodeCache.start();

    nodeCache.getListenable().addListener(new NodeCacheListener() {
      @Override
      public void nodeChanged() throws Exception {
        ChildData currentData = nodeCache.getCurrentData();
        if (currentData != null) {
          System.out.println("NodeCache 当前值为：" + new String(currentData.getData()));
        }
      }
    });

    client.setData().forPath(pathCache, data2.getBytes());
    Thread.sleep(2000);
    client.setData().forPath(pathCache, data2.getBytes());
    Thread.sleep(2000);
    client.setData().forPath(pathCache, data2.getBytes());
    Thread.sleep(2000);
    client.delete().forPath(pathCache);

  }

}
