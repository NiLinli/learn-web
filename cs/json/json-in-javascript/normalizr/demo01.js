const normalizr = require('normalizr');
const _ = require('lodash');

const { normalize, schema } = normalizr;

const data = { 
  id_str: '123',
  url: 'https://twitter.com',
  user: { 
    id_str: '456',
    name: 'Jimmy' 
  }
};

const user = new schema.Entity('users', {}, { idAttribute: 'id_str' });

const tweet = new schema.Entity('tweets', 
  { user: user },     // 嵌套了其他 Entity
  { 
    // id key 名
    idAttribute: 'id_str', 
    // 存入数据相同, 合并策略
    mergeStrategy: (entityA, entityB) => ({
      ...entityA,
      ...entityB,
      favorites: entityA.favorites
    }),
    // 预处理 Entity 策略(默认返回一个浅拷贝)
    // 添加多余的数据 or 删除数据
    processStrategy: (entity) => {
      // 如果 key 读取失败, 这里的代码不会被执行
      console.log('processStrategy run')
      return {
        ...entity,
        name: 'nixixi'
      }
    } 
});

const normalizedData = normalize(data, tweet);

console.log(JSON.stringify(normalizedData, null, 4));

// Entity 实体 (主要 schema, 最小单位, 可以嵌套其他 Entity)
// 放入 entities 中的部分
// 总结: 多个地方存在 Entity