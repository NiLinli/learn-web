package com.nixixi.topic;

import com.rabbitmq.client.ConnectionFactory;
import java.nio.charset.StandardCharsets;
import com.rabbitmq.client.BuiltinExchangeType;
import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;

public class EmitLogs {
  private final static String EXCHANGE_NAME = "top_logs";

  public static void main(String[] args) throws Exception {
    ConnectionFactory factory = new ConnectionFactory();

    factory.setHost("localhost");

    Connection connection = factory.newConnection();
    Channel channel = connection.createChannel();

    // direct: direct + * # match
    // * 匹配1个 word
    // # 匹配0个或者多个 word
    channel.exchangeDeclare(EXCHANGE_NAME, BuiltinExchangeType.TOPIC);

    // <speed>.<colour>.<species>

    channel.basicPublish(EXCHANGE_NAME, "quick.orange.rabbit", null, "quick.orange.rabbit".getBytes(StandardCharsets.UTF_8));
    channel.basicPublish(EXCHANGE_NAME, "lazy.orange.elephant", null, "lazy.orange.elephant".getBytes(StandardCharsets.UTF_8));
    channel.basicPublish(EXCHANGE_NAME, "quick.orange.fox", null, "quick.orange.fox".getBytes(StandardCharsets.UTF_8));
    channel.basicPublish(EXCHANGE_NAME, "lazy.brown.fox", null, "lazy.brown.fox".getBytes(StandardCharsets.UTF_8));
    channel.basicPublish(EXCHANGE_NAME, "lazy.pink.rabbit", null, "lazy.pink.rabbit".getBytes(StandardCharsets.UTF_8));
    channel.basicPublish(EXCHANGE_NAME, "orange", null, "orange".getBytes(StandardCharsets.UTF_8));
    channel.basicPublish(EXCHANGE_NAME, "lazy.orange.new.rabbit", null, "lazy.orange.new.rabbit".getBytes(StandardCharsets.UTF_8));
    System.out.println(" [x] Sent '" + " direct message " + "'");

  }

}
