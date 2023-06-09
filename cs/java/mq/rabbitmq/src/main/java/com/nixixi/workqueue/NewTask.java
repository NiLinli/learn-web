package com.nixixi.workqueue;

import com.rabbitmq.client.ConnectionFactory;
import com.rabbitmq.client.MessageProperties;

import java.nio.charset.StandardCharsets;

import com.rabbitmq.client.Channel;
import com.rabbitmq.client.Connection;

public class NewTask {
  private final static String QUEUE_NAME = "work_queue_duration";

  public static void main(String[] args) throws Exception {
    ConnectionFactory factory = new ConnectionFactory();

    factory.setHost("localhost");

    Connection connection = factory.newConnection();
    Channel channel = connection.createChannel();
    
    channel.queueDeclare(QUEUE_NAME, true, false, false, null);
    

    for (int i = 0; i < 10; i++) {
      String message;
      if (i % 2 == 0) {
        message = i + " hello worker";
      } else {
        message = i + " hello worker...";
      }
      
      channel.basicPublish("", QUEUE_NAME, MessageProperties.PERSISTENT_TEXT_PLAIN, message.getBytes(StandardCharsets.UTF_8));  
      System.out.println(" [x] Sent '" + message + "'");
    }
  
  }

}
