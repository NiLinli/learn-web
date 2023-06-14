package com.nixixi.topic;

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

    new Thread(new Worker("worker1", "*.orange.*")).start();
    new Thread(new Worker("worker2", "*.*.rabbit")).start();
    new Thread(new Worker("worker3", "lazy.#")).start();
  }

}

class Worker implements Runnable {
  private final static String EXCHANGE_NAME = "top_logs";

  public String name;
  public String severity;

  public Worker(String name, String severity) {
    this.name = name;
    this.severity = severity;
  }

  @Override
  public void run() {

    try {
      ConnectionFactory factory = new ConnectionFactory();
      factory.setHost("localhost");
      Connection connection = factory.newConnection();
      final Channel channel = connection.createChannel();

      channel.exchangeDeclare(EXCHANGE_NAME, BuiltinExchangeType.TOPIC);

      String queueName = channel.queueDeclare().getQueue();

      channel.queueBind(queueName, EXCHANGE_NAME, severity);

      channel.basicConsume(queueName, true, new DefaultConsumer(channel) {
        @Override
        public void handleDelivery(String consumerTag, Envelope envelope, BasicProperties properties, byte[] body)
            throws IOException {
          String message = new String(body, StandardCharsets.UTF_8);
          System.out.println(" [+ " + severity + "] Received '" + message + "'");

        }
      });
    } catch (Exception e) {
      // TODO: handle exception
    }

  }

}