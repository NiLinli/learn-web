package com.nixixi.nameless.helloworld;

import com.rabbitmq.client.ConnectionFactory;

import java.nio.charset.StandardCharsets;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;

public class Send {
  private final static String QUEUE_NAME = "hello";

  public static void main(String[] args) throws Exception {
    ConnectionFactory factory = new ConnectionFactory();

    factory.setHost("localhost");

    Connection connection = factory.newConnection();
    Channel channel = connection.createChannel();
    
    // Named Queue 发送方声明 QUEUE, 不然没有 QUEUE 发送
    channel.queueDeclare(QUEUE_NAME, false, false, false, null);

    String message = "hello world";

    // Default -> nameless exchange
    // 通过将 routingKey 指定为 QUEUE NAME 发送消息
    // QUEUE 消息有人读取才会 dequeue
    channel.basicPublish("", QUEUE_NAME, null, message.getBytes(StandardCharsets.UTF_8));
    System.out.println(" [x] Sent '" + message + "'");

  }

}
