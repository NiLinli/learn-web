import { Sub } from './Subscribe'

interface Topics {
  [key: string]: Sub[];
}

export interface Publish {
  topics: Topics;
  subUid: number;     // 某次订阅的标志性符
  publish: (topic: string, ...args: any) => void;       // 对 订阅了此 topic 的 订阅者进行推送
  subscribe: (topic: string, callback: Function) => any;     // 订阅 topic
  unsubscribe: (token: number) => void;  // 取消订阅 topic
}

export class Pub implements Publish {

  topics: Topics = {};
  subUid: number = -1;

  publish(topic: string, ...args: any): void {

    if (!this.topics[topic]) return;

    let subscribers = this.topics[topic],
      len = subscribers ? subscribers.length : 0;

    // Publisher publish topic
    while (len--) {
      subscribers[len].callback.apply(this, args);
    }
  }

  subscribe(topic: string, callback: Function): number {
    if (!this.topics[topic]) {
      this.topics[topic] = [];
    }

    const token = (++this.subUid)
    this.topics[topic].push(new Sub(token, callback));
    return token;
  }

  unsubscribe(token: number): void {
    for (let topic in this.topics) {
      if (this.topics[topic]) {
        for (let i = 0, j = this.topics[topic].length; i < j; i++) {
          if (this.topics[topic][i].token === token) {
            this.topics[topic].splice(i, 1);
            return;
          }
        }
      }
    }
  }
}
