package com.nixixi.fanout;

import com.rabbitmq.client.ConnectionFactory;
import com.rabbitmq.client.DefaultConsumer;
import com.rabbitmq.client.Envelope;
import com.rabbitmq.client.AMQP.BasicProperties;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

import com.rabbitmq.client.BuiltinExchangeType;
import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;

public class ReceiveLogs {

  public static void main(String[] args) throws Exception {
    System.out.println(" [*] Waiting for messages. To exit press CTRL+C");

    new Thread(new Worker("worker1")).start();
    new Thread(new Worker("worker2")).start();
  }

}

class Worker implements Runnable {
  private final static String EXCHANGE_NAME = "logs";

  public String name;

  public Worker(String name) {
    this.name = name;
  }

  @Override
  public void run() {

    try {
      ConnectionFactory factory = new ConnectionFactory();
      factory.setHost("localhost");
      Connection connection = factory.newConnection();
      final Channel channel = connection.createChannel();

      channel.exchangeDeclare(EXCHANGE_NAME, BuiltinExchangeType.FANOUT);

      // 每个 receiver 获取一个临时的 queue
      String queueName = channel.queueDeclare().getQueue();

      // 将 queue 绑定到 exchange 上面
      // 在 receiver 启动之前的发送到 exchange 不会在 queue 上
      channel.queueBind(queueName, EXCHANGE_NAME, "");

      channel.basicConsume(queueName, true, new DefaultConsumer(channel) {
        @Override
        public void handleDelivery(String consumerTag, Envelope envelope, BasicProperties properties, byte[] body)
            throws IOException {
          String message = new String(body, StandardCharsets.UTF_8);
          System.out.println(" [+ " + name + "]Received '" + message + "'");

        }
      });
    } catch (Exception e) {
      // TODO: handle exception
    }

  }

}