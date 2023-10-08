package com.example.mall.config;

import java.time.Duration;

import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.cache.RedisCacheConfiguration;
import org.springframework.data.redis.cache.RedisCacheManager;
import org.springframework.data.redis.cache.RedisCacheWriter;
import org.springframework.data.redis.connection.RedisConnectionFactory;

@Configuration
@EnableCaching
public class CachingConfig {

  public RedisCacheManager redisCacheManager(RedisConnectionFactory redisConnectionFactory) {
    RedisCacheWriter redisCacheWriter = RedisCacheWriter
        .lockingRedisCacheWriter(redisConnectionFactory);
    RedisCacheConfiguration cacheConfiguration = RedisCacheConfiguration.defaultCacheConfig();
    cacheConfiguration = cacheConfiguration.entryTtl(Duration.ofSeconds(30));

    RedisCacheManager redisCacheManager = new RedisCacheManager(redisCacheWriter,
        cacheConfiguration);
    return redisCacheManager;
  }
  
}
