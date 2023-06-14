package com.nixixi.fanout;

import com.rabbitmq.client.ConnectionFactory;
import java.nio.charset.StandardCharsets;
import com.rabbitmq.client.BuiltinExchangeType;
import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;

public class EmitLogs {
  private final static String EXCHANGE_NAME = "logs";

  public static void main(String[] args) throws Exception {
    ConnectionFactory factory = new ConnectionFactory();

    factory.setHost("localhost");

    Connection connection = factory.newConnection();
    Channel channel = connection.createChannel();

    // producer: 声明 exchange 而不是直接声明 queue
    // fanout 忽略 routekey
    channel.exchangeDeclare(EXCHANGE_NAME, BuiltinExchangeType.FANOUT);

    String message = "info: Hello World!";

    channel.basicPublish(EXCHANGE_NAME, "", null, message.getBytes(StandardCharsets.UTF_8));
    System.out.println(" [x] Sent '" + message + "'");

  }

}
