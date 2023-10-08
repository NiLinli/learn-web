package com.example.mall.order.mq;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.amqp.core.Binding;
import org.springframework.amqp.core.BindingBuilder;
import org.springframework.amqp.core.DirectExchange;
import org.springframework.amqp.core.Queue;

@Configuration
public class AmqpConfig {

  @Bean
  public Queue queue1() {
    return new Queue("queue1");
  }

  @Bean
  DirectExchange exchange() {
    return new DirectExchange("bootExchange");
  }

  @Bean
  Binding bindingExchangeMessage1(Queue queue1, DirectExchange exchange) {
    return BindingBuilder.bind(queue1).to(exchange).with("productStock");
  }
}
