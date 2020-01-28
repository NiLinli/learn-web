import { pubsub, SubscriberFunc, Subscriber } from './pubsub';

let messageLogger:SubscriberFunc = function (topics: string, data: any) {
  console.log('Logging: ' + topics + ': ' + JSON.stringify(data));
};

// 订阅, 返回订阅的 token
let subscription = pubsub.subscribe('inbox/newMessage', messageLogger);

// 推送消息
pubsub.publish('inbox/newMessage', 'hello world!');

pubsub.publish('inbox/newMessage', ['test', 'a', 'b', 'c']);

pubsub.publish('inbox/newMessage', {
  sender: 'hello@google.com',
  body: 'Hey again!'
});


// 根据 token 取消订阅
pubsub.unsubscribe(subscription);

// 取消订阅之后就收不到 publish 的消息了
pubsub.publish('inbox/newMessage', 'Hello! are you still there?');