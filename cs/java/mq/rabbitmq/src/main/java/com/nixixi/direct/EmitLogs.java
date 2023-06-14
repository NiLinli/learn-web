package com.nixixi.direct;

import com.rabbitmq.client.ConnectionFactory;
import java.nio.charset.StandardCharsets;
import com.rabbitmq.client.BuiltinExchangeType;
import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;

public class EmitLogs {
  private final static String EXCHANGE_NAME = "direct_logs";

  public static void main(String[] args) throws Exception {
    ConnectionFactory factory = new ConnectionFactory();

    factory.setHost("localhost");

    Connection connection = factory.newConnection();
    Channel channel = connection.createChannel();

    // direct: fanout + filter message
    channel.exchangeDeclare(EXCHANGE_NAME, BuiltinExchangeType.DIRECT);

    channel.basicPublish(EXCHANGE_NAME, "info", null, "userId = 007".getBytes(StandardCharsets.UTF_8));
    channel.basicPublish(EXCHANGE_NAME, "warning", null, "userId is null".getBytes(StandardCharsets.UTF_8));
    channel.basicPublish(EXCHANGE_NAME, "error", null, "some error occur".getBytes(StandardCharsets.UTF_8));
    System.out.println(" [x] Sent '" + " direct message " + "'");

  }

}
