package com.nixixi.workqueue;

import com.rabbitmq.client.ConnectionFactory;
import com.rabbitmq.client.DefaultConsumer;
import com.rabbitmq.client.Envelope;
import com.rabbitmq.client.AMQP.BasicProperties;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;

// Worker Queue: time-consuming tasks among multiple workers(resource-intensive task).
// Round-robin: RabbitMQ will send each message to the next consumer,in sequence.
// On average every consumer will get the same number of messages.
// 缺点是每个线程分配的任务计算量不同, 导致任务完成时间较长

public class Workers {

  public static void main(String[] args) throws Exception {
    System.out.println(" [*] Waiting for messages. To exit press CTRL+C");

    new Thread(new Worker("worker1")).start();
    new Thread(new Worker("worker2")).start();
  }

}

class Worker implements Runnable {
  private final static String QUEUE_NAME = "work_queue_duration";

  public String name;

  public Worker(String name) {
    this.name = name;
  }

  private static void doWork(String task) throws InterruptedException {
    for (char ch : task.toCharArray()) {
      if (ch == '.')
        Thread.sleep(1000);
    }
  }

  @Override
  public void run() {

    try {
      ConnectionFactory factory = new ConnectionFactory();
      factory.setHost("localhost");
      Connection connection = factory.newConnection();
      final Channel channel = connection.createChannel();

      // durable 防止 RabbitMQ 挂掉导致 Queue 清空 但是不是很可靠 有其他比较可靠的方案替代
      channel.queueDeclare(QUEUE_NAME, true, false, false, null);

      // 每次最多分一个 message
      channel.basicQos(1);

      // Ack 消息确认, 告知 Sender 消息收到, 确保消息不会丢失
      // 确定丢失后 re-queue
      // autoAck 自动确认
      channel.basicConsume(QUEUE_NAME, false, new DefaultConsumer(channel) {
        @Override
        public void handleDelivery(String consumerTag, Envelope envelope, BasicProperties properties, byte[] body)
            throws IOException {
          String message = new String(body, StandardCharsets.UTF_8);
          System.out.println(" [+ " + name + "]Received '" + message + "'");

          try {
            doWork(message);
          } catch (InterruptedException e) {
            e.printStackTrace();
          } finally {
            // 手动确定
            channel.basicAck(envelope.getDeliveryTag(), false);
            System.out.println(" [+ " + name + "] Done");
          }
        }
      });
    } catch (Exception e) {
      // TODO: handle exception
    }

  }

}